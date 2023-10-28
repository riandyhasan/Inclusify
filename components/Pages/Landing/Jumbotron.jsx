import React from 'react';
import styles from '../../../styles/Home.module.css';

export default function Jumbotron() {
    return (
        <div className={styles.jumbotronContainer}>
            <img src={'/images/bg-landing.png'} className={styles.jumbotronBg} alt="bg" />
            <img src={'/images/landing-asset1.svg'} className={styles.jumbotronAssetTop} alt="asset-top" />
            <img src={'/images/landing-asset2.svg'} className={styles.jumbotronAssetBottom} alt="asset-bottom" />
            <div className={styles.jumbotronContent}>
                <div>
                    <div className={styles.jumbotronText}>Membuka Pintu Kesempatan untuk Setiap Siswa</div>
                    <div className={styles.jumbotronSubtext}>Bersama-sama Menuju Masa Depan yang Lebih Inklusif</div>
                </div>
                <div>
                    <img src="/images/illustration-landing.png" alt="illustration" />
                </div>
            </div>
        </div>
    );
}
