import React, { useRef } from "react";
import logo from "./itiseasy.png";
import { useReactToPrint } from "react-to-print";
function PrintForBehalf({
  onBehalfData,
  finalPageData,
  assetAllocation,
  printRef,
  firstFormValues,
  familyData,
  siblingData,
  childrenData,
  executorRequired,
  executorRequired2,
  executorDetails2,
  executorDetails,
  executorCompensation,
  executorCompensationAmount,
}) {
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  console.log(onBehalfData);
  console.log("Executor2", executorDetails2);
  console.log(finalPageData);
  // console.log(assetAllocation);
  const marginTop = "70px";
  const marginRight = "5px";
  const marginBottom = "70px";
  const marginLeft = "5px";
  const getPageMargins = () => {
    return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
  };
  return (
    <div style={{ width: "794px" }} ref={printRef}>
      <div
        className="header"
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "25px",
          height: "175px",
          border: "2px solid #344716",
          padding: "15px",
          paddingBottom: "30px",
        }}
      >
        <div style={{ textAlign: "center", height: "50%" }}>
          <img src={logo} style={{ width: "15%" }} alt="" />
        </div>
        <div style={{ marginTop: "5px" }}>
          <p className="pb-2" style={{ fontSize: "14px" }}>
            Dear{" "}
            <span style={{ textTransform: "capitalize" }}>
              {firstFormValues.name}
            </span>
            <br />
            <br />
            Thank you for making “Will” of{" "}
            <span style={{ textTransform: "capitalize" }}>
              {onBehalfData.name}.
            </span>{" "}
            at itiseasy.in. We sincerely applaud you for taking this step
            towards securing your loved ones’
          </p>
        </div>
      </div>
      <div
        className="body"
        style={{ width: "80%", margin: "auto", marginTop: "25px" }}
      >
        <h4
          style={{
            textDecoration: "underline",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          LAST WILL AND TESTAMENT
        </h4>
        <p style={{ textAlign: "justify", margin: "auto", marginTop: "30px" }}>
          I,{" "}
          <span style={{ textTransform: "capitalize" }}>
            {onBehalfData.name}
          </span>{" "}
          (hereinafter the TESTATOR) son/daughter of{" "}
          <span style={{ textTransform: "capitalize" }}>
            {onBehalfData.fatherName}
          </span>
          , aged{" "}
          <span style={{ textTransform: "capitalize" }}>
            {onBehalfData.age}
          </span>{" "}
          years, Indian inhabitant,{" "}
          <span style={{ textTransform: "capitalize" }}>
            {onBehalfData.religion}
          </span>{" "}
          by religion,{" "}
          <span style={{ textTransform: "capitalize" }}>
            {onBehalfData.occupation}
          </span>{" "}
          occupation residing at{" "}
          <span style={{ textTransform: "capitalize" }}>
            {onBehalfData.address}
          </span>{" "}
          being of sound mind and disposing mind, memory and understanding, out
          of my free volition and without any persuasion or coercion do hereby
          make, publish and declare this to be my last Will and Testament,
          hereby expressly revoking all Wills and Codicils previously made by
          me.
        </p>
        <br />
        <p style={{ textAlign: "justify" }}>
          This last Will and Testament is written in accordance with law. It is
          my intent to create this last Will and Testament in accordance with
          the rules mandated by the law to avoid any dispute or difference
          regarding my moveable and immovable properties after my death.
        </p>
        <br />
        <p style={{ textAlign: "justify" }}>
          My family consists of Father :{" "}
          <span style={{ textTransform: "capitalize" }}>
            {onBehalfData.fatherName}
          </span>
          , Mother :{" "}
          <span style={{ textTransform: "capitalize" }}>
            {onBehalfData.motherName}
          </span>
          ,
          {siblingData && (
            <>
              {siblingData.siblings.map((s) => {
                return s.type == "Brother" ? (
                  <>
                    {" "}
                    Brother/s: {s.name}, aged{" "}
                    <span style={{ textTransform: "capitalize" }}>{s.age}</span>{" "}
                    years,{" "}
                  </>
                ) : (
                  ""
                );
              })}{" "}
            </>
          )}
          {/* {" "}
          aged{" "}
          <span style={{ textTransform: "capitalize" }}>
            {firstFormValues.age}
          </span>{" "}
          years,{" "} */}
          {siblingData && (
            <>
              {siblingData.siblings.map((s) => {
                return s.type == "Sister" ? (
                  <>
                    {" "}
                    Sister/s: {s.name}, aged{" "}
                    <span style={{ textTransform: "capitalize" }}>{s.age}</span>{" "}
                    years,{" "}
                  </>
                ) : (
                  ""
                );
              })}
            </>
          )}{" "}
          {siblingData && siblingData.siblings.length > 1 ? "." : ""}
        </p>
        <br />
        {onBehalfData.maritalStatus != "Unmarried" && (
          <p style={{ textAlign: "justify" }}>
            I {onBehalfData.maritalStatus == "Married" ? "am" : "was"} married
            to{" "}
            <span style={{ textTransform: "capitalize" }}>
              {onBehalfData.spouseName}
            </span>{" "}
            {childrenData && (
              <>
                and have the children
                {childrenData.childrens.map((s) => {
                  return s.type == "Son" ? (
                    <>
                      {" "}
                      Son : {s.name}, aged{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        {s.age}
                      </span>{" "}
                      years,{" "}
                    </>
                  ) : (
                    ""
                  );
                })}
              </>
            )}{" "}
            {childrenData && (
              <>
                {childrenData.childrens.map((s) => {
                  return s.type == "Daughter" ? (
                    <>
                      {" "}
                      Daughter : {s.name}, aged{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        {s.age}
                      </span>{" "}
                      years,{" "}
                    </>
                  ) : (
                    ""
                  );
                })}
              </>
            )}
          </p>
        )}

        {firstFormValues.maritalStatus != "Married" && (
          <p style={{ textAlign: "justify" }}>I am not married.</p>
        )}
        <br />
        {executorRequired == "yes" && (
          <div className="executor">
            <h4
              style={{
                textDecoration: "underline",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              EXECUTOR
            </h4>
            <p
              style={{
                textAlign: "justify",
                margin: "auto",
                marginTop: "30px",
              }}
            >
              I hereby nominate and request the appointment of Mr/Mrs/Ms.{" "}
              <span style={{ textTransform: "capitalize" }}>
                {executorDetails.name}
              </span>
              , age{" "}
              <span style={{ textTransform: "capitalize" }}>
                {executorDetails.age}
              </span>{" "}
              years,{" "}
              <span style={{ textTransform: "capitalize" }}>
                {executorDetails.occupation}
              </span>{" "}
              occupation, presently residing at{" "}
              <span style={{ textTransform: "capitalize" }}>
                {executorDetails.address}
              </span>
              , as Executor of my last Will and Testament.
            </p>
            <br />
            <br />
            <br />
            {executorRequired2 == "yes" && (
              <p style={{ textAlign: "justify" }}>
                In the event he/she is unable or unwilling to serve as an
                Executor or predeceases me, I nominate and request the
                appointment of Mr/Mrs/Ms. {executorDetails2.name}, age{" "}
                {executorDetails2.age}
                years, {executorDetails2.occupation} occupation, presently
                residing at {executorDetails2.address}, as my Executor. (These
                will come from second executor)
                <br />
              </p>
            )}
            <p style={{ textAlign: "justify" }}>
              In order to execute this Will as mentioned herein, the Executor,
              in addition to all other powers and discretions granted by this
              Will or by law, shall have the following powers, subject to any
              limitations specified elsewhere in this Will:
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              My Executor shall have all of the authority to deal with my
              movable and immovable property as mentioned in my last Will and
              Testament. My Executor shall perform all the administrative duties
              with respect to distribution of my movable and immovable property
              in accordance with my last Will.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              My Executor shall have full power and authority to sell transfer
              and convey any and all property which I may own at the time of my
              death, at such time and place and upon such terms and conditions
              as my Executor may determine, without necessity of obtaining a
              Court Order.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              My Executor shall have full authority to pay, compromise, settle
              or otherwise adjust any claims, including taxes, asserted in
              favour of or against me or my property.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              My Executor herein shall have full authority to pay all my legally
              enforceable debts, administration expenses of my movable and
              immovable property, funeral expenses and expenses of my last
              illness from my income, assets or property as soon as practicable
              after my death.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              My Executors shall, after spending the necessary money for the
              management of the said property and to pay other payment or dues
              out of any income, assets or property thereof, pay the rest of the
              income to beneficiaries in accordance with this Will and the same
              will belong to the said beneficiaries absolutely without liability
              to account for the same.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              All my movable and immovable property bequeathed to the
              beneficiaries as per this Will, shall be handed over to them by my
              Executor clearing out the encumbrances, if any.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              If any of the beneficiaries predeceases me or soon after my death
              before the transfer of his/her share of the property in his/her
              name then on my death the said share of the deceased beneficiary
              shall be transferred and equally distributed to his/her surviving
              legal heirs and my Executor under this Will shall aid in transfer
              of the same among his surviving legal heirs by executing proper
              document or documents.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              If at the time of my death any of the said beneficiary is a minor,
              the Executor shall hold the said share of his/her property on
              trust until the minor beneficiary attains the age of majority and
              till then the net income of the said property will be given or
              spend for maintenance and education of the said minor beneficiary.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              My Executor shall obtain probate of this Will from a competent
              Court, if required in law and shall pay all the probate duty and
              other expenses required for such probate.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              My Executor shall have all the authority to prosecute, contest,
              compromise, submit to arbitration, settle or abandon any and/or
              all claims in favor of or against my property/ies, upon such terms
              as my Executor deems proper.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              My Executor shall not be responsible for any loss to or
              depreciation of the assets of my property/ies or any trust created
              herein whenever my Executor has acted in good faith and with
              reasonable care and diligence.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              My Executor shall not at anytime be held liable for any action or
              default of himself/herself or of any other person in connection
              with the administration of the my movable or immovable
              property/ies, unless caused by his/her own gross negligence or
              wilful commission of an act in breach of the trust.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              If any beneficiary under this Will directly or indirectly
              challenges or contests this Will or any of its provisions, or
              attempts in any way to oppose or set aside the probate of this
              Will or impair or invalidate any of its provisions, any legacy or
              other provision I have made with respect to that person under this
              Will, this Will shall stand revoked and shall be disposed off.
            </p>
            <br />
            <p style={{ textAlign: "justify" }}>
              If any of the provisions of this Will, or the application of any
              provision to any beneficiary is held invalid, unenforceable, or
              illegal in any respect, the remainder of this Will, and the
              application of the provision to the other beneficiaries shall
              remain valid and in full force and effect as if the invalid
              portion had not been included.
            </p>
            <br />
            {executorCompensation == "no" && (
              <p style={{ textAlign: "justify" }}>
                I direct that no Executor nominated and appointed by me shall be
                entitled to any compensation for the faithful performance of his
                or her duties, notwithstanding any provision of law to the
                contrary.
                <br />
              </p>
            )}
            {executorCompensation == "yes" && (
              <p style={{ textAlign: "justify" }}>
                My Executor shall be entitled to reasonable compensation of Rs.
                {executorCompensationAmount.compensation} for services performed
                hereunder. Such compensation shall include and be commensurate
                with the value of any extraordinary services required to be
                performed.
                <br />
              </p>
            )}
          </div>
        )}
        <style>{getPageMargins()}</style>
        <div className="property-benificiary">
          <h4
            style={{
              textDecoration: "underline",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            PROPERTY AND BENEFICIARY
          </h4>
          <p
            style={{
              textAlign: "justify",
              margin: "auto",
              marginTop: "30px",
            }}
          >
            I hereby bequeath and entrust my following movable and immovable
            properties in the name of the following named persons:
          </p>
          <br />
          <style>{getPageMargins()}</style>
          <div style={{ marginTop: "10px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "1px solid",
              }}
            >
              <tr style={{ border: "1px solid" }}>
                <th
                  style={{
                    border: "1px solid",
                    fontWeight: "800",
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  Asset / property
                </th>
                <th
                  style={{
                    border: "1px solid",
                    fontWeight: "800",
                    width: "40%",
                    textAlign: "center",
                  }}
                >
                  Details{" "}
                </th>
                <th
                  style={{
                    border: "1px solid",
                    fontWeight: "800",
                    width: "60%",
                    textAlign: "center",
                  }}
                >
                  Details of Person
                </th>
              </tr>
              {/* assetAllocation.assetDistributions[0].beneficaries[0].beneficaryName */}
              {assetAllocation &&
                assetAllocation.assetDistributions.map((s, index) => {
                  return (
                    <tr style={{ border: "1px solid" }}>
                      <td style={{ border: "1px solid", textAlign: "center" }}>
                        {s.assetName}
                      </td>
                      <td style={{ border: "1px solid", textAlign: "center" }}>
                        {s.detials}
                      </td>
                      <td
                        style={{
                          border: "1px solid",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                      >
                        {s.beneficaries.map((b) => {
                          return (
                            <>
                              {b.beneficaryName} {b.beneficaryCut}%,
                            </>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
          <style>{getPageMargins()}</style>
          <br />
          <p style={{ textAlign: "justify", marginTop: "10px" }}>
            All the above mentioned movable and immovable properties owned by me
            are self-acquired. Nobody else has any title, right, claim, interest
            or demand whatsoever on these assets or properties. I have complete
            right, absolute authority and power on these assets and in any other
            property which may be substituted in their place which may be
            acquired or received by me hereafter.
          </p>
          <br />
          <p style={{ textAlign: "justify" }}>
            I bequeath all my movable and immovable properties to aforesaid
            persons as per the arrangement made above.
          </p>
        </div>
        <br />
        <p style={{ textAlign: "justify" }}>
          I further wish that after my death, my body be{" "}
          {finalPageData && finalPageData.hanleRemains}
        </p>
        <br />
        <div className="declaration">
          <h4
            style={{
              textDecoration: "underline",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            DECLARATION
          </h4>
          <br />
          <p style={{ textAlign: "justify" }}>
            We, the Testator/Testatrix and the witnesses, whose names are signed
            to the foregoing instrument, being first duly sworn, do hereby
            declare to the undersigned authority that the Testator/Testatrix
            signed and executed the instrument as his/her Last Will and
            Testament and that he/she had signed willingly, and that he/she
            executed it as his/her free and voluntary act for the purposes
            therein expressed, and that each of the witnesses, in the presence
            of the Testator/Testatrix was at the time eighteen (18) or more
            years of age, of sound mind and under no constraint or undue
            influence.
          </p>
          <br />
          <p style={{ textAlign: "justify" }}>
            I do ratify and confirm my last Will and Testament.
          </p>
          <br />
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: "800" }}>In witness whereof,</span> I
            have hereunder set my hand and seal
          </p>
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            Date: {finalPageData && finalPageData.date}
          </p>
          <p style={{ textAlign: "justify" }}>
            Place: {finalPageData && finalPageData.place}
          </p>
          <br />
          <br />
          <p style={{ textAlign: "justify", textTransform: "capitalize" }}>
            {onBehalfData.name}
          </p>
          <br />
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>(Signature)</p>
          <br />
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            This instrument was, on the date hereof, signed, published and
            declared by{" "}
            <span style={{ textTransform: "capitalize" }}>
              {onBehalfData.name}
            </span>
            , to be his/her Last Will and Testament, in our presence and in the
            presence of each of us and we, at the same time, at his/ her
            request, in his/her presence and in the presence of each other, have
            hereunto signed our names and addresses as attesting witnesses.
          </p>
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            Name : {finalPageData && finalPageData.w1name}, Aged{" "}
            {finalPageData && finalPageData.w1age} years,
          </p>
          <p style={{ textAlign: "justify" }}>
            Son / Daughter of {finalPageData && finalPageData.w1childOf},
          </p>
          <p style={{ textAlign: "justify" }}>
            Occupation {finalPageData && finalPageData.w1occupation},
          </p>
          <p style={{ textAlign: "justify" }}>
            Residing at {finalPageData && finalPageData.w1address},
          </p>
          <br />
          <div style={{ display: "flex", justifyContent: "right" }}>
            <p
              style={{
                width: "189px",
                textAlign: "right",
                border: "1px solid black",
              }}
            ></p>
          </div>
          <p style={{ textAlign: "right" }}>Signature of Witness</p>
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            Name : {finalPageData && finalPageData.w2name}, Aged{" "}
            {finalPageData && finalPageData.w2age} years,
          </p>
          <p style={{ textAlign: "justify" }}>
            Son / Daughter of {finalPageData && finalPageData.w2childOf},
          </p>
          <p style={{ textAlign: "justify" }}>
            Occupation {finalPageData && finalPageData.w2occupation},
          </p>
          <p style={{ textAlign: "justify" }}>
            Residing at {finalPageData && finalPageData.w2address},
          </p>
          <br />
          <div style={{ display: "flex", justifyContent: "right" }}>
            <p
              style={{
                width: "189px",
                textAlign: "right",
                border: "1px solid black",
              }}
            ></p>
          </div>
          <p style={{ textAlign: "right" }}>Signature of Witness</p>
        </div>
      </div>
    </div>
  );
}

export default PrintForBehalf;
