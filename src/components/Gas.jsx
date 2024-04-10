// Gallery.js
import React from 'react';
// import '../css/gallery.css'
const imageData = [
    './gas/pic15.png',
    './gas/pic16.png',
    './gas/pic18.png',
    './gas/pic19.png',
    './gas/pic20.png',



];
export function Gas() {
    return (
        <>
            <div className="head text-6xl text-center pt-4" style={{ borderBottom: '2px solid black', background: '#111827', color: '#1976d2', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}>
                Gas Turbine Engine
            </div>
            <div className="mt-8">
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

export default Gas;
