import Head from 'next/head';
import styles from '../../../styles/Study.module.css';
import Link from 'next/link';
import LazyloadImg from '../../../components/Images/LazyloadImg';
const class_card = [
    {
        class: 1,
        link: '/study/smplb/7',
    },
    {
        class: 2,
        link: '/coming-soon',
    },
    {
        class: 3,
        link: '/coming-soon',
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

export default function SMPLB() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inclusify | SMPLB</title>
                <meta name="description" content="Membuka pintu kesempatan untuk setiap siswa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <LazyloadImg src={'/images/smplb-bg.png'} className={styles.bg} alt="bg-smp" />
                <LazyloadImg src={'/images/smp-asset1.svg'} className={styles.assetTop} alt="asset-smp" />
                <LazyloadImg src={'/images/smp-asset2.png'} className={styles.assetBottom} alt="asset-smp2" />
                <Link href="/">
                    <div className={styles.back}>
                        <LazyloadImg src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>Home</h4>
                    </div>
                </Link>
                <div className={styles.content}>
                    <h2>SMPLB</h2>
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
