import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';

const Guardian = [
    {
        Weapon: "Guardian",
        Armor: "No Armor",
        Distance: "0-50M",
        Head: "195",
        Body: "65",
        Legs: "49"
    },

    {
       
        Armor: "Light Armor",
        Distance: "0-15M",
        Head: "X",
        Body: "X",
        Legs: "X"
    },

    {
        Armor: "Heavy Armor",
        Distance: "0-9M",
        Head: "X",
        Body: "X",
        Legs: "X" 
    },
]

const GuardianTable = (props) => {
    return(
        <div>
            <TableList Weapon={Guardian[0].Weapon}
            Armor={Guardian[0].Armor}
            Distance={Guardian[0].Distance}
            Head={Guardian[0].Head}
            Body={Guardian[0].Body}
            Legs={Guardian[0].Legs}


            Armor2={Guardian[1].Armor}
            Distance2={Guardian[1].Distance}
            Head2={Guardian[1].Head}
            Body2={Guardian[1].Body}
            Legs2={Guardian[1].Legs}
            

            Armor3={Guardian[2].Armor}
            Distance3={Guardian[2].Distance}
            Head3={Guardian[2].Head}
            Body3={Guardian[2].Body}
            Legs3={Guardian[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default GuardianTable