import React, { useState } from "react";
import pic1 from "../5s.png";
import { v4 } from "uuid";
import {
  collection,
  addDoc,
} from "firebase/firestore/lite";
import { db } from "../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { upload } from "@testing-library/user-event/dist/upload";

const option = [
  { classrom: "6-1" },
  { classrom: "6-2" },
  { classrom: "6-3" },
  { classrom: "6-4" },
  { classrom: "6-5" },
  { classrom: "6-6" },
  { classrom: "6-7" },
  { classrom: "6-8" },
];

const Sendreport = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [image, setImage] = useState();
  const [classroom, setClassroom] = useState();
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, classroom);

    const d = new Date().toLocaleString();

    const storage = getStorage();
    const path = `/${classroom}/${image.name}/` + v4();
    const storageRef = ref(storage, path);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then((img) => {
      getDownloadURL(img.ref).then((url) => {
      console.log("Uploaded a blob or file!", url);
      addDoc(collection(db, classroom), {
        firstName: firstName,
        lastName: lastName,
        classroom: classroom,
        img: url,
        date: d,
      })
        .then(() => {
          alert("Message added successfully");
          // setFormLoading(false);
        })
        .catch((error) => {
          alert(error.message);
          // setFormLoading(false);
        });
    });
    });


  };

  return (
    <div className="header-wrapper">
      <div className="main_info">
        <div className="container">
          <br />
          <br />
          <br />
          <div className="banner-about">
            <div class="card">
              <img class="card-img-top" src={pic1} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">
                  <i class="bi bi-check-circle"></i>Sendreport Here!!
                </h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

                {/* <input type='file'>
              </input> */}

                <form
                  class="row mt-3 g-3 needs-validation"
                  novalidate
                  onSubmit={handleSubmit}
                >
                  <input
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  ></input>
                  <div class="col-md-4">
                    <label for="fname">First name:</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      id="fname"
                      name="fname"
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                  </div>

                  <div class="col-md-4">
                    <label for="lname">Last name:</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      id="lname"
                      name="lname"
                      onChange={(e) => setLastName(e.target.value)}
                    ></input>
                  </div>

                  <div class="col-md-3 ">
                    <label for="cars">Choose:</label>
                    <select
                      name="cars"
                      id="cars"
                      onChange={(e) => setClassroom(e.target.value)}
                    >
                      {option.map((item) => {
                        return <option>{item.classrom}</option>;
                      })}
                    </select>
                  </div>

                  <div class="col-12 mt-5">
                    <button class="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Sendreport;
