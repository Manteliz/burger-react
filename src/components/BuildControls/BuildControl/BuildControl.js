import React from 'react';
import Aux from '../../../hoc/Auxilliary';

const buildControl = (props) => 
    <Aux>
        <div>BuildControl</div>
        {props.children}
    </Aux>
;

export default buildControl;