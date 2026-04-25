import React from 'react'
import PrintIMage from './PrintIMage';
import VideoPlayer from './VideoPlayer';
const container = ({dinga,dingi,fun}) => {
  return (
    <div>
        <aside>
            <article>
                <VideoPlayer max={dingi}></VideoPlayer>
            </article>
            <article>
                {
                    dinga.map((lio)=>{
                        console.log(lio);
                        return <PrintIMage fun={fun} lio={lio}> </PrintIMage>
                        
                    })
                }
            </article>
        </aside>
    </div>
  )
}

export default container