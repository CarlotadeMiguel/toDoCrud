import React, { useState, useEffect } from 'react';
import FormularioTarea from './components/FormularioTarea/FormularioTarea';
import ListaTareas from './components/ListaTareas/ListaTareas';

import './App.css';

function App() {

  const [tareaEditando, setTareaEditando] = useState(null);

  // Inicialización de tareas desde localStorage
  const [tareas, setTareas] = useState(() => {
    try {
      const tareasGuardadas = localStorage.getItem('tareas');
      return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    } catch (error) {
      console.error('Error al cargar tareas:', error);
      return [];
    }
  });

  // Guardar cambios en localStorage
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