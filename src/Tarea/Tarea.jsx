import React, { useState } from 'react';
import './Tarea.css';

const Tarea = ({ tarea, eliminarTarea, actualizarTarea }) => {
    const [modoEdicion, setModoEdicion] = useState(false);
    const [tituloEditado, setTituloEditado] = useState(tarea.titulo);
    const [descripcionEditada, setDescripcionEditada] = useState(tarea.descripcion);

    const guardarEdicion = () => {
        actualizarTarea(tarea.id, { titulo: tituloEditado, descripcion: descripcionEditada });
        setModoEdicion(false);
    };

    return (
        <li className="tarea">
            {modoEdicion ? (
                <>
                    <input
                        type="text"
                        value={tituloEditado}
                        onChange={(e) => setTituloEditado(e.target.value)}
                    />
                    <textarea
                        value={descripcionEditada}
                        onChange={(e) => setDescripcionEditada(e.target.value)}
                    />
                    <button onClick={guardarEdicion}>Guardar</button>
                    <button onClick={() => setModoEdicion(false)}>Cancelar</button>
                </>
            ) : (
                <>
                    <div>
                        <input
                            type="checkbox"
                            checked={tarea.completada}
                            onChange={() =>
                                actualizarTarea(tarea.id, { completada: !tarea.completada })
                            }
                        />
                        <strong>{tarea.titulo}</strong>
                    </div>
                    <p>{tarea.descripcion}</p>
                    <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                    <button onClick={() => setModoEdicion(true)}>Editar</button>
                </>
            )}
        </li>
    );
};

export default Tarea;