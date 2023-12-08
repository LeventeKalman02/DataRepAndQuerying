import { useEffect, useState } from 'react';
import axios from "axios";
import Books from './books';

function Read(){

    /* create the data and setData methods to use below to display the books array */
    const [data, setData] = useState([]);

    /* promise */
    useEffect(
        ()=>{
            /* Get the data from the http link */
            axios.get('http://localhost:4000/api/books')
            .then(/* callback function */
                (response)=>{/* get the data response from the http */
                    setData(response.data)/* pass the data to setData to display the books array */
                }
            )
            .catch(/* display the error in the console if there is one */
                (error)=>{
                    console.log(error);
                }
            )
        }, []
    );

    const Reload = (e) => {
        axios.get('http://localhost:4000/api/books')
        .then(/* callback function */
                (response)=>{/* get the data response from the http */
                    setData(response.data)/* pass the data to setData to display the books array */
                }
            )
        .catch(/* display the error in the console if there is one */
            (error)=>{
                console.log(error);
            }
        )
    };

    return(
        <div>
            <Books myBooks = {data} ReloadData = {Reload}></Books>

        </div>
    );
}

export default Read;