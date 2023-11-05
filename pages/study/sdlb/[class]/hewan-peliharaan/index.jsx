import React, { useState, useEffect, useRef, useReducer } from 'react';
import Head from 'next/head';
import styles from '../../../../../styles/Study.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DraggableImageCard, DroppableImageCard } from '../../../../../components/Pages/Study/Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { IoVolumeHighSharp, IoVolumeMuteSharp } from 'react-icons/io5';
import LazyloadImg from '../../../../../components/Images/LazyloadImg';
const image_cards = [
    {
        name: 'mata',
        image: '/images/hewan-peliharaan/mata.png',
    },
    {
        name: 'kaki',
        image: '/images/hewan-peliharaan/kaki.png',
    },
    {
        name: 'mulut',
        image: '/images/hewan-peliharaan/mulut.png',
    },
    {
        name: 'sayap',
        image: '/images/hewan-peliharaan/sayap.png',
    },
];

function CorrectModal() {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Hore, benar semua!</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/study/sdlb">
                        <button>Cari Kegiatan</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function SDLB() {
    const router = useRouter();
    const [answers, setAnswers] = useState([]);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    const handleDrop = (name) => {
        const newAnswers = answers;
        newAnswers.push(name);
        setAnswers(newAnswers);
        if (newAnswers.length >= 4) {
            setIsComplete(true);
            forceUpdate();
        }
        forceUpdate();
    };

    const handleReset = () => {
        setAnswers([]);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const handleToggleMute = () => {
        setIsMuted(!isMuted);
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
        }
    };

    const shuffleArray = (array) => {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };
    useEffect(() => {
        const shuffled = shuffleArray(image_cards);
        setShuffledAnswers(shuffled);
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.log('Audio playback error:', error);
            });
        }
    }, []);

    useEffect(() => {
        const handleClickToPlayAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch((error) => {
                    console.log('Audio playback error:', error);
                });
                window.removeEventListener('click', handleClickToPlayAudio);
            }
        };

        window.addEventListener('click', handleClickToPlayAudio);

        return () => {
            window.removeEventListener('click', handleClickToPlayAudio);
        };
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Inclusify | SDLB</title>
                <meta name="description" content="Membuka pintu kesempatan untuk setiap siswa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {isComplete && <CorrectModal />}

            <main className={styles.gameMainSd}>
                <LazyloadImg src={'/images/sd-asset1.svg'} className={styles.assetTop} alt="asset-sd" />
                <LazyloadImg src={'/images/sd-asset2.svg'} className={styles.assetBottom} alt="asset-sd2" />
                <Link href="/study/sdlb/1">
                    <div className={styles.back}>
                        <LazyloadImg src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>Kelas {router.query.class}</h4>
                    </div>
                </Link>
                <div className={styles.content}>
                    <DndProvider backend={HTML5Backend}>
                        <h2>Hewan Peliharaan</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-2rem' }}>
                            <p style={{ marginBottom: '2rem' }}>Pasangkan anggota badan ke hewan berikut</p>
                        </div>
                        <div className={styles.imageGame}>
                            <div className={styles.imageDragCards}>
                                <DroppableImageCard image={'/images/hewan-peliharaan/full.png'} name={'full'} onDrop={handleDrop} answers={answers} />
                            </div>
                            <div className={styles.imageDragCards} style={{ marginTop: '4rem' }}>
                                {shuffledAnswers.map((a, i) => (
                                    <DraggableImageCard key={i} name={a.name} image={a.image} isHide={answers.includes(a.name)} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.gameButtons}>
                            <div onClick={handleReset} style={{ cursor: 'pointer' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <path
                                        d="M20.4372 9.9041V5.2541C20.4372 4.5041 19.5372 4.13744 19.0206 4.67077L12.6872 10.9874C12.3539 11.3208 12.3539 11.8374 12.6872 12.1708L19.0039 18.4874C19.5372 19.0041 20.4372 18.6374 20.4372 17.8874V13.2374C26.6539 13.2374 31.5706 18.9374 30.2039 25.3874C29.4206 29.1708 26.3539 32.2208 22.5872 33.0041C16.6372 34.2541 11.3372 30.1708 10.5372 24.6541C10.4206 23.8541 9.72055 23.2374 8.90389 23.2374C7.90389 23.2374 7.10389 24.1208 7.23722 25.1208C8.27055 32.4374 15.2372 37.8541 23.1206 36.3208C28.3206 35.3041 32.5039 31.1208 33.5206 25.9208C35.1706 17.3708 28.6706 9.9041 20.4372 9.9041Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div style={{ cursor: 'pointer' }} onClick={handleToggleMute}>
                                {isMuted ? <IoVolumeMuteSharp size={40} /> : <IoVolumeHighSharp size={40} />}
                            </div>
                        </div>
                    </DndProvider>
                </div>
                <audio autoPlay loop ref={audioRef}>
                    <source src={'/audio/Hewan Peliharaan.m4a'} type="audio/mp4" />
                    Your browser does not support the audio element.
                </audio>
            </main>
        </div>
    );
}
