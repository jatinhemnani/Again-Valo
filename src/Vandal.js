import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';

const Vandal = [
    {
        Weapon: "Vandal",
        Armor: "No Armor",
        Distance: "0-50M",
        Head: "156",
        Body: "39",
        Legs: "33"
    },

    {
       
        Armor: "Light Armor",
        Distance: "0-50M",
        Head: "156",
        Body: "39",
        Legs: "33"
    },

    {
        Armor: "Heavy Armor",
        Distance: "0-50M",
        Head: "156",
        Body: "39",
        Legs: "33"
    },
]

const VandalTable = (props) => {
    return(
        <div>
            <TableList Weapon={Vandal[0].Weapon}
            Armor={Vandal[0].Armor}
            Distance={Vandal[0].Distance}
            Head={Vandal[0].Head}
            Body={Vandal[0].Body}
            Legs={Vandal[0].Legs}


            Armor2={Vandal[1].Armor}
            Distance2={Vandal[1].Distance}
            Head2={Vandal[1].Head}
            Body2={Vandal[1].Body}
            Legs2={Vandal[1].Legs}
            

            Armor3={Vandal[2].Armor}
            Distance3={Vandal[2].Distance}
            Head3={Vandal[2].Head}
            Body3={Vandal[2].Body}
            Legs3={Vandal[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default VandalTable