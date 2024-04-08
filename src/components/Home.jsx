import React from 'react'
import HorizontalCard from '../subcomponents/HorizontalCard'
import HorizontalCard_two from '../subcomponents/HorizontalCard_two';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt'
function Home() {
    const videoUrl = 'https://video.wixstatic.com/video/efaac4_68cf4db6bc2249458e32bc4078ecc402/1080p/mp4/file.mp4'
    const videoback = {
        width: "100%",
        height: "100vh",
        objectFit: "cover",

    }

    return (
        <div>
            <video autoPlay muted loop className='videoBackgroundStyle object-center' style={videoback}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <section className="content">
                <h1 className="heading text-center text-6xl" style={{ color: '#00abf0', backgroundColor: '#081b29', borderTop: '3px solid purple', boxShadow: '5px 5px 5px 5px #081b29 ' }}>
                    Reaserch Areas
                </h1>

                <div className="reacerch_areas mt-4" style={{ backgroundColor: '#315a71' }} >

                    <Tilt style={{ display: "inline-block", width: '100%' }} tiltMaxAngleX={"2"} tiltMaxAngleY={"1"}>
                        <Link to="/turbine">
                            <HorizontalCard />
                        </Link>
                    </Tilt>
                    <Tilt style={{ display: "inline-block", width: '100%' }} tiltMaxAngleX={"2"} tiltMaxAngleY={"1"}>
                        <Link to="/rocket" >
                            <HorizontalCard_two />
                        </Link>
                    </Tilt>
                </div>

            </section>

        </div >
    )
}

export default Home