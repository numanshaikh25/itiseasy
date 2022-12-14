import { Formik } from "formik";
import * as yup from "yup";
const SelfForm = ({
  firstFormCallBack,
  setSelectedPage,
  setFirstFormValues,
  setFirstFormData,
  firstFormValues,
}) => {
  const selfFormSchema = yup.object({
    name: yup.string().required("Name is Required"),
    age: yup
      .string()
      .required("Age is Required")
      .test("is-valid-age", "Age must be between 18 to 99", (val) => {
        return parseInt(val) >= 18 && parseInt(val) <= 99;
      }),
    gender: yup
      .string()
      .required("Gender is required")
      .test("is-selected", "Please Select a Gender", (val) => {
        return val != "Select any";
      }),
    religion: yup
      .string()
      .required("Religion is required")
      .test("is-selected", "Please Select a Religion", (val) => {
        return val != "Select any";
      }),
    maritalStatus: yup
      .string()
      .required("Marital Status is required")
      .test("is-selected", "Please Select your Martial Status", (val) => {
        return val != "Select any";
      }),
    address: yup.string().required("Address is required"),
    pincode: yup
      .string()
      .required("Pin Code is required")
      .test("is-valid-pin", "Pin should be of 6 digits only", (val) => {
        return val && val.length == 6;
      }),
    willFor: yup
      .string()
      .required("Whom you making this will for is required")
      .test(
        "is-selected",
        "Please Select whom you making this will for",
        (val) => {
          return val != "Select any";
        }
      ),
  });

  const handleSubmit = (vals) => {
    console.log(vals);
    setFirstFormValues(vals);
    setFirstFormData(vals);
    firstFormCallBack(vals);
    setSelectedPage("second");
  };
  return (
    <div className="bhoechie-tab-content active" style={{ marginRight: 20 }}>
      <center>
        <Formik
          initialValues={
            firstFormValues
              ? firstFormValues
              : {
                  name: "",
                  age: "",
                  gender: "",
                  religion: "",
                  maritalStatus: "",
                  address: "",
                  pincode: "",
                  willFor: "",
                }
          }
          validationSchema={selfFormSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
          }}
        >
          {(formikProps) => (
            <form>
              <div className="row">
                <h2>Welcome! Let???s quickly get to know you</h2>
                <div style={{ textAlign: "left" }} className="col-sm-4">
                  <label style={{ textAlign: "left" }} htmlFor="name">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Your name"
                    name="name"
                    onChange={formikProps.handleChange("name")}
                    value={formikProps.values.name}
                    onBlur={formikProps.handleBlur("name")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.name && formikProps.errors.name}
                  </p>
                </div>
                <div style={{ textAlign: "left" }} className="col-sm-3">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Your age in years"
                    name="age"
                    onChange={formikProps.handleChange("age")}
                    value={formikProps.values.age}
                    onBlur={formikProps.handleBlur("age")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.age && formikProps.errors.age}
                  </p>
                </div>
                <div
                  style={{ textAlign: "left" }}
                  className="form-group col-sm-3"
                >
                  <label htmlFor="inputgender">Gender</label>
                  <select
                    id="inputgender"
                    className="form-control"
                    onChange={formikProps.handleChange("gender")}
                    value={formikProps.values.gender}
                    onBlur={formikProps.handleBlur("gender")}
                  >
                    <option selected value="Select any">
                      Select any
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <p style={{ color: "red" }}>
                    {formikProps.touched.gender && formikProps.errors.gender}
                  </p>
                </div>
                <div
                  style={{ textAlign: "left" }}
                  className="form-group col-sm-2"
                >
                  <label htmlFor="inputm">Religion</label>
                  <select
                    id="inputm"
                    className="form-control"
                    onChange={formikProps.handleChange("religion")}
                    value={formikProps.values.religion}
                    onBlur={formikProps.handleBlur("religion")}
                  >
                    <option selected value="Select any">
                      Select any
                    </option>
                    <option value="Hindu">Hindu</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Jain<">Jain</option>
                    <option value="Indian Christian">Indian Christian</option>
                    <option value="Parsi">Parsi</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Muslim">Muslim</option>
                  </select>
                  <p style={{ color: "red" }}>
                    {formikProps.touched.religion &&
                      formikProps.errors.religion}
                  </p>
                </div>
                <div
                  style={{ textAlign: "left" }}
                  className="form-group col-sm-3"
                >
                  <label htmlFor="inputm">Marital Status</label>
                  <select
                    id="inputm"
                    className="form-control"
                    onChange={formikProps.handleChange("maritalStatus")}
                    value={formikProps.values.maritalStatus}
                    onBlur={formikProps.handleBlur("maritalStatus")}
                  >
                    <option selected value={"Select any"}>
                      Select any
                    </option>
                    <option value={"Married"}>Married</option>
                    <option value="Unmarried">Unmarried</option>
                    <option value="Widow(er)">Widow(er)</option>
                    <option value="Divorcee">Divorcee</option>
                  </select>
                  <p style={{ color: "red" }}>
                    {formikProps.touched.maritalStatus &&
                      formikProps.errors.maritalStatus}
                  </p>
                </div>
                <div style={{ textAlign: "left" }} className="col-sm-7">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    placeholder="Your address"
                    name="address"
                    rows={1}
                    onChange={formikProps.handleChange("address")}
                    value={formikProps.values.address}
                    onBlur={formikProps.handleBlur("address")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.address && formikProps.errors.address}
                  </p>
                </div>
                <div style={{ textAlign: "left" }} className="col-sm-2">
                  <label htmlFor="pin">Pin Code</label>
                  <input
                    type="pin"
                    className="form-control"
                    id="name"
                    placeholder="Area pin code"
                    name="pin"
                    onChange={formikProps.handleChange("pincode")}
                    value={formikProps.values.pincode}
                    onBlur={formikProps.handleBlur("pincode")}
                  />
                  <p style={{ color: "red" }}>
                    {formikProps.touched.pincode && formikProps.errors.pincode}
                  </p>
                </div>
                <div
                  style={{ textAlign: "left" }}
                  className="form-group col-sm-12"
                >
                  <label htmlFor="inputgender">I am making this will:</label>
                  <select
                    id="inputgender"
                    className="form-control"
                    onChange={formikProps.handleChange("willFor")}
                    value={formikProps.values.willFor}
                    onBlur={formikProps.handleBlur("willFor")}
                  >
                    <option selected value="Select any">
                      Select any
                    </option>
                    <option value="For myself">For myself</option>
                    <option value="Jointly with a relative">
                      Jointly with a relative
                    </option>
                    <option value="On behalf of someone else">
                      On behalf of someone else
                    </option>
                  </select>
                  <p style={{ color: "red" }}>
                    {formikProps.touched.willFor && formikProps.errors.willFor}
                  </p>
                </div>
              </div>
              <p style={{ color: "grey", marginTop: "20px" }}>
                {formikProps.values.religion == "Muslim" && (
                  <>
                    <span style={{ fontWeight: "800" }}>Please Note</span>:
                    Testamentary Succession being governed by Muslim Person Law
                    (Shariat) Application Act, 1937, no Muslim can bequeath more
                    that 1/3 rd of his property which is left after payment of
                    funeral expenses and debts. If an Indian Muslim wants to
                    bequeath more than 1/3 rd of his property, such an Act can
                    be done only with the consent of his legal heirs. The
                    remaining two-thirds of the testator's property shall go to
                    those who are his legal heirs at the time of his death.
                  </>
                )}
              </p>
              <a
                onClick={formikProps.handleSubmit}
                style={{
                  fontFamily: "Roboto, sans-serif",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "1px",
                  marginTop: "80px",
                  display: "inline-block",
                  padding: "10px 28px",
                  marginBottom: "20px",
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
      </center>
    </div>
  );
};

export default SelfForm;
