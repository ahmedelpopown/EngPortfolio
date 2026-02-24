import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { LaravelModel } from "./LaravelModel"

 
const ContainerLaravel = () => {
  return (
       <Canvas>
        <Suspense fallback="loading...">
          <Stage environment="night" intensity={0.5}>
    
          <LaravelModel/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate/>
          <PerspectiveCamera position={[1,0,1]} zoom={0.5} makeDefault />
        </Suspense>
       </Canvas>
  )
}

export default ContainerLaravel
