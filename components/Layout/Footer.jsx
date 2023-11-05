import styles from '../../styles/Layout.module.css';
import Link from 'next/link';
import LazyloadImg from '../Images/LazyloadImg';
const medsos = [
    {
        name: 'fb',
        image: '/images/LOGO_Facebook.svg',
    },
    {
        name: 'ig',
        image: '/images/LOGO_Instagram.svg',
    },
    {
        name: 'tiktok',
        image: '/images/LOGO_TikTok.svg',
    },
    {
        name: 'yt',
        image: '/images/LOGO_Youtube.svg',
    },
    {
        name: 'linkedin',
        image: '/images/LOGO_Linkedin.svg',
    },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <LazyloadImg src={'/images/logo-with-text.png'} alt="Logo inclusify" />
                <p>Pendidikan Tanpa Batas, Inklusi Tanpa Henti</p>
                <p>
                    {'© PT Mitra Edukasi Inklusif, 2023. |'} <br />
                    {'Kebijakan Privasi |'}
                    <br />
                    {'Ketentuan Penggunaan'}
                </p>
            </div>
            <div className={styles.footerMid}>
                <div>
                    <h5>Inclusify Headquarters</h5>
                    <p>Jl. Prof. Sudarto No.13, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275</p>
                </div>
                <div>
                    <h5>Hubungi Kami</h5>
                    <div className={styles.footerIcon}>
                        <LazyloadImg src="/images/call.svg" alt="phone icon" />
                        <p>cs.inclusify@gmail.com</p>
                    </div>
                    <div className={styles.footerIcon}>
                        <LazyloadImg src="/images/email.svg" alt="email icon" />
                        <p>{'(0858) 7959 1720'}</p>
                    </div>
                </div>
            </div>

            <div className={styles.footerRight}>
                <h5>Coba Gratis Aplikasi Inclusify</h5>
                <div className={styles.footerRightImages}>
                    <LazyloadImg src="/images/app-store.png" alt="app store" />
                    <LazyloadImg src="/images/google-play.png" alt="play store" />
                </div>
                <div className={styles.footerRightImages}>
                    {medsos.map((md, i) => (
                        <LazyloadImg src={md.image} alt={md.name} key={i} />
                    ))}
                </div>
            </div>
        </footer>
    );
}
