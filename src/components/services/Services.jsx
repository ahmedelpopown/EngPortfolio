import ContainerModelComputer from "./computer/ContainerModelComputer" 

import Counter from "./Counter"
import ContainerLaravel from "./laravel/ContainerLaravel"
import ContainerModelReact from "./react/ContainerModelReact"
import { motion, useInView } from "motion/react"
import { useRef, useState, useCallback } from "react"

import "./services.css"
// Move variants outside component to prevent recreation on every render
const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

// Move service array outside component to prevent recreation
const SERVICES = [
  {
    id: 1,
    img: "/service1.png",
    title: "web Development",
    counter: 35
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Frontend",
    counter: 23
  },
  {
    id: 3,
    img: "/service3.png",
    title: "backend",
    counter: 46
  },
];
 
const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  // Memoize click handler to prevent recreation on every render
  const handleServiceClick = useCallback((id) => {
    setCurrentServiceId(id);
  }, []);

  // Memoize service icon background color
  const getServiceIconBg = useCallback((id) => {
    if (id === 1) return "bg-[#dd4c62]";
    if (id === 2) return "bg-[#025656]";
    return "bg-[#6c5c0c]";
  }, []);
  
  return (
    <div className="services flex h-full justify-around overflow-hidden mx-[15%]" ref={ref}>
      
       <div className="aSection left w-[50%] flex flex-col justify-center">
        
        
<motion.h1 variants={textVariants} animate={isInView ? "animate" : "initial"}
 className="sTitle text-[80px] mb-[24px]"  >How Do I help?</motion.h1>
        
        
       <motion.div 
       variants={listVariants}
          animate={isInView ? "animate" : "initial"}
       className="serviceList flex flex-col gap-[16px]">
        {SERVICES.map((service) => (
                
            <motion.div  
             variants={listVariants}
              className="service  w-[50%] p-[30px] rounded-[20px] bg-[#2f213f] flex cursor-pointer items-center gap-[16px]" 
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              >
              
              
            <div className={`${getServiceIconBg(service.id)} serviceIcon  w-[48px] h-[48px] rounded-full flex items-center justify-center`}>
              <img src={service.img} alt=""  className="w-[24px] h-[24px]"/>
            </div>
            
            <div  className="serviceInfo">
              <h2 className="text-[10px] font-[500] mb-[8px]">{service.title}</h2>
              <h3 className="text-[13px] font-[300]">{service.counter } Projects</h3>
            </div>
        </motion.div>
          ))}  
       </motion.div>
       
          <div className="counterList w-[50%] flex items-center justify-between mt-[20px]">
            <Counter from={0} to={104} text="Projects Completed"/>
            <Counter from={0} to={72} text="Happy Clients"/>
          </div>
       </div>
       
        <div className=" aSection right w-[50%] flex flex-col justify-center"> 
          {
            currentServiceId ===1 ?(<ContainerModelComputer/> ) : currentServiceId===2 ?(<ContainerModelReact/>) : <ContainerLaravel/>
          }
          </div>
    </div>
  )
}

export default Services
