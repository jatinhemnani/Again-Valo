import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList'

const Sheriff = [
    {
        Weapon: "Sheriff",
        Armor: "No Armor",
        Distance: "0-30M",
        Head: "160",
        Body: "55",
        Legs: "47"
    },

    {
       
        Armor: "Light Armor",
        Distance: "30-50M",
        Head: "145",
        Body: "50",
        Legs: "43"
    },

    {
        Armor: "Heavy Armor",
        Distance: "X",
        Head: "X",
        Body: "X",
        Legs: "X" 
    },
]

const SheriffTable = (props) => {
    return(
        <div>
            <TableList Weapon={Sheriff[0].Weapon}
            Armor={Sheriff[0].Armor}
            Distance={Sheriff[0].Distance}
            Head={Sheriff[0].Head}
            Body={Sheriff[0].Body}
            Legs={Sheriff[0].Legs}


            Armor2={Sheriff[1].Armor}
            Distance2={Sheriff[1].Distance}
            Head2={Sheriff[1].Head}
            Body2={Sheriff[1].Body}
            Legs2={Sheriff[1].Legs}
            

            Armor3={Sheriff[2].Armor}
            Distance3={Sheriff[2].Distance}
            Head3={Sheriff[2].Head}
            Body3={Sheriff[2].Body}
            Legs3={Sheriff[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default SheriffTable