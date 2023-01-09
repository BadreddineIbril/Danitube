import { color, style } from '@mui/system'
import React, { useState } from 'react'
import { categories } from './utils/constants'

export default function ({selectCategorie, setSelectCategorie}) {

  return (
    <div className="side-bar">
        {
            categories.map(categorie=>{
                return  <button 
                            style={
                                selectCategorie == categorie.name ? {opacity: "1", backgroundColor : '#ff3467'} : {opacity: ".4", backgroundColor : 'transparent'}
                            }
                            onClick={()=>{
                                setSelectCategorie(categorie.name)
                            }}
                        >
                            <span>{categorie.icon}</span>
                            <span>{categorie.name}</span>
                        </button>
            })
        }
    </div>

  )
}
