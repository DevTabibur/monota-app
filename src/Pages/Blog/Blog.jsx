import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useBlogs from "../../Hooks/useBlogs";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useBlogs();
  return (
    <div className="blog-section">
      <Container className="py-4">
        <Row>
          {
            blogs.map((blog) => <ShowBlog
              key={blog._id}
              blog={blog}
            />)
          }
        </Row>
      </Container>
    </div>
  );
};

const ShowBlog = ({ blog }) => {
  return (
    <Col  md={6} sm={12} lg={6} className="g-4 blog-parent-col">

      <Card className="border-0 shadow">
        <Card.Img variant="top" src={blog.image} />
        <Card.Body>
          <Card.Title className="title">{blog.title}</Card.Title>
          <Card.Title className="title2"> {blog.release} {blog.author}</Card.Title>
          <Card.Text className="description">
            {blog.description}
          </Card.Text>
        </Card.Body>
      </Card>

    </Col>
  );
};

export default Blog;
