import React from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import styles from '../../../styles/Study.module.css';

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

const DroppableColorCard = ({ image, name, onDrop, matched }) => {
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

export { DraggableAnswerCard, DroppableColorCard };
