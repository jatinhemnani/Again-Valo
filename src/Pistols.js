import React, { Component } from 'react';
import ClassicTable from './Classic';
import ShortyTable from './Shorty';
import FrenzyTable from './Frenzy';
import GhostTable from './Ghost';
import SheriffTable from './Sheriff'
import './main.css'


const Pistols = () => {
    return (
        <div>
            <h1 className="weapon-head">Pistols</h1>
            <ClassicTable />
            <ShortyTable />
            <FrenzyTable />
            <GhostTable />
            <SheriffTable />
        </div> 
    )
}

export default Pistols