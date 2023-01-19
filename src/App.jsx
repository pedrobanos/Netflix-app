
import { Link } from 'react-router-dom';
import NetflixLogo from '../src/assets/Images/netflix-logo.png';
import './App.css'


function App() {

  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='custom-row'>
          <div className=' mt-3 ' >
            <div className='image-box'>
              <img className='netflix-logo' src={NetflixLogo} alt="" />
            </div>
            <button className='button-login btn btn-danger'>Iniciar sesión</button>
            <div className='text-container'>
              <div className='text-frontend'>
                <div className='text-frontend-main-title'>
                  <h1>Todas las películas y series que desees, y mucho más.</h1>
                </div>
                <div className='text-frontend-title'>
                  <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
                </div>
                <div className='text-frontend-body'>
                  <p>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='body-box'>
          <div className='custom-row1'>
            <h1>holaaaa</h1>
          </div>
          <div className='custom-row1'>
            <h1>holaaaa</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

