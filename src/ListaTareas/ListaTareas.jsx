import React from 'react';
import Tarea from '../Tarea/Tarea';
import styles from './ListaTareas.module.css';

const ListaTareas = ({ tareas, eliminarTarea, actualizarTarea, setTareaEditando }) => {
    return (
        <div>
            {tareas.length === 0 ? (
                <p className={styles.emptyMessage}>No hay tareas, ¡agrega una!</p>
            ) : (
                <ul className={styles.taskList}>
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