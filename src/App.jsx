import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [consejo, setConsejo] = useState(null)
  const [cargando, setCargando] = useState(false);


  
  async function getConsejo() {
    setCargando(true);

    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setConsejo(response.data.slip.advice); 
      setCargando(false);
    } catch (error) {
      console.error('Error al obtener el consejo:', error);
      setConsejo('No se pudo cargar el consejo.');
      setCargando(false);
    }
  }
  useEffect(() => {
    getConsejo();
  }, []);

  return (
    <div>
      <h1>Consejo Aleatorio</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <p>{consejo}</p>
      )}
      <button onClick={getConsejo}>Cargar</button>
    </div>
  );
  
}
export default App
