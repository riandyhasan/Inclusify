import React from 'react';
import styles from '../../../styles/Home.module.css';

function KelasCard({ kelas }) {
    const image = kelas === 'SD' ? '/images/sd.png' : '/images/smp.png';
    return (
        <div className={styles.kategoriCard}>
            <img src={image} />
            <p>{kelas}</p>
        </div>
    );
}

export default function KategoriKelas() {
    return (
        <div className={styles.kategoriContainer}>
            <img src={'/images/bg-landing2.png'} className={styles.kategoriBg} />
            <img src={'/images/landing-asset4.svg'} className={styles.kategoriAssetBottom} />
            <div className={styles.kategoriTitle}>
                <img src={'/images/kelas.svg'} />
                <h2>Kategori Kelas</h2>
            </div>
            <div className={styles.kategoriCardContainer}>
                <KelasCard kelas={'SD'} />
                <KelasCard kelas={'SMP'} />
            </div>
        </div>
    );
}