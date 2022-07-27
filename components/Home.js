import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.home_img}>
                    <div className={styles.home_img_text}>
                        <h1>Monitoramento e Automação de Estufa</h1>
                        <h3>Gustavo Pilon Jurgensen</h3>
                    </div>
                    <div className={styles.imgc}>
                        <div className={styles.blur}></div>
                        <Image
                            src="/background.jpg"
                            layout='fill'
                            objectFit="cover"
                            alt="background"
                            objectPosition='center'
                            quality={20}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.content_container}>
                    <div className={styles.home_content}>
                        <h1>Monitoramento e Automação de Estufa</h1>
                        <h3>Trabalho de Conclusão de Curso Gustavo Pilon Jurgensen</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
