import React from 'react';
import styles from '../../../styles/Home.module.css';

export default function Jumbotron() {
    return (
        <div className={styles.jumbotronContainer}>
            <img src={'/images/bg-landing.png'} className={styles.jumbotronBg} />
            <img src={'/images/landing-asset1.svg'} className={styles.jumbotronAssetTop} />
            <img src={'/images/landing-asset2.svg'} className={styles.jumbotronAssetBottom} />
            <div className={styles.jumbotronContent}>
                <div>
                    <div className={styles.jumbotronText}>Membuka Pintu Kesempatan untuk Setiap Siswa</div>
                    <div className={styles.jumbotronSubtext}>Bersama-sama Menuju Masa Depan yang Lebih Inklusif</div>
                </div>
                <div>
                    <img src="/images/illustration-landing.png" />
                </div>
            </div>
        </div>
    );
}
