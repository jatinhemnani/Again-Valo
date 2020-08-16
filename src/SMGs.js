import React, { Component } from 'react';
import StingerTable from './Stinger';
import SpectreTable from './Spectre';
import 'tachyons';
import BuckyTable from './Bucky';
import JudgeTable from './Judge';
import AresTable from './Ares'
import OdinTable from './Odin'
import './main.css'

const SMGs = () => {
    return (
        <div>
            <h1 className="weapon-head">SMGs</h1>
            <StingerTable />
            <SpectreTable />
            <h1 className="weapon-head">ShortGuns</h1>
            <BuckyTable />
            <JudgeTable />

            <h1 className="weapon-head">
                LMGs
            </h1>
            <AresTable />
            <OdinTable />
        </div>
    )
}

export default SMGs