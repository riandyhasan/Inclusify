import React from 'react';
import styles from '../../../styles/Home.module.css';
import LazyloadImg from '../../Images/LazyloadImg';

export default function TentangKami() {
    return (
        <div id="about-us" className={styles.aboutUsContainer}>
            <LazyloadImg src={'/images/landing-asset5.svg'} className={styles.aboutUsBottomAsset} alt="asset-bottom" />
            <div className={styles.aboutUsContent}>
                <div>
                    <h2>Tentang Kami</h2>
                    <p>
                        Sekelompok mahasiswa dari Universitas Dipenogoro yang percaya bahwa tiap anak punya kesempatan yang sama ketika menempuh pendidikan. <br />
                        <br />
                        Dalam keberagaman, Inclusify muncul sebagai bintang yang membawa harapan bagi masa depan pendidikan khusus. Inclusify dibentuk sebagai respon terhadap tantangan nyata. <br />
                        <br />
                        Melihat bahwa proses pembelajaran belum mencapai potensinya, kami percaya bahwa setiap anak memiliki hak untuk mendapatkan pendidikan yang membebaskan dan memungkinkannya
                        mencapai mimpinya. Para guru, pilar utama dalam setiap kelas, sering mengalami tantangan yang membatasi kemampuan mereka untuk membimbing dengan sepenuh hati.
                        <br />
                        <br /> Dilahirkan dari hasrat untuk memajukan setiap siswa, kami percaya bahwa inklusi adalah fondasi dari pendidikan yang sejati. Dengan memadukan teknologi mutakhir dan
                        kebijaksanaan pengajaran, kami bertekad menciptakan lingkungan di mana setiap anak dapat tumbuh dan berkembang sesuai potensinya. Inclusify bukan hanya platform pendidikan,
                        tetapi simbol perubahan, memimpin reformasi menuju pendidikan inklusif. <br />
                        <br />
                        Fokus menaruh perhatian pada anak berkebutuhan khusus untuk tetap mendapatkan pendidikan terbaik untuk memaksimalkan potensi yang dimiliki tiap anak.
                    </p>
                </div>

                <div className={styles.aboutUsImageContainer}>
                    <div className={styles.aboutUsImage}>
                        <LazyloadImg src={'/images/about-us1.JPG'} alt="about-us1" />
                    </div>
                    <div className={styles.aboutUsImage}>
                        <LazyloadImg src={'/images/about-us2.jpg'} alt="about-us2" />
                    </div>
                    <div className={styles.aboutUsImage}>
                        <LazyloadImg src={'/images/about-us3.jpg'} alt="about-us3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
