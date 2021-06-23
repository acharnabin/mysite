import React from 'react'
import Radio from '@material-ui/core/Radio';
const MyRadioButton = (props) => {
    return (
        <Radio disableRipple style={{
            color:'#673AB7'
        }} {...props}/>
    )
}

export default MyRadioButton
