import React, { useState, useEffect, useRef, useReducer } from 'react';
import Head from 'next/head';
import styles from '../../../../../styles/Study.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LineMatchAnswerCard, LineMatchImageCard } from '../../../../../components/Pages/Study/Game';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { IoVolumeHighSharp, IoVolumeMuteSharp } from 'react-icons/io5';

const image_cards = [
    {
        name: 'Balita',
        image: '/images/makhluk-hidup/balita.png',
    },
    {
        name: 'Buah Matoa',
        image: '/images/makhluk-hidup/buah_matoa.png',
    },
    {
        name: 'Bunga Bangkai',
        image: '/images/makhluk-hidup/bunga_bangkai.png',
    },
    {
        name: 'Cumi',
        image: '/images/makhluk-hidup/cumi.png',
    },
    {
        name: 'Jerapah',
        image: '/images/makhluk-hidup/jerapah.png',
    },
    {
        name: 'Kuda Nil',
        image: '/images/makhluk-hidup/kuda_nil.png',
    },
    {
        name: 'Padi',
        image: '/images/makhluk-hidup/padi.png',
    },
    {
        name: 'Paus',
        image: '/images/makhluk-hidup/paus.png',
    },
    {
        name: 'Pohon',
        image: '/images/makhluk-hidup/pohon.png',
    },
    {
        name: 'Remaja',
        image: '/images/makhluk-hidup/remaja.png',
    },
    {
        name: 'Rusa',
        image: '/images/makhluk-hidup/rusa.png',
    },
    {
        name: 'Zebra',
        image: '/images/makhluk-hidup/zebra.png',
    },
];

const answers_cards = image_cards.map((card) => card.name);

function CorrectModal() {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Hore, benar semua!</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/study/smplb">
                        <button>Cari Kegiatan</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function WrongModal({ onReset }) {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>{`Masih ada yang salah :(`}</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onReset}>Cek Lagi</button>
                </div>
            </div>
        </div>
    );
}

export default function SMPLB() {
    const router = useRouter();
    const [answers, setAnswers] = useState([]);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [shuffledImageCards, setShuffledImageCards] = useState([]);
    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [activeName, setActiveName] = useState('');
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const [answer, setAnswer] = useState(0);

    const handleClickCard = (name) => {
        setActiveName(name);
        forceUpdate();
    };

    const handleClickAnswer = (name) => {
        if (activeName !== '') {
            const matchAnswers = answers.map((answer) => {
                if (answer.start === activeName + '-start') {
                    return {
                        start: activeName + '-start',
                        end: name + '-end',
                    };
                }
                return answer;
            });

            if (!matchAnswers.some((answer) => answer.start === activeName + '-start')) {
                matchAnswers.push({
                    start: activeName + '-start',
                    end: name + '-end',
                });
            }

            setAnswers(matchAnswers);
            setActiveName('');
            forceUpdate();
        }
    };

    const handleReset = () => {
        setAnswers([]);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const playAgain = () => {
        setAnswer(0);
    };

    const renderSubmit = () => {
        switch (answer) {
            case 0:
                return null;
            case 1:
                return <CorrectModal />;
            case 2:
                return <WrongModal onReset={playAgain} />;
            default:
                return null;
        }
    };

    const handleSubmit = () => {
        if (answers.length != 12) {
            setAnswer(2);
            return;
        }
        const isWrong = answers.find((a) => a.start.replace('-start') != a.end.replace('-end'));
        if (isWrong) {
            setAnswer(2);
            return;
        }
        setAnswer(1);
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
        const shuffled = shuffleArray(answers_cards);
        setShuffledAnswers(shuffled);
        const shuffleImageCard = shuffleArray(image_cards);
        setShuffledImageCards(shuffleImageCard);
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
                <title>Inclusify | SMPLB</title>
                <meta name="description" content="Membuka pintu kesempatan untuk setiap siswa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {renderSubmit()}

            <main className={styles.gameMainSmp}>
                <img src={'/images/smp-asset1.svg'} className={styles.assetTop} alt="asset-smp" />
                <img src={'/images/smp-asset2.png'} className={styles.assetBottom} alt="asset-smp2" />
                <Link href="/study/smplb/7">
                    <div className={styles.back}>
                        <img src={'/images/keyboard_arrow_left.svg'} alt="back" />
                        <h4>Kelas {router.query.class}</h4>
                    </div>
                </Link>
                <div className={styles.content}>
                    <h2>
                        Makhluk Hidup <br />
                        di Indonesia
                    </h2>
                    <Xwrapper>
                        <div className={styles.lineContainer}>
                            <div className={styles.lineImage}>
                                {shuffledImageCards.map(
                                    (c, i) => i < 6 && <LineMatchImageCard key={i} image={c.image} name={c.name} onClick={() => handleClickCard(c.name)} isActive={activeName == c.name} />,
                                )}
                            </div>
                            {answers.map((a, i) => (
                                <div key={i} style={{ position: 'absolute' }}>
                                    <Xarrow start={a.start} end={a.end} color={'#333333'} showHead={false} />
                                </div>
                            ))}
                            <div className={styles.lineAnswers} style={{ marginTop: '4rem' }}>
                                {shuffledAnswers.map((a, i) => (
                                    <LineMatchAnswerCard key={i} name={a} onClick={() => handleClickAnswer(a)} />
                                ))}
                            </div>
                            <div className={styles.lineImage}>
                                {shuffledImageCards.map(
                                    (c, i) => i >= 6 && <LineMatchImageCard key={i} image={c.image} name={c.name} onClick={() => handleClickCard(c.name)} isActive={activeName == c.name} pos={'l'} />,
                                )}
                            </div>
                        </div>
                    </Xwrapper>
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
                        <button className={styles.submit} onClick={handleSubmit}>
                            Selesai
                        </button>
                    </div>
                </div>
                <audio autoPlay loop ref={audioRef}>
                    <source src={'/audio/Makhluk Hidup Indonesia.m4a'} type="audio/mp4" />
                    Your browser does not support the audio element.
                </audio>
            </main>
        </div>
    );
}
