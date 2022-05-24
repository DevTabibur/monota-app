import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';
import UserRow from "../UserRow/UserRow";

const Users = () => {
  // const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
  //     method: 'GET',
  //     headers:{
  //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //     }
  // }).then(res => res.json()));
  // if (isLoading) {
  //     return <Loading></Loading>
  // }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover variant="dark" size="sm" className="rounded-4">
              <thead>
                <tr>
                  <th>_id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <UserRow/>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Users;
