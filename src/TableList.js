import React from 'react';
import Table from './Classic';
import 'tachyons';
import './Table.css';

const TableList = (props) => {
    return(
        <div className="Main-Table">
            <table border="solid 1px" className="Table">
                <tr>
                    
                    <th className="table-head">Weapon</th>
                    <th className="table-head">Armor</th>
                    <th className="table-head">Distance</th>
                    <th className="table-head">Head</th>
                    <th className="table-head">Body</th>
                    <th className="table-head">Leg/Arms</th>
                </tr>

                <tr>
                    <td className="table-maindata" rowSpan="3">{props.Weapon}</td>
                    <td className="table-armor" >{props.Armor}</td>
                    <td className="table-sec" >{props.Distance}</td>
                    <td className="table-sec" >{props.Head}</td>
                    <td className="table-sec" >{props.Body}</td>
                    <td className="table-sec" >{props.Legs}</td>
                </tr>

                <tr>
                    <td className="table-armor2" >{props.Armor2}</td>
                    <td className="table-sec" >{props.Distance2}</td>
                    <td className="table-sec" >{props.Head2}</td>
                    <td className="table-sec" >{props.Body2}</td>
                    <td className="table-sec" >{props.Legs2}</td>
                </tr>

                <tr>
                    <td className="table-armor3" >{props.Armor3}</td>
                    <td className="table-sec" >{props.Distance3}</td>
                    <td className="table-sec" >{props.Head3}</td>
                    <td className="table-sec" >{props.Body3}</td>
                    <td className="table-sec" >{props.Legs3}</td>
                </tr>
            </table>
        </div>
    )
}

export default TableList