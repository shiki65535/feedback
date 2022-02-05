import React, { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);

    const { addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(()=>{
        
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        } 
    },[feedbackEdit]);

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true);
            setMessage(null)
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Text must be at least 10 chars")
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating 
            }
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }


            setText("");
         }
    }

    return (
        <Card>
            <h2>How  woudl you rate your service with us?</h2>
            <RatingSelect select={rating=>setRating(rating)}/>
            <form onSubmit={handleSubmit}>
                <div className="input-group">

                    <input
                        onChange={handleTextChange}
                        value={text}
                        type="text" placeholder="write a review" />
                    <Button
                        type="submit"
                        isDisabled={btnDisabled}>send</Button>
                </div>
            </form>

            {message && < div className="message">{message}</div>}
        </Card>
    )
}

export default FeedbackForm;
