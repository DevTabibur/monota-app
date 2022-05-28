import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  console.log("role", role);

  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("SuccessFully make a admin");
        } else {
          toast.error(
            `Sorry!!! You can't make anyone admin.Only admin can make other's admin`
          );
        }
      });
  };

  return (
    <>
      <tr>
        <td>{user.displayName}</td>
        <td>{user.email}</td>
        <td>
          {role !== "admin" ? (
            <button onClick={makeAdmin} className="btn btn-info">
              Make Admin
            </button> 
          )
          :
          (<button className="btn btn-success">
              Already an Admin
            </button>)}
        </td>
        <td>
          {role !== "admin" ? (
            <button className="btn btn-warning">Remove User</button>
          ) : (
            ""
          )}
        </td>
      </tr>
    </>
  );
};

export default UserRow;
