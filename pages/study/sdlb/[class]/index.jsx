import Head from 'next/head';
import styles from '../../../../styles/Study.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LazyloadImg from '../../../../components/Images/LazyloadImg';
const class_card = [
    {
        name: 'Bumi',
        image: '/images/sdlb/6/bumi.png',
        link: '/study/sdlb/6/bumi',
        isActive: true,
    },
    {
        name: 'Tanah',
        image: '/images/sdlb/6/tanah.png',
        link: '/coming-soon',
        isActive: false,
    },
    {
        name: 'Matahari',
        image: '/images/sdlb/6/matahari.png',
        link: '/coming-soon',
        isActive: false,
    },
    {
        name: 'Hewan Peliharaan',
        image: '/images/sdlb/6/hewan_peliharaan.png',
        link: '/study/sdlb/6/hewan-peliharaan',
        isActive: true,
    },
    {
        name: 'Keselamatan Pejalan Kaki',
        image: '/images/sdlb/6/pejalan_kaki.png',
        link: '/coming-soon',
        isActive: false,
    },
    {
        name: 'Keselamatan di Rumah',
        image: '/images/sdlb/6/rumah.png',
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
                            <Card image={c.image} name={c.name} link={c.link} key={i} isCenter={class_card.length % 3 === 1 && i === class_card.length - 1} isActive={c.isActive} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
