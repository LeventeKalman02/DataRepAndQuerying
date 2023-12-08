import BookItem from './bookItem';

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook = {book} key= {book._id} Reload={()=>{props.reloadData();}}></BookItem>
        }
    );
}

export default Books;