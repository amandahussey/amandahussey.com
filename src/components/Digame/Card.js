import React, { useState, useEffect } from 'react';

import './Card.scss'

function Card({
  header,
  contents,
}) {

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  let saveText = 'Save';
  if(saving) saveText = 'Saving';
  else if(saved) saveText = 'Saved';

  useEffect(() => {
    if(saved && saving) {
      setSaving(false);
    }
    if(!saving && saved){
      setTimeout(() => {
        setSaved(false);
      }, 1000)
    }
  }, [saving, saved])

  return (
    <div className='digame-card'>
      <h2>{header}</h2>
      <div className='digame-card-contents-container'>
        {contents}
        <button 
          className='digame-save-button'
          onClick={() => {
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
      </div>
      
    </div>
  )
}

export default Card;