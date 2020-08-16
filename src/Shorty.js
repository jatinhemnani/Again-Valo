import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList'

const Shorty = [
    {
        Weapon: "Shorty",
        Armor: "No Armor",
        Distance: "0-9M",
        Head: "36",
        Body: "12",
        Legs: "10"
    },

    {
       
        Armor: "Light Armor",
        Distance: "0-15M",
        Head: "24",
        Body: "8",
        Legs: "6"
    },

    {
        Armor: "Heavy Armor",
        Distance: "0-9M",
        Head: "9",
        Body: "3",
        Legs: "2" 
    },
]

const ShortyTable = (props) => {
    return(
        <div>
            <TableList Weapon={Shorty[0].Weapon}
            Armor={Shorty[0].Armor}
            Distance={Shorty[0].Distance}
            Head={Shorty[0].Head}
            Body={Shorty[0].Body}
            Legs={Shorty[0].Legs}


            Armor2={Shorty[1].Armor}
            Distance2={Shorty[1].Distance}
            Head2={Shorty[1].Head}
            Body2={Shorty[1].Body}
            Legs2={Shorty[1].Legs}
            

            Armor3={Shorty[2].Armor}
            Distance3={Shorty[2].Distance}
            Head3={Shorty[2].Head}
            Body3={Shorty[2].Body}
            Legs3={Shorty[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default ShortyTable