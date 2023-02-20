export const formItems = [
  {
    filedName: "First Name",
    type: "text",
    key: "firstName"
  },
  {
    filedName: "Last Name",
    type: "text",
    key: "lastName"
  },
  {
    filedName: "Gender",
    type: "select",
    key: "gender",
    options: ["Male", "Fe-Male"]
  },
  {
    filedName: "Age",
    type: "number",
    key: "age"
  },
  {
    filedName: "Mobile Number",
    type: "number",
    key: "mobileNumber"
  },
  {
    filedName: "Email Id",
    type: "email",
    key: "emailId"
  },
  {
    filedName: "Address",
    type: "textarea",
    key: "address"
  },
  {
    filedName: "Passport",
    type: "text",
    key: "passport"
  }
];

export const tableColumns = [
  {
    columnName: "First Name",
    key: "firstName"
  },
  {
    columnName: "Last Name",
    key: "lastName"
  },
  {
    columnName: "Gender",
    key: "gender"
  },
  {
    columnName: "Age",
    key: "age"
  },
  {
    columnName: "Mobile Number",
    key: "mobileNumber"
  },
  {
    columnName: "Email Id",
    key: "emailId"
  },
  {
    columnName: "Address",
    key: "address"
  },
  {
    columnName: "Passport",
    key: "passport"
  },
  {
    columnName: "",
    className: "text-center",
    key: "actions",
    cellRenderer: () => {}
  }
];
