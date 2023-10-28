import Image from 'next/image';
import styles from '../../styles/Layout.module.css';
import Link from 'next/link';

const ROUTES = [
    {
        name: 'Beranda',
        route: '/',
    },
    {
        name: 'Belajar Sekarang!',
        route: '/#study',
    },
    {
        name: 'Blog',
        route: '/#blog',
    },
    {
        name: 'Donasi',
        route: '/#donation',
    },
    {
        name: 'Tentang Kami',
        route: '/#about-us',
    },
];

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image src="/images/logo-with-text.png" width={150} height={41.25} alt="logo"/>
            </Link>
            <div className={styles.router}>
                {ROUTES.map((r, i) => (
                    <Link href={r.route} key={i} className={styles['router-text']}>
                        {r.name}
                    </Link>
                ))}
                <div className={styles.lang}>
                    <Image src="/images/indonesia.svg" width={20} height={20} alt="idn" />
                    <p>IND</p>
                </div>
            </div>
        </header>
    );
}
