import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChanges = (e) => {
  const { name, value } = e.target;
   /*   setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    })); */
    setProfile({[name]:value,})




  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={(e) => handleChanges(e)}
          placeholder="enter a name"
        />
        <br />
        <label htmlFor="" type="text">
          Age:
        </label>
        <input
          type="number"
          name="age"
          value={profile.age}
          onChange={(e) => handleChanges(e)}
        />

        <h3>Profile information</h3>

        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
