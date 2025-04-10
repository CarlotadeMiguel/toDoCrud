import React from 'react';
import styles from './OrdenarTareas.module.css';

function OrdenarTareas({ tareas, setTareasFiltradas }) {
  const ordenarTareas = () => {
    const tareasOrdenadas = [...tareas].sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
    setTareasFiltradas(tareasOrdenadas);
  };

  return (
    <div className={styles.ordenarTareas}>
      <button onClick={ordenarTareas} className={styles.boton}>
        Ordenar Alfabéticamente
      </button>
    </div>
  );
}

export default OrdenarTareas;