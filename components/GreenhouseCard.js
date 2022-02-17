import styles from '../styles/GreenhouseCard.module.css'

import Link from 'next/link'
import Image from 'next/image';

function getBackground(crop) {
    switch (crop) {
        case 'lettuce':
            return "https://i2.wp.com/fote.org.ng/wp-content/uploads/2017/03/Horticulture.jpg?fit=1500%2C851&ssl=1";
        case 'strawberry':
            return "https://c4.wallpaperflare.com/wallpaper/191/42/545/strawberry-plant-wallpaper-preview.jpg";
        case 'tomato':
            return "https://cdn.pixabay.com/photo/2019/05/31/11/34/tomato-4241980_960_720.jpg";
        default:
            return "https://wallpapercave.com/wp/wp3115797.jpg";
    }
}

export default function GreenhouseCard(props) {
    return (
        <>
            <div className={styles.card_container}>
                <div className={styles.card_img}>
                    <Image
                        src={getBackground(props.crop)}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.card_content}>
                    <h2>{props.name}<span>{"#"}{props.addr}</span></h2>
                    <h4>{props.crop}</h4>
                </div>
                <div className={styles.card_btn}>
                    <Link href={"/greenhouses/" + props.addr.toString()} to="first" style={{ textDecoration: 'none' }}>
                        <a>See More</a>
                    </Link>
                </div>
            </div>
        </>
    )
}