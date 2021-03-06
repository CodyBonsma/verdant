import React, { useEffect, useState, useContext } from "react";
import TestImage from "../../Images/gardening.png";
import TestImage2 from "../../Images/undraw_environment_iaus.png";
import AlertContext from "../../context/AlertContext";
import jwt from "jsonwebtoken";
import userContext from "../../context/userContext";
import API from "../../utils/API";
import "./UserAccount.css";

const AccountPage = () => {
  const { setAlert } = useContext(AlertContext);
  const { setJwt } = useContext(userContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // grab jwt from local storage and decode the information
    const localJwt = localStorage.getItem("jwt");
    console.log(localJwt);
    if (localJwt) {
      // use the token and set it against the secret key to unlock the payload
      const decoded = jwt.decode(localJwt, process.env.JWT_SECRET);
      console.log(decoded);

      API.getUser(decoded.id)
        .then((response) => {
          // get user information back and set it to state
          setUser([response.data]);
        })
        .catch((err) => {
          if (err) throw err;
        });
    }
  }, []);

  return (
    <>
      <div>
        <div className="container fluid">
          {user.map((account) => {
            return (
              <div className="row">
                <div className="col-sm-12">
                  <h2 key={account.id} class="header">
                    Green Thumb: {account.first_name} {account.last_name}
                  </h2>
                  <div className="row">
                    <div className="col-sm-3">
                      <img
                        src={TestImage}
                        alt="Gardening Illustration"
                        className="accountImg"
                      />
                    </div>
                    <div
                      className="col-sm-6"
                      style={{ marginTop: "auto", marginBottom: "auto" }}
                    >
                      <p className="text-center" id="accountBio">
                        <ul>Favorite Plant: String of Pearls</ul>
                        <ul>Watering Schedule: Whenever I remember!</ul>
                        <ul>Member Since: 2020</ul>
                      </p>
                    </div>
                    <div className="col-sm-3">
                      <img
                        src={TestImage2}
                        alt="Sprouting Seeds"
                        className="accountImg"
                        id="handsImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AccountPage;
