import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className={styles.basefooter}>
            <div className={styles.footer}>
                <div className = {styles.container}>
                    <div className = {styles.divbase} >
                        <h1>Title</h1>
                        <h4> Content asiaushduashdua sadasd asdasd asd   asdasd  asdasd</h4>
                    </div>
                    <div className = {styles.divbase} >
                        <h1>Title</h1>
                        <h4> Content asiaushduashdua sadasd asdasd asd   asdasd  asdasd</h4>
                        <h4> Content asiaushduashdua sadasd asdasd asd   asdasd  asdasd</h4>
                        <h4> Content asiaushduashdua sadasd asdasd asd   asdasd  asdasd</h4>
                    </div>
                    <div className = {styles.divbase} >
                        <h1>Title</h1>
                        <h4> Content asiaushduashdua sadasd asdasd asd   asdasd  asdasd</h4>
                        <h4> Content asiaushduashdua sadasd asdasd asd   asdasd  asdasd</h4>
                    </div>
                    <div className = {styles.divbase} >
                        <h1>Title</h1>
                        <h4> Content asiaushduashdua sadasd asdasd asd   asdasd  asdasd</h4>
                        <h4> Content asiaushduashdua sadasd asdasd asd   asdasd  asdasd</h4>
                        <h4> Content asiaushduashdua sadasd asdasd asd   asdasd  asdasd</h4>
                    </div>
                </div>
                <div>   
                    <p>All rights reserved by &copy; 2022 </p>
                    <Link href={"https://github.com/GustavoJurgensen"} to="first" style={{ textDecoration: 'none' }}>
                        Gustavo Pilon Jurgensen
                    </Link>
                </div>
            </div>
        </footer>
    )
}
