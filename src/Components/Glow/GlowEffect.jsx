// GlowEffect.jsx
import { useState, useEffect } from 'react';
import './GlowEffect.css';

export const GlowEffect = () => {
    const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="glow-container">
            {/* El div de brillo */}
            <div
                className="glow"
                style={{
                    transform: `translate(${cursorPos.x - 100}px, ${cursorPos.y - 100}px)`,
                }}
            ></div>
        </div>
    );
};