import { Formik, FieldArray } from "formik";
import React from "react";
const AssetAllocation = ({
  setShowAssetAllocation,
  setShowAssetDistribute,
  assetDistribute,
  setSelectedPage,
  beneficaryData,
  assets,
  assetAllocationCallBac,
  assetAllocation,
}) => {
  let [error, setError] = React.useState(false);
  let beneficaryCut;
  React.useEffect(() => {}, []);
  if (assetDistribute == "equal") {
    beneficaryCut = 100 / beneficaryData.beneficaries.length;
  } else {
    beneficaryCut = "0";
  }
  const initialValues = {
    assetDistributions: assets.map((asset) => {
      return {
        assetName: asset,
        detials: "",
        beneficaries: beneficaryData.beneficaries.map((beneficar) => {
          return {
            beneficaryName: beneficar.name,
            beneficaryCut: beneficaryCut,
          };
        }),
      };
    }),
  };
  if (beneficaryData.beneficaries.length == 3) {
    initialValues.assetDistributions.map((i) => {
      i.beneficaries[0].beneficaryCut = 33.34;
      i.beneficaries[1].beneficaryCut = 33.33;
      i.beneficaries[2].beneficaryCut = 33.33;
    });
    console.log(initialValues);
  }

  function handleSubmit(values) {
    setError(false);
    let error = validateAllocation(values.assetDistributions);
    if (error) {
      setError("Asset Allocation total up should be 100%");
    } else {
      assetAllocationCallBac(values);
      setSelectedPage("fourth");
    }
  }

  function validateAllocation(assetDistributions) {
    for (let asset of assetDistributions) {
      let totalCount = 0;
      for (let benficary of asset.beneficaries) {
        totalCount += parseFloat(benficary.beneficaryCut);
      }
      console.log(totalCount);
      if (totalCount != 100) {
        return true;
      }
    }
    return false;
  }
  const goBack = () => {
    console.log("back");
    setShowAssetAllocation(false);
    setShowAssetDistribute(true);
  };
  return (
    <center>
      <div className="row" style={{ margin: 10 }}>
        <h2>How do you want to give / distribute your assets?</h2>
        {assetDistribute == "equal" ? (
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(formikProps) => (
              <>
                <FieldArray name="assetDistributions">
                  {({ insert, remove, push }) => (
                    <>
                      {formikProps.values.assetDistributions.length > 0 &&
                        formikProps.values.assetDistributions.map(
                          (assets, index) => (
                            <>
                              <h4 style={{ textAlign: "left" }}>
                                Assets details
                              </h4>
                              <div className="col-lg-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="details"
                                  value={assets.assetName}
                                  name={`assetDistributions.${index}.assetName`}
                                  disable
                                />
                              </div>
                              <div className="col-sm-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="assetd"
                                  placeholder="Details here"
                                  defaultValue={
                                    formikProps.values.assetDistributions[index]
                                      .detials
                                  }
                                  onChange={formikProps.handleChange(
                                    `assetDistributions.${index}.detials`
                                  )}
                                  name={`assetDistributions.${index}.detials`}
                                />
                              </div>

                              <FieldArray
                                name={`assetDistributions.${index}.beneficaries`}
                              >
                                {({ insert, remove, push }) => (
                                  <>
                                    {formikProps.values.assetDistributions[
                                      index
                                    ].beneficaries.length > 0 &&
                                      formikProps.values.assetDistributions[
                                        index
                                      ].beneficaries.map(
                                        (benficary, index2) => (
                                          <>
                                            <div className="col-lg-1 mt-2">
                                              {benficary.beneficaryName}
                                            </div>
                                            <div className="col-sm-1">
                                              <input
                                                type="number"
                                                className="form-control"
                                                id="b2"
                                                defaultValue={
                                                  formikProps.values
                                                    .assetDistributions[index]
                                                    .beneficaries[index2]
                                                    .beneficaryCut
                                                }
                                                name={`assetDistributions.${index}.beneficaries.${index2}.beneficaryCut`}
                                                onChange={formikProps.handleChange(
                                                  `assetDistributions.${index}.beneficaries.${index2}.beneficaryCut`
                                                )}
                                                disabled
                                              />
                                            </div>
                                          </>
                                        )
                                      )}
                                  </>
                                )}
                              </FieldArray>
                            </>
                          )
                        )}
                    </>
                  )}
                </FieldArray>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
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
                  {error && <h4 style={{ color: "red" }}>{error}</h4>}
                  <a
                    href="#"
                    onClick={formikProps.handleSubmit}
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
                  >
                    Next
                  </a>
                </div>
                <br />
                <br />
                <br />
              </>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(formikProps) => (
              <>
                <FieldArray name="assetDistributions">
                  {({ insert, remove, push }) => (
                    <>
                      {formikProps.values.assetDistributions.length > 0 &&
                        formikProps.values.assetDistributions.map(
                          (assets, index) => (
                            <>
                              <h4 style={{ textAlign: "left" }}>
                                Assets details
                              </h4>
                              <div className="col-lg-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="details"
                                  value={assets.assetName}
                                  name={`assetDistributions.${index}.assetName`}
                                  disable
                                />
                              </div>
                              <div className="col-sm-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="assetd"
                                  placeholder="Details here"
                                  defaultValue={
                                    formikProps.values.assetDistributions[index]
                                      .detials
                                  }
                                  onChange={formikProps.handleChange(
                                    `assetDistributions.${index}.detials`
                                  )}
                                  name={`assetDistributions.${index}.detials`}
                                />
                              </div>

                              <FieldArray
                                name={`assetDistributions.${index}.beneficaries`}
                              >
                                {({ insert, remove, push }) => (
                                  <>
                                    {formikProps.values.assetDistributions[
                                      index
                                    ].beneficaries.length > 0 &&
                                      formikProps.values.assetDistributions[
                                        index
                                      ].beneficaries.map(
                                        (benficary, index2) => (
                                          <>
                                            <div className="col-lg-1 mt-2">
                                              {benficary.beneficaryName}
                                            </div>
                                            <div className="col-sm-1">
                                              <input
                                                type="number"
                                                className="form-control"
                                                id="b2"
                                                defaultValue={
                                                  formikProps.values
                                                    .assetDistributions[index]
                                                    .beneficaries[index2]
                                                    .beneficaryCut
                                                }
                                                name={`assetDistributions.${index}.beneficaries.${index2}.beneficaryCut`}
                                                onChange={formikProps.handleChange(
                                                  `assetDistributions.${index}.beneficaries.${index2}.beneficaryCut`
                                                )}
                                              />
                                            </div>
                                          </>
                                        )
                                      )}
                                  </>
                                )}
                              </FieldArray>
                            </>
                          )
                        )}
                    </>
                  )}
                </FieldArray>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
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
                  {error && <h4 style={{ color: "red" }}>{error}</h4>}
                  <a
                    href="#"
                    onClick={formikProps.handleSubmit}
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
                  >
                    Next
                  </a>
                </div>
                <br />
                <br />
                <br />
              </>
            )}
          </Formik>
        )}
      </div>
    </center>
  );
};

export default AssetAllocation;
