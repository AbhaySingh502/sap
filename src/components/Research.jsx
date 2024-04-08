import React from 'react'
const data = [
  {
    head: 'Development of low-emission combustor technology for micro gas turbine engines',
    para: 'Our group has developed a novel gas turbine combustor concept that focuses on lean burn combustion to reduce emissions and improve efficiency. The objective of this project is to investigate the operational characteristics and performance of different injection systems for this concept. The candidate will conduct experimental investigations using advanced laser flow diagnostic techniques to quantify the flow and combustion processes. The proposed research involves detailed investigations on radially staged gas turbine injectors to assess their fuel flexibility and performance characteristics. Interested candidates may contact the principal investigator (PI) for more details. The candidate is expected to have a basic degree in Mechanical or Aerospace Engineering and a fundamental understanding of fluid and thermal systems. The candidate should also have good communication and writing skills and be able to work independently and in a team.'
  },
  {
    head: 'Development of reusable liquid rocket engine combustors',
    para: 'The rocket industry is pursuing the development of liquid rocket engines with rapid reusable capability. In this regard, our group has made advancements to develop a novel pintleinjector concept for reusable methane-oxygen (METHALOX) liquid rocket engines. The objective of this project is to investigate the spray and combustion characteristics of this concept at subcritical operating conditions. The candidate will conduct experimental investigations using advanced optical and laser diagnostic techniques to quantify the spray and combustion processes. The proposed research involves detailed investigations on the effects of injector geometry, operating pressure, and fuel mixture ratio on the performance and stability of the pintle injector. Interested candidates may contact the PI for more details. The candidate is expected to have a basic degree in Mechanical or Aerospace Engineering and a fundamental understanding of fluid and thermal systems. The candidate should also have good communication and writing skills and be able to work independently and in a team.'
  },
  {
    head: 'Junior Research Fellow',
    para: 'ISRO is developing high capacity launch platforms for futuristic heavy duty launch vehicles. Our group is working in close collaboration with ISRO to support various activities. The project involves detailed investigations on jet in free supersonic crossflow relevant to launch platforms.Rocket engine exhaust is cooled by injecting water in very high quantities to suppress the acoustic noise levels and to reduce the exhaust gas temperature. Physical models of the atomization processes and experimental databases are currently not available in the case of free supersonic crossflow configurations. The free supersonic gas stream structures and shock trails generated from a M=3 convergent-divergent nozzle will be characterized using focused color schlieren imaging, planar laser-induced fluorescence (TR-PLIF) imaging and Time-resolved particle imaging velocimetry (TR-PIV) experiments. Furthermore, predictive analytical models will be developed to correlate the droplet dispersion and spatial SMD with primary breakup parameters as a function of geometric and flow parameters. The candidate is expected to have a basic degree in Mechanical or Aerospace Engineering and a fundamental understanding of fluid and thermal systems. The candidate should also have good communication and writing skills and be able to work independently and in a team.'
  },
]
function Research() {
  return (
    <div className="rea  h-full mt-2" style={{ backgroundColor: '#081b29', }}>

      <div className='w-4/5 m-auto p-20'>
        <div className='text-center text-4xl text-white font-semibold mb-8' s>Available
          <span style={{ color: '#00abf0' }}> Positions!! </span></div>
      </div>

      <div className="phd w-4/5 m-auto text-white">
        <h1 className='text-6xl text-center mb-16'>PhD Positions </h1>

        <ul>

          {data.map((val, key) => {
            return (
              <li className='text-xl mt-3'>
                <h2 style={{ color: '#00abf0', marginBottom: '1rem', fontSize: '1.8rem' }}>{val.head} </h2>
                <p style={{ color: '#fff', fontSize: '1.25rem', paddingLeft: '3rem' }}>{val.para}</p>
              </li>
            )
          })}

        </ul>
      </div>

      <div className="m_tech w-4/5 m-auto text-white ">
        <h1 className='text-6xl text-center mb-16 mt-8'>B.Tech and M.Tech Projects </h1>
        <p className='text-2xl pb-8'>If you are a student at IIT Jammu and wish to do your master thesis work or BTP with our group, you
          may directly write to the PI (shanmugadas.kp@iitjammu.ac.in)</p>
        <h1 className='text-6xl text-center mb-16 mt-8'>Internships</h1>
        <p className='text-2xl pb-8'>For internship opportunities, visit out startups website
          SAP Aerospace and apply or write to the PI
          (shanmugadas.kp@iitjammu.ac.in).</p>


      </div>
    </div>
  )
}

export default Research