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
            <div style={{
                position: "absolute",
                top: "0px",
                zIndex: "2",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, .2)",
            }}>
                <h1 className="our-team-heading" style={{ fontFamily: "MullerBold", fontSize: "5em", textAlign: "center" }}>OUR TEAM</h1>
            </div>

            <div className="team-header" style={{
                width: "100%",
                height: "100vh",
                zIndex: "1",
            }}>
            </div>

            <img style={{
                width: "100%",
                height: "100vh",
                zIndex: "-1",
                position: "fixed",
                top: "0px",
                left: "0px",
                opacity: "0.7"
            }}
                src='./asetes/group.png' />

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

            <h2 style={{
                width: "100%",
                textAlign: "center",
                marginBottom: "2em"
            }}
            >Team Members</h2>
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
    );
}
export default Team