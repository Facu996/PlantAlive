import React from 'react'
import './top.css'

//*******Import icons*******

import { BiSearchAlt } from 'react-icons/bi'
import { BiCart } from 'react-icons/bi'
import { BiUser} from 'react-icons/bi'
import { BsArrowRightShort } from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'

//*******Import image*******

//import user from '../../../assets/Dave.jpg'
import video from '../../../assets/video01.mp4'
import pvz from '../../../assets/PvZ01.png'
import b0 from '../../../assets/B01.gif'


const Top = () => {
  return (
    <div className='top_section'>

      <div className='header_section flex'>
        <div className='title'>
          <h1>Bienvenido a <span className='part_one'>Plant</span><span className='part_two'>Alive</span></h1>
          {/*<p>Hola Dave, bienvenido de nuevo!</p>*/}
          <h1 className='create'>Crea y vende proteccion para jardines</h1>
          <p className='create_p'>Encuentra la mejor forma de protegerte contra los zombies!</p>
        </div>
        
          <div>
            <img src={b0} alt="" />
          </div>
        <div className='search_bar flex'>
          <input type="text" placeholder='' />
          <BiSearchAlt className='icon' />
        </div>

        <div className='admin_div flex'>
          <BiCart className='icon' />
          <BiUser className='icon' />
          {/*<div className='admin_image'>
            <img src={user} alt="admin image" />
            </div>*/}
        </div>
      </div>

      <div className='card_section flex'>

        <div className='right_card flex'>
    
          {/*<div className='buttons flex'>
            <button className='btn'>Explora mas</button>
            <button className='btn transparent'>Lo mas vendido</button>
          </div>*/}
          <div className='video_div'>
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        
        <div className='left_card flex'>
          <div className='main flex'>

            <div className='text_div'>
              <h1>Mis estadisticas</h1>

              <div className='flex'>
                <span>
                  Hoy<br /> <small>4 ordenes</small>
                </span>
                <span>
                  Este mes <br /> <small>127 ordenes</small>
                </span>
              </div>
            
              <span className='flex link'>
                Ver mis pedidos<BsArrowRightShort className='icon'/>
              </span>
            </div>
            
            <div className='img_div'>
              <img src={pvz} alt="image name" />
            </div>

            
          {/*<div className='sideBar_card'>
        <BsQuestionCircle className='icon' />
        <div className='card_content'>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>Centro de ayuda</h3>
          <p>Si tiene problemas en la Planti, contáctenos para más preguntas</p>
          <button className='btn'>Ir al centro de ayuda</button>
        </div>
        </div>*/}

          </div>
      </div>
      </div>
    </div>
  )
}

export default Top