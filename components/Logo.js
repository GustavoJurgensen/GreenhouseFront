import styles from '../styles/Logo.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo(){
    return (
        <>
            <Link href="/">
                <div className={styles.logo}>
                    <div className={styles.logo_img}>
                        <Image
                            src="/logo.svg"
                            layout="fill"
                            objectFit="contain"
                            alt="logo"
                        />
                    </div>
                    <h2>Greenhouse<span>App</span></h2>
                </div>
            </Link>
        </>
    )
}