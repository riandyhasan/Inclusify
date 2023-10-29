import Head from 'next/head';
import styles from '../../styles/Study.module.css';
import Link from 'next/link';

const class_card = [
    {
        class: 1,
        name: 'Angka, Huruf, Warna, Penjumlahan',
    },
    {
        class: 2,
        name: 'Keluarga, Teman, Matematika Dasar',
    },
    {
        class: 3,
        name: 'Bahasa Inggris Dasar, Tumbuhan, Perkalian',
    },
    {
        class: 4,
        name: 'Anggota Tubuh, Musik, Seni di Indonesia',
    },
    {
        class: 5,
        name: 'Matahari, Tata Surya, IPA dasar',
    },
    {
        class: 6,
        name: 'Prosedur Keselamatan Umum, Bumi, Hewan',
    },
];

function Card({ num, name }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardClass}>{num}</div>
            <div className={styles.cardRight}>
                <div className={styles.cardName}>{name}</div>
                <div>
                    <button>Pilih</button>
                </div>
            </div>
        </div>
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
                <img src={'/images/sdlb-bg.png'} className={styles.bg} alt="bg-sd" />
                <img src={'/images/sd-asset1.svg'} className={styles.assetTop} alt="asset-sd" />
                <img src={'/images/sd-asset2.svg'} className={styles.assetBottom} alt="asset-sd2" />
                <Link href="/">
                    <div className={styles.back}>
                        <img src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>Home</h4>
                    </div>
                </Link>
                <div className={styles.content}>
                    <h2>SDLB</h2>
                    <div className={styles.cards}>
                        {class_card.map((c, i) => (
                            <Card num={c.class} name={c.name} key={i} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
