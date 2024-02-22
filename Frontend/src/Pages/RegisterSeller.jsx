// import React, { useState, useContext, useEffect } from 'react'
// import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import './register.css';
// import axios from 'axios';

// import registerImg from '../assets/images/register.png';
// import userIcon from '../assets/images/user.png';
// import { AuthContext } from "../context/AuthContext"
// import { BASE_URL } from "../utils/config";

// const RegisterSeller= () => {

//   const [credentials, setCredentials] = useState({
//     businessName: undefined,
//     firstName: undefined,
//     lastName: undefined,
//     gstNumber: undefined,
//     mobNo: undefined,
//     category: undefined,
//     accountNumber: undefined, 
//     ifsc: undefined,
//     sellerName: undefined,
//     email: undefined,
//     password: undefined
//   });

//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const handleChange = e => {
//     console.log(e.target.value);
//     console.log(credentials)
//     setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     setFormErrors(validate(credentials));
//     setIsSubmit(true);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       await handleSubmit();
//     }
//   };
//   const handleSubmit = async () => {

//     try {

//       const res = await axios.post("http://localhost:8000/auth/seller", {
//         headers: {
//           // "Authorization": `Bearer  ${JSON.parse(localStorage.getItem("token"))}`
//           // "content-type": "application/json"
//         },
//         body: JSON.stringify(credentials)
//       });
//       const result = await resp.json();

//       console.log(result, "oasdfasdfasdfasd");

//       if (!res.ok) alert(result.message);

//       dispatch({ type: "RESGISTER_SUCCESS" });
//       navigate("/Login")


//     } catch (err) {
//       alert(err.message);
//     }
//   };
//   useEffect(() => {
//     console.log("error", formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(credentials);
//     }
//   }, [formErrors])

//   //Validation
//   const validate = (values) => {
//     const errors = {};
//     const emailValidator = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//     const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
//     const mobValidator = /^[0-9]+$/;

//     if (!values.firstName) {
//       errors.firstName = "first name is required";
//     }
//     if (!values.lastName) {
//       errors.lastName = "last name is required";
//     }
//     if (!values.email) {
//       errors.email = "email is required";
//     }
//     else if (!emailValidator.test(values.email)) {
//       console.log("inside email invalid")
//       errors.email = "Invalid email format";
//     }
//     if (values.mobNo<10) {
//       errors.mobNo = "Should be atleast 10 numbers";
//     }
//     if (!mobValidator.test(values.mobNo)) {
//       errors.mobNo = "Only numbers are allowed";
//     }
//     if (!values.sellerName) {
//       errors.sellerName = "Sellername is required";
//     }
//     else if (values.sellerName.length<4) {
//       errors.sellerName = "Should be atleat 4 characters";
//     }
//     if (!values.password) {
//       errors.password = "password is required";
//     }
//     if (!passwordValidator.test(values.password)) {
//       errors.password = "Invalid Password";
//     }
//     return errors;

//   }

//   return <section>
//     <Container>
//       <Row>
//         <Col lg="8" className='m-auto'>
//           <div className="login__container d-flex justify-content-between">
//             <div className="login__img">
//               <img src={registerImg} alt="" />
//             </div>
//             <div className="login__form">
//               <div className="user">
//                 <img src={userIcon} alt="" />
//               </div>
//               <h2>Register</h2>

//               <Form onSubmit={handleClick}>
//                 <FormGroup>
//                   <input type="text" placeholder='Business Name' id="businessName" name="businessName" onChange={handleChange} />
//                   {/* <p>{formErrors.firstName}</p> */}
//                 </FormGroup>
//                 <FormGroup className='d-flex'>
//                   <input type="text" placeholder='First Name' id="firstName" name="firstName" onChange={handleChange} />
//                   <p>{formErrors.firstName}</p>
//                   <input type="text" placeholder='Last Name' id="lastName" name="lastName" onChange={handleChange} />
//                   <p>{formErrors.lastName}</p>
//                 </FormGroup>
//                 <FormGroup>
//                   <input type="text" placeholder='SellerName' id="sellerName" name="sellerName" onChange={handleChange} />
//                 </FormGroup>
//                 <p>{formErrors.sellerName}</p>
//                 <FormGroup>
//                   <input type="text" placeholder='GST Number' id="gstNumber" name="gstNumber" onChange={handleChange} />
//                 </FormGroup>
//                 <FormGroup>
//                   <input type="text" placeholder='Category' id="category" name="category" onChange={handleChange} />
//                 </FormGroup>
//                 <FormGroup>
//                   <input type="text" placeholder='Email' id="email" name="email" onChange={handleChange} />
//                 </FormGroup>
//                 <p>{formErrors.email}</p>
//                 <FormGroup>
//                   <input type="text" placeholder='Mobile No' required id="mobNo" name="mobNo" onChange={handleChange} />
//                 </FormGroup>
//                 <p>{formErrors.mobNo}</p>
//                 <FormGroup className='d-flex'>
//                   <input type="text" placeholder='Account Number' id="accountNumber" name="accountNumber" onChange={handleChange} />
//                   <input type="text" placeholder='IFSC Code' id="ifsc" name="ifsc" onChange={handleChange} />
//                 </FormGroup>
//                 <FormGroup>
//                   <input type="password" placeholder='Password' required id="password" name="password" onChange={handleChange} />
//                 </FormGroup>
//                 <p>{formErrors.password}</p>
//                 <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
//               </Form>
//               <p>Already have an account? <Link to='/Login'>Login</Link></p>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   </section>
// }

// export default RegisterSeller;







// // import React, { useState, useContext, useEffect } from 'react'
// // import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './register.css';

// // import registerImg from '../assets/images/register.png';
// // import userIcon from '../assets/images/user.png';
// // import { AuthContext } from "../context/AuthContext"
// // import { BASE_URL } from "../utils/config";

// // const Register = () => {

// //   const [credentials, setCredentials] = useState({
// //     firstName: undefined,
// //     lastName: undefined,
// //     mobNo: undefined,
// //     username: undefined,
// //     email: undefined,
// //     password: undefined
// //   });

// //   const [formErrors, setFormErrors] = useState({});
// //   const [isSubmit, setIsSubmit] = useState(false);

// //   const { dispatch } = useContext(AuthContext);
// //   const navigate = useNavigate();

// //   const handleChange = e => {
// //     console.log(e.target.value);
// //     console.log(credentials)
// //     setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
// //   };

// //   const handleClick = async (e) => {
// //     e.preventDefault();
// //     setFormErrors(validate(credentials));
// //     setIsSubmit(true);
// //     if (Object.keys(formErrors).length === 0 && isSubmit) {
// //       await handleSubmit();
// //     }
// //   };
// //   const handleSubmit = async () => {

// //     try {

// //       const res = await fetch("http://localhost:8000/auth/register", {
// //         method: "post",
// //         headers: {
// //           "content-type": "application/json"
// //         },
// //         body: JSON.stringify(credentials)
// //       });
// //       const result = await res.json();

// //       console.log(result, "oasdfasdfasdfasd");

// //       if (!res.ok) alert(result.message);

// //       dispatch({ type: "RESGISTER_SUCCESS" });
// //       navigate("/Login")


// //     } catch (err) {
// //       alert(err.message);
// //     }
// //   };
// //   useEffect(() => {
// //     console.log("error", formErrors);
// //     if (Object.keys(formErrors).length === 0 && isSubmit) {
// //       console.log(credentials);
// //     }
// //   }, [formErrors])

// //   //Validation
// //   const validate = (values) => {
// //     const errors = {};
// //     const emailValidator = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// //     const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
// //     const mobValidator = /^[0-9]+$/;

// //     if (!values.firstName) {
// //       errors.firstName = "first name is required";
// //     }
// //     if (!values.lastName) {
// //       errors.lastName = "last name is required";
// //     }
// //     if (!values.email) {
// //       errors.email = "email is required";
// //     }
// //     else if (!emailValidator.test(values.email)) {
// //       console.log("inside email invalid")
// //       errors.email = "Invalid email format";
// //     }
// //     if (values.mobNo<10) {
// //       errors.mobNo = "Should be atleast 10 numbers";
// //     }
// //     if (!mobValidator.test(values.mobNo)) {
// //       errors.mobNo = "Only numbers are allowed";
// //     }
// //     if (!values.username) {
// //       errors.username = "Username is required";
// //     }
// //     else if (values.username.length<4) {
// //       errors.username = "Should be atleat 4 characters";
// //     }
// //     if (!values.password) {
// //       errors.password = "password is required";
// //     }
// //     if (!passwordValidator.test(values.password)) {
// //       errors.password = "Invalid Password";
// //     }
// //     return errors;

// //   }

// //   return <section>
// //     <Container>
// //       <Row>
// //         <Col lg="8" className='m-auto'>
// //           <div className="login__container d-flex justify-content-between">
// //             <div className="login__img">
// //               <img src={registerImg} alt="" />
// //             </div>

// //             <div className="login__form">
// //               <div className="user">
// //                 <img src={userIcon} alt="" />
// //               </div>
// //               <h2>Register</h2>

// //               <Form onSubmit={handleClick}>
// //                 <FormGroup className='d-flex'>
// //                   <input type="text" placeholder='First Name' id="firstName" name="firstName" onChange={handleChange} />
// //                   <p>{formErrors.firstName}</p>
// //                   <input type="text" placeholder='Last Name' id="lastName" name="lastName" onChange={handleChange} />
// //                   <p>{formErrors.lastName}</p>
// //                 </FormGroup>

// //                 {/* <FormGroup>
// //                   <input type="text" placeholder='Last Name' id="lastName" name="lastName" onChange={handleChange} />
// //                 </FormGroup> */}
             
// //                 <FormGroup>
// //                   <input type="text" placeholder='Email' id="email" name="email" onChange={handleChange} />
// //                 </FormGroup>
// //                 <p>{formErrors.email}</p>
// //                 <FormGroup>
// //                   <input type="text" placeholder='Mobile No' required id="mobNo" name="mobNo" onChange={handleChange} />
// //                 </FormGroup>
// //                 <p>{formErrors.mobNo}</p>
// //                 <FormGroup>
// //                   <input type="text" placeholder='Username' id="username" name="username" onChange={handleChange} />
// //                 </FormGroup>
// //                 <p>{formErrors.username}</p>
// //                 {/* <FormGroup>
// //                       <input type="email" placeholder='Email' required id="email" onChange={handleChange} />
// //                     </FormGroup> */}
// //                 <FormGroup>
// //                   <input type="password" placeholder='Password' required id="password" name="password" onChange={handleChange} />
// //                 </FormGroup>
// //                 <p>{formErrors.password}</p>
// //                 <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
// //               </Form>
// //               <p>Already have an account? <Link to='/Login'>Login</Link></p>
// //             </div>
// //           </div>
// //         </Col>
// //       </Row>
// //     </Container>
// //   </section>
// // }

// // export default Register;

