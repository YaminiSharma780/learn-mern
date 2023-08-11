import React from 'react';

export default function Props(props){
    return(
        <div>
            <p>This is a propping</p>
            {props.a}
            {props.b}
            {props.c}
            {props.children}
        </div>
    )
}