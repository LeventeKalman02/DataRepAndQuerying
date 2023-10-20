import { useEffect, useState } from 'react';
import axios from "axios";
import Books from './books';

function Read(){

    const [data, setData] = useState([]);

    /* promise */
    useEffect(
        ()=>{
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then(
                (response)=>{/*get the data response from the http */
                    setData(response.data.books)/*pass the data to setData to display the books array */
                }
            )
            .catch(/*display the error in the console if there is one */
                (error)=>{
                    console.log(error);
                }
            )

        }, []
    );

    return(
        <div>
            <Books myBooks = {data}></Books>
        </div>
    );
}

export default Read;