import React from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList'

const Ghost = [
    {
        Weapon: "Ghost",
        Armor: "No Armor",
        Distance: "0-30M",
        Head: "105",
        Body: "33",
        Legs: "26"
    },

    {
       
        Armor: "Light Armor",
        Distance: "30-50M",
        Head: "88",
        Body: "25",
        Legs: "21"
    },

    {
        Armor: "Heavy Armor",
        Distance: "X",
        Head: "X",
        Body: "X",
        Legs: "X" 
    },
]

const GhostTable = (props) => {
    return(
        <div>
            <TableList Weapon={Ghost[0].Weapon}
            Armor={Ghost[0].Armor}
            Distance={Ghost[0].Distance}
            Head={Ghost[0].Head}
            Body={Ghost[0].Body}
            Legs={Ghost[0].Legs}


            Armor2={Ghost[1].Armor}
            Distance2={Ghost[1].Distance}
            Head2={Ghost[1].Head}
            Body2={Ghost[1].Body}
            Legs2={Ghost[1].Legs}
            

            Armor3={Ghost[2].Armor}
            Distance3={Ghost[2].Distance}
            Head3={Ghost[2].Head}
            Body3={Ghost[2].Body}
            Legs3={Ghost[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default GhostTable