import Head from 'next/head';
import styles from '../../../styles/Study.module.css';
import Link from 'next/link';
import LazyloadImg from '../../../components/Images/LazyloadImg';
const class_card = [
    {
        class: 1,
        name: 'Fauna dan Flora, Ekosistem, Iklim',
        link: '/study/smplb/7',
    },
    {
        class: 2,
        name: 'Peduli Lingkungan, Budaya Indonesia',
        link: '/coming-soon',
    },
    {
        class: 3,
        name: 'Hidup Sehat, Tubuh, Nutrisi Harian',
        link: '/coming-soon',
    },
];

function Card({ num, name, link }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardClass}>{num}</div>
            <div className={styles.cardRight}>
                <div className={styles.cardName}>{name}</div>
                <div>
                    <Link href={link}>
                        <button>Pilih</button>
                    </Link>
                </div>
            </div>
        </div>
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
                    <div className={styles.cardsSmp}>
                        {class_card.map((c, i) => (
                            <Card num={c.class} name={c.name} link={c.link} key={i} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
