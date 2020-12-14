import React, {useContext} from 'react';
import Scene from './Scene'
import {UsernameContext} from '../../UsernameContext'
import Draggable from 'react-draggable';
import Chat from '../ChatApp'
import {useHistory} from 'react-router-dom'


export default function Map() {
  const {user} = useContext(UsernameContext)
  const history = useHistory()
  return (
            <div className="map"
              style={{
                overflow: 'none'
              }}
            >
                <Scene username = {user}/>
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
                    <div className="handle" style={{
                      width: '400px',
                      background: 'white'
                    }}>Drag from here</div>
                    {/* <div style={{color: 'white'}}>This readme is really dragging on...</div> */}
                    <Chat/>
                  </div>
                </Draggable>
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
