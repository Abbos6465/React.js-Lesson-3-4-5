import React, { useState, useRef, useEffect } from "react";
import "./About.scss";

const About = () => {
  const [user, setUser] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchUser = () =>{
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((result) => {
        setUser(result.data);
        setLoad(true);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
      fetchUser();
  });

  if(!load){
    return (
        <h1>Loading ....</h1>
      )
  }

  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div className="card mx-auto p-4 shadow">
            <h1 className="text-center fw-bold">USER LIST</h1>
            <ul className="list-group">
              {user.length > 0 ? (
                user.map((e) => {
                  return (
                    <li className="list-group-item">
                      <div className="d-flex">
                        <img src={e.avatar} alt="rasm" className="img-thumbnail" style={{width:"230px"}} />
                        <ul className="list-group">
                          <li className="list-group-item">
                            <strong>First Name:</strong> {e.first_name}
                          </li>
                          <li className="list-group-item">
                            <strong>Last Name:</strong> {e.last_name}
                          </li>
                          <li className="list-group-item">
                            <strong>Email:</strong> {e.email}
                          </li>
                        </ul>
                      </div>
                    </li>
                  );
                })
              ) : (
                <h2>USER LIST EMPTY</h2>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
