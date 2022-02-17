import styles from '../styles/UFSC.module.css'

import Link from 'next/link'

export default function UFSC() {
    return (
        <>
            <Link href={"https://joinville.ufsc.br/"}>
                <div className={styles.container_ufsc}>
                    <div>
                        <h1>UFSC</h1>
                    </div>
                    <h2>Joinville</h2>
                </div>
            </Link>
        </>
    )
}