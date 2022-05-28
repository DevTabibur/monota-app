import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import ManageTable from "./ManageTable";
import Modal from "../Dashboard/Modal.js";
import Loader from "../SpinnerLoader/SpinnerLoader";

const ManageOrder = () => {
  const [modal, setModal] = useState({});
  const [confirm, setConfirm] = useState(false);

  const {
    data: allorders,
    isLoading,
    refetch,
  } = useQuery("allorders", () =>
    fetch(`https://glacial-cove-96112.herokuapp.com/orders`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader></Loader>;
  }

  const confirmDelete = (id) => {
    const proceed = window.confirm("are you want to delete?");
    if (proceed) {
      console.log("id", id);
      fetch(`https://glacial-cove-96112.herokuapp.com/orders/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            refetch();
            toast.success("Order delete successfully");
          }
        });
    }
    return (
      <>
        <h2>Manage all orders</h2>
        
        {allorders?.length ? (
          <h1 className="font-bold text-2xl sp-style text-blue-900 mt-10">
            Here is the {allorders?.length}{" "}
            {allorders?.length == 1 ? "order" : "orders"}:-
          </h1>
        ) : (
          <h1 className="font-bold text-2xl sp-style text-red-900 mt-10">
            There is no Order
          </h1>
        )}

        <div className="overflow-x-auto mt-10">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>ToolsName</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Phone</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {allorders?.map((o, index) => (
                <ManageTable
                  key={o._id}
                  o={o}
                  index={index}
                  refetch={refetch}
                  confirmDelete={confirmDelete}
                ></ManageTable>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
};

export default ManageOrder;
