import React from 'react'
// import { menu_list } from '../assets/assets'

const MenuCard = ({food}) => {
  return (
    <div className='explore-menu hover:scale-110 flex flex-col justify-center gap-[1rem] '>
        <img src={food.menu_image} alt="" className='w-[6.4rem]'/>
        <p>{food.menu_name}</p>
    </div>
  )
}

export default MenuCard