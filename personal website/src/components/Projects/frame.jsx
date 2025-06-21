import { useEffect, useRef, useState } from "react";
import next_react from '../../assets/next.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'

import js from '../../assets/js.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'

import node from '../../assets/node.png'
import pstsql from '../../assets/pstsql.png'
import kali from '../../assets/kali.png'






const InfiniteSlider = () => {
    const trackRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const [slideSetWidth, setSlideSetWidth] = useState(0);

    // Measure the width of the original slide set
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const firstSet = track.children.length / 3; // first half are originals
        let width = 0;
        for (let i = 0; i < firstSet; i++) {
            const el = track.children[i];
            width += el.offsetWidth;
        }
        setSlideSetWidth(width);
    }, []);

    // Animate the slider
    useEffect(() => {
        let animationFrame;
        const step = () => {
            setOffset((prev) => {
                const next = prev - 1;
                return Math.abs(next) >= slideSetWidth ? 0 : next;
            });
            animationFrame = requestAnimationFrame(step);
        };
        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [slideSetWidth]);

    const items = [
        <div key={'1'} className="slide"><img style={{ width: 50, height: 50, borderRadius: 50, objectFit: 'contain' }} src={next_react} alt="" /></div>,
        <div key={'2'} className="slide"><img style={{ width: 80, height: 50, objectFit: 'contain' }} src={html} alt="" /></div>,
        <div key={'3'} className="slide"><img style={{ width: 80, height: 50, objectFit: 'contain' }} src={css} alt="" /></div>,
        <div key={'4'} className="slide"><img style={{ width: 80, height: 50, objectFit: 'contain' }} src={python} alt="" /></div>,
        <div key={'5'} className="slide"><img style={{ width: 80, height: 50, objectFit: 'contain' }} src={redux} alt="" /></div>,
        <div key={'6'} className="slide"><img style={{ width: 80, height: 50, objectFit: 'contain' }} src={pstsql} alt="" /></div>,
        <div key={'7'} className="slide"><img style={{ width: 80, height: 50, objectFit: 'contain' }} src={kali} alt="" /></div>,

        <div key={'8'} className="slide"><img style={{ width: 80, height: 50, objectFit: 'contain' }} src={react} alt="" /></div>,
        <div key={'9'} className="slide"><img style={{ width: 80, height: 50,  objectFit: 'contain' }} src={js} alt="" /></div>,
        <div key={'10'} className="slide"><img style={{ width: 80, height: 50,  objectFit: 'contain' }} src={node} alt="" /></div>,
    ];
    const allItems = [...items, ...items, ...items];

    return (
       <div>
            <h2 className="text-4xl w-full text-center !mb-5">My Stacks</h2>

            <div className="relative overflow-hidden w-full justify-center items-center py-4 max-w-3xl">
                {/* Left fog */}
                <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-gray-700 to-transparent z-10 pointer-events-none" />

                {/* Right fog */}
                <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-gray-700 to-transparent z-10 pointer-events-none" />

                <div
                    ref={trackRef}
                    className="flex whitespace-nowrap justify-center items-center "
                    style={{
                        transform: `translateX(${offset}px)`,
                        willChange: "transform",
                    }}
                >
                    {allItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[80px] h-[50px] flex items-center justify-center rounded-full"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
       </div>
    );
};

export default InfiniteSlider;
