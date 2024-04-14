import React from 'react'
// import robotic from './robotic.jpg';
import updates_data from '../data/updates_data'

const Updates = () => {
    return (
        <>
            {/* <div className="mt-20">
                {updates_data.map((val, key) => {
                    return (
                        <div className="upcoming_event flex justify-center " >
                            <div class="card mb-3 h-auto" style={{ width: "80%", boxShadow: 'black 5px 5px 20px' }}>
                                <div class="row g-0 mb-0">
                                    <div class="col-md-8 text-start">
                                        <div class="card-body">
                                            <h5 class="card-title" style={{ fontSize: "2.35rem" }}>{val.title}</h5>
                                            <p class="card-text" style={{ fontSize: "1.35rem" }}>{val.para}</p>
                                            <p class="card-text text-danger" style={{ fontSize: "1rem" }}>{val.date}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4" >
                                        <img src={val.image} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div> */}
            <div style={{ height: '80vh', width: '95vw', fontSize: '40px', display: 'flex', justifyContent: 'center' }}> Visit SAP Aeropspace for more updates</div>
        </>
    )
}
export default Updates



