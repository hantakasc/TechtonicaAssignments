import React, { useReducer, useEffect } from 'react';
import Form from './Form';
import Event from './Event';
import * as ioicons from 'react-icons/io5';

// Define initial state for the reducer
const initialState = {
    events: [],         // Array to hold the list of events
    editingEvent: null  // Holds the event currently being edited, or null if no event is being edited
};

// Define action types to avoid hardcoded strings
const ACTIONS = {
    SET_EVENTS: 'SET_EVENTS',          // Set the list of events
    ADD_EVENT: 'ADD_EVENT',            // Add a new event
    UPDATE_EVENT: 'UPDATE_EVENT',      // Update an existing event
    DELETE_EVENT: 'DELETE_EVENT',      // Delete an event
    SET_EDITING_EVENT: 'SET_EDITING_EVENT' // Set the event being edited
};

// Reducer function to handle state updates
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_EVENTS:
            return { ...state, events: action.payload }; // Update the list of events
        case ACTIONS.ADD_EVENT:
            return { ...state, events: [...state.events, action.payload] }; // Add new event to the list
        case ACTIONS.UPDATE_EVENT:
            return { 
                ...state, 
                events: state.events.map(event =>
                    event.id === action.payload.id ? action.payload : event // Update event if it matches the ID
                )
            };
        case ACTIONS.DELETE_EVENT:
            return { 
                ...state, 
                events: state.events.filter(event => event.id !== action.payload) // Remove event from the list
            };
        case ACTIONS.SET_EDITING_EVENT:
            return { ...state, editingEvent: action.payload }; // Set the event being edited
        default:
            return state; // Return the current state if action type is not recognized
    }
};

const ListEvents = () => {
    // Initialize useReducer with the reducer function and initial state
    const [state, dispatch] = useReducer(reducer, initialState);

    // Function to load events from the server
    const loadEvents = () => {
        fetch("http://localhost:8080/api/events")
            .then(response => response.json())
            .then(data => {
                dispatch({ type: ACTIONS.SET_EVENTS, payload: data }); // Dispatch action to set events
            });
    };

    // useEffect hook to load events on component mount
    useEffect(() => {
        loadEvents();
    }, []); // Empty dependency array means this runs once when the component mounts

    // Function to handle saving a new event
    const onSaveEvent = (newEvent) => {
        fetch("http://localhost:8080/api/events", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
        .then(response => response.json())
        .then(data => {
            dispatch({ type: ACTIONS.ADD_EVENT, payload: data }); // Dispatch action to add a new event
        });
    };

    // Function to handle updating an event
    const updateEvent = (updatedEvent) => {
        fetch(`http://localhost:8080/api/events/${updatedEvent.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedEvent)
        })
        .then(response => response.json())
        .then(data => {
            dispatch({ type: ACTIONS.UPDATE_EVENT, payload: data }); // Dispatch action to update an event
        });
    };

    // Function to handle deleting an event
    const onDelete = (eventId) => {
        fetch(`http://localhost:8080/api/events/${eventId}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                dispatch({ type: ACTIONS.DELETE_EVENT, payload: eventId }); // Dispatch action to delete an event
            }
        });
    };

    // Function to set the event being edited
    const onUpdate = (event) => {
        dispatch({ type: ACTIONS.SET_EDITING_EVENT, payload: event }); // Dispatch action to set editing event
    };

    return (
        <div className="list-events">
            <h2>Upcoming Events</h2>
            <ul>
                {state.events.map(event => (
                    <li key={event.id}>
                        <Event
                            event={event}
                            onDelete={() => onDelete(event.id)}
                            onUpdate={() => onUpdate(event)}
                        />
                        <button onClick={() => onDelete(event.id)}>
                            <ioicons.IoTrashBin />
                        </button>
                        <button onClick={() => onUpdate(event)}>
                            <ioicons.IoPencil />
                        </button>
                    </li>
                ))}
            </ul>
            <Form
                key={state.editingEvent ? state.editingEvent.id : null}
                onSaveEvent={onSaveEvent}
                editingEvent={state.editingEvent}
                onUpdateEvent={updateEvent}
                onCancelEdit={() => dispatch({ type: ACTIONS.SET_EDITING_EVENT, payload: null })}
            />
        </div>
    );
};

export default ListEvents;