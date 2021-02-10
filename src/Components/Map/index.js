import React, {useContext} from 'react';
import Scene from './Scene'
import {UsernameContext} from '../../UsernameContext'
import Draggable from 'react-draggable';
import Chat from '../ChatApp/Index'
import {useHistory} from 'react-router-dom'
import NavComponent from '../NavComponent';


export default function Map (props) {
  const history = useHistory()
  return (
    <div className="map"
      style={{
        overflow: 'none'
      }}
    >
        <Scene username = {props.username} room={props.room}/>
        <Draggable
          // axis="x"
          handle=".handle"
          defaultPosition={{x:0, y: -450}}
          position={null}
          grid={[25, 25]}
          scale={1}
          >
          <div style={{
            position: 'absolute'
          }}>
            {/* <div className="handle" style={{
              width: '400px',
              background: 'white'
            }}>Drag from here</div> */}
            {/* <div style={{color: 'white'}}>This readme is really dragging on...</div> */}
            {/* <Chat/> */}
          </div>
        </Draggable>
        <div style={{
          position: 'absolute',
          zIndex: 50,
          right: 50,
          bottom: 0,
          width: 250,
          height: 0}}>
            <NavComponent />
        </div>
        {/* <button style={{
          position: 'absolute',
          zIndex: 50,
          right: 50,
          bottom: 50,
          width: 250,
          height: 100
        }} onClick={() => {
          history.push('/fishgame')
        }}>
          Play the fish game
        </button> */}

        <button style={{
          position: 'absolute',
          zIndex: 50,
          right: 50,
          top: 50,
          width: 250,
          height: 100
        }} onClick={() => {
          history.push('/fishgame')
        }}>
          Play the fish game
        </button>
    </div>
  );
}