import React from 'react';
import {useState, useEffect} from 'react';
import {render} from 'react-dom'
import { Result } from 'postcss';
import { Word } from './word';

export function Words(props) {

    
    useEffect(
        () => {
        },
        []
    )

    return (
        props.response.map((word, index) => (
                <Word {...word} />
        ))
    );
}

