import React, { useState, useEffect } from "react";
import { useHistory  } from "react-router-dom";
import Table from "../Components/Table";
import { tableColumns } from "../constants";
import Modal from "../Components/Modal";
import Spinner from "../Components/Spinner";
import { usersApi } from "../api";

export const formActions = {
  EDIT: "EDIT",
  DELETE: "DELETE"
};

export default function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(true);
  const history = useHistory();

  const fetchUsers = () => {
    usersApi.getUsers().then(function (response) {
      let data = response?.data || [];
      setListOfUsers(data);
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        setIsFetchingData(false);
      });
  }


  const deleteUser = (userId) => {
    setIsFetchingData(true);
    setDeleteModalOpen(false);
    usersApi.deleteUser(userId).then(function (response) {
      let rowIndex = listOfUsers.findIndex((item) => item.id === userId);
      if (rowIndex >= 0) {
        listOfUsers.splice(rowIndex, 1);
        setListOfUsers([...listOfUsers]);
      }
      setIsFetchingData(false);
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        setIsFetchingData(false);
      });
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (listOfUsers?.length) {
      localStorage.setItem("listOfUsers", JSON.stringify(listOfUsers));
    }
  }, [listOfUsers]);

  const deleteRow = (row) => {
    deleteUser(row?.id)
  };

  const actionHandler = (action, row, column) => {
    let rowId = row?.id;
    switch (action) {
      case formActions.EDIT: {
        history.push(`/register/${rowId}`)
        return;
      }
      case formActions.DELETE: {
        setDeleteModalOpen(true);
        setSelectedRow(row);
        return;
      }
    }
  };

  return (
    <div className="user-list">
      {isFetchingData ? <div className="spinner-container"><Spinner /></div> : null}
      <Table
        data={listOfUsers}
        actionHandler={actionHandler}
        columns={tableColumns}
      />

      <Modal
        content={"Are you sure you want to delete ?"}
        isOpen={isDeleteModalOpen}
        data={selectedRow}
        onCancel={() => setDeleteModalOpen(false)}
        onAction={deleteRow}
      />
    </div>
  );
}



// GET access resource
// POST To Add new resouce
// PUT Replace/modify
// PATCH // modify 
// DELETE // Delete 