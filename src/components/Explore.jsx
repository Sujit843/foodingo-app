import React from 'react'
import { menu_list } from '../assets/assets'
import MenuCard from './MenuCard'

const Explore = () => {
  return (
    <div className="explore-text text-center text-[1.2rem]">
        <p className="px-[15rem] text-[1.2rem] font-semibold mt-[2rem]">"Hungry? Explore our delicious menu packed with your favorite meals. Whether it’s a quick bite or a full meal, we’ve got you covered!"</p>
        <div className='flex menu-card justify-center items-center gap-[1rem] '>
            {
                menu_list.map((food) => {
                    return (
                        <MenuCard food={food} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Explore