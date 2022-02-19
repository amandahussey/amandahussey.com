import React, { useEffect, useRef, useState } from 'react';
import './Digame.scss';
import Ruler from './Ruler';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Digame(){

  const [count, setCount] = useState(2070);
  const [now, setNow] = useState(new Date());

  const [detailsEditable, setDetailsEditable] = useState(false);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const seconds = now.getSeconds();

  let saveText = 'Save';
  if(saving) saveText = 'Saving';
  else if(saved) saveText = 'Saved';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date())
    }, 1000);
    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    if(saved && saving) {
      setSaving(false);
    }
    if(!saving && saved){
      setTimeout(() => {
        setSaved(false);
      }, 1000)
    }
    console.log('saving', saving)
    console.log('saved', saved)
  }, [saving, saved])

  return (
    <div className='digame-container'>

      <div className='device-container'>
        <div className='device-info-container'>
          <div className='device-info-header'>

            <div className='device-info-main-details'>
              <h1>Digame Longmont</h1>
              <i 
                className="fa-solid fa-clock"
                style={{ color: 'white'}}
              />
              <p>UPTIME: 4d 3hr 24min {seconds}sec</p>
              <button style={{ marginLeft: 24 }}>
              <i 
                className="fa fa-refresh refresh"
                  onClick={() => { 
                    if(count) setCount(0)
                    else setCount(2070)
                  }}></i> Reboot
                </button>
            </div>

            <div className='device-info-details-container'>
              <p><b>Model:</b> <span contentEditable={detailsEditable}>DS-VC-LIDAR-WIFI-1</span><span className='device-info-description' contentEditable={detailsEditable}>(LoRa-WiFi Base Station)</span></p>
              <p><b>Software Version:</b> <span contentEditable={detailsEditable} style={{ marginLeft: 18 }}> <span>0.9.70</span></span></p>
              <p><b>File System Version:</b> <span contentEditable={detailsEditable}>0.9.70</span></p>
              <div 
                className='device-info-details-edit'
                onClick={() => {
                  setDetailsEditable(prev => !prev);
                }}
              >
                {!detailsEditable ? <i 
                  className="fa fa-edit"
                  style={{ color: 'black'}}
                /> :
                <i 
                  className="fa fa-check"
                  style={{ color: 'black'}}
                />}
                </div>
            </div>

          </div>

          

        </div>

        <div className='counter-container'>
          <h1>{count}</h1>
          <h6><i 
              className="fa fa-car"
              style={{ color: 'darkgreen'}}
              ></i> vehicles</h6>
            <div className='clear-counter-container'>
              <i 
                className="fa fa-ban refresh"
                onClick={() => { 
                  if(count) setCount(0)
                  else setCount(2070)
                }}></i>
            </div>
        </div>

        <div className='measurement-container'>
          <h1>Measured Distance</h1>
          <Ruler />
          <h1>999cm</h1>
        </div>

        <div className='counter-params-container'>
          <h2>Counter Parameters</h2>
          <div className='counter-params-param-container'>
            <h5>Counter #</h5>
            <h5>Counter Population</h5>
            <h5>Det. Thresh. (1-100%)</h5>
            <h5>Lane 1</h5>
            <input type="range" min="1" max="100" value="50"></input>
            <h5>Lane 2</h5>
            <input type="range" min="1" max="100" value="50"></input>
          </div>
        </div>

        <div className='device-actions'>
            <button 
              className='save-button'
              onClick={() => {
                console.log('here')
                setSaving(true);
                setTimeout(() => {
                  setSaving(false);
                  setSaved(true);
                }, 1000)
              }}
            >
              {saveText}
              {saved && <i 
                className="fa fa-check"
                style={{ color: 'white'}}
              />}
              {saving && <i 
                className="fa fa-spinner"
                style={{ color: 'white'}}
              />}
              </button>
            <div>
              <h4>Logging to SD Card:</h4>
              <div className='device-action'>
                Reboot Events
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label>
              </div>

              <div className='device-action'>
                Heartbeat Events
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label>
              </div>

              <div className='device-action'>
                Vehicle Events
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label>
              </div>

            </div>

            <div>
              <h4>Other:</h4>
              <div className='device-action'>
                USB Streaming
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
           
          </div>
        
      </div>
    </div>
  )
}

export default Digame;