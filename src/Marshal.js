import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';

const Marshal = [
    {
        Weapon: "Marshal",
        Armor: "No Armor",
        Distance: "0-50M",
        Head: "202",
        Body: "101",
        Legs: "85"
    },

    {
       
        Armor: "Light Armor",
        Distance: "0-50M",
        Head: "202",
        Body: "101",
        Legs: "85"
    },

    {
        Armor: "Heavy Armor",
        Distance: "0-50M",
        Head: "202",
        Body: "101",
        Legs: "85"
    },
]

const MarshalTable = (props) => {
    return(
        <div>
            <TableList Weapon={Marshal[0].Weapon}
            Armor={Marshal[0].Armor}
            Distance={Marshal[0].Distance}
            Head={Marshal[0].Head}
            Body={Marshal[0].Body}
            Legs={Marshal[0].Legs}


            Armor2={Marshal[1].Armor}
            Distance2={Marshal[1].Distance}
            Head2={Marshal[1].Head}
            Body2={Marshal[1].Body}
            Legs2={Marshal[1].Legs}
            

            Armor3={Marshal[2].Armor}
            Distance3={Marshal[2].Distance}
            Head3={Marshal[2].Head}
            Body3={Marshal[2].Body}
            Legs3={Marshal[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default MarshalTable