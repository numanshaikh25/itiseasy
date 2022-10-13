import { Link } from "react-router-dom";
import React from 'react'
import { Formik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import ConfigData from './../config/constant.json'
import { useHistory } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import OtpComponet from './OtpComponent'

const Login = () => {
    const [otpComponent, setOtpComponent] = React.useState(false)
    let [loginerror, setLoginError] = React.useState(false)
    let [loginloading, setLoginLoading] = React.useState(false)

    let history = useHistory()

    let handleLogin = async (values) => {
        try {
            setLoginLoading(true)
            setLoginError(false)

            let response = await axios.post(`${ConfigData.SERVER_URL}/auth/login`, { values }, { withCredentials: true })

            // If Error
            if (response.data.status == false) {
                throw Error(response.data.message);
            }
            else {
                if (response.data.verifymessage == "user verified") {
                    history.push('/main')
                } else if (response.data.verifymessage === "not verified") {
                    setOtpComponent(response.data.user)
                }
            }

        } catch (e) {
            console.log(e)
            setLoginError(e.message)
            setLoginLoading(false)
        }

    }

    const loginSchema = yup.object({
        phone: yup.string()
            .required("Phone Number is Required")
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
        password: yup.string()
            .required("Password is Required")
            .min(4),
    });

    return (
        <>

            {
                otpComponent && <OtpComponet user={otpComponent}></OtpComponet>
            }
            {
                !otpComponent &&
                <>
                    <section id="login" className="d-flex align-items-center login">
                        <div className="container" data-aos="zoom-out" data-aos-delay={100}>
                            <h2>Login</h2>
                            <Formik
                                initialValues={{ phone: '', password: '' }}
                                validationSchema={loginSchema}
                                onSubmit={(values, actions) => {
                                    handleLogin(values);
                                }}
                            >
                                {(formikProps) => (
                                    <form id="login-form">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        pattern="[789][0-9]{9}"
                                                        name="contact"
                                                        title="Enter only 10 numbers"
                                                        id="mobile"
                                                        placeholder="Mobile number"
                                                        onChange={formikProps.handleChange('phone')}
                                                        value={formikProps.values.phone}
                                                        onBlur={formikProps.handleBlur('phone')}
                                                        required />
                                                    <p style={{ color: '#484848' }}>{formikProps.touched.phone && formikProps.errors.phone}</p>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        autoComplete="current-password"
                                                        required id="id_password"
                                                        onChange={formikProps.handleChange('password')}
                                                        value={formikProps.values.password}
                                                        onBlur={formikProps.handleBlur('password')}
                                                        placeholder="Password" />
                                                    <p style={{ color: '#484848' }}>{formikProps.touched.password && formikProps.errors.password}</p>
                                                    {/* <i class="far fa-eye" id="togglePassword" style="margin-left: -30px; cursor: pointer;"></i> */}
                                                    <p style={{ fontSize: '13px', textAlign: 'right', cursor: 'pointer', color: '#528035' }}><Link to="/auth/forgot-password">Forgot password?</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn-get-started" style={{ cursor: 'pointer' }} onClick={formikProps.handleSubmit}>Log
                                            In</button><br /><br />

                                        {loginerror && <p style={{ color: '#484848' }}> {loginerror}</p>}
                                        {loginloading && <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>}
                                        <p>New user?<Link to="/auth/register"><a style={{ color: '#528035', cursor: 'pointer' }} >click
                                            here</a></Link></p>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </section>
                </>
            }

        </>
    );
}

export default Login;