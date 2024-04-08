import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
function Contact() {
    return (
        <div className='contact w-4/5 ml-auto d-flex justify-around mr-auto mt-20 mb-20'>
            <div className="left w-6/12">
                <div className="add">
                    <span style={{
                        fontSize: '2rem',
                        fontWeight: '600',
                        color: '#074099'
                    }}>Address</span>
                    <p className='text-xl p-3'>1C, Propulsion Lab, Indian Institute of Technology, Jammu

                        Jagti, 181221</p>
                </div>
                <div className="contact">
                    <span style={{
                        fontSize: '2rem',
                        fontWeight: '600',
                        color: '#074099'
                    }}>Contact</span>
                    <div className="li d-flex flex-column p-3 text-2xl">
                        <div className="call ">
                            <ContactPhoneIcon color='primary' className='mr-3' />
                            <span>+91-7051226352</span>

                        </div>
                        <div className="call">
                            <ContactPhoneIcon color='primary' className='mr-3' />
                            <span >+91-1912741125</span>

                        </div>
                        <span style={{ color: 'blueviolet' }} >shanmugadas.kp@iitjammu.ac.in</span>
                    </div>
                </div>
                <div className="hours">
                    <span style={{
                        fontSize: '2rem',
                        fontWeight: '600',
                        color: '#074099'
                    }}>Opening Hours</span>
                    <div className="li p-3 text-xl">

                        <div>Mon-Fri <span>8:00 am – 8:00 pm</span></div>
                        <div>Mon-Fri <span>8:00 am – 8:00 pm</span></div>
                        <div>Mon-Fri <span>8:00 am – 8:00 pm</span></div>
                    </div>
                </div>
                <div className="text-center" style={{
                    fontSize: '1.5rem',
                    color: 'blueviolet'
                }}>

                    <div className="socail flex m-4">
                        <a href="https://www.linkedin.com/in/shanmugadas-k-p-bb52662a/"> <LinkedInIcon fontSize='large' color='primary' /></a>
                        <a href="https://iitjammu.ac.in/faculty/~shanmugadaskp"> <PersonIcon fontSize='large' color='primary' /></a>
                        <a href="https://scholar.google.com/citations?user=SQEygN0AAAAJ&hl=en&oi=ao"> <GoogleIcon fontSize='large' color='primary' /></a>
                    </div>
                </div>
            </div>
            <div className="right w-6/12" style={{ height: '70vh' }}>
                <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.4331495653403!2d74.89473355965977!3d32.803586293125186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e814038301e31%3A0xe3a42e213df5c738!2sIIT%20Jammu!5e0!3m2!1sen!2sin!4v1712227377310!5m2!1sen!2sin"></iframe>
            </div>

        </div>
    )
}

export default Contact