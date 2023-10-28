import React from 'react';
import styles from '../../../styles/Home.module.css';

export default function VisiAnggota() {
    return (
        <div className={styles.bottomContainer}>
            <img src={'/images/bg-landing3.png'} className={styles.bottomBg} />
            <div className={styles.visiContainer}>
                <div className={styles.visiContent}>
                    <h2>Visi</h2>
                    <div className={styles.visiCard}>"Mereformasi Pendidikan Khusus melalui pembelajaran inklusif berbasis teknologi."</div>
                </div>
                <div className={styles.visiContent}>
                    <h2>Misi</h2>
                    <div className={styles.misiCard}>
                        <ol>
                            <li>Membekali pendidik dengan permainan edukatif yang sesuai dengan kurikulum, sehingga mendorong pembelajaran inklusif.</li>
                            <br />
                            <li>Memberdayakan guru dengan teknologi web yang menarik untuk lingkungan murid berkebutuhan khusus.</li>
                            <br />
                            <li>Menjamin setiap siswa, termasuk penyandang Tuna Grahita dan Autisme, berkembang menuju potensi maksimalnya.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className={styles.partnerContainer}>
                <h2>Partners</h2>
                <div className={styles.partners}>
                    <img src={'/images/unesco.png'} />
                    <img src={'/images/tanoto.png'} />
                    <img src={'/images/undip.png'} />
                </div>
            </div>
        </div>
    );
}
