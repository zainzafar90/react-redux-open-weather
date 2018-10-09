
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import React from 'react';

export default function(props){
    return (
        <div>
            <Sparklines data={props.data} width={180} height={20} >
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
        </div>
    );
}