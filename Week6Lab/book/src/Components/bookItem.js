import Card from 'react-bootstrap/Card';

function BookItem(props){
    return(
        <div>
            {/* make it into a card to look better */}
            <Card style={{ width: '18rem' }}>
                {/* add and display the title, image, and author */}
                <Card.Img variant="top" src={props.myBook.thumbnailUrl}/>
                <Card.Body>{props.myBook.title}</Card.Body>
                <Card.Text>{props.myBook.authors[0]}</Card.Text>
            </Card>
        </div>
    );
}

export default BookItem;