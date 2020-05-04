import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import Aux from '../../hoc/Auxilliary';

const buildControls = () =>
    <Aux>
        <BuildControl type='cheese'>
            <button>MORE</button>
            <button>LESS</button>
        </BuildControl>
        <BuildControl type='meat'>
            <button>MORE</button>
            <button>LESS</button>
        </BuildControl>
        <BuildControl type='salad'>
            <button>MORE</button>
            <button>LESS</button>
        </BuildControl>
        <BuildControl type='bacon'>
            <button>MORE</button>
            <button>LESS</button>
        </BuildControl>
        <div> Order Button </div>
    </Aux>;

export default buildControls;