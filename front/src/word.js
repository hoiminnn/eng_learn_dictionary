import React from 'react';
import {useState, useEffect} from 'react';
import {render} from 'react-dom'
import './css/style.css';
import { useLocation, useHistory  } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import {WordIndex} from './components/word_index'

export function WordPage(props) {

    const [word, setWord] = useState()
  const { search } = useLocation(); 
//   const search = useLocation.search();
  const query = new URLSearchParams(search);
  const query_word = query.get("search")

    useEffect(() => {
    
    const getData = async () => {
        axios.get(`http://localhost:58080/search?word=${query_word}`)
        .then((response) => {
            setWord(response.data.response)
        }).catch((err) => {
        })
    };
        getData();
    }, 
        []
    )

//   return <h1>
//     {post.id}Hello World!!!
//     </h1>
    
    return <div>
        { word && <WordIndex {...word}/>}
    </div>;
}

const domNode = document.getElementById('root');

render(<Router><WordPage /></Router>, domNode);