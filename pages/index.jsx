import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Jumbotron from '../components/Pages/Landing/Jumbotron';
import BelajarSekarang from '../components/Pages/Landing/BelajarSekarang';
import KategoriKelas from '../components/Pages/Landing/KategoriKelas';
import TentangKami from '../components/Pages/Landing/TentangKami';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inclusify</title>
                <meta name="description" content="Membuka pintu kesempatan untuk setiap siswa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Jumbotron />
                <BelajarSekarang />
                <KategoriKelas />
                <TentangKami />
            </main>
        </div>
    );
}
