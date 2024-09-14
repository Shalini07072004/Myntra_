import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import './signup.css'
import axios from "axios";

const Signup = (props) => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',



  // });

  const [first_name, setFirstName] = useState(null)
  const [last_name, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [Username, setUserName] = useState(null)
  const [pnone_number, setPhoneNumber] = useState(null)
  const [password, setPassword] = useState(null)



  const UserAccount = async () => {
    console.log("UserAccount")
    const data = new FormData();
    data.append("first_name", first_name)
    // data.append("last_name", last_name)
    data.append("Email", email)
    // data.append("Useranme", Username)
    // data.append("Mobile", pnone_number)
    data.append("password", password)
    const Response = await axios.post("http://localhost:3008/signup/" + first_name + "/"+ email + "/"+ password, data, { header: { "content-type": "multipart/form-data" } })
    if (Response) {
      if (Response.data.status === "success") {
        alert("signup successfull")
      }
    }

  }


    // const [errors, setErrors] = useState({});

    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    //   });
    // };

    // const validate = () => {
    //   let tempErrors = {};
    //   if (!formData.name) tempErrors.name = "Name is required.";
    //   if (!formData.email) tempErrors.email = "Email is required.";
    //   if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is not valid.";
    //   if (!formData.password) tempErrors.password = "Password is required.";
    //   if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match.";
    //   setErrors(tempErrors);
    //   return Object.keys(tempErrors).length === 0;
    // };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (validate()) {
    //     console.log('Form data submitted:', formData);
    //     // Here you would typically send the data to the server
    //   }
    // };

    return (
      <div className="signup-container">
        <div classname="col-4 rounded p-3">
          <h2 className='text-center'>Signup</h2>
          {/* <form onSubmit={handleSubmit}> */}
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                // value={formData.name}
                onChange={(event) => { setFirstName(event.target.value) }}
              />
              {/* {errors.name && <span className="error">{errors.name}</span>} */}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                onChange={(event) => { setEmail(event.target.value) }}
              />
              {/* {errors.email && <span className="error">{errors.email}</span>} */}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                // value={formData.password}
                onChange={(event) => { setPassword(event.target.value) }}
              />
              {/* {errors.password && <span className="error">{errors.password}</span>} */}
            </div>

            {/* <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div> */}

            <button type="submit" onClick={UserAccount}>Signup</button>
          {/* </form> */}
        </div>
      </div>
    );
  };

  export default Signup;
