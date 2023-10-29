import Head from 'next/head';
import styles from '../../styles/Study.module.css';
import Link from 'next/link';

const class_card = [
    {
        class: 1,
        name: 'Fauna dan Flora, Ekosistem, Iklim',
    },
    {
        class: 2,
        name: 'Peduli Lingkungan, Budaya Indonesia',
    },
    {
        class: 3,
        name: 'Hidup Sehat, Tubuh, Nutrisi Harian',
    },
];

function Card({ num, name }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardClass}>{num}</div>
            <div className={styles.cardRight}>
                <div className={styles.cardName}>{name}</div>
                <div>
                    <Link href="/coming-soon">
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
                <img src={'/images/smplb-bg.png'} className={styles.bg} alt="bg-smp" />
                <img src={'/images/smp-asset1.svg'} className={styles.assetTop} alt="asset-smp" />
                <img src={'/images/smp-asset2.png'} className={styles.assetBottom} alt="asset-smp2" />
                <Link href="/">
                    <div className={styles.back}>
                        <img src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>Home</h4>
                    </div>
                </Link>
                <div className={styles.content}>
                    <h2>SMPLB</h2>
                    <div className={styles.cardsSmp}>
                        {class_card.map((c, i) => (
                            <Card num={c.class} name={c.name} key={i} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
