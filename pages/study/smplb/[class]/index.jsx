import Head from 'next/head';
import styles from '../../../../styles/Study.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const class_card = [
    {
        name: 'Makhluk Hidup',
        desc: 'Mari mengenal makhluk hidup di Indonesia',
        link: '/study/smplb/7/fauna',
    },
    {
        name: 'Aku Cinta Indonesia',
        desc: 'Mari mengenal lebih dalam tentang Indonesia',
        link: '/study/smplb/7/aku-cinta-indonesia',
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

export default function SMPLB() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Inclusify | SMPLB</title>
                <meta name="description" content="Membuka pintu kesempatan untuk setiap siswa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.gameMainSmp}>
                <img src={'/images/smp-asset1.svg'} className={styles.assetTop} alt="asset-smp" />
                <img src={'/images/smp-asset2.png'} className={styles.assetBottom} alt="asset-smp2" />
                <Link href="/study/sdlb">
                    <div className={styles.back}>
                        <img src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>SMPLB</h4>
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
