import React from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList'

const Stinger = [
    {
        Weapon: "Stinger",
        Armor: "No Armor",
        Distance: "0-20M",
        Head: "67",
        Body: "27",
        Legs: "23"
    },

    {
       
        Armor: "Light Armor",
        Distance: "20-50M",
        Head: "62",
        Body: "25",
        Legs: "21"
    },

    {
        Armor: "Heavy Armor",
        Distance: "0-9M",
        Head: "X",
        Body: "X",
        Legs: "X" 
    },
]

const StingerTable = (props) => {
    return(
        <div>
            <TableList Weapon={Stinger[0].Weapon}
            Armor={Stinger[0].Armor}
            Distance={Stinger[0].Distance}
            Head={Stinger[0].Head}
            Body={Stinger[0].Body}
            Legs={Stinger[0].Legs}


            Armor2={Stinger[1].Armor}
            Distance2={Stinger[1].Distance}
            Head2={Stinger[1].Head}
            Body2={Stinger[1].Body}
            Legs2={Stinger[1].Legs}
            

            Armor3={Stinger[2].Armor}
            Distance3={Stinger[2].Distance}
            Head3={Stinger[2].Head}
            Body3={Stinger[2].Body}
            Legs3={Stinger[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default StingerTable