import React, { useState, useEffect } from 'react';
import './FormularioTarea.module.css';

const FormularioTarea = ({ onSubmit, tareaEditando, actualizarTarea, setTareaEditando }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [errores, setErrores] = useState({});

    useEffect(() => {
        if (tareaEditando) {
            setTitulo(tareaEditando.titulo);
            setDescripcion(tareaEditando.descripcion);
        } else {
            setTitulo('');
            setDescripcion('');
        }
    }, [tareaEditando]);

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!titulo.trim()) {
            nuevosErrores.titulo = 'El título es obligatorio.';
        } else if (titulo.length > 50) {
            nuevosErrores.titulo = 'El título no puede tener más de 50 caracteres.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            if (tareaEditando) {
                actualizarTarea(tareaEditando.id, { titulo, descripcion });
                setTareaEditando(null);
            } else {
                onSubmit({ titulo, descripcion });
            }
            setTitulo('');
            setDescripcion('');
            setErrores({});
        }
    };

    return (
        <form onSubmit={manejarEnvio}>
            <div>
                <label htmlFor="titulo">Título:</label>
                <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                {errores.titulo && <p>{errores.titulo}</p>}
            </div>
            <div>
                <label htmlFor="descripcion">Descripción:</label>
                <textarea
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <button type="submit">
                {tareaEditando ? 'Guardar Cambios' : 'Agregar Tarea'}
            </button>
        </form>
    );
};

export default FormularioTarea;