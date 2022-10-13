import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
function ExecutorDataForm({
  setShowExecutor,
  setShowExecutorForm,
  executorDetails,
  setExeceutorDetails2,
  setExeceutorDetails,
  handleExecutorDataSubmit,
  handleExecutor2DataSubmit,
}) {
  const [localData, setLocalData] = React.useState("false");
  const selfFormSchema = yup.object({
    name: yup.string().required("Name is Required"),
    childOf: yup.string().required("Your parent name is required"),
    age: yup
      .string()
      .required("Age is Required")
      .test("is-valid-age", "Age must be between 18 to 99", (val) => {
        return parseInt(val) >= 18 && parseInt(val) <= 99;
      }),
    occupation: yup.string().required("Occupation is required"),
    address: yup.string().required("Address is required"),
    pincode: yup
      .string()
      .required("Pin Code is required")
      .test("is-valid-pin", "Pin should be of 6 digits only", (val) => {
        return val && val.length == 6;
      }),
  });

  const handleSubmit = (vals) => {
    console.log(vals);
    setLocalData(vals);
    setExeceutorDetails(vals);
    console.log("Executor 1", executorDetails);

    handleExecutorDataSubmit(vals);
    // } else {
    //   handleExecutor2DataSubmit(vals);
    // }
    // setFirstFormValues(vals);
    // setFirstFormData(vals);
    // firstFormCallBack(vals);
    // setSelectedPage("second");
  };
  const goBack = () => {
    setShowExecutorForm(false);
    setShowExecutor(true);
  };
  return (
    <div className="bhoechie-tab-content active" style={{ marginRight: 20 }}>
      <center>
        <Formik
          initialValues={
            executorDetails
              ? executorDetails
              : {
                  name: "",
                  childOf: "",
                  age: "",
                  occupation: "",
                  address: "",
                  pincode: "",
                }
          }
          validationSchema={selfFormSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
          }}
        >
          {(formikProps) => (
            <form>
              <div className="row">
                <h2 style={{ marginBottom: "3rem" }}>
                  Details of the Executor
                </h2>
                <div style={{ textAlign: "left" }} className="col-sm-4">
                  <label style={{ textAlign: "left" }} htmlFor="name">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Executor name"
                    name="name"
                    value={formikProps.values.name}
                    onChange={formikProps.handleChange("name")}
                    onBlur={formikProps.handleBlur("name")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.name && formikProps.errors.name}
                  </p>
                </div>
                <div style={{ textAlign: "left" }} className="col-sm-4">
                  <label htmlFor="childOf">Son/Daughter of:</label>
                  <input
                    type="childOf"
                    className="form-control"
                    id="childOf"
                    placeholder="Executor parent name"
                    name="childOf"
                    onChange={formikProps.handleChange("childOf")}
                    value={formikProps.values.childOf}
                    onBlur={formikProps.handleBlur("childOf")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.childOf && formikProps.errors.childOf}
                  </p>
                </div>
                <div style={{ textAlign: "left" }} className="col-sm-4">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Executor age in years"
                    name="age"
                    onChange={formikProps.handleChange("age")}
                    value={formikProps.values.age}
                    onBlur={formikProps.handleBlur("age")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.age && formikProps.errors.age}
                  </p>
                </div>

                <div style={{ textAlign: "left" }} className="col-sm-4">
                  <label htmlFor="occupation">Occupation</label>
                  <input
                    className="form-control"
                    id="occupation"
                    placeholder="Executor occupation"
                    name="occupation"
                    rows={1}
                    onChange={formikProps.handleChange("occupation")}
                    value={formikProps.values.occupation}
                    onBlur={formikProps.handleBlur("occupation")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.occupation &&
                      formikProps.errors.occupation}
                  </p>
                </div>
                <div style={{ textAlign: "left" }} className="col-sm-4">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    placeholder="Executor address"
                    name="address"
                    rows={1}
                    onChange={formikProps.handleChange("address")}
                    value={formikProps.values.address}
                    onBlur={formikProps.handleBlur("address")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.address && formikProps.errors.address}
                  </p>
                </div>
                <div style={{ textAlign: "left" }} className="col-sm-4">
                  <label htmlFor="pin">Pin Code</label>
                  <input
                    type="pin"
                    className="form-control"
                    id="name"
                    placeholder="Area pin code"
                    name="pin"
                    onChange={formikProps.handleChange("pincode")}
                    value={formikProps.values.pincode}
                    onBlur={formikProps.handleBlur("pincode")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.pincode && formikProps.errors.pincode}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: "8rem" }}>
                <a
                  onClick={goBack}
                  className="mx-2"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "1px",
                    display: "inline-block",
                    float: "left",
                    marginTop: "20px",
                    marginBottom: "20px",
                    padding: "10px 28px",
                    borderRadius: "5px",
                    transition: "0.5s",
                    color: "#fff",
                    background: "#4D4D4D",
                  }}
                >
                  Previous
                </a>

                <a
                  href="#"
                  className="mx-3"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    float: "right",
                    marginTop: "20px",
                    marginBottom: "20px",
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "1px",
                    display: "inline-block",
                    padding: "10px 28px",
                    borderRadius: "5px",
                    transition: "0.5s",
                    color: "#fff",
                    background: "#4D4D4D",
                  }}
                  onClick={formikProps.handleSubmit}
                >
                  Next
                </a>
              </div>
            </form>
          )}
        </Formik>
      </center>
    </div>
  );
}

export default ExecutorDataForm;
