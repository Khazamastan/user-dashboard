import React, { useState, useEffect } from "react";
import nextId from "react-id-generator";
import { useHistory, useParams  } from "react-router-dom";

import Form from "../Components/Form";
import { formItems } from "../constants";
import { usersApi } from "../api";
import Spinner from "../Components/Spinner";

export default function Register(props) {
  const history = useHistory();
  const userId = props?.match?.params?.id;
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    address: "",
    mobileNumber: "",
    emailId: "",
    passport: ""
  });
  const [isLoading, setLoading] = useState(false);
  const onChangeForm = (e) => {
    const value = e?.target?.value;
    const key = e?.target?.name;
    const updatedFormData = Object.assign({}, { ...formData, [key]: value });
    setFormData(updatedFormData);
  };

  const fetchUser = (userId) => {
    setLoading(true);
    usersApi.getUser(userId).then(function (response) {
      let data = response?.data || {};
      setFormData(data);
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }

  const resetFormData = () => {
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      address: "",
      mobileNumber: "",
      emailId: "",
      passport: ""
    });
  };

  const onSubmit = () => {
    // TODO Validation
    let userData = Object.assign({}, { ...formData });
    setLoading(true);
    usersApi.registerUser(userData).then(function (response) {
      // navigate to List of Users or show Notification
    history.push("/users");
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        setLoading(false)
      });
    resetFormData();
  };

  useEffect(() => {
    if(userId){
      fetchUser(userId);
    }
  }, [])

  return (
    <div className="register">
      {isLoading ? <div className="spinner-container"><Spinner /></div> : null}
      <Form
        formTitle="Register"
        formData={formData}
        submitText={userId ? "Update" : "Create"}
        formItems={formItems}
        onChangeForm={onChangeForm}
        onSubmit={onSubmit}
      />
    </div>
  );
}