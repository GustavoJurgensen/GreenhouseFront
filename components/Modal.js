import styles from '../styles/Modal.module.css';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const options = [
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'tomato', label: 'Tomato' },
    { value: 'lettuce', label: 'Lettuce' },
];
export default function Modal({ closeModal, name, address, showaddr, _id }) {
    if (_id == undefined){_id = ""}
    console.log(_id);
    //Json variables
    const [id, setId] = useState(_id);
    const [addr, setAddr] = useState(address);
    const [tTemperature, setTemperature] = useState(0);
    const [tHumidity, setHumidity] = useState(0);
    const [tMoisture, setMoisture] = useState(0);
    const [tLuminosity, setLuminosity] = useState(0);
    const [cropType, setCrop] = useState('');
    //event to put json 
    const handleSubmit = event => {
        event.preventDefault();
        const data = {
            id,
            cropType,
            addr,
            tLuminosity,
            tTemperature,
            tHumidity,
            tMoisture
        };
        if (showaddr === true) {
            const json = JSON.stringify(data);
            console.log(json);
            (async () => {
                const rawResponse = await fetch('https://greenhouseapi.herokuapp.com/greenhouse/', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: json
                });
                const content = await rawResponse.json();
              
                console.log(content);
              })();
        }
        if (showaddr === false) {
            const json = JSON.stringify(data);
            console.log(json);
            (async () => {
                const rawResponse = await fetch('https://greenhouseapi.herokuapp.com/greenhouse/', {
                  method: 'PUT',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: json
                });
                const content = await rawResponse.json();
              
                console.log(content);
              })();
        }
        closeModal(false);
    }
    return (
        <>
            <div className={styles.modal_background}>
                <div className={styles.modal_container}>
                    <div className={styles.btn}>
                        <button onClick={() => closeModal(false)}>X</button>
                    </div>
                    <h3>Updating Targets from </h3>
                    <h1 className={styles.modal_title}>{name}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form_row}>
                            <div className={styles.input_data}>
                                <input type="number" min="0" required onChange={event => setTemperature(event.target.value)} />
                                <label>Temperature</label>
                                <div className={styles.underline}></div>
                            </div>
                            <div className={styles.input_data}>
                                <input type="number" min="0" required onChange={event => setHumidity(event.target.value)} />
                                <label >Humidity</label>
                                <div className={styles.underline}></div>
                            </div>
                        </div>
                        <div className={styles.form_row}>
                            <div className={styles.input_data}>
                                <input type="number" min="0" required onChange={event => setMoisture(event.target.value)} />
                                <label >Moisture</label>
                                <div className={styles.underline}></div>
                            </div>
                            <div className={styles.input_data}>
                                <input type="number" min="0" required onChange={event => setLuminosity(event.target.value)} />
                                <label >Luminosity</label>
                                <div className={styles.underline}></div>
                            </div>
                        </div>
                        <div className={styles.form_row}>
                            <div className={styles.input_data}>
                                <Select
                                    options={options}
                                    onChange={event => setCrop(event.value)}
                                    className={styles.select_box}
                                    required
                                />
                            </div>
                            {showaddr && <div className={styles.input_data}>
                                <input required onChange={event => setAddr(event.target.value)} />
                                <label >Addres</label>
                                <div className={styles.underline}></div>
                            </div>}
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}