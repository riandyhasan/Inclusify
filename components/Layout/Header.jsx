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
                <Image src="/images/logo-with-text.png" width={200} height={55} />
            </Link>
            <div className={styles.router}>
                {ROUTES.map((r, i) => (
                    <Link href={r.route} key={i} className={styles['router-text']}>
                        {r.name}
                    </Link>
                ))}
            </div>
        </header>
    );
}
