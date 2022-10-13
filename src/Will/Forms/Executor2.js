import React from "react";

function Executor2({
  setShowExecutorForm,
  setShowExecutor2,
  showExecutor2,
  setSelectedPage,
  setExecutorRequired,
  executorRequired,
  handleExecutorRequiredNext,
  setExecutorRequired2,
  executorDetails,
  handleExecutor2RequiredNext,
  executorRequired2,
  showAssets,
  setShowAssets,
  showAssetDistribute,
  setShowAssetDistribute,
  showAssetAllocation,
  setShowAssetAllocation,
  showExecutor,
  setShowExecutor,
}) {
  const goBack = () => {
    if (showExecutor) {
      setShowExecutor(false);
      setSelectedPage("third");
      setShowAssets(false);
      setShowAssetDistribute(false);
      setShowAssetAllocation(true);
    } else if (showExecutor2) {
      setShowExecutor2(false);
      setShowExecutorForm(true);
    }
  };
  return (
    <div className="bhoechie-tab-content active row">
      <center>
        <h2 style={{ marginBottom: "50px" }}>
          Do you want to appoint any alternate{" "}
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
              checked={executorRequired2 === "yes"}
              onChange={(e) => {
                setExecutorRequired2(e.target.value);
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
              checked={
                !executorDetails
                  ? executorRequired === "no"
                  : executorRequired2 === "no"
              }
              onChange={(e) => {
                setExecutorRequired2(e.target.value);
              }}
            />{" "}
            No
          </label>
        </div>

        <br />
        <br />
        <div style={{ marginTop: "17rem" }}>
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
            onClick={() => {
              handleExecutor2RequiredNext();
            }}
          >
            Next
          </a>
        </div>
      </center>
    </div>
  );
}

export default Executor2;
