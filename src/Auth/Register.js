import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import ConfigData from './../config/constant.json'
import { useHistory } from "react-router-dom";
import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import OtpCompoent from "./OtpComponent";

const Register = () => {
    const [otpComponent, setOtpComponent] = React.useState(false)
    let [error, setError] = React.useState(false)
    let [loading, setLoading] = React.useState(false)

    const signUpSchema = yup.object({
        name: yup.string()
            .required("Name is required field")
            .min(4),
        email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
        phone: yup.string()
            .required("Phone Number is Required")
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
        password: yup.string()
            .required("Password is Required")
            .min(4),
    });



    let handleRegister = async (values) => {
        try {
            setLoading(true)
            setError(false)
            let response = await axios.post(`${ConfigData.SERVER_URL}/auth/signup`, { values }, { withCredentials: true })
            if (response.data.status == false) {
                throw Error(response.data.message);
            }
            setLoading(false)
            setOtpComponent(response.data.user)

        } catch (e) {
            setLoading(false)
            setError(e.message)
        }
    }

    return (
        <>
            {
                otpComponent && <OtpCompoent user={otpComponent}></OtpCompoent>
            }{
                !otpComponent && 
                <section id="register" className="d-flex align-items-center">

                    <div className="container" data-aos="zoom-out" data-aos-delay={100}>
                        <h2>Register</h2>
                        <Formik
                            initialValues={{ name: '', phone: '', email: '', password: '' }}
                            validationSchema={signUpSchema}
                            onSubmit={(values, actions) => {
                                handleRegister(values);
                            }}
                        >
                            {(formikProps) => (
                                <form id="register-form">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    pattern="^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$"
                                                    title="Numbers and Characters not allowed"
                                                    placeholder="Enter your name" required
                                                    onChange={formikProps.handleChange('name')}
                                                    value={formikProps.values.name}
                                                    onBlur={formikProps.handleBlur('name')}
                                                />
                                                <small />

                                            </div>
                                            <p style={{ color: '#484848' }}>{formikProps.touched.name && formikProps.errors.name}</p>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    autoComplete="off"
                                                    placeholder="Enter your email Id"
                                                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                                                    onChange={formikProps.handleChange('email')}
                                                    value={formikProps.values.email}
                                                    onBlur={formikProps.handleBlur('email')}
                                                    required />
                                                <small />
                                                <p style={{ color: '#484848' }}>{formikProps.touched.email && formikProps.errors.email}</p>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="contact"
                                                    id="number"
                                                    autoComplete="off"
                                                    min={7000000000} max={9999999999}
                                                    pattern="^[6-9]\d{9}$"
                                                    placeholder="Enter your mobile number"
                                                    title="Only 10 digits allowed"
                                                    onChange={formikProps.handleChange('phone')}
                                                    value={formikProps.values.phone}
                                                    onBlur={formikProps.handleBlur('phone')}
                                                    required />
                                                <small />
                                                <p style={{ color: '#484848' }}>{formikProps.touched.phone && formikProps.errors.phone}</p>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    autoComplete="off"
                                                    type="password"
                                                    className="form-control"
                                                    name="password" id="password"
                                                    placeholder="Set your password"
                                                    onChange={formikProps.handleChange('password')}
                                                    value={formikProps.values.password}
                                                    onBlur={formikProps.handleBlur('password')}
                                                    required />
                                                <small />

                                            </div>
                                        </div>
                                    </div>
                                    <p style={{ color: '#484848' }}>{formikProps.touched.password && formikProps.errors.password}</p>
                                    <button type="submit" className="btn-get-started" style={{ cursor: 'pointer' }} onClick={formikProps.handleSubmit}>Register</button><br /><br />
                                    {error && <p style={{ color: '#484848' }}> {error}</p>}
                                    {loading && <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>}
                                    <p>
                                        If you already have an account,
                                        <Link to='/auth/login'><a style={{ color: '#0d6efd', cursor: 'pointer' }} >click here</a></Link>
                                    </p>
                                </form>
                            )}
                        </Formik>
                    </div>
                </section>
            }
        </>
    );
}

export default Register;