import React from "react";
import { toast } from "react-toastify";

const UserRow = ({user, refetch}) => {
    
  const { email, role } = user;
  console.log('role', role);

  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin', {toastId: "failed"});
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully made an admin`, {toastId: "success"});
            }

        })
  };

  return (
    <>
      <tr>
        <td>{user.displayName}</td>
        <td>{user.email}</td>
        <td>{role !== "admin" && (
            <button onClick={makeAdmin} className="btn btn-info">
              Make Admin
            </button>
          )}</td>
          <td>
          <button className="btn btn-warning">Remove User</button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
