import React from 'react'
import team_data from "../data/team_data"
import Tilt from 'react-parallax-tilt'
import TeamCard from '../subcomponents/TeamCard'
// import Header from '../components/Header';
function Team() {
    return (
        <div><div
            style={{
                overflowX: "hidden",
            }}
        >


            <div className="flex flex-column justify-center items-center" style={{ fontSize: '9rem', fontFamily: 'poppins,sans-serif', color: '#111827' }}>

                <h2 className='absolute z-1'>OUR TEAM</h2>
                <img style={{
                    width: "100%",
                    height: "100vh",
                    top: "0px",
                    left: "0px",
                    opacity: "0.7"
                }}
                    src='./asetes/group.png' />
            </div>
            <div className="main" style={{ backgroundColor: '#111827' }}>



                <h2 style={{
                    paddingTop: "4em",
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "2em"
                }}

                >Faculty in charge(FIC)</h2>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    overflowWrap: "break-word"
                }}>
                    {team_data.slice(0, 1).map((item, index) => {
                        return (
                            <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"7"} tiltMaxAngleY={"7"}>
                                <TeamCard {...item} />
                            </Tilt>
                        )
                    })}
                </div>

                {/* <h2 style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "2em"
                }}
                >Team Members</h2> */}
                <div style={{
                    textAlign: "center",
                    overflowWrap: "break-word"
                }}>
                    {team_data.slice(1,).map((item, index) => {
                        return (
                            <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"7"} tiltMaxAngleY={"7"}>
                                <TeamCard {...item} />
                            </Tilt>
                        )
                    })}
                </div>

            </div>

        </div>
        </div>
    );
}
export default Team