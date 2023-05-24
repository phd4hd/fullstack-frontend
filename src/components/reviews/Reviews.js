import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import Button from 'react-bootstrap/Button';

import React from 'react'

const Reviews = ({getBookData,book,reviewIds,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const isbn10 = params.isbn10;

    useEffect( () => { getBookData(isbn10); } , [])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;
        try
        {
            const response = await api.post("/api/v1/reviews", {isbn10:isbn10,reviewText:rev.value});
            const updatedReviews = [...reviewIds, {text:rev.value}];
    
            rev.value = "";
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={book?.cover} alt={book?.title} />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviewIds?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.text}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews