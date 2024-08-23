'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bounds, Center, Environment, Text, useTexture } from '@react-three/drei'
import { easing } from 'maath'

function CameraRig({ children }: { children: React.ReactElement }) {
    const group = useRef<any>()
    useFrame((state, delta) => {
        if(group?.current?.rotation) {
            easing.dampE(group.current.rotation, [state.pointer.y / 20, -state.pointer.x / 1, 0], 0.35, delta)
        }
    })

    return <group ref={group}>{children}</group>
}

function Mesh() {
    const texture = useTexture('https://sample2.planetart.com/preview/8-54176-11-663-663-2024-dcpRoundCorner-re0.jpg')
    return <mesh scale={window.screen.width < 768 ? 5 : 3} castShadow>
        <boxGeometry args={[200, 300, 4]}/>
        <meshStandardMaterial color={'rgb(255, 255, 255)'} map={texture} roughness={1.5}/>
    </mesh>
}

export default function Card() {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }} shadows='basic' dpr={3}>
            <CameraRig>
                <Center>
                    <Bounds fit clip observe>
                        <Mesh/>
                        <Text
                            fontSize={15}
                            color="#000" 
                        >
                            ¡Hola Mundo!
                        </Text>
                    </Bounds>
                </Center>
            </CameraRig>
            <Environment preset='studio' />
        </Canvas>
    )
}
