import Head from 'next/head';
import styles from '../styles/Common.module.css';

export default function ComingSoon() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inclusify | Coming Soon</title>
                <meta name="description" content="Membuka pintu kesempatan untuk setiap siswa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <img src={'/images/comingsoon.png'} className={styles.bg} alt="bg-cs" />
                <img src={'/images/cone.png'} className={styles.cone} alt="cone" />
                <h1 className={styles.comingSoonText}>
                    Coming <br /> Soon
                </h1>
            </main>
        </div>
    );
}
