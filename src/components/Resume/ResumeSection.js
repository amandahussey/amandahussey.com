import React from 'react';

const ResumeSection = ({ 
  title,
  company,
  technologies,
  introPhrase,
  paragraphs,
}) => {
  return (
    <div className='resume-section'>
      <div className='resume-section__header'>
          <h1><span>{title}</span> <span>@ {company}</span></h1>
      </div>
      <p className='resume-section__technologies-used'>
          {technologies.map(tech => <span>[ {tech} ]</span>)}
      </p>

      <div className='resume-section__description'>
          <div className='resume-section__description__greatest-moment'>{introPhrase}</div>
          <div className='resume-section__description__paragraph'>
              {paragraphs.map(paragraphText => <p>{paragraphText}</p>)}
          </div>
      </div>
  </div>
  )
}

export default ResumeSection;