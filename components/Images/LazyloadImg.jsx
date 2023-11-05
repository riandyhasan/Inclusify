import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function LazyloadImg({ src, alt = 'image', className }) {
    return (
        <div className={className}>
            <LazyLoadImage alt={alt} effect="blur" src={src} />
        </div>
    );
}
