import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';

const Odin = [
    {
        Weapon: "Odin",
        Armor: "No Armor",
        Distance: "0-30M",
        Head: "95",
        Body: "38",
        Legs: "32"
    },

    {
       
        Armor: "Light Armor",
        Distance: "30-50M",
        Head: "77",
        Body: "31",
        Legs: "26"
    },

    {
        Armor: "Heavy Armor",
        Distance: "30-50M",
        Head: "77",
        Body: "31",
        Legs: "26"
    },
]

const OdinTable = (props) => {
    return(
        <div>
            <TableList Weapon={Odin[0].Weapon}
            Armor={Odin[0].Armor}
            Distance={Odin[0].Distance}
            Head={Odin[0].Head}
            Body={Odin[0].Body}
            Legs={Odin[0].Legs}


            Armor2={Odin[1].Armor}
            Distance2={Odin[1].Distance}
            Head2={Odin[1].Head}
            Body2={Odin[1].Body}
            Legs2={Odin[1].Legs}
            

            Armor3={Odin[2].Armor}
            Distance3={Odin[2].Distance}
            Head3={Odin[2].Head}
            Body3={Odin[2].Body}
            Legs3={Odin[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default OdinTable