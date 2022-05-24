import React from "react";
import { toast } from "react-toastify";

const UserRow = () => {
    

//   const { email, role } = user;
  const makeAdmin = () => {
    alert("make admin");
    // fetch(`http://localhost:5000/user/admin/${email}`, {
    //     method: 'PUT',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // })
    //     .then(res => {
    //         if(res.status === 403){
    //             toast.error('Failed to Make an admin');
    //         }
    //         return res.json()})
    //     .then(data => {
    //         if (data.modifiedCount > 0) {
    //             refetch();
    //             toast.success(`Successfully made an admin`);
    //         }

    //     })
  };

  return (
    <>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
      {/* <tr>
        <th>1</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={makeAdmin} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-xs">Remove User</button>
        </td>
      </tr> */}
    </>
  );
};

export default UserRow;
