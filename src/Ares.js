import React from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';

const Ares = [
    {
        Weapon: "Ares",
        Armor: "No Armor",
        Distance: "0-30M",
        Head: "72",
        Body: "30",
        Legs: "25"
    },

    {
       
        Armor: "Light Armor",
        Distance: "30-50M",
        Head: "67",
        Body: "28",
        Legs: "23"
    },

    {
        Armor: "Heavy Armor",
        Distance: "30-50M",
        Head: "67",
        Body: "28",
        Legs: "23"
    },
]

const AresTable = (props) => {
    return(
        <div>
            <TableList Weapon={Ares[0].Weapon}
            Armor={Ares[0].Armor}
            Distance={Ares[0].Distance}
            Head={Ares[0].Head}
            Body={Ares[0].Body}
            Legs={Ares[0].Legs}


            Armor2={Ares[1].Armor}
            Distance2={Ares[1].Distance}
            Head2={Ares[1].Head}
            Body2={Ares[1].Body}
            Legs2={Ares[1].Legs}
            

            Armor3={Ares[2].Armor}
            Distance3={Ares[2].Distance}
            Head3={Ares[2].Head}
            Body3={Ares[2].Body}
            Legs3={Ares[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default AresTable