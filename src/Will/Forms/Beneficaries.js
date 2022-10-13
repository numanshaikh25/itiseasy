import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import React from "react";

const Beneficaries = ({
  beneficaryData,
  setShowBeneficaies,
  setShowOnBehalf,
  setShowFamily,
  setShowSiblings,
  setShowChildrens,
  setShowSiblings2,
  setShowChildrens2,
  beneficaryDataCallBack,
  firstFormValues,
  haveChildrens,
  haveSiblings,
  haveChildrens2,
  haveSiblings2,
}) => {
  const [error, setError] = React.useState(false);
  const initialValues = beneficaryData;

  let handleSubmit = (values) => {
    setError(false);
    for (let beneficar of values.beneficaries) {
      if (beneficar.type == "Select any" || beneficar.type == "")
        return setError("Please select your relation with beneficiary");
      if (beneficar.name.trim() == "")
        return setError("Please enter a valid name");
      if (isNaN(parseInt(beneficar.age)))
        return setError("Please enter a valid age");
    }

    beneficaryDataCallBack(values);
  };

  const goBack = () => {
    if (firstFormValues.willFor != "Jointly with a relative") {
      if (haveChildrens == "yes") {
        setShowBeneficaies(false);
        setShowChildrens(true);
      } else if (haveSiblings == "yes") {
        setShowBeneficaies(false);
        setShowSiblings(true);
      } else {
        setShowBeneficaies(false);
        if (firstFormValues.willFor == "On behalf of someone else") {
          setShowOnBehalf(true);
        } else {
          setShowFamily(true);
        }
      }
    } else {
      if (haveChildrens2 == "yes") {
        setShowBeneficaies(false);
        setShowChildrens2(true);
      } else if (haveSiblings2 == "yes") {
        setShowBeneficaies(false);
        setShowSiblings2(true);
      } else if (haveChildrens == "yes") {
        setShowBeneficaies(false);
        setShowChildrens(true);
      } else if (haveSiblings == "yes") {
        setShowBeneficaies(false);
        setShowSiblings(true);
      } else {
        setShowBeneficaies(false);

        setShowFamily(true);
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
      <h2>Let’s add your Beneficaries</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formikProps) => (
          <>
            <FieldArray name="beneficaries">
              {({ insert, remove, push }) => (
                <>
                  {formikProps.values.beneficaries.length > 0 &&
                    formikProps.values.beneficaries.map((friend, index) => (
                      <>
                        <div
                          style={{ textAlign: "left" }}
                          className="form-group col-sm-3"
                        >
                          <label htmlFor="inputbro">Relationship</label>
                          <select
                            name={`beneficaries.${index}.type`}
                            id="inputbro"
                            className="form-control"
                            value={formikProps.values.beneficaries[index].type}
                            onChange={formikProps.handleChange(
                              `beneficaries.${index}.type`
                            )}
                            onBlur={formikProps.handleBlur(
                              `beneficaries.${index}.type`
                            )}
                          >
                            <option selected value="Select any">
                              Select any
                            </option>
                            <option value="Spouse">Spouse</option>
                            <option value="Child">Child</option>
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Brother">Brother</option>
                            <option value="Sister">Sister</option>
                            <option value="Friend">Friend</option>
                            <option value="Uncle">Uncle</option>
                            <option value="Uncle">Uncle</option>
                            <option value="Other">Other</option>
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
                            name={`beneficaries.${index}.name`}
                            value={formikProps.values.beneficaries[index].name}
                            onChange={formikProps.handleChange(
                              `beneficaries.${index}.name`
                            )}
                            onBlur={formikProps.handleBlur(
                              `beneficaries.${index}.name`
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
                            name={`beneficaries.${index}.age`}
                            onChange={formikProps.handleChange(
                              `beneficaries.${index}.age`
                            )}
                            onBlur={formikProps.handleBlur(
                              `beneficaries.${index}.age`
                            )}
                            value={formikProps.values.beneficaries[index].age}
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

export default Beneficaries;
