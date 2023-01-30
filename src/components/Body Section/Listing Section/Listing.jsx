import React from 'react'
import './listing.css'

//*******Import icons*******

import {BsArrowRightShort } from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'

//*******Import image*******

import pvz01 from '../../../assets/PvZ1.png'
import pvz02 from '../../../assets/PvZ2.png'
import pvz03 from '../../../assets/PvZ3.png'
import pvz04 from '../../../assets/PvZ4.png'
import pvz05 from '../../../assets/PvZ5.png'
import pvz06 from '../../../assets/PvZ6.png'
import pvz07 from '../../../assets/PvZ7.png'
import pvz08 from '../../../assets/PvZ8.png'
import pvz09 from '../../../assets/PvZ9.png'
import pvz10 from '../../../assets/PvZ10.png'
import pvz11 from '../../../assets/PvZ11.png'
import pvz12 from '../../../assets/PvZ12.png'
import zom4 from '../../../assets/Zom4.jpg'
import zom3 from '../../../assets/Zom3.jpg'
import zom1 from '../../../assets/Zom1.jpg'
import zom5 from '../../../assets/Zom5.jpg'
import zom6 from '../../../assets/Zom6.jpg'
import zom7 from '../../../assets/Zom7.jpg'
import zom8 from '../../../assets/Zom8.jpg'
import zom9 from '../../../assets/Zom9.jpg'

const Listing = () => {
  return (
    <div className='listing_section'>

      <div className='heading flex'>
        <h1>Mi listado</h1>
        <button className='btn flex'>Ver todo <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className='sec_container flex'>
        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz01} alt="image name" />
          <h3>Coltapulta</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz02} alt="image name" />
          <h3>Hielaguisantes</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz03} alt="image name" />
          <h3>Birasol</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz04} alt="image name" />
          <h3>Seta solar</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz05} alt="image name" />
          <h3>Carroñivora</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz06} alt="image name" />
          <h3>Lanzaguisantes</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz07} alt="image name" />
          <h3>Desesporada</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz08} alt="image name" />
          <h3>Nuez</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz09} alt="image name" />
          <h3>Marseta</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz10} alt="image name" />
          <h3>Hinoseta</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz11} alt="image name" />
          <h3>Marseta</h3>
        </div>

        <div className='single_item'>
          <AiOutlineHeart className='icon' />
          <img src={pvz12} alt="image name" />
          <h3>Marseta</h3>
        </div>

      </div>

      <div className='destroyers flex'>

        <div className='top_destroyers'>
          <div className='heading flex'>
            <h3>Destructores</h3>
            <button className='btn flex'>
              Ver todos
              <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={zom4} alt="user image" />
              <img src={zom3} alt="user image" />
              <img src={zom1} alt="user image" />
              <img src={zom5} alt="user image" />
            </div>
            <div className='card_text'>
              <span>
                19.556 Plantas mordidas <br />
                <small>
                  243 destruidas <span className='date'>7 dias</span>
                </small>
              </span>
            </div>
          </div>
        </div>
         <div className='feature_destroyers'>
          <div className='heading flex'>
            <h3>Futuros destructores</h3>
            <button className='btn flex'>
              Ver todos
              <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={zom6} alt="user image" />
              <img src={zom7} alt="user image" />
              <img src={zom8} alt="user image" />
              <img src={zom9} alt="user image" />
            </div>
            <div className='card_text'>
              <span>
                45.220 Plantas mordidas <br />
                <small>
                  459 Destruidas <span className='date'>23 dias</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing