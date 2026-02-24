import "./index.css"
import TitleHeader from '../../TitleHeader'
import GlowCard  from '../../GlowCard'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];
gsap.registerPlugin(ScrollTrigger)
const ExperienceSection = () => {
useGSAP(()=>{
  gsap.utils.toArray('.timeline-card').forEach((card)=>{
     
    gsap.from(card,{
      xPercent: -100,
      opacity: 0,
      transformOrigin:"left left",
      duration: 1,
      ease:'power2.inOut',
      scrollTrigger:{
        trigger:card,
        start:'top 80%'
      }
    })
  })
  gsap.to('.timeline',{
    transformOrigin:'bottom bottom',
    ease:"power1.inOut",
    scrollTrigger:{
      trigger:".timeline",
      start:"top center",
      end:"70% center",
   
    onUpdate:(self)=>{
      gsap.set('.timeline',{
        scaleY: 1 - self.progress,
      })
    }
  }}
) 
  gsap.utils.toArray('.expText').forEach((text)=>{
     
    gsap.from(text,{
      xPercent: 0,
      opacity: 0,
      duration: 1,
      ease:'power2.inOut',
      scrollTrigger:{
        trigger:text,
        start:'top 60%'
      }
    })
  })
}

,[])
  return (
    <section id='#experience' className='w-full mt-20 md:mt-40 section-padding xl:px-0'>
      <div className="w-full h-full px-5 md:px-20">
        <TitleHeader title="Professional Work Experience "
         sub="MY Career overview"/>
         <div className="relative mt-32 ">
          <div className="relative space-y-10 z-4050 xl:space-y-32">
          {expCards.map((card,index)=>(
            <div className="exp-card-wrapper" key={index}>
              <div className="xl:w-2/6">
              <GlowCard card={card} index={index} >
                <div className="">
                  <img src={card.imgPath} alt={card.title} />
                </div>
              </GlowCard>
              </div>
              <div className="xl:w-4/6">
              <div className="flex items-start">
                <div className="timeline-wrapper">
                  <div className="timeline"/>

                  <div className='w-1 h-full gradient-line'/>
                </div>
                <div className="relative z-20 flex gap-5 expText xl:gap-20 md:gap-10">
                  <div className="timeline-logo">
                    <img src={card.logoPath} alt="logo" />
                  </div>
                  <div className="">
                    <h1 className='text-3xl font-semibold'>{card.title}</h1>
                    <p className='my-5 text-white-50'>{card.date}</p>
                    <p className='text-[#839cb5] italic'>Responsibilities</p>
                    <ul className='flex flex-col gap-5 list-disc ms-5 text-white-50'>{card.responsibilities.map((responsibilities)=>(
                      <li key={responsibilities} className='text-lg'>
                        {responsibilities}
                      </li>
                    ))}</ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}

          </div>
         </div>
      </div>
    </section>
  )
}

export default ExperienceSection
