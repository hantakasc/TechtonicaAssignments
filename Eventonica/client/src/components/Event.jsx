// src/components/Event.jsx
import React, { useState } from 'react';

const Event = ({ event, onDelete, onUpdate }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        try {
            setLoading(true);
            await onDelete(event.id);
            setError(null);
        } catch (err) {
            setError('Failed to delete event');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async () => {
        try {
            setLoading(true);
            await onUpdate({ ...event, is_current: !event.is_current });
            setError(null);
        } catch (err) {
            setError('Failed to update event');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h3>{event.name} {event.category}</h3>
            {error && <p style={styles.error}>{error}</p>}
            <div style={styles.buttonContainer}>
                <button 
                    onClick={handleDelete} 
                    disabled={loading} 
                    style={loading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
                >
                    {loading ? 'Deleting...' : 'Delete'}
                </button>
                <button 
                    onClick={handleUpdate} 
                    disabled={loading} 
                    style={loading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
                >
                    {loading ? 'Updating...' : 'Update'}
                </button>
            </div>
        </div>
    );
};

export default Event;