import React, { Component } from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList'

const Bucky = [
    {
        Weapon: "Bucky",
        Armor: "No Armor",
        Distance: "0-8M",
        Head: "44",
        Body: "22",
        Legs: "19"
    },

    {
       
        Armor: "Light Armor",
        Distance: "8-12M",
        Head: "34",
        Body: "17",
        Legs: "14"
    },

    {
        Armor: "Heavy Armor",
        Distance: "12-50M",
        Head: "18",
        Body: "9",
        Legs: "8" 
    },
]

const BuckyTable = (props) => {
    return(
        <div>
            <TableList Weapon={Bucky[0].Weapon}
            Armor={Bucky[0].Armor}
            Distance={Bucky[0].Distance}
            Head={Bucky[0].Head}
            Body={Bucky[0].Body}
            Legs={Bucky[0].Legs}


            Armor2={Bucky[1].Armor}
            Distance2={Bucky[1].Distance}
            Head2={Bucky[1].Head}
            Body2={Bucky[1].Body}
            Legs2={Bucky[1].Legs}
            

            Armor3={Bucky[2].Armor}
            Distance3={Bucky[2].Distance}
            Head3={Bucky[2].Head}
            Body3={Bucky[2].Body}
            Legs3={Bucky[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default BuckyTable