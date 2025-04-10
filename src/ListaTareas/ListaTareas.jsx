import React from 'react';
import './ListaTareas.css';

const ListaTareas = ({ tareas, eliminarTarea, actualizarTarea }) => {
    return (
        <ul>
            {tareas.map((tarea) => (
                <li key={tarea.id}>
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
            ))}
        </ul>
    );
};

export default ListaTareas;