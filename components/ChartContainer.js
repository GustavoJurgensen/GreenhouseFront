import styles from '../styles/ChartContainer.module.css'

import ChartCard from './ChartCard';

import { useState } from 'react';
import Modal from './Modal';
import ModalDelete from './ModalDelete';

export default function ChartContainer(props) {
    const [showModal, setShowModal] = useState(false)
    const [showDModal, setShowDModal] = useState(false)
    return (
        <>
            <div className={styles.c_container}>
                <div className={styles.chart_header}>
                    <h1>Greenhouse<span>#{props.addr}</span></h1>
                    <h2>{props.crop}</h2>
                    <div className={styles.chart_header_buttons}>
                        <button onClick={() => setShowModal(true)} className={styles.btn}>
                            Configure Target Parameters
                        </button>
                        <button onClick={() => setShowDModal(true)} className={styles.btnred}>
                            Delete
                        </button>
                    </div>
                </div>
                <div className={styles.chart_container}>
                    <ChartCard value="temperature" addr={props.addr} />
                    <ChartCard value="humidity" addr={props.addr} />
                    <ChartCard value="moisture" addr={props.addr} />
                    <ChartCard value="luminosity" addr={props.addr} />
                </div>
            </div>
            {showModal && <Modal closeModal={setShowModal} name={`Greenhouse #${props.addr}`} message="Updating Targets from" address={props.addr} _id={props.id} showaddr={false}/>}
            {showDModal && <ModalDelete closeModal={setShowDModal} addr={props.addr} router={props.router}/>}
        </>
    )
}
