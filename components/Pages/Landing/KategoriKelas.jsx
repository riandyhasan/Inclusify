import React from 'react';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

function KelasCard({ kelas }) {
    const image = kelas === 'SD' ? '/images/sd.png' : '/images/smp.png';
    return (
        <div className={styles.kategoriCard}>
            <img src={image} alt={kelas} />
            <p>{kelas}</p>
        </div>
    );
}

export default function KategoriKelas() {
    return (
        <div className={styles.kategoriContainer}>
            <img src={'/images/bg-landing2.png'} className={styles.kategoriBg} alt="bg" />
            <img src={'/images/landing-asset4.svg'} className={styles.kategoriAssetBottom} alt="asset-bottom" />
            <div className={styles.kategoriTitle}>
                <img src={'/images/kelas.svg'} alt="kelas" />
                <h2>Kategori Kelas</h2>
            </div>
            <div className={styles.kategoriCardContainer}>
                <Link href="/study/sdlb">
                    <KelasCard kelas={'SD'} />
                </Link>

                <Link href="/study/smplb">
                    <KelasCard kelas={'SMP'} />
                </Link>
            </div>
        </div>
    );
}
