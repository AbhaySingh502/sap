import React from 'react'
import Table from './Table'

const patents = [
  {
    name: ' Bi-swirl pintle injector, Filing number: 2023-11056223.'
  },
  {
    name: ' Method And Apparatus For Enhanced Atomization In A Lean Burn Gas Turbine EngineMain Injector Mixer: Filing number: 2023-11062733.'
  },
  {
    name: 'Method and Apparatus For Enhanced Atomization In A Lean Burn Gas Turbine Engine: Filing number: 202311062674.'
  },
  {
    name: ' Slit-Type Pintle Injector With Impinging Jets For Throttelable Liquid Rocket Engine Applications. Filing number-202311063973.'
  }

]
const book_data = [
  {
    name: 'Bikash Mahato, Vivek Sahu, R. Vikram, P. Ganesh, and K. P. Shanmugadas., Chapter 58: Characterization of Primary Atomization Processes of Like-on-Unlike Impinging Injectors, Lect.Notes Mechanical Engineering, Sudev Das et al. (Eds): Proceedings of the 1st International Conference in Fluid, Thermal and Energy Systems, Springer Nature. DOI: 10.1007/978-981-99-5990-7.'
  },
  {
    name: 'Aditi Sharma, Bikash Mahato, Ganesh P., and K. P. Shanmugadas, Investigation of the liquid sheet breakup dynamics in like-on-unlike impinging injectors, Chapter 3: Lect.Notes Mechanical Engineering, Krishna Mohan Singh et al. (Eds): Fluid Mechanics and Fluid Power, Volume 5.'
  },
  {
    name: 'Ayush Divyansh, Preetam Jamod, and K. P. Shanmugadas, Development of Advanced Fuel Injector Concepts for Compact Lean-Burn Gas-Turbine Combustors, K. M. Singh et al. (eds.), Fluid Mechanics and Fluid Power, Volume 4, Lecture Notes in Mechanical Engineering, https://doi.org/10.1007/978-981-99-7177-0_14.'
  }
]
const publication_data = [
  {
    name: 'K. P. Shanmugadas, S. R. Chakravarthy, “A canonical geometry to study wall filming and atomization in pre-filming coaxial swirl injectors”, Proceedings of the Combustion Institute 36, 2467-2474, 2017.'
  },
  {
    name: 'K. P. Shanmugadas, S. R. Chakravarthy, R. N. Chiranthan, Jayanth Sekar, Sundar Krishnaswami “Characterization of wall filming and atomization inside a gas turbine fuel injector”, Experiments in Fluids,  59, 151, 2018.'
  },
  {
    name: 'K.P. Shanmugadas, E.S. Manuprasad, R.N. Chiranthan, S.R. Chakravarthy, Fuel placement and atomization inside a gas-turbine fuel injector at realistic operating conditions, Proceedings of the Combustion Institute, Volume 38, Issue 2, 2021, Pages 3261-3268.'
  },
  {
    name: 'K. P. Shanmugadas, S. R. Chakravarthy, “Wall filming and atomization inside a swirl cup”, 13th Triennial International Conference on Liquid Atomization and Spray Systems, ICLASS -2015, Taiwan, 2015.'
  },
  {
    name: 'K. P. Shanmugadas, S. R. Chakravarthy, “A canonical geometry to study wall filming and atomization in pre-filming coaxial swirl injectors”, 36th International Symposium on Combustion, Seoul, South Korea, 2016.'
  },
  {
    name: 'K. P. Shanmugadas, S. R. Chakravarthy, “Role of precessing vortex core on wall filming and ligament breakup inside a pre-filming airblast atomizer”, 18th Annual Conference on Liquid Atomization & Spray Systems Asia, ILASS Asia, Chennai, India, 2016.'
  },
  {
    name: 'K. P. Shanmugadas, S. R. Chakravarthy, “Characterization of an aero engine fuel injector spray at realistic engine conditions”, Proceedings of the 1st National Aerospace Propulsion Conference, Kanpur, India, 2017.'
  },
  {
    name: 'K. P. Shanmugadas, S. R. Chakravarthy, “Wall Filming and Atomization Inside a Simplified Pre-filming Coaxial Swirl Injector: Role of Unsteady Aerodynamics”, AIAA Aerospace Sciences Meeting, AIAA SciTech Forum, Kissimmiee, Florida, USA, 2018.'
  },
  {
    name: 'K. P. Shanmugadas, R. Manikandan and S. R. Chakravarthy, “Laser diagnostics techniques for the internal spray characterization of fuel injectors”, National conference on Future directions in Propulsion, LPSC, Thiruvananthapuram, India, 2018.'
  },
  {
    name: 'K. P. Shanmugadas, S. R. Chakravarthy, R. N. Chiranthan, Jayanth Sekar and Sundar Krishnaswami, “Spray characteristics of a dual orifice swirl cup at elevated pressures and temperatures”, 14th Triennial International Conference on Liquid Atomization and Spray Systems, ICLASS 2018, Chicago, USA, 2018.'
  },
  {
    name: 'Deepti Bhandari, Rohit Grover, K. P. Shanmugadas, S. R. Chakravarthy, Ranjeet Mishra, Pradeep Naik, Jayanth Sekar and Sundar Krishnaswami, “Characterization of atomization inside a dry low emission (DLE) premixer”, 14th Triennial International Conference on Liquid Atomization and Spray Systems, ICLASS 2018, Chicago, USA, 2018.'
  },
  {
    name: 'N. Darwish, K. P. Shanmugadas and S. R. Chakravarthy, “Experimental investigation of recirculation zone characteristics of a prefilming airblast injector”., IOP Conference Series: Materials Science and Engineering. 1172- 012046, 2021.'
  },
  {
    name: 'K. P. Shanmugadas, S. R. Chakravarthy, “Effect of ambient pressure on the internal atomization processes of a gas-turbine fuel injector”.  15th Triennial International Conference on Liquid Atomization and Spray Systems, ICLASS 2021, Edinburgh, Scotland.'
  },
  {
    name: 'Bikash Mahato, Vivek Sahu, Vikram R.  Ganesh P., and K. P. Shanmugadas, “Characterization of primary atomization processes of like-on-unlike impinging injectors”, Proceedings of the 1st International Conference in Fluid Thermal and Energy Systems, Calicut, India, 2022.'
  },
  {
    name: 'Vivek Sahu, Aman Bakshi and K. P. Shanmugadas, Role of swirl velocity field and shear layers on the atomization processes of gas turbine swirl injectors, 22nd Annual Conference on Liquid Atomization & Spray Systems Asia, ILASS Asia, 2022, Indore, India.'
  },
  {
    name: 'Bikash Mahato and K. P. Shanmugadas, Characterization of primary atomization of like on unlike impinging injectors, 22nd Annual Conference on Liquid Atomization & Spray Systems Asia, ILASS Asia, 2022, Indore, India.'
  },
  {
    name: 'Sanjay Kumar Gupta , Aman Bakshi , Rachit, Bundiwal , K. P. Shanmugadas Characterization of the spray flow field at the exit of a pintle injector, Proceedings of the 9th International and 49th National Conference on Fluid Mechanics and Fluid Power (FMFP), December 14-16, 2022, IIT Roorkee.'
  },
  {
    name: 'Ayush Divyansh, Preetam Jamod  and K. P. Shanmugadas , Development of Advanced Fuel Injector Concepts for Compact Lean-Burn Gas-Turbine Combustors, Proceedings of the 9th International and 49th National Conference on Fluid Mechanics and Fluid Power (FMFP), December 14-16, 2022, IIT Roorkee.'
  },
  {
    name: 'Aditi Sharma , Bikash Mahato , Ganesh P.  and K. P Shanmugadas, Investigation of the liquid sheet breakup dynamics in like-on-unlike impinging injectors, Proceedings of the 9th International and 49th National Conference on Fluid Mechanics and Fluid Power (FMFP), December 14-16, 2022, IIT Roorkee.'
  },
  {
    name: 'Vivek Sahu, Devin Chugh, Deepanshu Mittal, Shanmugadas K P, Effect of Secondary Swirl Strength on the External Aerodynamics of a Gas Turbine Fuel Injector, Proceedings of the 9th International and 49th National Conference on Fluid Mechanics and Fluid Power (FMFP), December 14-16, 2022, IIT Roorkee.'
  },
  {
    name: 'Preetam Jamod, Ayush Divyansh, and K. P. Shanmugadas,  Internal and External Aerodynamics of a Lean-Burn Gas Turbine Fuel Injector, Proceedings of the 9th International and 49th National Conference on Fluid Mechanics and Fluid Power (FMFP), December 14-16, 2022, IIT Roorkee.'
  },
  {
    name: 'Ayush Kumar Rao, Shanmugadas K.P., Pothukuchi Hairsh. “Subcooled flow boiling characteristics in an eccentric annulus at low pressure conditions”. Proceedings of the 27th National and 5th International ISHMT-ASTFE Heat and Mass Transfer Conference, December 14-17, 2023, IIT Patna, Patna-801106, Bihar, India.'
  },
  {
    name: 'Vatsal Tyagi, Ayush Divyansh, Preetam Jamod, K. P. Shanmugadas, “Design And  Numerical Analysis Of A Lean Burn Combustor Liner Inlet For Micro-Gas Turbine Engine Applications”, Proceedings of the ASME 2023, Gas Turbine India 2023, GTIndia2023-118472.'
  },
  {
    name: 'Shivam Uniyal, Preetam Jamod, Saket Singh, Ayush Divyansh Shanmugadas K.P., “Numerical Simulation and Aerodynamics of a Fuel Flexible Injector for Micro-Gas Turbine Engines”, Proceedings of the ASME 2023, Gas Turbine India 2023, GTIndia2023-118428.'
  },
  {
    name: 'Nivedita Shahi, Ayush Divyansh, Vatsal Tyagi, Shanmugadas K.P., “Numerical Investigation On The Optimization Of Angled Effusion Holes Of Liner Assembly Of Micro Gas Turbine Engine Combustor”, Proceedings of the ASME 2023, Gas Turbine India 2023, GTIndia2023-118466.'
  },
  {
    name: 'Abhishek Verma, Preetam Jamod, Shanmugadas K.P., Shivam Uniyal, Ayush Divyansh, “Internal and External Flow Characteristics on Variation of Swirl Strength for a Fuel Flexible Injector for Micro Gas Turbine Engines”, Proceedings of the ASME 2023, Gas Turbine India 2023, GTindia2023-118470.'
  },
  {
    name: 'Nandani Gupta , Shrey Shrivastava , Preetam Jamod , Shanmugadas K.P., “Numerical investigation of Spray characteristics of lean-burn gas turbine injector.” Proceedings of the 10th International and 50th National Conference on Fluid Mechanics and Fluid Power (FMFP), FMFP2023–520, 2023.'
  },
  {
    name: 'Vikash Garg, Preetam Jamod, Vivek Sahu, Prashant Singh, K.P. Shanmugadas, “Characterization of Injector aero dynamics in lean burn micro gas turbine engine combustors", Proceedings of the 10th International and 50th National Conference on Fluid Mechanics and Fluid Power (FMFP), 2023. FMFP2023-193.'
  },
  {
    name: 'Shrey Srivastava, Nandani Gupta , Ayush Divyansh K.P. Shanmugadas, “Numerical Investigation of Spray Characteristics for Main Atomizer of Lean Burn Gas Turbine Fuel Injector”, Proceedings of the 10th International and 50th National Conference on Fluid Mechanics and Fluid Power (FMFP), 2023. FMFP2023-524.'
  },
  {
    name: 'Prashant Singh, Amit Rajput, Abhishek Verma, Preetam Jamod, Shanmugadas K P, “Experimental Investigation of aerodynamics in a fuel flex injector using Particle Velocimetry Imaging”, Proceedings of the 10th International and 50th National Conference on Fluid Mechanics and Fluid Power (FMFP), 2023. FMFP2023-194.'
  },
  {
    name: 'Sayan Patra, Shanmugadas K P, Numerical Study on Flow Through a Simple Diffuser, “Proceedings of the 10th International and 50th National Conference on Fluid Mechanics and Fluid Power (FMFP), 2023. FMFP2023-195.'
  },
  {
    name: 'Ayush Kumar Rao, Shanmugadas K.P., Pothukuchi Hairsh, "Influence of spacer grids on the thermal hydraulics of a hexagonal sub-assembly”. “Proceedings of the 10th International and 50th National Conference on Fluid Mechanics and Fluid Power (FMFP), 2023.'
  },
  {
    name: 'Ayanava Roy, Rachit Bundiwal, Shib Narayan Roy, KP Shanmugadas, “Numerical Investigation on the Secondary Atomization Characteristics of a Bi-Swirl Pintle Injector”, 2023 Regional Student Conferences, American Institute of Aeronautics and Astronautics, AIAA 2023-77035, doi.org/10.2514/6.2023-77035.'
  }

]
function Publications() {
  return (
    <div className='w-3/5 m-auto'>
      <div className="publication mt-20">
        <h1 style={{ color: 'blueviolet', fontSize: '2.3rem', textAlign: 'center' }}>PUBLICATIONS</h1>
        <ul className='list-decimal mt-4' >
          {publication_data.map((val, key) => {
            return (
              <li className='text-xl mt-3'>{val.name}</li>
            )
          })}
        </ul>
      </div>
      <div className="books mt-20 ">
        <h1 style={{ color: 'blueviolet', fontSize: '2rem', textAlign: 'center' }}>BOOKS CHAPTER</h1>
        <ul className='list-decimal mt-4' >
          {book_data.map((val, key) => {
            return (
              <li className='text-xl mt-3'>{val.name}</li>
            )
          })}
        </ul>

      </div>

      <div className="patetnts mt-12 mb-20">
        <h1 style={{ color: 'blueviolet', fontSize: '2rem', textAlign: 'center' }}>Patents</h1>
        <ul className='list-decimal mt-4' >
          {patents.map((val, key) => {
            return (
              <li className='text-xl mt-3'>{val.name}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Publications