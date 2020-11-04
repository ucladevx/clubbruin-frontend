import React, { useRef, useState, Suspense, useEffect, useKeyPress } from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import {Flex, Box} from 'react-three-flex'


export default function Player(props) {
  // keeps tracks of each individual player's position
  const playerPosition_x = useRef(props.x_position)
  const playerPosition_y = useRef(props.y_position)
  const isMovingRight = useRef(false);
  const isMovingLeft = useRef(false);
  const isMovingUp = useRef(false);
  const isMovingDown = useRef(false);
  // used to update the position
  const [playerPosition, setPlayerPosition] = useState();

  // event listeners
  useEffect(() => {
    window.addEventListener('keydown',function(e){
      switch (e.keyCode) {
        case 39:
          isMovingLeft.current = isMovingUp.current = isMovingDown.current = false;
          isMovingRight.current=true;
          break;
        case 37:
          isMovingRight.current = isMovingUp.current = isMovingDown.current = false;
          isMovingLeft.current = true;
          break;
        case 38:
          isMovingRight.current = isMovingLeft.current = isMovingDown.current = false;
          isMovingUp.current = true;
          break;
        case 40:
          isMovingRight.current = isMovingUp.current = isMovingLeft.current = false;
          isMovingDown.current = true;
          break;
          default:
        }
      })
  
    window.addEventListener('keyup', function(e) {
      switch (e.keyCode) {
        case 39:
          isMovingRight.current = false;
          break;
        case 37:
          isMovingLeft.current = false;
          break;
        case 38:
          isMovingUp.current = false;
          break;
        case 40:
          isMovingDown.current = false;
          break;
        default:
          }
      })
  
    })
    // updates player positioning
    useEffect(() => {
      if (isMovingRight.current===true) {
        playerPosition_x.current = playerPosition_x.current + .01;
      }
      else if (isMovingLeft.current === true) {
        playerPosition_x.current = playerPosition_x.current - .01;
      }
      else if (isMovingUp.current === true) {
        playerPosition_y.current = playerPosition_y.current + .03;
      }
      else if (isMovingDown.current === true) {
        playerPosition_y.current = playerPosition_y.current - .03;
      }
    })
    const player = useRef();
    useFrame(() => {
      setPlayerPosition({
        position: { x: playerPosition_x.current * 6, y: playerPosition_y.current * 2 },
      });
      
    });

    // Update the player's position from the updated state.
    useFrame(() => {
      player.current.position.y = playerPosition.position.y;
      player.current.position.x = playerPosition.position.x;
    });
  
  
    <Suspense fallback={<div>Loading... </div>}>
</Suspense>

    return (
      <group ref={player}>
          <mesh visible userData={{ test: "player" }} rotation={[0, 0, 0]} position={[0, 0, 0]} castShadow>
      {/* <sphereGeometry attach="geometry" args={[1, 16, 16]} /> */}
      <boxGeometry attach="geometry" args={[1, 1, .00001]} />
      <meshStandardMaterial color={ props.color } />
    </mesh>
      </group>

    );
  
}