import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';

const Judge = [
    {
        Weapon: "Judge",
        Armor: "No Armor",
        Distance: "0-10M",
        Head: "34",
        Body: "17",
        Legs: "14"
    },

    {
       
        Armor: "Light Armor",
        Distance: "10-15M",
        Head: "26",
        Body: "13",
        Legs: "11"
    },

    {
        Armor: "Heavy Armor",
        Distance: "15-50M",
        Head: "20",
        Body: "10",
        Legs: "9" 
    },
]

const JudgeTable = (props) => {
    return(
        <div>
            <TableList Weapon={Judge[0].Weapon}
            Armor={Judge[0].Armor}
            Distance={Judge[0].Distance}
            Head={Judge[0].Head}
            Body={Judge[0].Body}
            Legs={Judge[0].Legs}


            Armor2={Judge[1].Armor}
            Distance2={Judge[1].Distance}
            Head2={Judge[1].Head}
            Body2={Judge[1].Body}
            Legs2={Judge[1].Legs}
            

            Armor3={Judge[2].Armor}
            Distance3={Judge[2].Distance}
            Head3={Judge[2].Head}
            Body3={Judge[2].Body}
            Legs3={Judge[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default JudgeTable