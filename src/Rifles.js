import React, { Component } from 'react';
import BulldogTable from './Bulldog'
import GuardianTable from './Guardian'
import PhantomTable from './Phantom'
import VandalTable from './Vandal'
import 'tachyons'
import MarshalTable from './Marshal'
import OperatorTable from './Operator'
import './main.css'

const Rifles = () => {
    return (
        <div>
            <h1 className="weapon-head">Rifles</h1>
            <BulldogTable />
            <GuardianTable />
            <PhantomTable />
            <VandalTable />
            
            <h1 className="weapon-head">
                Snipers
            </h1>

            <MarshalTable />
            <OperatorTable />

        </div>
    )
}

export default Rifles