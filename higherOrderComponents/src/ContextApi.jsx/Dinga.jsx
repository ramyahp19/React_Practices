import React from 'react'
import { ContextApi } from './ContextApi';

const Dinga = () => {
  return (
    <div>
        <ContextApi.Consumer>
            {
                (max)=>{
                    console.log(max);
                    
                }
            }
        </ContextApi.Consumer>
    </div>
  )
}

export default Dinga