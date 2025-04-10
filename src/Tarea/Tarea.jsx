import React from 'react';
import './Tarea.css';

const Tarea = ({ tarea, eliminarTarea, actualizarTarea }) => {
    return (
        <li className="tarea">
            <strong>{tarea.titulo}</strong>
            <p>{tarea.descripcion}</p>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
            <button
                onClick={() =>
                    actualizarTarea(tarea.id, { completada: !tarea.completada })
                }
            >
                {tarea.completada ? 'Marcar como Incompleta' : 'Marcar como Completa'}
            </button>
        </li>
    );
};

export default Tarea;