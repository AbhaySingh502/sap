import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <div className='mt-3' style={{ backgroundColor: 'aliceblue', boxShadow: 'black 5px 5px 20px' }}>

            <div class="container w-100">
                <footer class="py-5 w-full">
                    <div class="row flex justify-center">
                        <div class="col-6 col-md-2 mb-3">
                            <h5 style={{ fontSize: "1.5rem", color: "#0d6efd" }}>Important Links</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="./Home" class="nav-link p-0 text-body-secondary">Home</a></li>
                                <li class="nav-item mb-2"><a href="./Investors" class="nav-link p-0 text-body-secondary">Principal Investigator</a></li>
                                <li class="nav-item mb-2"><a href="./Facilities" class="nav-link p-0 text-body-secondary">Facilities</a></li>
                                <li class="nav-item mb-2"><a href="./Reaserch" class="nav-link p-0 text-body-secondary">Reaacearch Positions</a></li>
                                <li class="nav-item mb-2"><a href="./contact" class="nav-link p-0 text-body-secondary">Conatact Us</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 offset-md-1">
                            <form className='mb-5'>
                                <h5 className='text-2xl text-primary'>Develpoer Profile</h5>
                                <div className="profiles d-flex flex-column">
                                    <a href="#" className='text-decoration-none text-xl text-body-secondary'>Abhay Singh</a>
                                </div>

                            </form>

                            <div className="contact_us fs-4">
                                <span>Follow us: </span>
                                <span style={{ color: '#1874fd' }}>shanmugadas.kp@iitjammu.ac.in</span>

                            </div>


                        </div>


                        <div className="logo w-fit">
                            <img src="./asetes/logo.png" alt="" />
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between text-left pt-2 border-top">
                        <p>© 2023 Company, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer