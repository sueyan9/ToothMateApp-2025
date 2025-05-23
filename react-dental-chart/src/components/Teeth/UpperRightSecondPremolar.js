import React, { useRef, Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useGLTF } from '@react-three/drei'

const CameraController = () => {
  const { camera, gl } = useThree()

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    controls.minDistance = 3
    controls.maxDistance = 4
    return () => {
      controls.dispose()
    }
  }, [camera, gl])
  return null
}

const RightUpperSecondPremolar = ({ ...props }) => {
  const group = useRef()

  const { nodes, materials } = useGLTF('/assets/Right_Upper_Second_Premolar.glb')
  useEffect(() => {
    // Color coding for different materials
    if (materials['1']) materials['1'].color.set('lightgreen') // Healthy
    if (materials['2']) materials['2'].color.set('red') // Cavity
    if (materials['3']) materials['3'].color.set('orange') // Filling
    if (materials['4']) materials['4'].color.set('gray') // Crown
    // Repeat the above for other materials as necessary
  }, [materials])

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -1.23, 0]} rotation={[Math.PI / 2, 0, 0.04]} scale={0.54}>
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_4.geometry}
          material={materials['1']}
          material-color={'lightgreen'}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_5.geometry}
          material={materials['2']}
          material-color={'lightgreen'}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_1.geometry}
          material={materials['3']}
          material-color={'lightgreen'}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_6.geometry}
          material={materials['4']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_7.geometry}
          material={materials['5']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_8.geometry}
          material={materials['6']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_9.geometry}
          material={materials['7']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_10.geometry}
          material={materials['8']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_11.geometry}
          material={materials['9']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_12.geometry}
          material={materials['10']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_13.geometry}
          material={materials['11']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_14.geometry}
          material={materials['12']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_15.geometry}
          material={materials['13']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_16.geometry}
          material={materials['14']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_17.geometry}
          material={materials['15']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_18.geometry}
          material={materials['16']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_19.geometry}
          material={materials['17']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_20.geometry}
          material={materials['18']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_21.geometry}
          material={materials['19']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_22.geometry}
          material={materials['20']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_23.geometry}
          material={materials['21']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_24.geometry}
          material={materials['22']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_25.geometry}
          material={materials['23']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_26.geometry}
          material={materials['24']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_27.geometry}
          material={materials['25']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_28.geometry}
          material={materials['26']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_29.geometry}
          material={materials['27']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_30.geometry}
          material={materials['28']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_2.geometry}
          material={materials['29']}
        />
        <mesh
          geometry={nodes.Human_Teeth_Upper_Second_Premolar_Geo004_3.geometry}
          material={materials['30']}
        />
      </group>
    </group>
  )
}

export const UpperRightSecondPremolar = () => {
  return (
    <>
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.7} />
        <spotLight intensity={1} angle={0.2} penumbra={1} position={[10, 15, 10]} />
        <Suspense fallback={null}>
          <RightUpperSecondPremolar />
        </Suspense>
      </Canvas>
      <div style={{ padding: '1rem' }}>
        <h3>Tooth Color Legend</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <span style={{ display: 'inline-block', width: 20, height: 20, backgroundColor: 'lightgreen', marginRight: 10 }} />
            Healthy
          </li>
          <li>
            <span style={{ display: 'inline-block', width: 20, height: 20, backgroundColor: 'red', marginRight: 10 }} />
            Cavity
          </li>
          <li>
            <span style={{ display: 'inline-block', width: 20, height: 20, backgroundColor: 'orange', marginRight: 10 }} />
            Filling
          </li>
          <li>
            <span style={{ display: 'inline-block', width: 20, height: 20, backgroundColor: 'gray', marginRight: 10 }} />
            Crown
          </li>
        </ul>
      <div>Clicked on upper right second premolar</div>
      </div>
    </>
  )
}
