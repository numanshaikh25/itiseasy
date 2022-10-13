import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import React from "react";

const Siblings = ({
  setShowOnBehalf,
  setShowJointWill,
  setShowSiblings2,
  firstFormValues,
  setShowFamily,
  siblingDataCallBack,
  siblingData2CallBack,
  jointWillData,
  setShowSiblings,
  showSiblings2,
  showSiblings,
  siblingData,
  siblingData2,
}) => {
  const [error, setError] = React.useState(false);
  console.log(siblingData);
  let sd2 = siblingData2
    ? siblingData2
    : { siblings: [{ type: "", name: "", age: "" }] };
  let sd1 = siblingData
    ? siblingData
    : { siblings: [{ type: "", name: "", age: "" }] };
  // const initialValues = if()
  const initialValues = showSiblings2 ? sd2 : sd1;
  console.log(initialValues);
  let handleAddSublings = (values) => {
    console.log(values);
    setError(false);
    for (let sibling of values.siblings) {
      if (sibling.type == "Select any" || sibling.type == "")
        return setError("Please select sibling type");
      if (sibling.name.trim() == "")
        return setError("Please enter a valid name");
      if (isNaN(parseInt(sibling.age)))
        return setError("Please enter a valid age");
    }
    if (!jointWillData) {
      siblingDataCallBack(values);
    } else {
      siblingData2CallBack(values);
    }
  };

  const handleBack = () => {
    if (firstFormValues.willFor == "Jointly with a relative" && showSiblings2) {
      setShowSiblings2(false);
      setShowJointWill(true);
    } else if (firstFormValues.willFor == "On behalf of someone else") {
      setShowSiblings(false);
      setShowOnBehalf(true);
    } else {
      setShowSiblings(false);
      setShowFamily(true);
    }
  };

  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Let’s get to know your Siblings</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleAddSublings(values);
        }}
      >
        {(formikProps) => (
          <>
            <FieldArray name="siblings">
              {({ insert, remove, push }) => (
                <>
                  {formikProps.values.siblings.length > 0 &&
                    formikProps.values.siblings.map((friend, index) => (
                      <>
                        <div
                          style={{ textAlign: "left" }}
                          className="form-group col-sm-3"
                        >
                          <label htmlFor="inputbro">Brother / Sister</label>
                          <select
                            name={`siblings.${index}.type`}
                            id="inputbro"
                            className="form-control"
                            value={formikProps.values.siblings[index].type}
                            onChange={formikProps.handleChange(
                              `siblings.${index}.type`
                            )}
                            onBlur={formikProps.handleBlur(
                              `siblings.${index}.type`
                            )}
                          >
                            <option selected value="Select any">
                              Select any
                            </option>
                            <option value="Brother">Brother</option>
                            <option value="Sister">Sister</option>
                          </select>
                        </div>

                        <div
                          style={{ textAlign: "left", borderWidth: 5 }}
                          className="col-sm-4"
                        >
                          <label htmlFor="bname">Name</label>
                          <input
                            type="bname"
                            className="form-control"
                            id="bname"
                            placeholder="Name"
                            name={`siblings.${index}.name`}
                            value={formikProps.values.siblings[index].name}
                            onChange={formikProps.handleChange(
                              `siblings.${index}.name`
                            )}
                            onBlur={formikProps.handleBlur(
                              `siblings.${index}.name`
                            )}
                          />
                        </div>

                        <div style={{ textAlign: "left" }} className="col-sm-2">
                          <label htmlFor="bage">Age</label>
                          <input
                            type="number"
                            className="form-control"
                            id="bage"
                            placeholder="Age in years"
                            name={`siblings.${index}.age`}
                            value={formikProps.values.siblings[index].age}
                            onChange={formikProps.handleChange(
                              `siblings.${index}.age`
                            )}
                            onBlur={formikProps.handleBlur(
                              `siblings.${index}.age`
                            )}
                          />
                        </div>

                        <div
                          style={{ textAlign: "left" }}
                          className="col-sm-1"
                          onClick={() => push({ type: "", name: "", age: "" })}
                        >
                          <label htmlFor="bage">Add</label>
                          <a
                            href="#"
                            style={{ cursor: "pointer", fontSize: "25px" }}
                          >
                            <i className="bi-person-plus" />
                          </a>
                        </div>

                        <div
                          style={{
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          className="col-sm-1"
                          onClick={() => remove(index)}
                        >
                          <label htmlFor="bage">Remove</label>
                          <a
                            href="#"
                            style={{ cursor: "pointer", fontSize: "25px" }}
                          >
                            <i className="bi-person-x" />
                          </a>
                        </div>
                      </>
                    ))}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "17rem",
                      bottom: 0,
                    }}
                  >
                    <a
                      onClick={handleBack}
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        cursor: "pointer",
                        fontWeight: 500,
                        float: "left",
                        fontSize: "14px",
                        letterSpacing: "1px",
                        display: "inline-block",
                        padding: "10px 28px",
                        borderRadius: "5px",
                        marginBottom: "20px",
                        transition: "0.5s",
                        color: "#fff",
                        background: "#4D4D4D",
                      }}
                    >
                      Previous
                    </a>
                    {error && <h4 style={{ color: "#484848" }}>{error}</h4>}
                    <a
                      onClick={formikProps.handleSubmit}
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        cursor: "pointer",
                        marginBottom: "20px",
                        marginRight: "20px",
                        float: "right",
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
                    >
                      Next
                    </a>
                  </div>
                </>
              )}
            </FieldArray>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Siblings;
