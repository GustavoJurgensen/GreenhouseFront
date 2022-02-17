import styles from '../styles/ChartModal.module.css'
import LineChart from './LineChart';

export default function ChartModal({ xData, yDataIn, yDataOut, title, closeModal }) {
    return (
        <>
            <div className={styles.modal_background}>
                <div className={styles.modal_container}>
                    <div className={styles.btn}>
                        <button onClick={() => closeModal(false)}>X</button>
                    </div>
                    <h1>{title}</h1>
                    <div>
                        <LineChart
                            xData={xData}
                            yDataIn={yDataIn}
                            yDataOut={yDataOut}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}