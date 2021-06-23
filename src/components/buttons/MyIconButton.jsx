import { IconButton } from '@material-ui/core'
import React from 'react'

const MyIconButton = (props) => {
    return (
        <IconButton  style={{fontSize:'22px',margin:'0px 4px'}} {...props}>
            {props.children}
        </IconButton>
    )
}

export default MyIconButton
