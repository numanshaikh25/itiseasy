const LeftNav = ({
  selectedPage,
  setSelectedPage,
  familyData,
  onBehalfData,
  setShowBeneficaies,
  assets,
  firstFormValues,
  assetAllocation,
}) => {
  return (
    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 bhoechie-tab-menu">
      <div className="list-group">
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedPage("first");
          }}
          className={
            selectedPage === "first"
              ? "list-group-item text-center active"
              : "list-group-item text-center"
          }
        >
          <h4 className="middle">About Me</h4>
        </a>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (firstFormValues) {
              setSelectedPage("second");
              setShowBeneficaies(false);
            }
          }}
          className={
            selectedPage === "second"
              ? "list-group-item text-center active"
              : "list-group-item text-center"
          }
        >
          <h4 className="middle">My Loved Ones</h4>
        </a>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            assets.length != 0 && setSelectedPage("third");
          }}
          className={
            selectedPage === "third"
              ? "list-group-item text-center active"
              : "list-group-item text-center"
          }
        >
          <h4 className="middle">My Assets</h4>
        </a>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            assetAllocation && setSelectedPage("fourth");
          }}
          className={
            selectedPage === "fourth"
              ? "list-group-item text-center active"
              : "list-group-item text-center"
          }
        >
          <h4 className="middle" style={{ marginTop: "30px" }}>
            Completing My Will
          </h4>
        </a>
      </div>
    </div>
  );
};

export default LeftNav;
