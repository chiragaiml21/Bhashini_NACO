import React from "react";
import "../Chatbot.css";
import "../../DashBoard/DashBoard.css";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";
import Deploy from "../Deploy_button/Deploy";
import { useEffect, useState } from "react";
import axios from "axios";

const Description = () => {
  // const [userName, setUserName] = useState([{}]);

  // useEffect(() => {
  //   axios
  //     .get("/api")
  //     .then((response) => {
  //       setUserName([response.data]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const [formData, setFormData] = useState({
    name: "",
    desc: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/create-index", formData);
      console.log("Form data successfully sent to the backend!", response.data);
    } catch (error) {
      console.error("Error sending form data to the backend:", error.message);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-xl box1 w-[550px] h-[80vh]">
      <div className="flex flex-row justify-between items-center">
        <h1 className="p-4 text-xl font-normal">ChatBot Description</h1>
        <Deploy />
      </div>

      <hr></hr>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-4 gap-2">
          <label htmlFor="" className="font-light text-sm">
            ChatBot's Name
          </label>
          <div className="flex flex-row justify-between items-center">
            <input
              type="text"
              name="name"
              value={formData.name}
              className="border border-slate-400 border-solid w-2/4 h-10 p-4 rounded-xl"
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="button text-white">
              <div className="flex items-center gap-x-2">
                <IoMdCreate />
                Create chatbot
              </div>
              <div className="hoverEffect">
                <div></div>
              </div>
            </button>
          </div>
        </div>

        {/* <div>
        {userName.map((name, i) => (
          <p key={i} className="text text-black">{name.name}</p>
        ))}
      </div> */}

        <div className="flex flex-col p-4  gap-2">
          <label htmlFor="" className="font-light text-sm">
            ChatBot's Backstory
          </label>
          <textarea
            name="desc"
            id=""
            cols="30"
            value={formData.desc}
            rows="10"
            className="border border-slate-400 border-solid h-[47.5vh] p-4 rounded-xl"
            placeholder="Please enter you context here"
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Description;
