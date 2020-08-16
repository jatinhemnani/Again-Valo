import React from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';

const Phantom = [
    {
        Weapon: "Phantom",
        Armor: "No Armor",
        Distance: "0-15M",
        Head: "156",
        Body: "39",
        Legs: "33"
    },

    {
       
        Armor: "Light Armor",
        Distance: "15-30M",
        Head: "140",
        Body: "35",
        Legs: "30"
    },

    {
        Armor: "Heavy Armor",
        Distance: "30-50M",
        Head: "124",
        Body: "31",
        Legs: "26" 
    },
]

const PhantomTable = (props) => {
    return(
        <div>
            <TableList Weapon={Phantom[0].Weapon}
            Armor={Phantom[0].Armor}
            Distance={Phantom[0].Distance}
            Head={Phantom[0].Head}
            Body={Phantom[0].Body}
            Legs={Phantom[0].Legs}


            Armor2={Phantom[1].Armor}
            Distance2={Phantom[1].Distance}
            Head2={Phantom[1].Head}
            Body2={Phantom[1].Body}
            Legs2={Phantom[1].Legs}
            

            Armor3={Phantom[2].Armor}
            Distance3={Phantom[2].Distance}
            Head3={Phantom[2].Head}
            Body3={Phantom[2].Body}
            Legs3={Phantom[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default PhantomTable