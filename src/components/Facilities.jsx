import React from 'react'
import '../css/facilities.css'

function Facilities() {
    const videoUrl1 = 'https://video.wixstatic.com/video/efaac4_3ab6495e92f540f68bca9bb36ea4270a/1080p/mp4/file.mp4'
    const videoUrl2 = 'https://video.wixstatic.com/video/efaac4_36bc01ae70a94eb5b487829949145064/1080p/mp4/file.mp4'
    const videoback = {
        width: "100%",
        height: "100vh",
        objectFit: "cover",

    }
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className="vedio">
                <video autoPlay muted loop className='videoBackgroundStyle object-center' style={videoback}>
                    <source src={videoUrl1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className='para'>
                    <span style={{ color: '#69fe68' }}>State-of-the-Art Propulsion Lab at SAP Aerospace </span>
                    At SAP Aerospace, we take pride in our cutting-edge propulsion lab, situated in collaboration with the prestigious Indian Institute of Technology (IIT) Jammu. Our propulsion lab is dedicated to the rigorous testing of gas turbine engines under realistic operating conditions. We understand that innovation in aerospace demands rigorous experimentation and validation, which is precisely what our facility provides.
                    <span style={{ color: '#69fe68' }}> Comprehensive Engine Component Testing</span>
                    Our propulsion lab is equipped with a wide array of facilities to comprehensively test engine components. These include 13 test rigs including realistic full annular engine rigs:
                    <span style={{ color: '#69fe68' }}>Compressed air supply system: </span>
                    The 500 KW compressed air supply system provides a 30 bar 800 K air supply to test our High pressure engine combustor.
                </p>
            </div>

            <div className="image">
                <img src="https://static.wixstatic.com/media/efaac4_d27fb2c84f2140d5801947507b71fb06~mv2.jpg/v1/fill/w_1920,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/efaac4_d27fb2c84f2140d5801947507b71fb06~mv2.jpg" alt="" />
                <p className="para">
                    <span style={{ color: '#69fe68' }} > Combustor Test Rigs: </span> We have specialized rigs designed for testing combustor components.These setups allow us to evaluate combustion efficiency, stability, and emissions, ensuring that our engines meet the highest standards of performance and environmental responsibility.
                </p>
            </div>
            <div className="image">
                <img src="https://static.wixstatic.com/media/efaac4_b4dfcf15fbae45a8a2b421c4ac7160c7~mv2.jpg/v1/fill/w_1920,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/efaac4_b4dfcf15fbae45a8a2b421c4ac7160c7~mv2.jpg" alt="" />
                <p className="para">
                    <span style={{ color: '#69fe68' }}>  Injector Test Rigs:  </span>Our injector test rigs are essential for evaluating the efficiency and reliability of fuel injection systems. We have developed a patented injector technology that can provide high combustion efficiency at a low fuel burn rate using our proprietary lean burn combustion process. This helps us optimize fuel atomization and distribution for maximum engine efficiency.



                    <span style={{ color: '#69fe68' }}> Thrust Stands: </span> Our thrust stand is a critical tool for measuring engine thrust accurately. It enables us to assess engine performance and thrust characteristics under various operating conditions.


                    <span style={{ color: '#69fe68' }}>
                        Diverse Experimentation Possibilities </span>

                    At SAP Aerospace, we believe in pushing the boundaries of engine technology through experimentation. Our propulsion lab facilitates a wide range of experiments, including:


                    <span style={{ color: '#69fe68' }}>
                        Spray Characterization: </span> We conduct precise spray characterization experiments to understand and optimize fuel spray patterns, droplet size, and distribution within the combustion chamber
                </p>
            </div>
            <div className="vedio">
                <video autoPlay muted loop className='videoBackgroundStyle object-center' style={videoback}>
                    <source src={videoUrl2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className='para'>
                    <span style={{ color: '#69fe68' }}>
                        Combustion Characterization: </span>Our lab allows for detailed combustion characterization experiments, enabling us to fine-tune combustion processes for maximum efficiency and minimal emissions.


                    <span style={{ color: '#69fe68' }}>
                        Advanced Laser Diagnostics </span>

                    We employ advanced laser diagnostic equipment to gain deeper insights into engine performance. These include:


                    <span style={{ color: '#69fe68' }}>
                        Particle Image Velocimetry (PIV): </span> PIV is used to visualize and analyze the flow field within the engine. This aids in optimizing airflow patterns for enhanced engine efficiency.
                </p>
            </div>


            <div className="image">
                <img src="https://static.wixstatic.com/media/efaac4_ed19433978104b7c90164d943703eb01~mv2.jpg/v1/fill/w_1920,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/efaac4_ed19433978104b7c90164d943703eb01~mv2.jpg" alt="" />
                <p className="para">
                    <span style={{ color: '#69fe68' }}>
                        Phase Doppler Particle Analyzer (PDPA):</span> PDPA is instrumental in characterizing droplet sizes and velocities within the engine, contributing to improved fuel atomization.
                    <span style={{ color: '#69fe68' }}>
                        Laser-Induced Fluorescence (LIF) Systems: </span> LIF systems allow us to study combustion processes in real-time, helping us achieve efficient and clean combustion.
                    <span style={{ color: '#69fe68' }}>
                        High-speed cameras, IR camera and Nd: </span>YAG Lasers: We have a set of lasers and cameras that can be used to capture the flow and combustion processes.
                </p>
            </div>
            <div className="image">
                <img src="https://static.wixstatic.com/media/efaac4_a54806762a294e9eb5dbee489d1f6d7a~mv2.png/v1/fill/w_1918,h_644,al_c,q_90,enc_auto/efaac4_a54806762a294e9eb5dbee489d1f6d7a~mv2.png" alt="" />
                <p className="para">
                    At SAP Aerospace, our propulsion lab is more than just a testing facility; it's a hub of innovation and excellence. We are committed to pushing the boundaries of gas turbine engine technology and ensuring that our engines meet the highest standards of performance, efficiency, and environmental sustainability. Through our state-of-the-art facilities and dedicated team of experts, we are shaping the future of aerospace propulsion.
                </p>
            </div>
            <div className="flex flex-column items-center">

                <div className="image">
                    <img src="./facility/pic1.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic2.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic3.png" alt="" />
                </div>

                <div className="image">
                    <img src="./facility/pic5.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic6.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic7.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic8.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic9.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic10.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic4.png" alt="" />
                </div>



            </div>

        </div>
    )
}

export default Facilities