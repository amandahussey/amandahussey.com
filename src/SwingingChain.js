import React, { Component } from 'react';
import chainSvgLink from './chain.svg';
import chainPullSvgLink from './chain-pull.svg'
import './SwingingChain.css';

const SwingingChain = (props) => {

    const { isPullingChain, triggerChainWiggle } = props

    let animationClass = ''
    if(isPullingChain) animationClass = 'animate--chain-pull'
    else if(triggerChainWiggle) animationClass = 'animate--chain-wiggle'
  
    return (
        <div className={`chain-container ${ animationClass }`} onClick={props.handleChainPull}>

        <div className="chandelier-holder">
      
          <div className="chain first-chains very-first-chain" style={{ backgroundImage: `url(${chainSvgLink})` }}>
            <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
              <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                  <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                    <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                      <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                        <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                          <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                            <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                              <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                                <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                                  <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                                    <div className="chain first-chains" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                                      <div className="chain" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                                        <div className="chain" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                                          <div className="chain" style={{ backgroundImage: `url(${chainSvgLink})` }}>
                                            <div className="chain" style={{ backgroundImage: `url(${chainSvgLink})` }}>            
                                                <div className="chain chandelier" style={{ backgroundImage: `url(${chainPullSvgLink})` }}></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
        
      </div>
    );
}

export default SwingingChain;
