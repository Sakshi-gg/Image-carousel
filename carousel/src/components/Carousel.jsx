import React, { useState } from 'react'
import photo1 from "../images/photo-1.webp"
import photo2 from "../images/photo-2.webp"
import photo3 from "../images/photo-3.webp"
import photo4 from "../images/photo-4.webp"
import photo5 from "../images/photo-5.webp"
import {FaWhatsapp} from "react-icons/fa"

function Carousel() {
const [index,setIndex]=useState(0)


 
    let data=[{
        id:1,
        url:photo1
    },

    {
        id:2,
        url:photo2
    },
    {
        id:3,
        url:photo3
    },

    {
        id:4,
        url:photo4
    },
    {
        id:5,
        url:photo5
    }


]
let eachimg=[data[index]];

let prvHandler=()=>{
    if(index<=1){
        setIndex(data.length)
    }
      setIndex((prv)=>prv-1)
}
let nxtHandler=()=>{
    if(index>=data.length-1){
        setIndex(-1)
    }
      setIndex((nxt)=>nxt+1)
}



  return (
    
    <div className='main' >
        <h1 className='title'>Welcome to Image carousel</h1>
        {
            eachimg.map((item)=>(
                <img className='img' src={item.url} alt="" width={500} height={400} />
            ))
        }
<div className='btn'>
        <button  onClick={prvHandler} >prv</button> 
        <button onClick={nxtHandler}>nxt</button>
        </div>
        <div className='t'>
        <h2 ><i> For more info follow us:-</i> </h2>
        </div>
        <div>
            <footer className='foot'>
            
                <img  src="https://voermans-cillekens.nl/wp-content/uploads/2021/01/whatsapp-icon.png" alt=""  width={45} height={45} />
               <img src="https://freepngimg.com/thumb/logo/70029-logo-media-instagram-jpeg-social-free-frame.png" alt="" width={70} height={45}  />
                <img src="https://cdn.techgyd.com/50-Best-Facebook-Logo-Icons-GIF-Transparent-PNG-Images-9.png" alt="" width={45} height={45} />
                <img src="https://pngimg.com/uploads/youtube/youtube_PNG102354.png" alt="" width={50} height={50}/>
                <img src="https://1.bp.blogspot.com/-bgBmwKFJEGs/X6jwWpx4E3I/AAAAAAAAAe8/rQFOHYQ3zQ4ivGEKDf_oX_2NE0UTpb4JgCLcBGAsYHQ/s2048/Logo-Snapchat.png" alt="" width={45} height={45} />
            </footer>

            <footer>
                <div>
              <FaWhatsapp></FaWhatsapp>
              </div>
            </footer>
        </div>
    </div>
    
  )
}

export default Carousel
