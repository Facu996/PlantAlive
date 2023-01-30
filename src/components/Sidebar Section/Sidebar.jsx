import React from 'react'
import './sidebar.css'

//*******Import image*******

import logo from '../../assets/logo.jpg'

//*******Import icons*******

import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import { BsCreditCard2Front } from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      
      <div className='logoDiv flex'>
        <img src={logo} alt="image name" />
        <h2>Plant<span className='part_two'>Alive.</span></h2>
      </div>

      <div className='menu_div'>
        <h3 className='div_title'>
          MENÚ RÁPIDO
        </h3>
        <ul className='menu_lists grid'>
          <li className='list_item'>
            <a href="#" className='menu_link flex'>
              <IoMdSpeedometer className='icon' />
              <span className='small_text'>
                Tablero
              </span>
            </a>
          </li> 

            <li className='list_item'>
            <a href="#" className='menu_link flex'>
              <MdDeliveryDining className='icon' />
              <span className='small_text'>
                Mis ordenes
              </span>
            </a>
          </li> 

            <li className='list_item'>
            <a href="#" className='menu_link flex'>
              <MdOutlineExplore className='icon' />
              <span className='small_text'>
                Explorar
              </span>
            </a>
          </li> 

            <li className='list_item'>
            <a href="#" className='menu_link flex'>
              <BsTrophy className='icon' />
              <span className='small_text'>
                Productos
              </span>
            </a>
          </li>
        </ul>
      </div>
      
            <div className='settings_div'>
        <h3 className='div_title'>
          AJUSTES
        </h3>
        <ul className='menu_lists grid'>
          <li className='list_item'>
            <a href="#" className='menu_link flex'>
              <AiOutlinePieChart className='icon' />
              <span className='small_text'>
                Gráficos
              </span>
            </a>
          </li> 

            <li className='list_item'>
            <a href="#" className='menu_link flex'>
              <BiTrendingUp className='icon' />
              <span className='small_text'>
                Tendencias
              </span>
            </a>
          </li> 

            <li className='list_item'>
            <a href="#" className='menu_link flex'>
              <MdOutlinePermContactCalendar className='icon' />
              <span className='small_text'>
                Contacto
              </span>
            </a>
          </li> 

            <li className='list_item'>
            <a href="#" className='menu_link flex'>
              <BsCreditCard2Front className='icon' />
              <span className='small_text'>
                Facturación
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className='sideBar_card'>
        <BsQuestionCircle className='icon' />
        <div className='card_content'>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>Centro de ayuda</h3>
          <p>Si tiene problemas en PlantAlive, contáctenos para más preguntas</p>
          <button className='btn'>Ir al centro de ayuda</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar