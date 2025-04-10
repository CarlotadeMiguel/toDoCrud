import React from 'react';
import Tarea from '../Tarea/Tarea';
import './ListaTareas.module.css';

const ListaTareas = ({ tareas, eliminarTarea, actualizarTarea, setTareaEditando }) => {
    return (
        <div>
            {tareas.length === 0 ? (
                <p className="mensaje-sin-tareas">No hay tareas, ¡agrega una!</p>
            ) : (
                <ul>
                    {tareas.map((tarea) => (
                        <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            eliminarTarea={eliminarTarea}
                            actualizarTarea={actualizarTarea}
                            setTareaEditando={setTareaEditando}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListaTareas;