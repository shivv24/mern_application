import React, { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData ={
    username:"",
    email:"",
    message:"",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData,setUserData]=useState(true);
  const {user}=useAuth();
  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit =async  (e) => {
    e.preventDefault();

    try{
      const response = await fetch("http://127.0.0.1:8000/api/form/contact",{
        method:"POST",
        headers:{
          'Content-Type':"application/json",
        },
        body:JSON.stringify(contact)
      });
      if (response.ok){
        setContact(defaultContactFormData);
        const data=await response.json();
        console.log(data);
        alert("Message sent successfully");
      }
  } 
    catch(error){
      alert("Message not found");
      console.log(error)
    }
  };

  return (
    <div>
      <section>
        <h1 className="main-heading mb-3">Contact Us</h1>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img 
                  src="/Images/contact.png"
                  alt="Lets fill the Contact form"
                  width={700}
                  height={500}
                />
              </div>
              <div className="registration-form">
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="message">message</label>
                      <br/>
                      <textarea
                        name="message"
                        id="message"
                        cols={40}
                        rows={10}
                        required
                        value={contact.message}
                        onChange={handleInput}
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Contact;
