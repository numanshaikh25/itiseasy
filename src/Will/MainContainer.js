import LeftNav from "./shared/LeftNav";
import SelfForm from "./Forms/SelfForm";
import LovedOnes from "./Forms/LovedOnes";
import Assets from "./Forms/Assets";
import React, { useEffect, useRef } from "react";
import CompletingMyWill from "./Forms/CompletingMyWill";
import { useReactToPrint } from "react-to-print";
import PrintForSelf from "./print/PrintForSelf";
import PrintForBehalf from "./print/PrintForBehalf";
import PrintForJointWill from "./print/PrintForJointWill";

const MainContainer = () => {
  let [selectedPage, setSelectedPage] = React.useState("first");

  // Data Values for first form
  let [firstFormValues, setFirstFormValues] = React.useState(false);
  let [firstFormData, setFirstFormData] = React.useState("");

  // Data values for second form
  let [haveSiblings, setHaveSiblings] = React.useState("no");

  let [haveChildrens, setHaveChildrens] = React.useState("no");
  let [haveSiblings2, setHaveSiblings2] = React.useState("no");

  let [haveChildrens2, setHaveChildrens2] = React.useState("no");
  let [onBehalfData, setOnBehalfData] = React.useState(false);
  let [familyData, setFamilytData] = React.useState(false);
  let [siblingData, setSiblingData] = React.useState(false);
  let [siblingData2, setSiblingData2] = React.useState(false);
  let [childrenData, setChildrenData] = React.useState(false);
  let [childrenData2, setChildrenData2] = React.useState(false);
  let [jointWillData, setJointWillData] = React.useState(false);
  let [beneficaryData, setBenificaryData] = React.useState({
    beneficaries: [
      {
        type: "",
        name: "",
        age: "",
      },
    ],
  });
  let [showBenficaries, setShowBeneficaies] = React.useState(false);
  let [showFamily, setShowFamily] = React.useState(
    firstFormValues.willFor == "For myself" ||
      firstFormValues.willFor == "Jointly with a relative"
      ? true
      : false
  );
  let [showOnBehalf, setShowOnBehalf] = React.useState(
    firstFormValues.willFor == "On behalf of someone else" ? true : false
  );
  // Data values for third form
  let [assets, setAssets] = React.useState([]);
  let [assetDistribute, setAssetDistribute] = React.useState("no");
  let [assetAllocation, setAssetAllocation] = React.useState("");
  let [showAssets, setShowAssets] = React.useState(true);
  let [showAssetDistribute, setShowAssetDistribute] = React.useState(false);
  let [showAssetAllocation, setShowAssetAllocation] = React.useState(false);
  // Data values of fourth form
  const [executorRequired, setExecutorRequired] = React.useState("no");
  const [executorRequired2, setExecutorRequired2] = React.useState("no");
  const [executorDetails, setExeceutorDetails] = React.useState(false);
  const [executorDetails2, setExeceutorDetails2] = React.useState(false);
  const [executorCompensation, setExecutorCompensation] = React.useState("no");
  const [executorCompensationAmount, setExecutorCompensationAmount] =
    React.useState("");
  const [finalPageData, setFinalPageData] = React.useState(false);

  const selfRef = useRef();
  const jointRef = useRef();
  const behalfRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => {
      if (firstFormValues.willFor == "For myself") {
        return selfRef.current;
      } else if (firstFormValues.willFor == "Jointly with a relative") {
        return jointRef.current;
      } else {
        return behalfRef.current;
      }
    },
  });
  let firstFormCallBack = (vals) => {
    console.log("test");
    // console.log(vals);
    // setFirstFormValues(vals);
    // setFirstFormData(vals);
    // // setSelectedPage("first");
    // console.log("first");
    console.log(firstFormValues);
    console.log(firstFormData);
  };

  let secondFormCallBack = (values) => {
    console.log(values);
    setBenificaryData(values);
  };

  // Called when beneficary data is set
  // useEffect(() => {
  //   if (beneficaryData != false) {
  //     setSelectedPage("third");
  //   }
  // }, [beneficaryData]);

  let thirdFormCallBack = (vals) => {
    console.log("Assets");
    console.log(assets);
    console.log("Set Asset Distribute");
    console.log(assetDistribute);
    console.log("asset allocation");
    console.log(vals);
  };
  let fourthFormCallBack = () => {
    console.log("priniting will");

    setTimeout(() => {
      handlePrint();
    }, 1000);
  };
  useEffect(() => {
    console.log(firstFormValues);
  }, [firstFormValues]);

  return (
    <>
      <section>
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bhoechie-tab-container">
              <div style={{ display: "flex", flexDirection: "row" }}>
                {/* Left Nav */}
                <LeftNav
                  beneficaryData={beneficaryData}
                  assetAllocation={assetAllocation}
                  assets={assets}
                  firstFormValues={firstFormValues}
                  setShowBeneficaies={setShowBeneficaies}
                  onBehalfData={onBehalfData}
                  familyData={familyData}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* Right Content */}

                <>
                  {selectedPage === "first" && (
                    <SelfForm
                      firstFormValues={firstFormValues}
                      setFirstFormData={setFirstFormData}
                      setSelectedPage={setSelectedPage}
                      firstFormCallBack={firstFormCallBack}
                      setFirstFormValues={setFirstFormValues}
                    />
                  )}
                  {selectedPage === "second" && (
                    <LovedOnes
                      beneficaryData={beneficaryData}
                      showOnBehalf={showOnBehalf}
                      setShowOnBehalf={setShowOnBehalf}
                      showFamily={showFamily}
                      setShowFamily={setShowFamily}
                      setShowBeneficaies={setShowBeneficaies}
                      showBenficaries={showBenficaries}
                      onBehalfData={onBehalfData}
                      childrenData={childrenData}
                      childrenData2={childrenData2}
                      siblingData={siblingData}
                      siblingData2={siblingData2}
                      familyData={familyData}
                      setSelectedPage={setSelectedPage}
                      haveChildrens={haveChildrens}
                      setHaveChildrens={setHaveChildrens}
                      haveChildrens2={haveChildrens2}
                      setHaveChildrens2={setHaveChildrens2}
                      haveSiblings2={haveSiblings2}
                      setHaveSiblings2={setHaveSiblings2}
                      haveSiblings={haveSiblings}
                      setHaveSiblings={setHaveSiblings}
                      firstFormValues={firstFormValues}
                      setOnBehalfData={setOnBehalfData}
                      setFamilytData={setFamilytData}
                      setSiblingData={setSiblingData}
                      setChildrenData={setChildrenData}
                      setSiblingData2={setSiblingData2}
                      setChildrenData2={setChildrenData2}
                      setBenificaryData={setBenificaryData}
                      secondFormCallBack={secondFormCallBack}
                      jointWillData={jointWillData}
                      setJointWillData={setJointWillData}
                    />
                  )}
                  {selectedPage === "third" && (
                    <Assets
                      assetAllocation={assetAllocation}
                      setShowAssetAllocation={setShowAssetAllocation}
                      showAssetAllocation={showAssetAllocation}
                      setShowAssetDistribute={setShowAssetDistribute}
                      showAssetDistribute={showAssetDistribute}
                      setShowAssets={setShowAssets}
                      showAssets={showAssets}
                      firstFormValues={firstFormValues}
                      showOnBehalf={showOnBehalf}
                      setShowOnBehalf={setShowOnBehalf}
                      showFamily={showFamily}
                      setShowFamily={setShowFamily}
                      setShowBeneficaies={setShowBeneficaies}
                      showBenficaries={showBenficaries}
                      assets={assets}
                      beneficaryData={beneficaryData}
                      setAssets={setAssets}
                      assetDistribute={assetDistribute}
                      setSelectedPage={setSelectedPage}
                      setAssetDistribute={setAssetDistribute}
                      setAssetAllocation={setAssetAllocation}
                      thirdFormCallBack={thirdFormCallBack}
                    ></Assets>
                  )}
                  {selectedPage === "fourth" && (
                    <CompletingMyWill
                      setSelectedPage={setSelectedPage}
                      setShowAssetAllocation={setShowAssetAllocation}
                      showAssetAllocation={showAssetAllocation}
                      setShowAssetDistribute={setShowAssetDistribute}
                      showAssetDistribute={showAssetDistribute}
                      setShowAssets={setShowAssets}
                      showAssets={showAssets}
                      fourthFormCallBack={fourthFormCallBack}
                      finalPageData={finalPageData}
                      setFinalPageData={setFinalPageData}
                      firstFormValues={firstFormValues}
                      jointWillData={jointWillData}
                      setExecutorRequired={setExecutorRequired}
                      setExecutorRequired2={setExecutorRequired2}
                      executorRequired={executorRequired}
                      executorDetails={executorDetails}
                      setExeceutorDetails={setExeceutorDetails}
                      executorRequired2={executorRequired2}
                      executorDetails2={executorDetails2}
                      executorCompensation={executorCompensation}
                      setExeceutorDetails2={setExeceutorDetails2}
                      setExecutorCompensation={setExecutorCompensation}
                      executorCompensationAmount={executorCompensationAmount}
                      setExecutorCompensationAmount={
                        setExecutorCompensationAmount
                      }
                    />
                  )}
                  {firstFormValues && (
                    <div style={{ display: "none" }}>
                      <PrintForSelf
                        finalPageData={finalPageData}
                        assetAllocation={assetAllocation}
                        executorCompensation={executorCompensation}
                        executorCompensationAmount={executorCompensationAmount}
                        executorDetails={executorDetails}
                        executorDetails2={executorDetails2}
                        executorRequired2={executorRequired2}
                        executorRequired={executorRequired}
                        childrenData={childrenData}
                        familyData={familyData}
                        siblingData={siblingData}
                        firstFormValues={firstFormValues}
                        printRef={selfRef}
                      />
                    </div>
                  )}
                  {firstFormValues && (
                    <div style={{ display: "none" }}>
                      <PrintForBehalf
                        onBehalfData={onBehalfData}
                        siblingData2={siblingData2}
                        finalPageData={finalPageData}
                        assetAllocation={assetAllocation}
                        executorCompensation={executorCompensation}
                        executorCompensationAmount={executorCompensationAmount}
                        executorDetails={executorDetails}
                        executorDetails2={executorDetails2}
                        executorRequired2={executorRequired2}
                        executorRequired={executorRequired}
                        childrenData={childrenData}
                        familyData={familyData}
                        siblingData={siblingData}
                        firstFormValues={firstFormValues}
                        printRef={behalfRef}
                      />
                    </div>
                  )}
                  {firstFormValues && (
                    <div style={{ display: "none" }}>
                      <PrintForJointWill
                        siblingData2={siblingData2}
                        childrenData2={childrenData2}
                        jointWillData={jointWillData}
                        finalPageData={finalPageData}
                        assetAllocation={assetAllocation}
                        executorCompensation={executorCompensation}
                        executorCompensationAmount={executorCompensationAmount}
                        executorDetails={executorDetails}
                        executorDetails2={executorDetails2}
                        executorRequired2={executorRequired2}
                        executorRequired={executorRequired}
                        childrenData={childrenData}
                        familyData={familyData}
                        siblingData={siblingData}
                        firstFormValues={firstFormValues}
                        printRef={jointRef}
                      />
                    </div>
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContainer;
