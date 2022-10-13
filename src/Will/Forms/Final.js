import React, { useRef } from "react";
import { Formik } from "formik";
import { useReactToPrint } from "react-to-print";
import * as yup from "yup";
import PrintForSelf from "../print/PrintForSelf";
function Final({
  setShowFinal,
  executorRequired,
  setShowExecutor,
  setShowExecutorCompensation,
  firstFormValues,
  finalPageData,
  setFinalPageData,
  fourthFormCallBack,
  jointWillData,
}) {
  let date_format = new Date();
  date_format =
    String(date_format.getMonth() + 1) +
    "-" +
    String(date_format.getDate()) +
    "-" +
    String(date_format.getFullYear());
  console.log(date_format);
  const [understand, setUnderstand] = React.useState("yes");
  const selfFormSchema = yup.object({
    hanleRemains: yup
      .string()
      .required("Last rites method is required")
      .test(
        "is-selected",
        "Please Select Last Rites Method For Person 1",
        (val) => {
          return val != "Select any";
        }
      ),
    hanleRemains2:
      firstFormValues.willFor == "Jointly with a relative"
        ? yup
            .string()
            .required("Last rites method is required")
            .test(
              "is-selected",
              "Please Select Last Rites Method For Person 1",
              (val) => {
                return val != "Select any";
              }
            )
        : yup.string(),
    hanleRemainsOther: yup.string().when("hanleRemains", {
      is: "Other",
      then: yup.string().required("Last rites method is required"),
    }),
    hanleRemainsOther2:
      firstFormValues.willFor == "Jointly with a relative"
        ? yup.string().when("hanleRemains2", {
            is: "Other",
            then: yup.string().required("Last rites method is required"),
          })
        : yup.string(),

    w1name: yup.string().required("Witness 1 name is required"),
    w1childOf: yup.string().required("Parent name required"),
    w1age: yup
      .string()
      .required("Age is Required")
      .test("is-valid-age", "Age must be between 18 to 99", (val) => {
        return parseInt(val) >= 18 && parseInt(val) <= 99;
      }),
    w1occupation: yup.string().required("Occupation is required"),
    w1address: yup.string().required("Address is required"),

    w2name: yup.string().required("Witness 1 name is required"),
    w2childOf: yup.string().required("Parent name required"),
    w2age: yup
      .string()
      .required("Age is Required")
      .test("is-valid-age", "Age must be between 18 to 99", (val) => {
        return parseInt(val) >= 18 && parseInt(val) <= 99;
      }),
    w2occupation: yup.string().required("Occupation is required"),
    w2address: yup.string().required("Address is required"),

    soundMindandBody: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
    supersedesExistingWill: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
    date: yup.date().min(new Date(date_format)).required("Date is required"),
    place: yup.string().required("Place is required"),

    // understandEnglish: yup.boolean().when("notUnderstandEnglish", {
    //   is: false,
    //   then: yup
    //     .boolean()
    //     .oneOf([true], "You must accept the terms and conditions"),
    // }),
    // notUnderstandEnglish: yup.boolean().when("understandEnglish", {
    //   is: false,
    //   then: yup
    //     .boolean()
    //     .oneOf([true], "You must accept the terms and conditions"),
    // }),
  });
  const selfRef = useRef();
  const jointRef = useRef();
  const behalfRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => selfRef.current,
  });
  const handleSubmit = (vals) => {
    console.log(vals);
    console.log("Understand");
    console.log(understand);
    vals.understand = understand;
    setFinalPageData(vals);
    // handlePrint();
    fourthFormCallBack();
  };
  const goBack = () => {
    setShowFinal(false);
    if (executorRequired == "yes") {
      setShowExecutorCompensation(true);
    } else {
      setShowExecutor(true);
    }
  };
  return (
    <div className="bhoechie-tab-content active">
      <div>
        <center>
          <Formik
            initialValues={
              finalPageData
                ? finalPageData
                : {
                    hanleRemains: "",
                    hanleRemainsOther: "",
                    hanleRemains2: "",
                    hanleRemainsOther2: "",

                    w1name: "",
                    w1childOf: "",
                    w1age: "",
                    w1occupation: "",
                    w1address: "",

                    w2name: "",
                    w2childOf: "",
                    w2age: "",
                    w2occupation: "",
                    w2address: "",

                    soundMindandBody: false,
                    supersedesExistingWill: false,
                    date: "",
                    place: "",
                  }
            }
            validationSchema={selfFormSchema}
            onSubmit={(values, actions) => {
              handleSubmit(values);
            }}
          >
            {(formikProps) => (
              <form>
                <h2>Let's finish</h2>
                <div className="col-sm-12">
                  <h2>Last Rites (optional)</h2>

                  <div
                    style={{ textAlign: "left" }}
                    className="form-group col-sm-12"
                  >
                    <label>
                      How do you want your remains to be handled after death?
                    </label>
                  </div>
                  {firstFormValues.willFor == "Jointly with a relative" ? (
                    <div className="row">
                      <div style={{ textAlign: "left" }} className="col-sm-6">
                        <h4>{firstFormValues.name}</h4>
                        <select
                          id="hanleRemains"
                          className="form-control"
                          onChange={formikProps.handleChange("hanleRemains")}
                          value={formikProps.values.hanleRemains}
                          onBlur={formikProps.handleBlur("hanleRemains")}
                        >
                          <option defaultValue>Select any</option>
                          <option>Cremated</option>
                          <option>Buried</option>
                          <option>As per my religion</option>
                          <option>Other</option>
                        </select>
                        <p style={{ color: "red" }}>
                          {formikProps.touched.hanleRemains &&
                            formikProps.errors.hanleRemains}
                        </p>
                      </div>
                      <div style={{ textAlign: "left" }} className="col-sm-6">
                        <h4 style={{ visibility: "hidden" }}>.</h4>
                        <input
                          id="hanleRemainsOther"
                          name="hanleRemainsOther"
                          type="text"
                          placeholder="Other"
                          className="form-control"
                          onChange={formikProps.handleChange(
                            "hanleRemainsOther"
                          )}
                          value={formikProps.values.hanleRemainsOther}
                          onBlur={formikProps.handleBlur("hanleRemainsOther")}
                        />
                        <p style={{ color: "red" }}>
                          {formikProps.touched.hanleRemainsOther &&
                            formikProps.errors.hanleRemainsOther}
                        </p>
                      </div>
                      <div style={{ textAlign: "left" }} className="col-sm-6">
                        <h4>{jointWillData.name}</h4>
                        <select
                          id="hanleRemains2"
                          className="form-control"
                          onChange={formikProps.handleChange("hanleRemains2")}
                          value={formikProps.values.hanleRemains2}
                          onBlur={formikProps.handleBlur("hanleRemains2")}
                        >
                          <option defaultValue>Select any</option>
                          <option>Cremated</option>
                          <option>Buried</option>
                          <option>As per my religion</option>
                          <option>Other</option>
                        </select>
                        <p style={{ color: "red" }}>
                          {formikProps.touched.hanleRemains2 &&
                            formikProps.errors.hanleRemains2}
                        </p>
                      </div>
                      <div style={{ textAlign: "left" }} className="col-sm-6">
                        <h4 style={{ visibility: "hidden" }}>.</h4>
                        <input
                          id="hanleRemainsOther"
                          name="hanleRemainsOther"
                          type="text"
                          placeholder="Other"
                          className="form-control"
                          onChange={formikProps.handleChange(
                            "hanleRemainsOther2"
                          )}
                          value={formikProps.values.hanleRemainsOther}
                          onBlur={formikProps.handleBlur("hanleRemainsOther2")}
                        />
                        <p style={{ color: "red" }}>
                          {formikProps.touched.hanleRemainsOther2 &&
                            formikProps.errors.hanleRemainsOther2}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="row">
                      <div style={{ textAlign: "left" }} className="col-sm-6">
                        <select
                          id="hanleRemains"
                          className="form-control"
                          onChange={formikProps.handleChange("hanleRemains")}
                          value={formikProps.values.hanleRemains}
                          onBlur={formikProps.handleBlur("hanleRemains")}
                        >
                          <option defaultValue>Select any</option>
                          <option>Cremated</option>
                          <option>Buried</option>
                          <option>As per my religion</option>
                          <option>Other</option>
                        </select>
                        <p style={{ color: "red" }}>
                          {formikProps.touched.hanleRemains &&
                            formikProps.errors.hanleRemains}
                        </p>
                      </div>
                      <div style={{ textAlign: "left" }} className="col-sm-6">
                        <input
                          id="hanleRemainsOther"
                          name="hanleRemainsOther"
                          type="text"
                          placeholder="Other"
                          className="form-control"
                          onChange={formikProps.handleChange(
                            "hanleRemainsOther"
                          )}
                          value={formikProps.values.hanleRemainsOther}
                          onBlur={formikProps.handleBlur("hanleRemainsOther")}
                        />
                        <p style={{ color: "red" }}>
                          {formikProps.touched.hanleRemainsOther &&
                            formikProps.errors.hanleRemainsOther}
                        </p>
                      </div>
                    </div>
                  )}

                  <h4>
                    My{" "}
                    <span
                      className="hovertext"
                      data-hover="Any adult (age 18 and above ), who is of sound mind, and is not named in the will (NOT a beneficiary) can be a witness. You will need two witnesses."
                    >
                      Witnesses
                    </span>{" "}
                    are ( Two compulsory )
                  </h4>
                  <div className="row">
                    <div
                      style={{ borderRight: "dashed gray", borderWidth: "2px" }}
                      className="col-sm-6"
                    >
                      <h4 style={{ textAlign: "left" }}>Witness 1</h4>
                      <div className="row">
                        <div className="col-sm-6">
                          <label></label>
                          <input
                            type="name"
                            className="form-control"
                            id="w1name"
                            placeholder="Witness1 name"
                            name="w1name"
                            onChange={formikProps.handleChange("w1name")}
                            value={formikProps.values.w1name}
                            onBlur={formikProps.handleBlur("w1name")}
                          />
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w1name &&
                              formikProps.errors.w1name}
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <label></label>
                          <input
                            type="name"
                            className="form-control"
                            id="w1childOf"
                            placeholder="Son/Daughter of"
                            name="w1childOf"
                            onChange={formikProps.handleChange("w1childOf")}
                            value={formikProps.values.w1childOf}
                            onBlur={formikProps.handleBlur("w1childOf")}
                          />
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w1childOf &&
                              formikProps.errors.w1childOf}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <label></label>
                          <input
                            type="number"
                            className="form-control"
                            id="age"
                            placeholder="Age"
                            name="age"
                            onChange={formikProps.handleChange("w1age")}
                            value={formikProps.values.w1age}
                            onBlur={formikProps.handleBlur("w1age")}
                          />
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w1age &&
                              formikProps.errors.w1age}
                          </p>
                        </div>
                        <div className="col-sm-8">
                          <label></label>
                          <input
                            type="text"
                            className="form-control"
                            id="w1occupation"
                            placeholder="Occupation"
                            name="w1occupation"
                            onChange={formikProps.handleChange("w1occupation")}
                            value={formikProps.values.w1occupation}
                            onBlur={formikProps.handleBlur("w1occupation")}
                          />
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w1occupation &&
                              formikProps.errors.w1occupation}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <label for="address"></label>
                          <textarea
                            className="form-control"
                            id="w1address"
                            placeholder="Address"
                            name="w1address"
                            rows="1"
                            onChange={formikProps.handleChange("w1address")}
                            value={formikProps.values.w1address}
                            onBlur={formikProps.handleBlur("w1address")}
                          ></textarea>
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w1address &&
                              formikProps.errors.w1address}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <h4 style={{ textAlign: "left" }}>Witness 2</h4>
                      <div className="row">
                        <div className="col-sm-6">
                          <label></label>
                          <input
                            type="name"
                            className="form-control"
                            id="w2name"
                            placeholder="Witness2 name"
                            name="w2name"
                            onChange={formikProps.handleChange("w2name")}
                            value={formikProps.values.w2name}
                            onBlur={formikProps.handleBlur("w2name")}
                          />
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w2name &&
                              formikProps.errors.w2name}
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <label></label>
                          <input
                            type="name"
                            className="form-control"
                            id="w2childOf"
                            placeholder="Son/Daughter of"
                            name="w2childOf"
                            onChange={formikProps.handleChange("w2childOf")}
                            value={formikProps.values.w2childOf}
                            onBlur={formikProps.handleBlur("w2childOf")}
                          />
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w2childOf &&
                              formikProps.errors.w2childOf}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <label></label>
                          <input
                            type="number"
                            className="form-control"
                            id="w2age"
                            placeholder="Age"
                            name="w2age"
                            onChange={formikProps.handleChange("w2age")}
                            value={formikProps.values.w2age}
                            onBlur={formikProps.handleBlur("w2age")}
                          />
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w2age &&
                              formikProps.errors.w2age}
                          </p>
                        </div>
                        <div className="col-sm-8">
                          <label></label>
                          <input
                            type="text"
                            className="form-control"
                            id="w2occupation"
                            placeholder="Occupation"
                            name="w2occupation"
                            onChange={formikProps.handleChange("w2occupation")}
                            value={formikProps.values.w2occupation}
                            onBlur={formikProps.handleBlur("w2occupation")}
                          />
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w2occupation &&
                              formikProps.errors.w2occupation}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <label for="address"></label>
                          <textarea
                            className="form-control"
                            id="w2address"
                            placeholder="Address"
                            name="w2address"
                            rows="1"
                            onChange={formikProps.handleChange("w2address")}
                            value={formikProps.values.w2address}
                            onBlur={formikProps.handleBlur("w2address")}
                          ></textarea>
                          <p style={{ color: "red" }}>
                            {formikProps.touched.w2address &&
                              formikProps.errors.w2address}
                          </p>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12" style={{ textAlign: "left" }}>
                    <label
                      style={{ marginLeft: "0px" }}
                      className="checkbox-inline"
                    >
                      <input
                        type="checkbox"
                        name="soundMindandBody"
                        onChange={formikProps.handleChange("soundMindandBody")}
                        value={formikProps.values.soundMindandBody}
                        onBlur={formikProps.handleBlur("soundMindandBody")}
                      />{" "}
                      I / We hereby declare that I am creating this will with a
                      sound mind and body.
                    </label>
                    <p style={{ color: "red" }}>
                      {formikProps.touched.soundMindandBody &&
                        formikProps.errors.soundMindandBody}
                    </p>
                    <label
                      style={{ marginLeft: "0px" }}
                      className="checkbox-inline"
                    >
                      <input
                        type="checkbox"
                        name="supersedesExistingWill"
                        onChange={formikProps.handleChange(
                          "supersedesExistingWill"
                        )}
                        value={formikProps.values.supersedesExistingWill}
                        onBlur={formikProps.handleBlur(
                          "supersedesExistingWill"
                        )}
                      />{" "}
                      I / We understand that this will supersedes my/ our
                      existing wills, if any.
                    </label>
                    <p style={{ color: "red" }}>
                      {formikProps.touched.supersedesExistingWill &&
                        formikProps.errors.supersedesExistingWill}
                    </p>
                    <h3 style={{ fontSize: "18px" }}>
                      English Language Declaration
                    </h3>
                    <span>
                      <label className="checkbox-inline">
                        <input
                          type="radio"
                          name="understand"
                          value="yes"
                          defaultChecked={understand === "yes"}
                          onChange={(e) => setUnderstand(e.target.value)}
                        />
                        I / We declare that I/ we understand English and have
                        read and understood the TnC and I/we agree to the same.
                      </label>
                      <h3
                        style={{
                          fontSize: "15px",
                          marginTop: "-2px",
                          textAlign: "center",
                        }}
                      >
                        OR
                      </h3>
                      <label className="checkbox-inline">
                        <input
                          type="radio"
                          name="understand"
                          value="no"
                          defaultChecked={understand === "no"}
                          onChange={(e) => setUnderstand(e.target.value)}
                        />{" "}
                        I / We hereby declare that I/We do not understand
                        English and have taken help of a reliable source who has
                        helped me/us with the creation of my WILL.
                      </label>
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <br />
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder="Select date"
                        name="date"
                        onChange={formikProps.handleChange("date")}
                        value={formikProps.values.date}
                        onBlur={formikProps.handleBlur("date")}
                      />
                      <p style={{ color: "red" }}>
                        {formikProps.touched.date && formikProps.errors.date}
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        id="place"
                        placeholder="Place"
                        name="place"
                        onChange={formikProps.handleChange("place")}
                        value={formikProps.values.place}
                        onBlur={formikProps.handleBlur("place")}
                      />
                      <p style={{ color: "red" }}>
                        {formikProps.touched.place && formikProps.errors.place}
                      </p>
                    </div>
                  </div>
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
                    Generate will
                  </a>
                  <br />
                </div>
              </form>
            )}
          </Formik>
        </center>
        {/* <div ref={selfRef} style={{ display: "none" }}>
          <PrintForSelf printRef={selfRef} />
        </div> */}
      </div>
    </div>
  );
}

export default Final;
