import Head from 'next/head';
import styles from '../../../../../styles/Study.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const colors_card = [
    {
        name: 'Merah',
        color: '#F52134',
    },
    {
        name: 'Biru',
        color: '#13FCFF',
    },
    {
        name: 'Hijau',
        color: '#43BF08',
    },
    {
        name: 'Jingga',
        color: '#FF7714',
    },
];

function titleCase(inputString) {
    var words = inputString?.toLowerCase()?.split(' ');

    for (var i = 0; i < words?.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words?.join(' ');
}

function Card({ name, color }) {
    return (
        <div className={styles.cardWarna}>
            <div className={styles.warna} style={{ background: color }} />
            <div className={styles.answer} />
        </div>
    );
}

export default function SDLB() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Inclusify | SDLB</title>
                <meta name="description" content="Membuka pintu kesempatan untuk setiap siswa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.gameMainSd}>
                <img src={'/images/sd-asset1.svg'} className={styles.assetTop} alt="asset-sd" />
                <img src={'/images/sd-asset2.svg'} className={styles.assetBottom} alt="asset-sd2" />
                <Link href="/study/sdlb/1">
                    <div className={styles.back}>
                        <img src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>Kelas {router.query.class}</h4>
                    </div>
                </Link>
                <div className={styles.content}>
                    <h2>{titleCase(router.query.game)}</h2>
                    <div className={styles.gameCards}>
                        {colors_card.map((c, i) => (
                            <Card name={c.name} color={c.color} key={i} />
                        ))}
                    </div>
                </div>
                <audio autoPlay loop>
                    <source src={'/audio/BUMI.m4a'} type="audio/mp4" />
                    Your browser does not support the audio element.
                </audio>
            </main>
        </div>
    );
}
