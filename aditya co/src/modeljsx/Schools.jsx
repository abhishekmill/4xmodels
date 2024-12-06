/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Schools.glb --transform --shadows --keepmaterials --keepmeshes --keepnames 
Files: Schools.glb [40.95MB] > C:\Users\abhishek\Desktop\dri proj\DRI-Gamified-Final\public\Schools-transformed.glb [6.11MB] (85%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Schools(props) {
  const { nodes, materials } = useGLTF('/Schools-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.building_base_road_0.geometry} material={materials.base_road} position={[38.386, 0.199, 110.012]} rotation={[0, Math.PI / 2, 0]} scale={0.111} />
      <mesh castShadow receiveShadow geometry={nodes.Cube153.geometry} material={nodes.Cube153.material} position={[50.095, 7.242, 106.519]} rotation={[0, -Math.PI / 2, 0]} scale={0.799} />
      <mesh castShadow receiveShadow geometry={nodes.Cube289.geometry} material={materials['Walls.004']} position={[57.798, 0.565, 88.066]} rotation={[0, Math.PI / 2, 0]} scale={[3.763, 0.75, 0.216]} />
      <group position={[42.549, 26.165, 102.626]} rotation={[-Math.PI / 2, -0.436, Math.PI / 2]} scale={[2.564, 0.64, 2.564]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder009.geometry} material={materials['LIGHT BLUE']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder009_1.geometry} material={materials.GREY} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder009_2.geometry} material={materials.VIOLET} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder009_3.geometry} material={materials.SCREEN} />
      </group>
      <group position={[42.549, 26.165, 102.626]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[2.564, 0.64, 2.564]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder017.geometry} material={materials['Material.021']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder017_1.geometry} material={materials['Material.022']} />
      </group>
      <group position={[44.035, 1.757, 102.494]}>
        <mesh castShadow receiveShadow geometry={nodes.Lowpoly_Tree_07_Material_0003.geometry} material={materials['Material.019']} />
        <mesh castShadow receiveShadow geometry={nodes.Lowpoly_Tree_07_Material_0003_1.geometry} material={materials['Material.020']} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Text013.geometry} material={materials['Material.018']} position={[50.411, 8.519, 114.03]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={3.037} />
      <group position={[70.337, 5.153, 88.222]} rotation={[0, Math.PI / 2, 0]} scale={0.008}>
        <mesh castShadow receiveShadow geometry={nodes['01_01_0001_1'].geometry} material={materials['material.007']} />
        <mesh castShadow receiveShadow geometry={nodes['01_01_0001_2'].geometry} material={materials.material_1} />
      </group>
      <group position={[59.027, 5.074, 62.672]} rotation={[-Math.PI, 1.516, -Math.PI]} scale={[5.309, 5.309, 4.002]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_0009.geometry} material={materials['Old_White_Paint.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_0009_1.geometry} material={materials['Marble_tiles_10.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_0009_2.geometry} material={materials['Marble_tiles_9.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_0009_3.geometry} material={materials['Marble_yellow.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_0009_4.geometry} material={materials['WHITE.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_0009_5.geometry} material={materials['Rough_Cast_Steel.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_0009_6.geometry} material={materials['Basic_glass.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_0009_7.geometry} material={materials['egq1x3y8lyy21.001']} />
      </group>
      <group position={[52.187, -0.034, 77.251]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.004}>
        <mesh castShadow receiveShadow geometry={nodes.Object_3001.geometry} material={materials.lambert12SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3001_1.geometry} material={materials.initialShadingGroup} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3001_2.geometry} material={materials.lambert10SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3001_3.geometry} material={materials.lambert11SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3001_4.geometry} material={materials.lambert2SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3001_5.geometry} material={materials.lambert3SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3001_6.geometry} material={materials.lambert5SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3001_7.geometry} material={materials.phong1SG} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3001_8.geometry} material={materials.phong2SG} />
      </group>
      <group position={[63.018, 23.678, 77.564]} rotation={[Math.PI / 2, 0.262, 0]} scale={[0.03, 0.014, 0.03]}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh325.geometry} material={materials['Material.021']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh325_1.geometry} material={materials['Material.022']} />
      </group>
      <group position={[63.018, 23.678, 77.564]} rotation={[Math.PI / 2, 0.262, 0]} scale={[0.03, 0.014, 0.03]}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh139.geometry} material={materials['VIOLET.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh139_1.geometry} material={materials['LIGHT BLUE.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh139_2.geometry} material={materials['GREY.002']} />
      </group>
      <group position={[69.087, 3.701, 92.701]} scale={[-0.181, 0.181, 0.181]}>
        <mesh castShadow receiveShadow geometry={nodes.Spline004.geometry} material={materials['Buildings City_mat_2_2_10.000']} />
        <mesh castShadow receiveShadow geometry={nodes.Spline004_1.geometry} material={materials['Buildings City_mat_0_0_22.000']} />
        <mesh castShadow receiveShadow geometry={nodes.Spline004_2.geometry} material={materials['Buildings City_mat_3_3_3.000']} />
        <mesh castShadow receiveShadow geometry={nodes.Spline004_3.geometry} material={materials['Buildings City_mat_1_1_37.000']} />
      </group>
      <group position={[94.172, -0.116, 57.497]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[0.042, 0.039, 0.034]}>
        <mesh castShadow receiveShadow geometry={nodes.Line001_Wall_0_1.geometry} material={materials.Wall} />
        <mesh castShadow receiveShadow geometry={nodes.Line001_Wall_0_2.geometry} material={materials.Wall3} />
        <mesh castShadow receiveShadow geometry={nodes.Line001_Wall_0_3.geometry} material={materials['Roof.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Line001_Wall_0_4.geometry} material={materials.Wall2} />
        <mesh castShadow receiveShadow geometry={nodes.Line001_Wall_0_5.geometry} material={materials.Atlas} />
        <mesh castShadow receiveShadow geometry={nodes.Line001_Wall_0_6.geometry} material={materials.Alpha} />
      </group>
      <group position={[92.868, 24.446, 68.089]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.064}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh154.geometry} material={materials['Material.021']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh154_1.geometry} material={materials['Material.022']} />
      </group>
      <group position={[92.868, 24.446, 68.089]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.064}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh326.geometry} material={materials.GREY} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh326_1.geometry} material={materials.lightblue} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh326_2.geometry} material={materials.violet} />
      </group>
      <group position={[30.097, 0.318, 30.322]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={16.778}>
        <mesh castShadow receiveShadow geometry={nodes.Field_Grass_0_1.geometry} material={materials['Grass.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Field_Grass_0_2.geometry} material={materials['White.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Field_Grass_0_3.geometry} material={materials['Dirt.001']} />
      </group>
      <group position={[20.803, 0, 56.182]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.007}>
        <mesh castShadow receiveShadow geometry={nodes.Plane034_blue_0_1.geometry} material={materials.blue} />
        <mesh castShadow receiveShadow geometry={nodes.Plane034_blue_0_2.geometry} material={materials['white.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane034_blue_0_3.geometry} material={materials['black.012']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane034_blue_0_4.geometry} material={materials['gray.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane034_blue_0_5.geometry} material={materials.blue2} />
        <mesh castShadow receiveShadow geometry={nodes.Plane034_blue_0_6.geometry} material={materials.purple2} />
      </group>
      <group position={[64.126, 0.201, 23.663]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[3.786, 2.15, 0.576]}>
        <mesh castShadow receiveShadow geometry={nodes.Soccer_Field_1001.geometry} material={materials['Green.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Soccer_Field_1001_1.geometry} material={materials['White.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Soccer_Field_1001_2.geometry} material={materials['material.008']} />
        <mesh castShadow receiveShadow geometry={nodes.Soccer_Field_1001_3.geometry} material={materials['Black_metal.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Soccer_Field_1001_4.geometry} material={materials['Metal.001']} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Apartment1_BaseMaterial_0016.geometry} material={materials['BaseMaterial.004']} position={[21.278, 1.753, 92.006]} />
      <mesh castShadow receiveShadow geometry={nodes.House017.geometry} material={materials['World ap.004']} position={[15.078, 1.716, 87.487]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.Plane022.geometry} material={materials['Material.024']} position={[56.179, -0.224, 62.794]} rotation={[-Math.PI, 0, -Math.PI]} scale={[49.2, 50.209, 56.114]} />
      <group position={[14.051, -3.115, 112.269]} rotation={[0, Math.PI / 2, 0]} scale={0.164}>
        <mesh castShadow receiveShadow geometry={nodes.Cube497.geometry} material={materials['black.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube497_1.geometry} material={materials['WHITE.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Schools-transformed.glb')
