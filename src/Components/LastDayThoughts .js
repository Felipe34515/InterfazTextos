import React, { useState } from 'react';
import './LastDayThoughts.css';

const LastDayThoughts = () => {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleSave = () => {
        const blob = new Blob([text + '\n'], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'thoughts.txt';
        link.click();
        URL.revokeObjectURL(link.href);
    };

    return (
        <div className="last-day-thoughts">
            <h1>Si mañana fuera el último día, yo…</h1>
            <textarea 
                value={text}
                onChange={handleInputChange}
                placeholder="Escribe tu respuesta aquí..."
            />
            <br />
            <button onClick={handleSave}>Guardar</button>
        </div>
    );
};

export default LastDayThoughts;
