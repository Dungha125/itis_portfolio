"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
var StarBackground = function (props) {
    var ref = useRef();
    var sphere = useState(function () {
        return random.inSphere(new Float32Array(5000), { radius: 1.2 });
    })[0];
    useFrame(function (state, delta) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    return (<group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
            <PointMaterial transparent color="$fff" size={0.002} sizeAttenuation={true} dethWrite={false}/>
        </Points>
    </group>);
};
var StarsCanvas = function () { return (<div className="w-full h-auto fixed inset-0 z-20">
        <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>); };
export default StarsCanvas;
