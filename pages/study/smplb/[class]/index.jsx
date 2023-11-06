import Head from 'next/head';
import styles from '../../../../styles/Study.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LazyloadImg from '../../../../components/Images/LazyloadImg';
const class_card = [
    {
        name: 'Makluk Hidup',
        image: '/images/smplb/7/makhluk_hidup.png',
        link: '/study/smplb/7/makhluk-hidup-di-indonesia',
        isActive: true,
    },
    {
        name: 'Iklim',
        image: '/images/smplb/7/iklim.png',
        link: '/coming-soon',
        isActive: false,
    },
    {
        name: 'Ekosistem',
        image: '/images/smplb/7/ekosistem.png',
        link: '/coming-soon',
        isActive: false,
    },
    {
        name: 'Peristiwa',
        image: '/images/smplb/7/peristiwa.png',
        link: '/coming-soon',
        isActive: false,
    },
    {
        name: 'Hidup Sehat',
        image: '/images/smplb/7/hidup_sehat.png',
        link: '/coming-soon',
        isActive: false,
    },
    {
        name: 'Aku Cinta Indonesia',
        image: '/images/smplb/7/aku_cinta_indonesia.png',
        link: '/study/smplb/7/aku-cinta-indonesia',
        isActive: true,
    },
    {
        name: 'Peduli Lingkungan',
        image: '/images/smplb/7/lingkungan.png',
        link: '/coming-soon',
        isActive: false,
    },
];

function Card({ image, name, link, isCenter, isActive }) {
    return (
        <div className={isCenter ? styles.cardGameCenter : styles.cardGame}>
            <LazyloadImg src={image} alt={name} />
            <div className={styles.cardGameRight}>
                <div className={styles.cardName}>{name}</div>
                {isActive ? (
                    <div>
                        <Link href={link}>
                            <button>Pilih</button>
                        </Link>
                    </div>
                ) : (
                    <div className={styles.comingSoon}>Coming Soon</div>
                )}
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
                <LazyloadImg src={'/images/smp-asset1.svg'} className={styles.assetTop} alt="asset-smp" />
                <LazyloadImg src={'/images/smp-asset2.png'} className={styles.assetBottom} alt="asset-smp2" />
                <Link href="/study/smplb">
                    <div className={styles.back}>
                        <LazyloadImg src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>SMPLB</h4>
                    </div>
                </Link>
                <div className={styles.content}>
                    <h2>Kelas {router.query.class}</h2>
                    <div className={styles.cards}>
                        {class_card.map((c, i) => (
                            <Card image={c.image} name={c.name} link={c.link} key={i} isCenter={class_card.length % 3 === 1 && i === class_card.length - 1} isActive={c.isActive} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
