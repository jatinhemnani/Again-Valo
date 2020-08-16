import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList'

const Frenzy = [
    {
        Weapon: "Frenzy",
        Armor: "No Armor",
        Distance: "0-20M",
        Head: "78",
        Body: "26",
        Legs: "22"
    },

    {
       
        Armor: "Light Armor",
        Distance: "20-25M",
        Head: "63",
        Body: "21",
        Legs: "17"
    },

    {
        Armor: "Heavy Armor",
        Distance: "X",
        Head: "X",
        Body: "X",
        Legs: "X" 
    },
]

const FrenzyTable = (props) => {
    return(
        <div>
            <TableList Weapon={Frenzy[0].Weapon}
            Armor={Frenzy[0].Armor}
            Distance={Frenzy[0].Distance}
            Head={Frenzy[0].Head}
            Body={Frenzy[0].Body}
            Legs={Frenzy[0].Legs}


            Armor2={Frenzy[1].Armor}
            Distance2={Frenzy[1].Distance}
            Head2={Frenzy[1].Head}
            Body2={Frenzy[1].Body}
            Legs2={Frenzy[1].Legs}
            

            Armor3={Frenzy[2].Armor}
            Distance3={Frenzy[2].Distance}
            Head3={Frenzy[2].Head}
            Body3={Frenzy[2].Body}
            Legs3={Frenzy[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default FrenzyTable