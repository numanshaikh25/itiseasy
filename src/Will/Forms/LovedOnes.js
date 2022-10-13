import { Formik } from "formik";
import * as yup from "yup";
import React, { useEffect } from "react";
import Siblings from "./Siblings";
import Childrens from "./Childrens";
import Beneficaries from "./Beneficaries";
import JointWill from "./JointWill";
import OnBehalf from "./OnBehalf";

const LovedOnes = ({
  beneficaryData,
  setShowBeneficaies,
  showBenficaries,
  onBehalfData,
  childrenData,
  childrenData2,
  siblingData,
  siblingData2,
  familyData,
  setSelectedPage,
  haveChildrens,
  setHaveChildrens,
  haveChildrens2,
  setHaveChildrens2,
  haveSiblings,
  setHaveSiblings,
  haveSiblings2,
  setHaveSiblings2,
  firstFormValues,
  secondFormCallBack,
  setChildrenData,
  setSiblingData,
  setFamilytData,
  setOnBehalfData,
  jointWillData,
  setSiblingData2,
  setChildrenData2,
  setJointWillData,
  showFamily,
  setShowFamily,
  showOnBehalf,
  setShowOnBehalf,
}) => {
  // let [showFamily, setShowFamily] = React.useState(
  //   firstFormValues.willFor == "For myself" ||
  //     firstFormValues.willFor == "Jointly with a relative"
  //     ? true
  //     : false
  // );
  let [showJointWill, setShowJointWill] = React.useState(false);
  // let [showOnBehalf, showOnBehalf] = React.useState(
  //   firstFormValues.willFor == "On behalf of someone else" ? true : false
  // );
  let [showSiblings, setShowSiblings] = React.useState(false);
  let [showChildrens, setShowChildrens] = React.useState(false);

  let [showSiblings2, setShowSiblings2] = React.useState(false);
  let [showChildrens2, setShowChildrens2] = React.useState(false);

  const familyFormSchema = yup.object({
    fatherName: yup.string().required("Father Name is Required"),
    motherName: yup.string().required("Mother Name is Required"),
    spouseName:
      firstFormValues.maritalStatus == "Married"
        ? yup.string().required("Spouse name is required")
        : yup.string(),
  });

  // When Family Data is Submitted
  const handleFamilySubmit = (values) => {
    setFamilytData(values);
    if (haveSiblings == "yes") {
      setShowFamily(false);
      setShowSiblings(true);
      setShowChildrens(false);
      setShowBeneficaies(false);
    } else if (haveChildrens == "yes") {
      setShowFamily(false);
      setShowSiblings(false);
      setShowChildrens(true);
      setShowBeneficaies(false);
    } else {
      if (firstFormValues.willFor == "Jointly with a relative") {
        setShowFamily(false);
        setShowSiblings(false);
        setShowChildrens(false);
        setShowJointWill(true);
      } else {
        setShowFamily(false);
        setShowSiblings(false);
        setShowChildrens(false);
        setShowBeneficaies(true);
      }
    }
  };

  // When Siblings Data is Submitted
  const siblingDataCallBack = (values) => {
    setSiblingData(values);
    if (haveChildrens == "yes") {
      setShowFamily(false);
      setShowSiblings(false);
      setShowChildrens(true);
      setShowBeneficaies(false);
    } else {
      if (firstFormValues.willFor == "Jointly with a relative") {
        setShowFamily(false);
        setShowSiblings(false);
        setShowChildrens(false);
        setShowJointWill(true);
      } else {
        setShowFamily(false);
        setShowSiblings(false);
        setShowChildrens(false);
        setShowBeneficaies(true);
      }
    }
  };

  // When Childrens Data is Submitted
  const childrensDataCallBack = (values) => {
    setChildrenData(values);
    setShowFamily(false);
    setShowSiblings(false);
    setShowChildrens(false);
    if (firstFormValues.willFor == "Jointly with a relative") {
      setShowJointWill(true);
    } else {
      setShowBeneficaies(true);
    }
  };

  // When joint will Data is submitted
  const handleJointWillDataSubmit = (values) => {
    setJointWillData(values);
    if (haveSiblings2 == "yes") {
      setShowJointWill(false);
      setShowSiblings2(true);
      setShowChildrens2(false);
      setShowBeneficaies(false);
    } else if (haveChildrens2 == "yes") {
      setShowJointWill(false);
      setShowSiblings2(false);
      setShowChildrens2(true);
      setShowBeneficaies(false);
    } else {
      setShowJointWill(false);
      setShowSiblings2(false);
      setShowChildrens2(false);
      setShowBeneficaies(true);
    }
  };

  // When Siblings2 Data is Submitted
  const siblingData2CallBack = (values) => {
    setSiblingData2(values);
    if (haveChildrens2 == "yes") {
      setShowJointWill(false);
      setShowSiblings2(false);
      setShowChildrens2(true);
      setShowBeneficaies(false);
    } else {
      setShowJointWill(false);
      setShowSiblings2(false);
      setShowChildrens2(false);
      setShowBeneficaies(true);
    }
  };

  // When Childrens2 Data is Submitted
  const childrensData2CallBack = (values) => {
    setChildrenData2(values);
    setShowJointWill(false);
    setShowSiblings2(false);
    setShowChildrens2(false);
    setShowBeneficaies(true);
  };

  // When Beneficaries Data is Submitted
  const beneficaryDataCallBack = (values) => {
    secondFormCallBack(values);
    setSelectedPage("third");
  };

  const handleBack = () => {
    setSelectedPage("first");
  };
  console.log(familyData);
  useEffect(() => {
    setShowFamily(
      firstFormValues.willFor == "For myself" ||
        firstFormValues.willFor == "Jointly with a relative"
        ? true
        : false
    );
    setShowOnBehalf(
      firstFormValues.willFor == "On behalf of someone else" ? true : false
    );
  }, []);

  return (
    <div className="bhoechie-tab-content active">
      <center>
        {showFamily && (
          <Formik
            initialValues={
              familyData
                ? familyData
                : { fatherName: "", motherName: "", spouseName: "" }
            }
            validationSchema={familyFormSchema}
            onSubmit={(values, actions) => {
              handleFamilySubmit(values);
            }}
          >
            {(formikProps) => (
              <form>
                <div className="row">
                  <h2>Let’s get to know your family</h2>
                  <div style={{ textAlign: "left" }} className="col-sm-6">
                    <label htmlFor="fname">Father Name</label>
                    <input
                      type="fname"
                      className="form-control"
                      id="fname"
                      placeholder="Father name"
                      name="fname"
                      onChange={formikProps.handleChange("fatherName")}
                      value={formikProps.values.fatherName}
                      onBlur={formikProps.handleBlur("fatherName")}
                    />
                    <p style={{ color: "red" }}>
                      {formikProps.touched.fatherName &&
                        formikProps.errors.fatherName}
                    </p>
                  </div>
                  <div style={{ textAlign: "left" }} className="col-sm-6">
                    <label htmlFor="mname">Mother Name</label>
                    <input
                      type="mname"
                      className="form-control"
                      id="mname"
                      placeholder="Mother name"
                      name="mname"
                      onChange={formikProps.handleChange("motherName")}
                      value={formikProps.values.motherName}
                      onBlur={formikProps.handleBlur("motherName")}
                    />
                    <p style={{ color: "red" }}>
                      {formikProps.touched.motherName &&
                        formikProps.errors.motherName}
                    </p>
                  </div>
                  <div style={{ textAlign: "left" }} className="col-sm-12">
                    <label htmlFor="hname">Spouse Name</label>
                    <input
                      type="hname"
                      className="form-control"
                      id="hname"
                      placeholder="Spouse name(if any)"
                      name="hname"
                      onChange={formikProps.handleChange("spouseName")}
                      value={formikProps.values.spouseName}
                      onBlur={formikProps.handleBlur("spouseName")}
                    />
                    <p style={{ color: "red" }}>
                      {formikProps.touched.spouseName &&
                        formikProps.errors.spouseName}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 style={{ textAlign: "left" }}>
                    Do you have any Brother / Sister?
                  </h4>
                  <div style={{ textAlign: "left" }}>
                    <label>
                      <input
                        name="bro"
                        type="radio"
                        value="yes"
                        onChange={(e) => setHaveSiblings(e.target.value)}
                      />
                      Yes
                    </label>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <label>
                      <input
                        name="bro"
                        type="radio"
                        value="no"
                        onChange={(e) => setHaveSiblings(e.target.value)}
                      />
                      No
                    </label>
                  </div>
                </div>
                <div>
                  <h4 style={{ textAlign: "left" }}>
                    Do you have any Son / Daughter?
                  </h4>
                  <div style={{ textAlign: "left" }}>
                    <label>
                      <input
                        name="son"
                        type="radio"
                        defaultValue="yes"
                        onChange={(e) => setHaveChildrens(e.target.value)}
                      />
                      Yes
                    </label>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <label>
                      <input
                        name="son"
                        type="radio"
                        defaultValue="no"
                        onChange={(e) => setHaveChildrens(e.target.value)}
                      />
                      No
                    </label>
                  </div>
                  <br />
                  <br />
                </div>
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
              </form>
            )}
          </Formik>
        )}
        {showJointWill && (
          <JointWill
            haveSiblings={haveSiblings}
            haveChildrens={haveChildrens}
            setShowJointWill={setShowJointWill}
            setShowChildrens={setShowChildrens}
            setShowFamily={setShowFamily}
            setShowSiblings={setShowSiblings}
            jointWillData={jointWillData}
            setHaveChildrens2={setHaveChildrens2}
            setHaveSiblings2={setHaveSiblings2}
            handleJointWillDataSubmit={handleJointWillDataSubmit}
            firstFormValues={firstFormValues}
            setHaveSiblings={setHaveSiblings}
            setHaveChildrens={setHaveChildrens}
          />
        )}
        {showOnBehalf && (
          <OnBehalf
            onBehalfData={onBehalfData}
            setSelectedPage={setSelectedPage}
            setShowOnBehalf={setShowOnBehalf}
            setShowFamily={setShowFamily}
            setShowSiblings={setShowSiblings}
            setShowChildrens={setShowChildrens}
            setShowBeneficaies={setShowBeneficaies}
            haveSiblings={haveSiblings}
            haveChildrens={haveChildrens}
            setOnBehalfData={setOnBehalfData}
            setHaveSiblings={setHaveSiblings}
            setHaveChildrens={setHaveChildrens}
            handleFamilySubmit={handleFamilySubmit}
          />
        )}
        {showSiblings && (
          <Siblings
            setShowOnBehalf={setShowOnBehalf}
            setShowJointWill={setShowJointWill}
            siblingData2={siblingData2}
            showSiblings2={showSiblings2}
            firstFormValues={firstFormValues}
            siblingData={siblingData}
            showSiblings={showSiblings}
            setShowFamily={setShowFamily}
            setShowSiblings={setShowSiblings}
            jointWillData={jointWillData}
            siblingDataCallBack={siblingDataCallBack}
            siblingData2CallBack={siblingData2CallBack}
          />
        )}
        {showSiblings2 && (
          <Siblings
            setShowOnBehalf={setShowOnBehalf}
            setShowJointWill={setShowJointWill}
            siblingData={siblingData}
            showSiblings={showSiblings}
            firstFormValues={firstFormValues}
            siblingData2={siblingData2}
            showSiblings2={showSiblings2}
            setShowFamily={setShowFamily}
            setShowSiblings={setShowSiblings}
            setShowSiblings2={setShowSiblings2}
            jointWillData={jointWillData}
            siblingDataCallBack={siblingDataCallBack}
            siblingData2CallBack={siblingData2CallBack}
          />
        )}
        {showChildrens && (
          <Childrens
            haveSiblings={haveSiblings}
            haveChildrens={haveChildrens}
            haveSiblings2={haveSiblings2}
            haveChildrens2={haveChildrens2}
            setShowOnBehalf={setShowOnBehalf}
            setShowJointWill={setShowJointWill}
            firstFormValues={firstFormValues}
            showSiblings={showSiblings}
            showSiblings2={showSiblings2}
            childrenData={childrenData}
            childrenData2={childrenData2}
            setShowSiblings={setShowSiblings}
            setShowChildrens={setShowChildrens}
            setShowSiblings2={setShowSiblings2}
            setShowChildrens2={setShowChildrens2}
            setShowFamily={setShowFamily}
            showChildrens={showChildrens}
            jointWillData={jointWillData}
            childrensDataCallBack={childrensDataCallBack}
            childrensData2CallBack={childrensData2CallBack}
          />
        )}
        {showChildrens2 && (
          <Childrens
            haveSiblings={haveSiblings}
            haveChildrens={haveChildrens}
            haveSiblings2={haveSiblings2}
            haveChildrens2={haveChildrens2}
            setShowOnBehalf={setShowOnBehalf}
            setShowJointWill={setShowJointWill}
            firstFormValues={firstFormValues}
            showSiblings={showSiblings}
            showSiblings2={showSiblings2}
            childrenData={childrenData}
            childrenData2={childrenData2}
            showChildrens2={showChildrens2}
            jointWillData={jointWillData}
            setShowSiblings={setShowSiblings}
            setShowChildrens={setShowChildrens}
            setShowSiblings2={setShowSiblings2}
            setShowChildrens2={setShowChildrens2}
            setShowFamily={setShowFamily}
            childrensDataCallBack={childrensDataCallBack}
            childrensData2CallBack={childrensData2CallBack}
          />
        )}
        {showBenficaries && (
          <Beneficaries
            beneficaryData={beneficaryData}
            setShowBeneficaies={setShowBeneficaies}
            setShowOnBehalf={setShowOnBehalf}
            setShowFamily={setShowFamily}
            setShowChildrens={setShowChildrens}
            setShowSiblings={setShowSiblings}
            setShowChildrens2={setShowChildrens2}
            setShowSiblings2={setShowSiblings2}
            haveChildrens={haveChildrens}
            haveSiblings={haveSiblings}
            haveChildrens2={haveChildrens2}
            haveSiblings2={haveSiblings2}
            firstFormValues={firstFormValues}
            beneficaryDataCallBack={beneficaryDataCallBack}
          />
        )}
      </center>
    </div>
  );
};

export default LovedOnes;
