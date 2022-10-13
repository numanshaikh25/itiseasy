const AssetDistribute = ({
  setAssetDistribute,
  handleNext,
  setShowAssetDistribute,
  setShowAssets,
}) => {
  const goBack = () => {
    console.log("back");
    setShowAssetDistribute(false);
    setShowAssets(true);
  };
  return (
    <div className="bhoechie-tab-content active">
      <center>
        <h2>How do you want to distribute your assets / properties?</h2>
        <div style={{ textAlign: "left" }} className="col-sm-12">
          <label>
            <input
              type="radio"
              name="assets"
              value="equal"
              onChange={(e) => setAssetDistribute(e.target.value)}
            />{" "}
            I want to give ALL my assets / properties in SAME RATIO to
            beneficiaries
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="assets"
              value="false"
              onChange={(e) => setAssetDistribute(e.target.value)}
            />{" "}
            I want to give / allocate each asset SEPARATELY
          </label>
        </div>
        <br />
        <br />
        <br />
        <br />
        <p style={{ marginBottom: "140px", marginTop: "40px" }}>
          ( Please note that this also includes the assets / properties which
          are missed out in the will or have been acquired after making the
          will. )
        </p>
        <br />
        <br />
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
          }}
        >
          Previous
        </a>
        <a
          onClick={handleNext}
          style={{
            fontFamily: "Roboto, sans-serif",
            cursor: "pointer",
            marginBottom: "20px",
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
          }}
        >
          Next
        </a>
      </center>
    </div>
  );
};

export default AssetDistribute;
