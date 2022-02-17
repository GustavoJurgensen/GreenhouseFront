import styles from '../../styles/GreenhouseContainer.module.css'

import { useState } from 'react'
import GreenhouseCard from '../../components/GreenhouseCard'
import Modal from '../../components/Modal'

export const getServerSideProps = async () => {
    const res = await fetch('https://greenhouseapi.herokuapp.com/greenhouse/')

    const gh = await res.json()
    return {
        props: { gh }
    }
}

export default function Greenhouses({ gh }) {
    const [showModal, setShowModal] = useState(false)
    // console.log(gh)
    return (
        <>
            <div className={styles.container}>
                {gh.map((data) => (
                    <GreenhouseCard addr={data.addr} name="Greenhouse" crop={data.cropType} key={data.id} />
                ))}
            </div>
            <button onClick={() => setShowModal(true)} className={styles.btn}>New Greenhouse</button>
            {showModal && <Modal closeModal={setShowModal} name={"greenhouse"} showaddr={true} />}
        </>
    )
}