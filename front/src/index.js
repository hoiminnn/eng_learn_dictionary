import React from 'react';
import {useState, useEffect} from 'react';
import {render} from 'react-dom'
import './css/style.css';
import { useLocation, useHistory  } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import { Speech } from './components/speech';
import axios from 'axios';
import {Words} from './components/words'

export function Hello(props) {

    const [words, setWords] = useState()
//   const { search } = useLocation(); 
// //   const search = useLocation.search();
//   const query = new URLSearchParams(search);
//   const query_word = query.get("search")

    useEffect(() => {
    
    const getData = async () => {
        axios.get("http://localhost:58080/ping")
        .then((response) => {
            setWords(response.data)
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
        { words && <Words {...words}/>}
    </div>;
}

const domNode = document.getElementById('root');

render(<Hello />, domNode);