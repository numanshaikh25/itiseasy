import { Link } from "react-router-dom";
import React from 'react'
import { Formik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import ConfigData from './../config/constant.json'
import { useHistory } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'

const OtpCompoent = ({user}) => {
    let [loader, setLoader] = React.useState(false)
    let [error, setError] = React.useState(false)
    let history = useHistory()
    let handleOtp = async (values) => {
        try {
            setLoader(true)
            setError(false)


            let data = {
                otp: values.otp,
                 user: user
            }
            console.log(data)
            let response = await axios.post(`${ConfigData.SERVER_URL}/auth/verifyotp`, data, { withCredentials: true })
            console.log(response)
            // If Error
            if (response.data.status == false) {
                throw Error(response.data.message);
            }

            setLoader(false);

            // Redirect to generate will
            history.push('/main')

        } catch (e) {
            console.log(e)
            setError(e.message)
            setLoader(false)
        }
    }

    const otpSchema = yup.object({
        otp: yup.string()
            .required("Otp is Required")
            .min(4),
    });

    return (
        <section id="register" className="d-flex align-items-center">
            <div className="container" data-aos="zoom-out" data-aos-delay={100}>
                <h2>OTP</h2>
                <Formik
                    initialValues={{ otp: '' }}
                    validationSchema={otpSchema}
                    onSubmit={(values, actions) => {
                        handleOtp(values);
                    }}
                >
                    {(formikProps) => (
                        <>
                            <div className="row justify-content-center">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="otp"
                                            className="form-control"
                                            id="otp"
                                            placeholder="Enter OTP here"
                                            onChange={formikProps.handleChange('otp')}
                                            value={formikProps.values.otp}
                                            onBlur={formikProps.handleBlur('otp')}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <p style={{ color: '#484848' }}>{formikProps.touched.otp && formikProps.errors.otp}</p>
                            <a className="btn-get-started" onClick={formikProps.handleSubmit}>Submit</a><br /><br />
                            {error && <p style={{ color: '#484848' }}> {error}</p>}
                            {loader && <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>}
                            <p>Not received OTP ? <a style={{ cursor: 'pointer' }} >click here</a></p>
                        </>
                    )}
                </Formik>
                <br />


            </div>
        </section>
    );
}

export default OtpCompoent;

