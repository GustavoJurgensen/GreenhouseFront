import Logo from "./Logo"
import Navbar from "./Navbar"
import UFSC from "./UFSC"

import styles from '../styles/Header.module.css'

export default function Header(){
    return(
        <>
            <div className={styles.header}>
                <span><Navbar/></span>
                <div className={styles.container}>
                    <Logo/>
                    <UFSC/>
                </div>
            </div>
        </>
    )
}