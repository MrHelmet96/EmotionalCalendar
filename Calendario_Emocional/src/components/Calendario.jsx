import React from 'react';
import '../assets/styles/styles.css';

function Calendario() {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);
  const meses = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  
  return (
    <div className="calendario">
      <div className="fila fila-meses">
        
        {meses.map((mes, i) => (
          <div key={i} className="mes">{mes}</div>
        ))}
      </div>
      {dias.map((dia, i) => (
        <div key={i} className="fila">
          <div className="dia">{dia}</div>
          {meses.map((mes, j) => (
            <div key={j} className="celda"></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calendario;