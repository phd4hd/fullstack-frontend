import './Main.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Main = ({books}) => {

    const navigate = useNavigate();

    function reviews(isbn10)
    {
        navigate(`/reviews/${isbn10}`);
    }

  return (
    <div className ='book-carousel-container'>
      <Carousel>
        {
            books?.map((book) =>{
                return(
                    <Paper key={book.isbn10}>
                        <div className = 'book-card-container'>
                            <div className="book-detail">
                                <div className="book-cover">
                                    <img src={book.cover} alt={book.title} />
                                </div>
                                <div className="book-details-container">
                                    <div className="book-authors">
                                        <h4>{book.authors.join(' and ')}</h4>
                                    </div>
                                    <div className="book-title">
                                        <h2>{book.title}</h2>
                                    </div>
                                </div>
                                <div className="book-button-container">
                                    <Button variant="outline-info" onClick={ () => reviews(book.isbn10) }>Reviews</Button>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Main