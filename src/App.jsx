import React, { useState, useEffect } from 'react';
import FormularioTarea from './FormularioTarea/FormularioTarea';
import ListaTareas from './ListaTareas/ListaTareas';

import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaEditando, setTareaEditando] = useState(null);

  // Cargar tareas desde localStorage al iniciar la aplicación
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (tarea) => {
    const nuevaTarea = {
      id: Date.now(),
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const actualizarTarea = (id, datosActualizados) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, ...datosActualizados } : tarea
      )
    );
  };

  return (
    <>
      <div>
        <h1>Gestión de Tareas</h1>
        <FormularioTarea
          onSubmit={agregarTarea}
          tareaEditando={tareaEditando}
          actualizarTarea={actualizarTarea}
          setTareaEditando={setTareaEditando}
        />
        <ListaTareas
          tareas={tareas}
          eliminarTarea={eliminarTarea}
          actualizarTarea={actualizarTarea}
          setTareaEditando={setTareaEditando}
        />
      </div>
    </>
  );
}

export default App;