import React from 'react';
import 'tachyons';
import './Table.css';
import TableList from './TableList';



const Classic = [
    {   
        
        Weapon: "Classic",
        Armor: "No Armor",
        Distance: "0-30M",
        Head: "78",
        Body: "26",
        Legs: "22"
    },

    {
       
        Armor: "Light Armor",
        Distance: "0-50M",
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

const ClassicTable = (props) => {
    return(
       
        <div>
            <TableList
            Weapon={Classic[0].Weapon}
            Armor={Classic[0].Armor}
            Distance={Classic[0].Distance}
            Head={Classic[0].Head}
            Body={Classic[0].Body}
            Legs={Classic[0].Legs}


            Armor2={Classic[1].Armor}
            Distance2={Classic[1].Distance}
            Head2={Classic[1].Head}
            Body2={Classic[1].Body}
            Legs2={Classic[1].Legs}
            

            Armor3={Classic[2].Armor}
            Distance3={Classic[2].Distance}
            Head3={Classic[2].Head}
            Body3={Classic[2].Body}
            Legs3={Classic[2].Legs}
            >
            </TableList>
            
        </div>
        
    )
}




export default ClassicTable

