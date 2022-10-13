import { Formik, FieldArray } from "formik";
import React from "react";

const Childrens = ({
  haveSiblings,
  haveChildrens,
  haveSiblings2,
  haveChildrens2,
  setShowJointWill,
  setShowOnBehalf,
  firstFormValues,
  showSiblings,
  showSiblings2,
  childrenData,
  childrenData2,
  childrensDataCallBack,
  childrensData2CallBack,
  jointWillData,
  showChildrens,
  showChildrens2,
  setShowChildrens,
  setShowChildrens2,
  setShowFamily,
  setShowSiblings,
  setShowSiblings2,
}) => {
  const [error, setError] = React.useState(false);
  let cd2 = childrenData2
    ? childrenData2
    : { childrens: [{ type: "", name: "", age: "" }] };
  let cd1 = childrenData
    ? childrenData
    : { childrens: [{ type: "", name: "", age: "" }] };
  const initialValues = showChildrens2 ? cd2 : cd1;

  let handleSubmit = (values) => {
    setError(false);
    for (let child of values.childrens) {
      if (child.type == "Select any" || child.type == "")
        return setError("Please select child gender");
      if (child.name.trim() == "") return setError("Please enter a valid name");
      if (isNaN(parseInt(child.age)))
        return setError("Please enter a valid age");
    }
    if (!jointWillData) {
      childrensDataCallBack(values);
    } else {
      childrensData2CallBack(values);
    }
  };
  const goBack = () => {
    if (
      firstFormValues.willFor == "Jointly with a relative" &&
      showChildrens2
    ) {
      if (haveSiblings2 == "yes") {
        setShowChildrens2(false);
        setShowSiblings2(true);
      } else {
        setShowChildrens2(false);
        setShowJointWill(true);
      }
    } else {
      if (firstFormValues.willFor == "On behalf of someone else") {
        if (haveSiblings == "yes") {
          setShowChildrens(false);
          setShowSiblings(true);
          setShowOnBehalf(false);
        } else {
          setShowChildrens(false);
          setShowSiblings(false);
          setShowOnBehalf(true);
        }
      } else {
        if (haveSiblings == "yes") {
          setShowChildrens(false);
          setShowSiblings(true);
          setShowFamily(false);
        } else {
          setShowChildrens(false);
          setShowSiblings(false);
          setShowFamily(true);
        }
      }
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
      <h2>Let’s get to know your Children</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formikProps) => (
          <>
            <FieldArray name="childrens">
              {({ insert, remove, push }) => (
                <>
                  {formikProps.values.childrens.length > 0 &&
                    formikProps.values.childrens.map((friend, index) => (
                      <>
                        <div
                          style={{ textAlign: "left" }}
                          className="form-group col-sm-3"
                        >
                          <label htmlFor="inputbro">Daughter / Son</label>
                          <select
                            name={`childrens.${index}.type`}
                            id="inputbro"
                            className="form-control"
                            value={formikProps.values.childrens[index].type}
                            onChange={formikProps.handleChange(
                              `childrens.${index}.type`
                            )}
                            onBlur={formikProps.handleBlur(
                              `childrens.${index}.type`
                            )}
                          >
                            <option selected value="Select any">
                              Select any
                            </option>
                            <option value="Daughter">Daughter</option>
                            <option value="Son">Son</option>
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
                            name={`childrens.${index}.name`}
                            value={formikProps.values.childrens[index].name}
                            onChange={formikProps.handleChange(
                              `childrens.${index}.name`
                            )}
                            onBlur={formikProps.handleBlur(
                              `childrens.${index}.name`
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
                            name={`childrens.${index}.age`}
                            value={formikProps.values.childrens[index].age}
                            onChange={formikProps.handleChange(
                              `childrens.${index}.age`
                            )}
                            onBlur={formikProps.handleBlur(
                              `childrens.${index}.age`
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
                      onClick={goBack}
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
                        marginRight: "2rem",
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

export default Childrens;
