import Head from 'next/head';
import styles from '../../../../styles/Study.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const class_card = [
    {
        name: 'Warna',
        desc: 'Merah, kuning, hijau, di langit yang biru. Ada warna apalagi ya selain itu?',
        link: '/sdlb/1/warna',
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
                <img src={'/images/sd-asset1.svg'} className={styles.assetTop} alt="asset-sd" />
                <img src={'/images/sd-asset2.svg'} className={styles.assetBottom} alt="asset-sd2" />
                <Link href="/study/sdlb">
                    <div className={styles.back}>
                        <img src={'/images/keyboard_arrow_left.svg'} alt="back" />
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