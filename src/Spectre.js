import React from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList'

const Spectre = [
    {
        Weapon: "Spectre",
        Armor: "No Armor",
        Distance: "0-20M",
        Head: "78",
        Body: "26",
        Legs: "22"
    },

    {
       
        Armor: "Light Armor",
        Distance: "20-50M",
        Head: "66",
        Body: "22",
        Legs: "18"
    },

    {
        Armor: "Heavy Armor",
        Distance: "X",
        Head: "X",
        Body: "X",
        Legs: "X" 
    },
]

const SpectreTable = (props) => {
    return(
        <div>
            <TableList Weapon={Spectre[0].Weapon}
            Armor={Spectre[0].Armor}
            Distance={Spectre[0].Distance}
            Head={Spectre[0].Head}
            Body={Spectre[0].Body}
            Legs={Spectre[0].Legs}


            Armor2={Spectre[1].Armor}
            Distance2={Spectre[1].Distance}
            Head2={Spectre[1].Head}
            Body2={Spectre[1].Body}
            Legs2={Spectre[1].Legs}
            

            Armor3={Spectre[2].Armor}
            Distance3={Spectre[2].Distance}
            Head3={Spectre[2].Head}
            Body3={Spectre[2].Body}
            Legs3={Spectre[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default SpectreTable