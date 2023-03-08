import React, { useState, useEffect } from "react";
import { useHistory  } from "react-router-dom";
import Table from "../../Components/Table";
import { tableColumns } from "../../constants";
import Modal from "../../Components/Modal";
import Spinner from "../../Components/Spinner";
import { usersApi } from "../../api";
import { userListSelector} from "../../selectors";
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserAction } from "../../actions";

export const formActions = {
  EDIT: "EDIT",
  DELETE: "DELETE"
};

export default function UserList() {
  const dispatch = useDispatch()
  const listOfUsers = useSelector(userListSelector);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const history = useHistory();

  const deleteUser = (userId) => {
    setIsFetchingData(true);
    setDeleteModalOpen(false);
    usersApi.deleteUser(userId).then(function (response) {
      let rowIndex = listOfUsers.findIndex((item) => item.id === userId);
      if (rowIndex >= 0) {
        dispatch(deleteUserAction({id : userId}))
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

  console.log("userList", listOfUsers);

  return (
    <div className="user-list">
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