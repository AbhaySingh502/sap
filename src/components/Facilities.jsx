import React from 'react'
import '../css/facilities.css'

function Facilities() {
    const videoUrl1 = './facility/blueflame.mp4'
    const videoUrl2 = 'https://video.wixstatic.com/video/efaac4_36bc01ae70a94eb5b487829949145064/1080p/mp4/file.mp4'
    const videoback = {
        width: "100%",
        height: "100vh",
        objectFit: "cover",

    }
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className="pt-8 text-center text-4xl" style={{ color: '#cacaf0' }}>

                Our propulsion lab is equipped with a wide array of facilities to comprehensively test engine components.
            </div>
            <div className="image">
                <img src="./facility/pic2.png" alt="" />
            </div>

            <div className="image">
                <p className='para  '>

                    <div style={{ color: '#69fe68', textAlign: 'center', width: '100%' }}>Compressed air supply system </div >
                    <p style={{ textAlign: 'Left', fontSize: '25px' }}>
                        The 500 KW compressed air supply system provides a 30 bar 800 K air supply to test our High pressure engine combustor.
                    </p>
                </p>
                <div className="image">
                    <img src="./facility/pic3.png" alt="" />
                </div>

                <img src="https://static.wixstatic.com/media/efaac4_d27fb2c84f2140d5801947507b71fb06~mv2.jpg/v1/fill/w_1920,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/efaac4_d27fb2c84f2140d5801947507b71fb06~mv2.jpg" alt="" />

                <div className="image">
                    <img src="./facility/pic10.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic11.png" alt="" />
                </div>

                <p className="para">
                    <div style={{ color: '#69fe68', textAlign: 'center', width: '100%', fontSize: "25px" }} > Combustor Test Rigs </div>
                    <p style={{ textAlign: 'Left', fontSize: '25px' }}>We have specialized rigs designed for testing combustor components.These setups allow us to evaluate areodynamics, spray characteristics, combustion efficiency, stability, and emissions ensuring that our combustor technology meet the highest standards of performance and environmental responsibility.
                    </p>
                </p>
                <div className="image">
                    <img src="./facility/pic4.png" alt="" />
                </div>
            </div>
            <div className="image">

                <img src="https://static.wixstatic.com/media/efaac4_b4dfcf15fbae45a8a2b421c4ac7160c7~mv2.jpg/v1/fill/w_1920,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/efaac4_b4dfcf15fbae45a8a2b421c4ac7160c7~mv2.jpg" alt="" />
                <p className="para">
                    <div style={{ color: '#69fe68', textAlign: 'center', width: '100%' }}>
                        Hot Fire Experiments</div>
                    <p style={{ textAlign: 'Left', fontSize: '25px' }}>Our lab allows for detailed combustion characterization experiments, enabling us to fine-tune combustion processes for maximum efficiency and minimal emissions. We have developed a fuel flex combustor concept which allows the usage of multiple fuel such as Jet A1, kerosene, Methane, Hydrogen and Syn gas.</p>
                </p>
                <video autoPlay muted loop className='videoBackgroundStyle object-center' style={videoback}>
                    <source src={videoUrl1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="para">
                    <div style={{ color: '#69fe68', textAlign: 'center', width: '100%' }}>  Injector Test Rigs</div>
                    <p style={{ textAlign: 'Left', fontSize: '25px' }}>
                        Our injector test rigs are essential for evaluating the efficiency and reliability of fuel injection systems. We have developed a patented injector technology that can provide high combustion efficiency at a low fuel burn rate using our proprietary lean burn combustion process. This helps us to optimize fuel atomization and distribution for maximum engine efficiency. Our test rigs are capabale of handling areation fuel upto a pressure of 45 bar and a flow rate of 20g/s. The rigs can be used to test single injector and multi injector cconfriguations at atmospheric and elevated pressure and temperature conditions. </p>
                </p>

                <p className="para">
                    <div style={{ color: '#69fe68', textAlign: 'center', width: '100%' }}> Thrust Stands </div>
                    <p style={{ textAlign: 'Left', fontSize: '25px' }}>Our thrust stand is a critical tool for measuring engine thrust accurately. It enables us to assess engine performance and thrust characteristics under various operating conditions.</p>
                </p>
                <div className="image">
                    <img src="./facility/pic12.png" alt="" />
                </div>
                <div className="image">
                    <img src="./facility/pic13.png" alt="" />
                </div>
                <p className="para">
                    <div style={{ color: '#69fe68', textAlign: 'center', width: '100%' }}>
                        Spray Characterization </div>
                    <p style={{ textAlign: 'Left', fontSize: '25px' }}> We conduct precise spray characterization experiments to understand and optimize fuel spray patterns, droplet size, and distribution within the combustion chamber</p>
                </p>
            </div>
            <div className="vedio">
                <video autoPlay muted loop className='videoBackgroundStyle object-center' style={videoback}>
                    <source src={videoUrl2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className='para'>
                    <div style={{ color: '#69fe68', textAlign: 'center', width: '100%' }}>
                        Advanced Laser Diagnostics </div>

                    <p style={{ textAlign: 'Left', fontSize: '25px' }}> We employ advanced laser diagnostic equipment to gain deeper insights into engine performance. These includes different techniques such as Time resolved particle image velo symmetry(PIV), phase doppler sarticle analyser(PDPA), Laser induced flourescence imaging(LIF), Shadowgraphy, Background oriented schlieren(BOS), etc.
                    </p>
                </p>
                <p className='para'>
                    <div style={{ color: '#69fe68', textAlign: 'center', width: '100%' }}>
                        Particle Image Velocimetry (PIV): </div>
                    <p style={{ textAlign: 'Left', fontSize: '25px' }}>PIV is used to quantify the two, three components Velocity feilds, Turbulance statics , etc of gaseous and two phase flows visualize and analyze the flow field within the engine. PIV unit includes a double pulsed laser(Nd: YAG, Nd: YLF) and a double pulsed low or high speed camera along with a synchronizer unit. PIV measurment provides fundamental units on the flow structures which helps to optimize different components.</p>
                </p>
            </div>


            <div className="image">
                <img src="https://static.wixstatic.com/media/efaac4_ed19433978104b7c90164d943703eb01~mv2.jpg/v1/fill/w_1920,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/efaac4_ed19433978104b7c90164d943703eb01~mv2.jpg" alt="" />
                <p className="para">
                    <span style={{ color: '#69fe68' }}>
                        Phase Doppler Particle Analyzer (PDPA):</span> PDPA is instrumental in characterizing droplet sizes and velocities distributaions of a spray. The atomization charaterstics of gas turbine injectors and rocket engine injectors can be captured using PDPA mesurments.
                    <span style={{ color: '#69fe68' }}>
                        Laser-Induced Fluorescence (LIF) Systems: </span> LIF systems allow us to study the mixing, species concetrations , flame structure, etc.
                    <span style={{ color: '#69fe68' }}>
                        High-speed cameras, IR camera and Nd: </span>YAG Lasers: We have a set of lasers and cameras that can be used to capture various flows and combustion processes.
                </p>
            </div>


            <div className="image">
                <img src="./facility/pic8.png" alt="" />
            </div>
            <div className="image">
                <img src="./facility/pic9.png" alt="" />
            </div>






        </div>
    )
}

export default Facilities