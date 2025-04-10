import React, { useState, useEffect } from 'react';
import FormularioTarea from './components/FormularioTarea/FormularioTarea';
import ListaTareas from './components/ListaTareas/ListaTareas';
import FeedbackMessage from './components/FeedbackMessage/FeedbackMessage';
import BuscadorTareas from './components/Buscador/BuscadorTareas';

import './App.css';

function App() {
  const [tareaEditando, setTareaEditando] = useState(null);
  const [feedback, setFeedback] = useState({ mensaje: '', tipo: '' });
  const [tareas, setTareas] = useState(() => {
    try {
      const tareasGuardadas = localStorage.getItem('tareas');
      return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    } catch (error) {
      console.error('Error al cargar tareas:', error);
      return [];
    }
  });
  const [tareasFiltradas, setTareasFiltradas] = useState(tareas);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    setTareasFiltradas(tareas); // Actualizar tareas filtradas cuando cambian las tareas
  }, [tareas]);

  const agregarTarea = (tarea) => {
    const nuevaTarea = {
      id: Date.now(),
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
    setFeedback({ mensaje: 'Tarea agregada con éxito', tipo: 'exito' });
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
    setFeedback({ mensaje: 'Tarea eliminada correctamente', tipo: 'exito' });
  };

  const actualizarTarea = (id, datosActualizados) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, ...datosActualizados } : tarea
      )
    );
    setFeedback({ mensaje: 'Tarea actualizada correctamente', tipo: 'exito' });
  };

  const limpiarFeedback = () => {
    setFeedback({ mensaje: '', tipo: '' });
  };

  return (
    <>
      <div>
        {feedback.mensaje && (
          <FeedbackMessage mensaje={feedback.mensaje} tipo={feedback.tipo} onClear={limpiarFeedback} />
        )}
        <h1>Gestión de Tareas</h1>
        <FormularioTarea
          onSubmit={agregarTarea}
          tareaEditando={tareaEditando}
          actualizarTarea={actualizarTarea}
          setTareaEditando={setTareaEditando}
        />
        <BuscadorTareas tareas={tareas} setTareasFiltradas={setTareasFiltradas} />
        <ListaTareas
          tareas={tareasFiltradas}
          eliminarTarea={eliminarTarea}
          actualizarTarea={actualizarTarea}
          setTareaEditando={setTareaEditando}
        />
      </div>
    </>
  );
}

export default App;