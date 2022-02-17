import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.home_img}>
                    <div className={styles.home_img_text}>
                        <h1>Title</h1>
                        <h3>asdasd as da sfnasf adas dafas das fasdasd</h3>
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
                        <h1>Title</h1>
                        <h3>text ashausdh asduhasudhasd uashduasdh uashduashd uashduahsduahsd uashdushdaushd asduhausdhuasd uashduashduh uhasduhasdu udhauhsudasd</h3>
                    </div>
                </div>
            </div>
        </>
    )
}