import React from 'react';
import '../assets/styles/styles.css'; // Asegúrate de crear este archivo CSS

function Calendario() {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);
  const meses = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  
  // Función para obtener la cantidad de días en un mes
  const getDiasEnMes = (mes, año) => {
    return new Date(año, mes, 0).getDate();
  };

  return (
    <div className="calendario">
      <div className="fila">
        <div className="celda"></div> {/* Celda vacía en la esquina superior izquierda */}
        {meses.map((mes, i) => (
          <div key={i} className="celda">{mes}</div>
        ))}
      </div>
      {dias.map((dia, i) => (
        <div key={i} className="fila">
          <div className="celda">{dia}</div>
          {meses.map((mes, j) => (
            <div key={j} className="celda"></div> /* Celdas vacías para los días */
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calendario;