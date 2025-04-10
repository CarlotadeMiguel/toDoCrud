import React, { useState } from 'react';
import './FormularioTarea.css';

const FormularioTarea = ({ onSubmit }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [errores, setErrores] = useState({});

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
            onSubmit({ titulo, descripcion });
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
                    onChange={(e) => {
                        setTitulo(e.target.value);
                        if (!e.target.value.trim()) {
                            setErrores({ ...errores, titulo: 'El título es obligatorio.' });
                        } else if (e.target.value.length > 50) {
                            setErrores({ ...errores, titulo: 'El título no puede tener más de 50 caracteres.' });
                        } else {
                            const { titulo, ...restoErrores } = errores;
                            setErrores(restoErrores);
                        }
                    }}
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
            <button type="submit" disabled={Object.keys(errores).length > 0}>
                Agregar Tarea
            </button>
        </form>
    );
};

export default FormularioTarea;