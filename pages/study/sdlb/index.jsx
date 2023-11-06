import Head from 'next/head';
import styles from '../../../styles/Study.module.css';
import Link from 'next/link';
import LazyloadImg from '../../../components/Images/LazyloadImg';
const class_card = [
    {
        class: 1,
        link: '/coming-soon',
    },
    {
        class: 2,
        link: '/coming-soon',
    },
    {
        class: 3,
        link: '/coming-soon',
    },
    {
        class: 4,
        link: '/coming-soon',
    },
    {
        class: 5,
        link: '/coming-soon',
    },
    {
        class: 6,
        link: '/study/sdlb/6',
    },
];

function Card({ num, link }) {
    return (
        <Link href={link}>
            <div className={styles.card}>
                <div className={styles.cardClass}>{num}</div>
            </div>
        </Link>
    );
}

export default function SDLB() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inclusify | SDLB</title>
                <meta name="description" content="Membuka pintu kesempatan untuk setiap siswa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <LazyloadImg src={'/images/sdlb-bg.png'} className={styles.bg} alt="bg-sd" />
                <LazyloadImg src={'/images/sd-asset1.svg'} className={styles.assetTop} alt="asset-sd" />
                <LazyloadImg src={'/images/sd-asset2.svg'} className={styles.assetBottom} alt="asset-sd2" />
                <Link href="/">
                    <div className={styles.back}>
                        <LazyloadImg src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>Home</h4>
                    </div>
                </Link>
                <div className={styles.content}>
                    <h2>SDLB</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-2rem' }}>
                        <p>Pilih jenjang yang sesuai dengan kelasmu!</p>
                    </div>
                    <div className={styles.cards}>
                        {class_card.map((c, i) => (
                            <Card num={c.class} link={c.link} key={i} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
