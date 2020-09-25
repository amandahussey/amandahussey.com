import React, { Component } from 'react';
import './SwingingChain.css';

const SwingingChain = (props) => {
  
    return (
        <div className={`chain-container ${ props.isPullingChain ? 'animate-pull-chain' : '' }`} onClick={props.handlePullChain}>

        <div className="chandelier-holder">
      
          <div className="chain first-chains very-first-chain">
            <div className="chain first-chains">
              <div className="chain first-chains">
                <div className="chain first-chains">
                  <div className="chain first-chains">
                    <div className="chain first-chains">
                      <div className="chain first-chains">
                        <div className="chain first-chains">
                          <div className="chain first-chains">
                            <div className="chain first-chains">
                              <div className="chain first-chains">
                                <div className="chain first-chains">
                                  <div className="chain first-chains">
                                    <div className="chain first-chains">
                                      <div className="chain">
                                        <div className="chain">
                                          <div className="chain">
                                            <div className="chain">
                                              <div className="chain">
                                                <div className="chain">
                                                  <div className="chain">
                                                    <div className="chain">
                                                      <div className="chain">
                                                        <div className="chain">
                                                          <div className="chain">
                                                            <div className="chain">
                                                              <div className="chain">
                                                                <div className="chain">
                                                                  <div className="chain">
                                                                    <div className="chain">
                                                                      <div className="chain">
                                                                        <div className="chain chandelier"></div>
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
