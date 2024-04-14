import React from 'react'
import '../css/investor.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';



const fdata = [
    {
        head: 'Research',
        list: [
            {
                title: 'Lab/Collaborations:',
                innerlist: [
                    {
                        li: 'Propulsion and Energy lab IIT Jammu',

                    },
                    {
                        li: 'National Centre for Combustion Research and Development, IIT Madras',
                    }
                ]

            },
            {
                title: 'Disciplines:',
                innerlist: [
                    {
                        li: 'Propulsion, Combustion and clean energy',
                    },

                ]

            },

        ]
    },
    {
        head: 'Education',

        list: [
            {
                li: 'B. Tech in Mechanical Engineering, 2010, Calicut University'

            },
            {
                li: '  M.S. and Ph.D in Aerospace Engineering, 2018, IIT Madras'
            },
        ]
    },
    {
        head: 'Experience:',
        list: [
            {
                li: 'Senior Scientist, NCCRD IIT Madras (2018-2020)'

            },
            {
                li: '  Project Associate, IIT Madras (2011- 2012)'
            },
            {
                li: 'Visiting Researcher, Technical University of Munich, Germany (2023 Dec-2024)'
            },
        ]
    },
    {
        head: 'Teaching Experience:',
        list: [
            {
                title: 'Core courses ',
                innerlist: [
                    {
                        li: 'Engineering Thermodynamics',

                    },
                    {
                        li: 'Engineering Fluid Dynamics',
                    },
                    {
                        li: 'Fluid Mechanics and Machinery lab',
                    },
                    {
                        li: 'Energy Systems and Technology',
                    },
                ]

            },
            {
                title: 'Elective courses',
                innerlist: [
                    {
                        li: 'Compressible fluid flows',

                    },
                    {
                        li: 'Introduction to Combustion',
                    },
                    {
                        li: 'Atomization and Sprays',
                    },

                ]
            },
        ]
    },
    {
        head: 'Administrative responsibilities',

        list: [
            {
                li: 'Associate Dean, Academic PG programs   '

            },
            {
                li: ' Institute incubation cell (I3C) Working committee member'
            },
            {
                li: ' Pre- PFC purchase committee member'
            },
            {
                li: 'Fluid Mechanics- Lab-in-charge'
            },
        ]
    },
    {
        head: 'Awards and Honours',
        list: [
            {
                li: 'Best paper award for the paper titled “Laser diagnostics techniques for the internal spray characterization of fuel injectors” at the National Conference on Future directions in Propulsion, held at LPSC, Thiruvananthapuram, India, 2018.'
            },
            {
                li: 'Boeing BUILD 2.0 Innovation challenge National winner, Development of a microgas turbine combustor technology for UCAV applications.'
            },
            {
                li: 'SERB SIRE fellow, 2023, Visiting researcher, Technical University of Munich. Development of METHALOX liquid rocket engine concept.'
            },
        ]

    },
    {
        head: 'Research Thesis Guided',
        list: [
            {
                li: '2 Ph.D. Students (ongoing)'
            },
            {
                li: '3 M. Tech. Students (ongoing)'
            },
            {
                li: '2 M. Tech. Students (Completed)'
            },
            {
                li: '23 B.Tech students (B.Tech projects, ongoing,); 5 projects completed.'
            },
        ]

    },
    {
        head: 'Industry collaboration',
        list: [
            {
                li: 'ISRO'
            },
            {
                li: 'GE Aerospace'
            },
            {
                li: 'DRDO'
            },
        ]

    },
]

function Investors() {
    return (
        <>
            <div className='up flex items-center justify-center'>
                <div className="container mt-20 flex">
                    <div className="left float-left  text-center" style={{ width: '40%' }}>
                        <img className='mb-4' src="https://iitjammu.ac.in/faculty/documents/images/1612853195680.jpeg" alt="das sir image" />
                        <div className="socail flex justify-between">
                            <a href="https://www.linkedin.com/in/shanmugadas-k-p-bb52662a/"> <LinkedInIcon fontSize='large' color='primary' /></a>
                            <a href="https://iitjammu.ac.in/faculty/~shanmugadaskp"> <PersonIcon fontSize='large' color='primary' /></a>
                            <a href="https://scholar.google.com/citations?user=SQEygN0AAAAJ&hl=en&oi=ao"> <GoogleIcon fontSize='large' color='primary' /></a>
                        </div>
                    </div>

                    <div className="middle text-center mt-4" style={{ width: '80%' }}>
                        <div className="name  text-4xl ">
                            Dr Shanmugadas K.P.
                        </div>
                        <div className="address flex flex-col text-2xl ">
                            <span>Assitant Professor</span>
                            <span>Department of Mechanical Engineering</span>
                            <span>Indian Institute of Technology Jammu</span>
                            <span>Jammu and Kashmir 181 221, India</span>
                            <span>shanmugadas.kp@iitjammu.ac.in </span>

                        </div>

                    </div>


                </div>
            </div>

            <div className="bottom w-4/5 m-auto">
                <div className="bio">

                    <span className='text-4xl ' style={{ color: '#1976d2', fontWeight: '600' }}>Brief Bio</span>
                    <p className='text-2xl p-4' style={{ textAlign: 'justify' }}>
                        <p>Dr. Shanmugadas, assistant professor within the Department of Mechanical Engineering at
                            IIT Jammu, spearheads the Propulsion and Energy Lab, driving pioneering research and
                            innovation related to liquid rocket engines and aero engines. With a primary focus on novel
                            combustor concepts, his expertise extends across different areas including two-phase flow,
                            experimental combustion, and laser flow diagnostics. Currently, his group is involved in the
                            development of a novel gas turbine combustor capable of utilizing various fuels such as
                            Hydrogen, methane, and SAF.</p>
                        <p style={{ marginTop: '20px', marginBottom: '20px' }}>Dr. Shanmugadas is recognized for his contributions to fuel injection systems with many
                            publications and his group has filed many patents. He is actively engaged with industry and
                            governmental bodies like ISRO and GE Aerospace and promotes impactful collaborations.
                            He also works closely with the National Centre for Combustion Research and Development
                            (NCCRD) at IIT Madras, focusing on advancing gas turbine combustion research.
                            Additionally, he collaborates with the Chair of Space Propulsion and Mobility at Technical
                            University Munich, Germany, in the area of injection concepts for liquid rocket engines.</p>
                        <p>Dr. Shanmugadas is a professional member of the American Institute of Aeronautics and
                            Astronautics (AIAA) and a lifetime member of the Combustion Institute, Dr. Shanmugadas
                            exemplifies dedication to his field. He serves as the Associate Dean of Academic Affairs at
                            IIT Jammu, contributing to the institution&#39;s academic excellence.
                            Dr. Shanmugadas is the founder of SAP Aerospace, a pioneering deep-tech startup focused
                            on developing cutting-edge aero engines for Unmanned Combat Aerial Vehicles (UCAVs).</p></p>
                </div>

                <div className="main">

                    {fdata.map((val) => (
                        <div key={val.head}>
                            <span className='text-4xl' style={{ color: '#1976d2', fontWeight: '600' }}>{val.head}</span>
                            {val.list.map((object, index) => (
                                <ul className='mb-6  mt-6 pl-10 list-disc' key={index}>
                                    {object.title && (
                                        <li>
                                            <span className='text-4xl' style={{ color: '#9414FF', fontWeight: '600' }}>{object.title}</span>
                                            <ul>
                                                {object.innerlist.map((ink, i) => (
                                                    <li className='p-2 text-xl' key={i}>{ink.li}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    )}

                                    {!object.title && <li className='text-xl'>{object.li}</li>}
                                </ul>
                            ))}
                        </div>
                    ))}





                </div>


            </div>
        </>
    )
}

export default Investors