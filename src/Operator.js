import React from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';

const Operator = [
    {
        Weapon: "Operator",
        Armor: "No Armor",
        Distance: "0-50M",
        Head: "255",
        Body: "150",
        Legs: "127"
    },

    {
       
        Armor: "Light Armor",
        Distance: "0-50M",
        Head: "255",
        Body: "150",
        Legs: "127"
    },

    {
        Armor: "Heavy Armor",
        Distance: "0-50M",
        Head: "255",
        Body: "150",
        Legs: "127"
    },
]

const OperatorTable = (props) => {
    return(
        <div>
            <TableList Weapon={Operator[0].Weapon}
            Armor={Operator[0].Armor}
            Distance={Operator[0].Distance}
            Head={Operator[0].Head}
            Body={Operator[0].Body}
            Legs={Operator[0].Legs}


            Armor2={Operator[1].Armor}
            Distance2={Operator[1].Distance}
            Head2={Operator[1].Head}
            Body2={Operator[1].Body}
            Legs2={Operator[1].Legs}
            

            Armor3={Operator[2].Armor}
            Distance3={Operator[2].Distance}
            Head3={Operator[2].Head}
            Body3={Operator[2].Body}
            Legs3={Operator[2].Legs}
            >
            </TableList>
            
        </div>
    )
}

export default OperatorTable