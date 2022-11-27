import './styles.css';
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import logo from '../../../assets/images/logo.svg'

interface SigninProps {
    email: string,
    password: string,
}

function Signin() {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1);
    }

    const initialValues: SigninProps = { email: '', password: '' };

    return (
        <div className='signin'>
            <img src={logo} className="home-logo" alt="logo" />
            <p>SIGN IN PAGE WITH FORMIK COMPONENTS</p>
            {/* <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {} as SigninProps;
                    if (!values.email) {
                        errors.email = '*Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = '*Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = '*Required'
                    } else if (!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,}$/i.test(values.password)) {
                        errors.password = '*Password must be at least 1 upper case letter, 1 lowwer case letter, 1 numeral and 1 special character'
                    }
                    return errors;
                }}
                onSubmit={(values: SigninProps, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form className='form' onSubmit={handleSubmit}>
                        <label className='label' htmlFor="email">Email:</label>
                        <input
                            placeholder="Enter email"
                            className='input'
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <span className='error'>{errors.email && touched.email && errors.email}</span>
                        <label className='label' htmlFor="password">Password:</label>
                        <input
                            placeholder="Enter password"
                            className='input'
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <span className='error'>{errors.password && touched.password && errors.password}</span>
                        <button className='button button-solid' type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik> */}
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {} as SigninProps;
                    if (!values.email) {
                        errors.email = '*Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = '*Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = '*Required'
                    } else if (!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,}$/i.test(values.password)) {
                        errors.password = '*Password must be at least 1 upper case letter, 1 lowwer case letter, 1 numeral and 1 special character'
                    }
                    return errors;
                }}
                onSubmit={(values, action) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        action.setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className='form'>
                    <label className='label' htmlFor="email">Email:</label>
                    <Field className='input' type="email" name="email" placeholder="Enter email" />
                    <ErrorMessage className='error' name="email" component="div" />
                    <label className='label' htmlFor="password">Password:</label>
                    <Field className='input' type="password" name="password" placeholder="Enter password" />
                    <ErrorMessage className='error' name="password" component="div" />
                    <button className='button button-solid' type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>

            <button
                className='button button-border'
                onClick={navigateBack}
            >
                To home page
            </button>
        </div>
    );
}
export default Signin