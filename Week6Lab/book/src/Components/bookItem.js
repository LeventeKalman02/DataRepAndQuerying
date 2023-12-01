import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';
import { Link } from'react-router-dom';

function BookItem(props){
    return(
        <div>
            <Card>
                {/* add and display the title, image, and author */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.cover}></img>
                        <footer>
                            {props.myBook.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/edit'+props.myBook._id} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={
                    (e)=>{
                        e.preventDefault();

                        axios.delete('http://localhost:4000/api/books/'+props.myBook._id)
                        .then()
                        .catch();
                    }
                }></Button>
            </Card>
        </div>
    );
}

export default BookItem;