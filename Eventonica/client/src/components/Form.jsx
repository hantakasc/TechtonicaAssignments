import React, { useState, useEffect } from 'react';

const Form = ({ onSaveEvent, editingEvent, onUpdateEvent }) => {
    const [event, setEvent] = useState({
        name: '', 
        category: '',
        iscurrent: false 
    });

    useEffect(() => {
        if (editingEvent) {
            setEvent({
                firstname: editingEvent.name,
                lastname: editingEvent.category,
                iscurrent: editingEvent.is_current
            });
        }
    }, [editingEvent]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEvent({
            ...event,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingEvent) {
            fetch(`http://localhost:8080/api/events/${editingEvent.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: editingEvent.id,
                    firstname: event.name,
                    lastname: event.category,
                    is_current: event.iscurrent
                })
            })
            .then(response => response.json())
            .then(updatedEvent => {
                onUpdateEvent(updatedEvent);
            }); } else {
            fetch("http://localhost:8080/api/events", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            })
            .then(response => response.json())
            .then(newEvent => {
                onSaveEvent(newEvent);
                setEvent({
                    name: '',
                    category: '',
                    iscurrent: false
                });
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={event.name}
                onChange={handleChange}
                placeholder="Event Name"
                required
            />
            <input
                type="text"
                name="category"
                value={event.category}
                onChange={handleChange}
                placeholder="Category"
                required
            />
            <label>
                <input
                    type="checkbox"
                    name="iscurrent"
                    checked={event.iscurrent}
                    onChange={handleChange}
                />
                Current
            </label>
            <button type="submit">
                {editingEvent ? 'Update Event' : 'Add Event'}
            </button>
        </form>
    );
};

export default Form;