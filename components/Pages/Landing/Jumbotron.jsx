import React from 'react';
import styles from '../../../styles/Home.module.css';
import LazyloadImg from '../../Images/LazyloadImg';

export default function Jumbotron() {
    return (
        <div className={styles.jumbotronContainer}>
            <LazyloadImg src={'/images/bg-landing.png'} className={styles.jumbotronBg} alt="bg" />
            <LazyloadImg src={'/images/landing-asset1.svg'} className={styles.jumbotronAssetTop} alt="asset-top" />
            <LazyloadImg src={'/images/landing-asset2.svg'} className={styles.jumbotronAssetBottom} alt="asset-bottom" />
            <div className={styles.jumbotronContent}>
                <div>
                    <div className={styles.jumbotronText}>Membuka Pintu Kesempatan untuk Setiap Siswa</div>
                    <div className={styles.jumbotronSubtext}>Bersama-sama Menuju Masa Depan yang Lebih Inklusif</div>
                </div>
                <div>
                    <LazyloadImg src="/images/illustration-landing.png" alt="illustration" />
                </div>
            </div>
        </div>
    );
}
