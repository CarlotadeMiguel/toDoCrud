import React, { useState } from 'react';
import styles from './BuscadorTareas.module.css';

function BuscadorTareas({ tareas, setTareasFiltradas }) {
  const [busqueda, setBusqueda] = useState('');

  const manejarCambio = (e) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);

    const tareasFiltradas = tareas.filter((tarea) =>
      tarea.titulo.toLowerCase().includes(valor)
    );
    setTareasFiltradas(tareasFiltradas);
  };

  return (
    <div className={styles.buscadorTareas}>
      <input
        type="text"
        placeholder="Buscar tareas..."
        value={busqueda}
        onChange={manejarCambio}
        className={styles.input}
      />
    </div>
  );
}

export default BuscadorTareas;