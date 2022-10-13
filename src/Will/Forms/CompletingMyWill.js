import React from "react";
import { useEffect } from "react";
import Executor from "./Executor";
import Executor2 from "./Executor2";
import ExecutorCompensation from "./ExecutorCompensation";
import ExecutorDataForm from "./ExecutorDataForm";
import ExecutorDataForm2 from "./ExecutorDataForm2";
import Final from "./Final";

function CompletingMyWill({
  finalPageData,
  setSelectedPage,
  setFinalPageData,
  fourthFormCallBack,
  firstFormValues,
  jointWillData,
  setExecutorRequired,
  executorRequired,
  setExeceutorDetails,
  executorDetails,
  executorRequired2,
  setExecutorRequired2,
  executorDetails2,
  executorCompensation,
  setExeceutorDetails2,
  setExecutorCompensation,
  executorCompensationAmount,
  setExecutorCompensationAmount,
  showAssets,
  setShowAssets,
  showAssetDistribute,
  setShowAssetDistribute,
  showAssetAllocation,
  setShowAssetAllocation,
}) {
  let [showExecutor, setShowExecutor] = React.useState(true);
  let [showExecutor2, setShowExecutor2] = React.useState(false);
  let [showExecutorForm, setShowExecutorForm] = React.useState(false);
  let [showExecutor2Form, setShowExecutor2Form] = React.useState(false);
  let [showExecutorCompensation, setShowExecutorCompensation] =
    React.useState(false);
  let [showFinal, setShowFinal] = React.useState(false);

  const handleExecutorRequiredNext = () => {
    setShowExecutor(false);
    if (executorRequired == "yes") {
      setShowExecutorForm(true);
    } else {
      setShowFinal(true);
    }
  };
  const handleExecutor2RequiredNext = () => {
    setShowExecutor2(false);
    if (executorRequired2 == "yes") {
      setShowExecutor2Form(true);
    } else {
      setShowExecutorCompensation(true);
    }
  };

  const handleExecutorDataSubmit = (vals) => {
    console.log("inside 1");
    setExeceutorDetails(vals);
    setShowExecutorForm(false);
    setShowExecutor2(true);
  };

  useEffect(() => {
    // setShowExecutorForm(false);
    // setShowExecutor2Form(false);
    // setShowExecutor2(false);
    // setShowExecutorCompensation(true);
  }, []);

  const handleExecutor2DataSubmit = (vals) => {
    console.log("inside 2");
    setExeceutorDetails2(vals);
    setShowExecutor2Form(false);
    setShowExecutor2(false);
    setShowExecutorCompensation(true);
  };

  const handleCompensationSubmit = (vals) => {
    setExecutorCompensationAmount(vals);
    setShowExecutorCompensation(false);
    setShowFinal(true);
  };
  return (
    <div style={{ width: "100%" }}>
      {showExecutor && (
        <Executor
          setSelectedPage={setSelectedPage}
          setShowExecutor={setShowExecutor}
          showExecutor={showExecutor}
          setShowAssetAllocation={setShowAssetAllocation}
          showAssetAllocation={showAssetAllocation}
          setShowAssetDistribute={setShowAssetDistribute}
          showAssetDistribute={showAssetDistribute}
          setShowAssets={setShowAssets}
          showAssets={showAssets}
          executorDetails={executorDetails}
          setExecutorRequired={setExecutorRequired}
          executorRequired={executorRequired}
          handleExecutorRequiredNext={handleExecutorRequiredNext}
        />
      )}
      {showFinal && (
        <Final
          finalPageData={finalPageData}
          setShowFinal={setShowFinal}
          executorRequired={executorRequired}
          setShowExecutorCompensation={setShowExecutorCompensation}
          showExecutor2={showExecutor2}
          setShowExecutor={setShowExecutor}
          showExecutor={showExecutor}
          setFinalPageData={setFinalPageData}
          fourthFormCallBack={fourthFormCallBack}
          firstFormValues={firstFormValues}
          jointWillData={jointWillData}
        />
      )}
      {showExecutorForm && (
        <ExecutorDataForm
          setShowExecutorForm={setShowExecutorForm}
          setShowExecutor={setShowExecutor}
          executorDetails={executorDetails}
          setExeceutorDetails={setExeceutorDetails}
          handleExecutorDataSubmit={handleExecutorDataSubmit}
        />
      )}
      {showExecutor2 && (
        <Executor2
          setShowExecutorForm={setShowExecutorForm}
          setShowExecutor2={setShowExecutor2}
          showExecutor2={showExecutor2}
          executorRequired2={executorRequired2}
          setExecutorRequired2={setExecutorRequired2}
          executorDetails={executorDetails}
          handleExecutor2RequiredNext={handleExecutor2RequiredNext}
          // handleExecutor2DataSubmit={handleExecutor2DataSubmit}
        />
      )}
      {showExecutorCompensation && (
        <ExecutorCompensation
          setShowExecutor2={setShowExecutor2}
          setShowExecutorCompensation={setShowExecutorCompensation}
          setShowExecutorForm={setShowExecutorForm}
          setShowExecutor2Form={setShowExecutor2Form}
          executorRequired={executorRequired}
          executorRequired2={executorRequired2}
          executorCompensationAmount={executorCompensationAmount}
          setExecutorCompensation={setExecutorCompensation}
          executorCompensation={executorCompensation}
          handleCompensationSubmit={handleCompensationSubmit}
        />
      )}
      {showExecutor2Form && (
        <ExecutorDataForm2
          executorDetails2={executorDetails2}
          setExeceutorDetails2={setExeceutorDetails2}
          executorRequired2={executorRequired2}
          handleExecutor2DataSubmit={handleExecutor2DataSubmit}
          setShowExecutor2={setShowExecutor2}
          setShowExecutor2Form={setShowExecutor2Form}
          setShowExecutorCompensation={setShowExecutorCompensation}
        />
      )}
    </div>
  );
}

export default CompletingMyWill;
