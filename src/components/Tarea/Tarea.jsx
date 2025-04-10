import styles from './Tarea.module.css';

const Tarea = ({ tarea, eliminarTarea, actualizarTarea, setTareaEditando }) => {

    return (
        <li className={styles.tareaItem}>
            <div className={styles.tareaInfo}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={tarea.completada}
                    onChange={() =>
                        actualizarTarea(tarea.id, { completada: !tarea.completada })
                    }
                />
                <strong className={styles.titulo}>{tarea.titulo}</strong>
            </div>
            <p className={styles.descripcion}>{tarea.descripcion}</p>
            <div className={styles.botones}>
                <button className={styles.botonEliminar} onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                <button className={styles.botonEditar} onClick={() => setTareaEditando(tarea)}>Editar</button>
            </div>
        </li>
    );
};

export default Tarea;