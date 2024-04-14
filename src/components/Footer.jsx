import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
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
                                <li class="nav-item mb-2"><a href="./Reaserch" class="nav-link p-0 text-body-secondary">Research Positions</a></li>
                                <li class="nav-item mb-2"><a href="./contact" class="nav-link p-0 text-body-secondary">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 offset-md-1">
                            <form className='mb-5'>
                                <h5 className='text-2xl text-primary'>Developer Profile</h5>
                                <div className="profiles d-flex flex-column">
                                    <a href="https://github.com/AbhaySingh502" className='text-decoration-none text-xl text-body-secondary'>Abhay Singh</a>
                                </div>

                            </form>

                            <div className="contact_us fs-4 text-center">
                                <span>Follow us: </span>
                                <div className="socail flex justify-between">
                                    <a href="https://www.linkedin.com/in/shanmugadas-k-p-bb52662a/"> <LinkedInIcon fontSize='large' color='primary' /></a>
                                    <a href="https://iitjammu.ac.in/faculty/~shanmugadaskp"> <PersonIcon fontSize='large' color='primary' /></a>
                                    <a href="https://scholar.google.com/citations?user=SQEygN0AAAAJ&hl=en&oi=ao"> <GoogleIcon fontSize='large' color='primary' /></a>
                                </div>

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
