import React from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import styles from '../../../styles/Study.module.css';
import LazyloadImg from '../../Images/LazyloadImg';

const LineMatchAnswerCard = ({ name, onClick }) => {
    return (
        <div id={name + '-end'} className={styles.lineAnswer} style={{ cursor: 'pointer' }} onClick={onClick}>
            {name}
        </div>
    );
};

const LineMatchImageCard = ({ name, image, onClick, isActive, pos = 'r' }) => {
    return pos === 'r' ? (
        <div className={styles.lineCard}>
            <div className={styles.lineCardImg}>
                <LazyloadImg src={image} alt={name} />
            </div>
            <div id={name + '-start'} className={isActive ? styles.lineCardDotActive : styles.lineCardDot} onClick={onClick} />
        </div>
    ) : (
        <div className={styles.lineCard}>
            <div id={name + '-start'} className={isActive ? styles.lineCardDotActive : styles.lineCardDot} onClick={onClick} />
            <div className={styles.lineCardImg}>
                <LazyloadImg src={image} alt={name} />
            </div>
        </div>
    );
};

const DraggableAnswerCard = ({ name, onDrop }) => {
    const [, ref] = useDrag({
        type: ItemTypes.ANSWER_CARD,
        item: { name },
    });

    return (
        <div ref={ref} className={styles.answerCard}>
            {name}
        </div>
    );
};

const DraggableImageCard = ({ name, image, onDrop }) => {
    const [, ref] = useDrag({
        type: ItemTypes.ANSWER_CARD,
        item: { name },
    });

    return (
        <div className={styles.imageCard}>
            <div ref={ref}>
             <LazyloadImg  src={image} />
            </div>
        </div>
    );
};

const DroppableImageCard = ({ image, name, onDrop, answers }) => {
    const [, ref] = useDrop({
        accept: ItemTypes.ANSWER_CARD,
        drop: (item, monitor) => {
            const itemPosition = monitor.getClientOffset();
            const { x, y } = itemPosition;
            if (item.name == 'mata') {
                if (x >= 100 && x <= 500 && y >= 140 && y <= 540) {
                    onDrop(item.name);
                }
            } else if (item.name == 'mulut') {
                if (x >= 300 && x <= 700 && y >= 200 && y <= 600) {
                    onDrop(item.name);
                }
            } else if (item.name == 'sayap') {
                if (x >= 40 && x <= 500 && y >= 40 && y <= 500) {
                    onDrop(item.name);
                }
            } else if (item.name == 'kaki') {
                if (x >= 200 && x <= 500 && y >= 250 && y <= 800) {
                    onDrop(item.name);
                }
            }
        },
    });

    return (
        <div ref={ref} className={styles.dropCardImage}>
            <LazyloadImg src={image} />

            {answers.includes('mata') && <LazyloadImg src="/images/hewan-peliharaan/mata.png" className={styles.mata} />}

            {answers.includes('mulut') && <LazyloadImg src="/images/hewan-peliharaan/mulut.png" className={styles.mulut} />}

            {answers.includes('kaki') && <LazyloadImg src="/images/hewan-peliharaan/kaki.png" className={styles.kaki} />}

            {answers.includes('sayap') && <LazyloadImg src="/images/hewan-peliharaan/sayap.png" className={styles.sayap} />}
        </div>
    );
};

const DroppableCard = ({ image, name, onDrop, matched }) => {
    const [, ref] = useDrop({
        accept: ItemTypes.ANSWER_CARD,
        drop: (item) => onDrop(item.name, name),
    });
    const match = matched.includes(name);
    return (
        <div ref={ref} className={styles.cardBumi}>
            <div className={styles.bumi} style={{ backgroundImage: `url(${image})` }} />
            <div className={match ? styles.answerMatch : styles.answer}>{match ? name : null}</div>
        </div>
    );
};

const CheckableCard = ({ idx, image, checked, onCheck }) => {
    return (
        <div className={styles.cardBumi}>
            <div className={styles.bumi} style={{ backgroundImage: `url(${image})` }} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className={checked.includes(idx) ? styles.checkedAnswerTrue : styles.checkedAnswer} onClick={onCheck} />
            </div>
        </div>
    );
};

export { DraggableAnswerCard, DroppableCard, CheckableCard, DraggableImageCard, DroppableImageCard, LineMatchAnswerCard, LineMatchImageCard };
