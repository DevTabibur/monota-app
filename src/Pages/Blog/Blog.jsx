import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetch("https://rocky-caverns-33077.herokuapp.com/blogs")
//       .then((res) => res.json())
//       .then((data) => setBlogs(data));
//   }, []);
  return (
    <div className="blog-section">
      <Container className="py-4">
        <Row>
          {/* {blogs.map((blog) => (
            <ShowBlog key={blog._id} blog={blog} />
          ))} */}

          {/* new just testiing code */}
          <Col  md={6} sm={12} lg={6} className="g-4 blog-parent-col">

      <Card className="border-0 shadow">
        {/* <Card.Img variant="top" src={blog.image} /> */}
        <Card.Body>
          <Card.Title className="title">TITLE</Card.Title>
          <Card.Title className="title2"> release and author</Card.Title>
          <Card.Text className="description">
            description
          </Card.Text>
        </Card.Body>
      </Card>

    </Col>
        </Row>
      </Container>
    </div>
  );
};

const ShowBlog = ({ blog }) => {
  return (
      <h2>hello</h2>
    // <Col  md={6} sm={12} lg={6} className="g-4 blog-parent-col">

    //   <Card className="border-0 shadow">
    //     <Card.Img variant="top" src={blog.image} />
    //     <Card.Body>
    //       <Card.Title className="title">{blog.title}</Card.Title>
    //       <Card.Title className="title2"> {blog.release} {blog.author}</Card.Title>
    //       <Card.Text className="description">
    //         {blog.description}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>

    // </Col>
  );
};

export default Blog;