import React from "react";
import "./AddReview.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import auth from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const AddReview = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const handleReviewForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const ratings = e.target.ratings.value;
    const review = e.target.review.value;
    // const uploadImage = e.target.uploadImage.value;

    const addReview = { name, ratings, review };

    // send db to server
    if(  ratings >= 1 && ratings <= 5){
      const url = `http://localhost:5000/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
    .then(res => res.json())
    .then(data =>{
      console.log('data', data);
      toast.success("Added your review successfully", {toastId: "Success"});
      e.target.reset()
    })
    }
    else{
      toast.error('You have to put review between 1 to 5 start', {toastId:"error"})
    }
  };

  return (
    <>
      <Form onSubmit={handleReviewForm}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={user?.displayName}
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formReview">
          <Form.Label>Add Your Ratings</Form.Label>
          <Form.Control
            type="text"
            name="ratings"
            placeholder="Put Your Review between 1 to 5"
            required
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            name="review"
            placeholder="Add your review here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        {/* <Form.Group className="mb-3" controlId="formUpload">
          <Form.Label>Upload your image</Form.Label>
          <Form.Control
            type="file"
            name="uploadImage"
            placeholder="Upload your image"
            required
          />
        </Form.Group> */}

        <Button variant="danger" type="submit" className="mt-4">
          UPLOAD
        </Button>
      </Form>
    </>
  );
};

export default AddReview;
