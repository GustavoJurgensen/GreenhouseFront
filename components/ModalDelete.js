import styles from '../styles/ModalDelete.module.css'
import Image from 'next/image';

export default function ModalDelete({ closeModal, addr , router}) {
    //event to put json 
    const deleGreenhouse = () => {
        const data = {
            addr,
        };
        // (async () => {
        //     const rawResponse = await fetch(`https://greenhouseapi.herokuapp.com/greenhouse/${addr}`, {
        //       method: 'DELETE',
        //       headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       }
        //     });
        //     const content = await rawResponse.json();
          
        //     console.log(content);
        //   })();
        closeModal(false);
        router.push('/greenhouses')
    }
    return (
        <>
            <div className={styles.modal_background}>
                <div className={styles.modal_container}>
                    <div className={styles.btn}>
                        <button onClick={() => closeModal(false)}>X</button>
                    </div>
                    <div className={styles.alert}>
                        <Image
                            src="/alert.svg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1>Are you sure you want to delete?</h1>
                    <div className={styles.form_row}>
                        <button onClick={() => deleGreenhouse()} className={styles.btnred}>Yes</button>
                        <button onClick={() => closeModal(false)} className={styles.btnc}>No</button>
                    </div>
                </div>
            </div>
        </>
    )
}