import Head from 'next/head';
import styles from '../../../../styles/Study.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LazyloadImg from '../../../../components/Images/LazyloadImg';
const class_card = [
    {
        name: 'Bumi',
        desc: 'Di bumi kita ada apa saja?',
        link: '/study/sdlb/6/bumi',
    },
    {
        name: 'Hewan Peliharaan',
        desc: 'Ayo bermain dengan hewan peliharaan!',
        link: '/study/sdlb/6/hewan-peliharaan',
    },
];

function Card({ desc, name, link }) {
    return (
        <div className={styles.cardGame}>
            <div className={styles.cardName}>{name}</div>
            <p>{desc}</p>
            <div>
                <Link href={link}>
                    <button>Pilih</button>
                </Link>
            </div>
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
                <LazyloadImg src={'/images/sd-asset1.svg'} className={styles.assetTop} alt="asset-sd" />
                <LazyloadImg src={'/images/sd-asset2.svg'} className={styles.assetBottom} alt="asset-sd2" />
                <Link href="/study/sdlb">
                    <div className={styles.back}>
                        <LazyloadImg src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>SDLB</h4>
                    </div>
                </Link>
                <div className={styles.content}>
                    <h2>Kelas {router.query.class}</h2>
                    <div className={styles.cards}>
                        {class_card.map((c, i) => (
                            <Card desc={c.desc} name={c.name} link={c.link} key={i} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
