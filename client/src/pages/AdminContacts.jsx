import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contactsData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      } else {
        console.error("Failed to fetch contacts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById=async(id)=>{
    try{
      const response=await fetch(`http://127.0.0.1:8000/api/admin/contacts/delete/${id}`,
       {method:"DELETE",
       headers:{
        Authorization:authorizationToken,
       }
    });
    if (response.ok){
      getContactsData();
      toast.success("deleted successfully");
      } else {
        toast.error("Not deleted ");
      }}
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin Contact Data </h1>

        <div className="container  admin-users">
          {contactsData.map((curContactData, index) => {
            const { username, email, message, _id} = curContactData;

            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={()=> deleteContactById(_id)}>
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AdminContacts;
