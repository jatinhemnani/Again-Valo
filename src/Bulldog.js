import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';

const Bulldog = [
    {
        Weapon: "Bulldog",
        Armor: "No Armor",
        Distance: "0-50M",
        Head: "116",
        Body: "35",
        Legs: "30"
    },

    {
       
        Armor: "Light Armor",
        Distance: "X",
        Head: "X",
        Body: "X",
        Legs: "X"
    },

    {
        Armor: "Heavy Armor",
        Distance: "X",
        Head: "X",
        Body: "X",
        Legs: "X" 
    },
]

const BulldogTable = (props) => {
    return(
        <div>
            <TableList Weapon={Bulldog[0].Weapon}
            Armor={Bulldog[0].Armor}
            Distance={Bulldog[0].Distance}
            Head={Bulldog[0].Head}
            Body={Bulldog[0].Body}
            Legs={Bulldog[0].Legs}


            Armor2={Bulldog[1].Armor}
            Distance2={Bulldog[1].Distance}
            Head2={Bulldog[1].Head}
            Body2={Bulldog[1].Body}
            Legs2={Bulldog[1].Legs}
            

            Armor3={Bulldog[2].Armor}
            Distance3={Bulldog[2].Distance}
            Head3={Bulldog[2].Head}
            Body3={Bulldog[2].Body}
            Legs3={Bulldog[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default BulldogTable