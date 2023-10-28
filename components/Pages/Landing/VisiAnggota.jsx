import React from 'react';
import styles from '../../../styles/Home.module.css';

const members = [
    {
        name: 'Ahmad Rafi Athallah W',
        bg: "url('/images/members/Ahmad_Rafi_Athallah_W.jpg')",
        jurusan: 'Hubungan Internasional, UNDIP',
    },
    {
        name: 'Annisa Nurul Sasikirana',
        bg: "url('/images/members/Annisa_Nurul_Sasikirana.jpg')",
        jurusan: 'Teknik Lingkungan, UNDIP',
    },
    {
        name: 'Gabriel Valerion Lengkong',
        bg: "url('/images/members/Gabriel_Valerion_Lengkong.jpg')",
        jurusan: 'Ilmu Ekonomi, UNDIP',
    },
    {
        name: 'Nabila Azzahro Widodo',
        bg: "url('/images/members/Nabila_Azzahro_Widodo.jpg')",
        jurusan: 'Ilmu Kelautan, UNDIP',
    },
    {
        name: 'Syahra Noor Maulidha',
        bg: "url('/images/members/Syahra_Noor_Maulidha.jpg')",
        jurusan: 'Hubungan Internasional, UNDIP',
    },
];

function Card({ bg, name, jurusan }) {
    return (
        <div className={styles.memberCard} style={{ backgroundImage: bg }}>
            <div className={styles.memberIdentity}>
                <div className={styles.memberCardText}>
                    <h5>{name}</h5>
                    <p>{jurusan}</p>
                </div>
                <div className={styles.linkedin}>
                    <img src="/images/Linkedin.svg" alt="linkedin" />
                </div>
            </div>
        </div>
    );
}

export default function VisiAnggota() {
    return (
        <div className={styles.bottomContainer}>
            <img src={'/images/bg-landing3.png'} className={styles.bottomBg} alt="bg" />
            <div className={styles.visiContainer}>
                <div className={styles.visiContent}>
                    <h2>Visi</h2>
                    <div className={styles.visiCard}>{`"Mereformasi Pendidikan Khusus melalui pembelajaran inklusif berbasis teknologi."`}</div>
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
            <div className={styles.memberContainer}>
                <h2>Anggota Kami</h2>
                <div className={styles.members}>
                    {members.map((m, i) => (
                        <Card key={i} name={m.name} bg={m.bg} jurusan={m.jurusan} />
                    ))}
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
