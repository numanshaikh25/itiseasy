import { Formik, Field } from "formik";
import React from "react";
import AssetAllocation from "./AssetAllocation";
import AssetDistribute from "./AssetDistribute";

const Assets = ({
  firstFormValues,
  showFamily,
  setShowFamily,
  showOnBehalf,
  setShowOnBehalf,
  setShowBeneficaies,
  assetDistribute,
  setSelectedPage,
  assets,
  beneficaryData,
  setAssets,
  setAssetDistribute,
  thirdFormCallBack,
  setAssetAllocation,
  showAssets,
  setShowAssets,
  showAssetDistribute,
  setShowAssetDistribute,
  showAssetAllocation,
  setShowAssetAllocation,
  assetAllocation,
}) => {
  // let [showAssets, setShowAssets] = React.useState(true);
  // let [showAssetDistribute, setShowAssetDistribute] = React.useState(false);
  // let [showAssetAllocation, setShowAssetAllocation] = React.useState(false);

  let [othersAsset, setOthersAsset] = React.useState("");

  let handleAssetsNext = (values) => {
    let checkedAssets = values.checked;

    if (othersAsset != "") {
      if (othersAsset.includes(",")) {
        let otherAsset = othersAsset.split(",");
        otherAsset.forEach((asset) => {
          checkedAssets.push(asset);
        });
      } else {
        checkedAssets = [...checkedAssets, othersAsset];
      }
    }

    setAssets(checkedAssets);
    setShowAssets(false);
    setShowAssetDistribute(true);
    setShowAssetAllocation(false);
  };

  let assetDistributeNext = () => {
    setShowAssets(false);
    setShowAssetDistribute(false);
    setShowAssetAllocation(true);
  };

  let assetAllocationCallBac = (values) => {
    setAssetAllocation(values);
    thirdFormCallBack(values);
  };
  const goBack = () => {
    setSelectedPage("second");
    setTimeout(() => {
      setShowFamily(false);

      setShowOnBehalf(false);

      setShowBeneficaies(true);
    }, 10);
  };
  return (
    <>
      {showAssets && (
        <div className="bhoechie-tab-content active">
          <center>
            <Formik
              initialValues={{
                checked: [],
              }}
              onSubmit={(values, actions) => {
                handleAssetsNext(values);
              }}
            >
              {({ values, handleSubmit }) => (
                <form>
                  <h2>
                    Please select the assets / properties for which the will is
                    being made:
                  </h2>
                  <h4 style={{ textAlign: "left" }}>
                    <span
                      className="hovertext"
                      data-hover="“Immovable assets”  are those assets / properties which can be touched however cannot be moved. For example- house , flat , shop warehouse, factory etc."
                    >
                      Immovable assets
                    </span>
                  </h4>
                  <div
                    style={{ textAlign: "left", lineHeight: "30px" }}
                    className="row"
                  >
                    <div className="col-lg-4">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Commercial Property"
                        />{" "}
                        Commercial Property
                      </label>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Residential Property"
                        />{" "}
                        Residential Property
                      </label>
                    </div>
                  </div>
                  <br />
                  <br />
                  <h4 style={{ textAlign: "left" }}>
                    <span
                      className="hovertexta"
                      data-hover="“Movable assets” are those tangible or intangible asset which are other than immovable property. For example vehicles, electronic devices, jeweller, mutual funds, PPF, bank accounts, fixed deposits etc."
                    >
                      Movable assets
                    </span>
                  </h4>
                  <div
                    style={{ textAlign: "left", lineHeight: "30px" }}
                    className="row"
                  >
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Bank Account"
                        />{" "}
                        Bank Account
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Fixed Deposits"
                        />{" "}
                        Fixed Deposits
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Cash"
                        />{" "}
                        Cash In Hand
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Lockers"
                        />{" "}
                        Jewellery
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="PPF"
                        />{" "}
                        PPF
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="PF"
                        />{" "}
                        PF
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="NSC"
                        />{" "}
                        NSC
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Gratuity"
                        />{" "}
                        Gratuity
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Life Insurance Policy"
                        />{" "}
                        Life Insurance Policy
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Mutual Funds"
                        />{" "}
                        Mutual Funds
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Equity"
                        />{" "}
                        Equity/Shares/Debentures/Commodity
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Artifacts/Antiques"
                        />{" "}
                        Artifacts/Antiques
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Cryptocurrency"
                        />{" "}
                        Crypto Currency
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <label className="checkbox-inline">
                        <Field
                          className="align"
                          type="checkbox"
                          name="checked"
                          value="Vehicle"
                        />{" "}
                        Vehicle
                      </label>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div>
                    <input
                      onChange={(e) => {
                        setOthersAsset(e.target.value);
                      }}
                      style={{ marginBottom: "60px" }}
                      id="propertytype_other"
                      name=""
                      type="text"
                      placeholder="Other seperate with coma (,)"
                      className="form-control"
                    />
                  </div>
                  <div style={{ marginBottom: "5rem" }}>
                    <a
                      onClick={goBack}
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        cursor: "pointer",
                        fontWeight: 500,
                        fontSize: "14px",
                        letterSpacing: "1px",
                        display: "inline-block",
                        float: "left",
                        padding: "10px 28px",
                        borderRadius: "5px",
                        transition: "0.5s",
                        color: "#fff",
                        background: "#4D4D4D",
                        marginBottom: "3rem",
                      }}
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        cursor: "pointer",
                        fontWeight: 500,
                        fontSize: "14px",
                        letterSpacing: "1px",
                        float: "right",
                        display: "inline-block",
                        padding: "10px 28px",
                        borderRadius: "5px",
                        transition: "0.5s",
                        color: "#fff",
                        background: "#4D4D4D",
                        marginRight: "2rem",
                      }}
                      onClick={handleSubmit}
                    >
                      Next
                    </a>
                  </div>
                </form>
              )}
            </Formik>
          </center>
        </div>
      )}
      {showAssetDistribute && (
        <AssetDistribute
          setShowAssets={setShowAssets}
          setShowAssetDistribute={setShowAssetDistribute}
          setAssetDistribute={setAssetDistribute}
          handleNext={assetDistributeNext}
        />
      )}
      {showAssetAllocation && (
        <AssetAllocation
          assetAllocation={assetAllocation}
          setShowAssetAllocation={setShowAssetAllocation}
          setShowAssetDistribute={setShowAssetDistribute}
          assetDistribute={assetDistribute}
          beneficaryData={beneficaryData}
          assets={assets}
          setSelectedPage={setSelectedPage}
          assetAllocationCallBac={assetAllocationCallBac}
        />
      )}
    </>
  );
};

export default Assets;
