import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
function ExecutorCompensation({
  setShowExecutor2,
  setShowExecutorCompensation,
  setShowExecutor2Form,
  setShowExecutorForm,
  executorRequired2,
  executorRequired,
  executorCompensationAmount,
  setExecutorCompensation,
  executorCompensation,
  handleCompensationSubmit,
}) {
  const compensationSchema = yup.object({
    compensation:
      executorCompensation == "no"
        ? yup.string()
        : yup.string().required("Compensation amount is Required"),
  });
  const handleSubmit = (vals) => {
    handleCompensationSubmit(vals);
  };
  const goBack = () => {
    setShowExecutorCompensation(false);
    if (executorRequired2 == "yes") {
      setShowExecutor2Form(true);
    } else {
      setShowExecutor2(true);
    }
  };
  return (
    <div className="bhoechie-tab-content active row">
      <center>
        <h2 style={{ marginBottom: "50px" }}>
          Do you want to compensate the{" "}
          <span
            className="hovertext"
            data-hover="Executor is a person who is appointed by the person making the Will to take action on all the wishes as per the Will.
                      Executor can be any person who is a beneficiary in the Will or any other trusted person like family friend, lawyer or CA who can assist the family to act as per your wishes in the Will.
                      Though it is not mandatory to appoint an Executor, however it is recommended to appoint an Executor in Will document for smooth and faster distribution of assets."
          >
            Executor
          </span>
          ?(optional)
        </h2>

        <div
          className="radio-inline mx-2"
          style={{ display: "inline-block", fontWeight: "600" }}
        >
          <label>
            <input
              type="radio"
              name="executor"
              value="yes"
              checked={executorCompensation === "yes"}
              onChange={(e) => {
                setExecutorCompensation(e.target.value);
              }}
            />{" "}
            Yes
          </label>
        </div>
        <div
          className="radio-inline mx-2"
          style={{ display: "inline-block", fontWeight: "600" }}
        >
          <label>
            <input
              type="radio"
              name="executor"
              value="no"
              checked={executorCompensation === "no"}
              onChange={(e) => {
                setExecutorCompensation(e.target.value);
              }}
            />{" "}
            No
          </label>
        </div>

        <Formik
          initialValues={
            executorCompensationAmount
              ? executorCompensationAmount
              : { compensation: "" }
          }
          validationSchema={compensationSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
          }}
        >
          {(formikProps) => (
            <form>
              <div style={{ textAlign: "left" }} className="col-sm-12">
                {executorCompensation == "yes" && (
                  <div style={{ width: "42rem", margin: "3rem auto" }}>
                    <label htmlFor="hname">Compensation Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      id="hname"
                      placeholder="Compensation (if any)"
                      name="hname"
                      onChange={formikProps.handleChange("compensation")}
                      value={formikProps.values.compensation}
                      onBlur={formikProps.handleBlur("compensation")}
                    />
                    <p style={{ color: "red" }}>
                      {formikProps.touched.compensation &&
                        formikProps.errors.compensation}
                    </p>
                  </div>
                )}
              </div>
              <br />
              <br />
              <div style={{ marginTop: "7rem" }}>
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

export default ExecutorCompensation;
