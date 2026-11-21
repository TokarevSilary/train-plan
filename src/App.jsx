import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import OurInformation from './ourInform/ourInfor'

function App() {
  const [states, setStates] = useState([]);
const submitData = (evt) => {
  evt.preventDefault();
  const ourObjects = evt.target.elements;
    const newObject = {
    date: ourObjects.date.value,
    distance: Number(ourObjects.distance.value)
  };

  setStates([...states, newObject]);
  evt.target.elements.date.value = '';
  evt.target.elements.distance.value = '';
};
  return(
    <>
    
    <div className="container">
    <div className="form-container">
        <form id="trainingForm" onSubmit={submitData}>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input type="text" id="date" name="date" placeholder="20.07.2019" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="distance">Пройдено км</label>
                    <input type="number" id="distance" name="distance" placeholder="5.7" step="0.1" min="0" required/>
                </div>

                <button type="submit" className="submit-btn" >OK</button>
            </div>
        </form>
    </div>

    <div className="data-table">
        <div className="table-header">
            <div className="col-date">Дата (ДД.ММ.ГГ)</div>
            <div className="col-distance">Пройдено км</div>
            <div className="col-actions">Действия</div>
        </div>
    <OurInformation states={states} setStates={setStates} />
    </div>
</div>
    
    </>
  )
}

export default App
