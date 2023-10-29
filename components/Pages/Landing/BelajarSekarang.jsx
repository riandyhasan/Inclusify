import React from 'react';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

export default function BelajarSekarang() {
    return (
        <div className={styles.bsContainer}>
            <h2>Selamat datang di Inclusify!</h2>
            <p>
                Kami menghubungkan <b>anak dengan kemampuan istimewa</b> dengan <b style={{ color: '#FE5C6B' }}>#EdukasiTanpaBatas</b>
            </p>
            <p>Bersama-sama membuka pintu kesempatan bagi setiap siswa untuk meraih potensi penuh mereka!</p>
            <Link href="#study">
                <button>Belajar Sekarang!</button>
            </Link>
            <img src="/images/landing-asset3.svg" alt="asset" />
        </div>
    );
}
