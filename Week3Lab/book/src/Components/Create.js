import { useState } from "react";

function Create(){

    /* create the arrays for adding the books */
    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [cover, setCover] = useState([]);

    /* handles the submit and prints it to console */
    const handlesubmit = (e)=>{
        e.preventDefault();

        console.log("Title: "+title+
        " Author: "+author+
        " Cover: "+cover);
    }

    return(
        <div>{/* adding new books */}
            <form onSubmit={handlesubmit}>{/* add a form */}
            <div className="form-group">{/* add a new book title */}
                <label>Edit Book Title: </label>
                <input type="text"
                className="form-control"
                value={title}/* initial value */
                onChange={(e) => { setTitle(e.target.value) }}/>{/* when event changes run setTitle */}
            </div>

            <div className="form-group">{/* add a new book author */}
                <label>Edit Book Author: </label>
                <input type="text"
                className="form-control"
                value={author}/* initial value */
                onChange={(e) => { setAuthor(e.target.value) }}/>{/* when event changes run setAuthor */}
            </div>

            <div className="form-group">{/* add a new cover image */}
                <label>Add Cover URL: </label>
                <input type="text"
                className="form-control"
                value={cover}/* initial value */
                onChange={(e) => { setCover(e.target.value) }}/>{/* when event changes run setCover */}
            </div>

            {/* submit button */}
            <div>
                <input type="submit"
                value="Add Book"></input>
            </div>
            </form>
        </div>
    );
}

export default Create;