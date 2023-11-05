import Head from 'next/head';
import styles from '../styles/Common.module.css';
import LazyloadImg from '../components/Images/LazyloadImg';
export default function ComingSoon() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inclusify | Coming Soon</title>
                <meta name="description" content="Membuka pintu kesempatan untuk setiap siswa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <LazyloadImg src={'/images/cone.png'} className={styles.cone} alt="cone" />
                <h1 className={styles.comingSoonText}>
                    Coming <br /> Soon
                </h1>
            </main>
        </div>
    );
}
