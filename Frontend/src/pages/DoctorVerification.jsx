import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const DoctorVerification = () => {
  const { backendUrl } = useContext(AppContext);
  const [docImg, setDocImg] = useState(null);
  const [docFile, setDocFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          toast.success("Location fetched successfully!");
        },
        (error) => {
          toast.error("Failed to fetch location.");
          console.error(error);
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!docFile) {
      return toast.error("Please attach a document.");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("experience", experience);
    formData.append("fees", fees);
    formData.append("about", about);
    formData.append("speciality", speciality);
    formData.append("degree", degree);
    formData.append("address1", address1);
    formData.append("address2", address2);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("document", docFile);

    try {
      const response = await axios.post(
        backendUrl + "/api/verification/send-verification-email",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success("Verification email sent successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 Year");
        setFees("");
        setAbout("");
        setSpeciality("General physician");
        setDegree("");
        setAddress1("");
        setAddress2("");
        setLatitude("");
        setLongitude("");
        setDocFile(null);
      } else {
        toast.error("Failed to send verification email.");
      }
    } catch (error) {
      toast.error("Error sending email. Please try again.");
      console.error(error);
    }
  };

  return (
    <form className="m-5 w-full" onSubmit={handleSubmit}>
      <p className="mb-3 text-lg font-medium">Doctor Verification</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl">
        <div className="flex flex-col gap-4 text-gray-600">
          <label
            htmlFor="doc-img"
            className="flex items-center gap-4 mb-8 text-gray-500"
          >
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={
                docImg ? URL.createObjectURL(docImg) : "upload_placeholder.png"
              }
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />

          <label className="text-gray-500">Upload Document:</label>
          <input
            onChange={(e) => setDocFile(e.target.files[0])}
            type="file"
            className="border rounded px-3 py-2"
            required
          />

          <input
            type="text"
            placeholder="Doctor's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            placeholder="Doctor's Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="number"
            placeholder="Doctor Fees"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Address Line 1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Address Line 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <select
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className="border rounded px-3 py-2"
            required
          >
            <option value="General physician">General physician</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Pediatrician">Pediatrician</option>
          </select>
          <textarea
            placeholder="About Doctor"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full px-4 pt-2 border rounded"
            rows={5}
            required
          />

          {/* Location Section */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-500">Doctor Location:</label>
            <button
              type="button"
              onClick={fetchLocation}
              className="bg-blue-500 text-white px-4 py-2 rounded w-fit"
            >
              Get Current Location
            </button>
            <input
              type="text"
              placeholder="Latitude"
              value={latitude}
              readOnly
              className="border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Longitude"
              value={longitude}
              readOnly
              className="border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default DoctorVerification;
