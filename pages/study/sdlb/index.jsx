import Head from 'next/head';
import styles from '../../../styles/Study.module.css';
import Link from 'next/link';
import LazyloadImg from '../../../components/Images/LazyloadImg';
const class_card = [
    {
        class: 1,
        name: 'Angka, Huruf, Warna, Penjumlahan',
        link: '/coming-soon',
        link: '/study/sdlb/1',
    },
    {
        class: 2,
        name: 'Keluarga, Teman, Matematika Dasar',
        link: '/coming-soon',
    },
    {
        class: 3,
        name: 'Bahasa Inggris Dasar, Tumbuhan, Perkalian',
        link: '/coming-soon',
    },
    {
        class: 4,
        name: 'Anggota Tubuh, Musik, Seni di Indonesia',
        link: '/coming-soon',
    },
    {
        class: 5,
        name: 'Matahari, Tata Surya, IPA dasar',
        link: '/coming-soon',
    },
    {
        class: 6,
        name: 'Prosedur Keselamatan Umum, Bumi, Hewan',
        link: '/study/sdlb/6',
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
                    <div className={styles.cards}>
                        {class_card.map((c, i) => (
                            <Card num={c.class} name={c.name} link={c.link} key={i} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
