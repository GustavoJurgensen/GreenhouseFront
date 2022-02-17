import styles from '../styles/ChartCard.module.css'
import LineChart from './LineChart'
import Select from 'react-select';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import ChartModal from './ChartModal';

const options = [
    { value: 'oneDay', label: '1 Day' },
    { value: 'fiveDays', label: '5 Days' },
    { value: 'thirtyDays', label: '30 Days' },
    { value: 'sixMonths', label: '6 Months' },
    { value: 'all', label: 'All time' },
];

export default function ChartCard(props) {
    const [showChartModal, setshowChartModal] = useState(false)
    const [obj, setObj] = useState([])
    const aDate = []
    const aIn = []
    const aOut = []
    const handleChange = (event) => {
        const url = `https://greenhouseapi.herokuapp.com/greenhouse/data/${props.value}/addr/${props.addr}/date/${event.value}`
        // Fetch data end
        axios.get(url)
            .then(res => {
                setObj(res.data)
                // console.log(obj)
            })
            .catch(err => {
                console.log(err)
            })
        // Fetch data begin
    }
    obj.map((o) => {
        aDate.push(o.date)
        aIn.push(o.indoor)
        aOut.push(o.outdoor)
    })
    return (
        <>
            <div className={styles.chart_container}>
                <div className={styles.chart_header}>
                    <h2>{props.value}</h2>
                    <div className={styles.buttons}>
                        <Select
                            options={options}
                            onChange={handleChange}
                            className={styles.select_box}
                        />
                        <button onClick={() => setshowChartModal(true)}>
                            <Image
                                src="/fullscreen.png"
                                width="20px"
                                height="20px"
                                objectFit="contain"
                                alt="logo"
                            />
                        </button>
                    </div>
                </div>
                <div>
                    <LineChart
                        xData={aDate}
                        yDataIn={aIn}
                        yDataOut={aOut}
                    />
                </div>
            </div>
            {showChartModal && <ChartModal xData={aDate} yDataIn={aIn} yDataOut={aOut} title={props.value} closeModal={setshowChartModal}/>}
        </>
    )
}