// Gallery.js
import React from 'react';
import '../css/gallery.css'
const imageData = [
    './rocket/pic1.png',
    './rocket/pic2.png',
    './rocket/pic3.png',
    './rocket/pic4.png',
    './rocket/pic5.png',

];
export function Rock() {
    return (
        <>
            <div className="head text-6xl text-center pt-4" style={{ borderBottom: '2px solid black', background: '#111827', color: '#1976d2', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}>
                Liquid Rocket Propulsion
            </div>
            <div className="gallery mt-8">
                {imageData.map((item, index) => {
                    return (
                        <div className="pics" key={index}>
                            <img src={item} style={{ width: "100%" }} />
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Rock;
