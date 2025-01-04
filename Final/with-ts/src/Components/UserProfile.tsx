import { useState } from "react";

const UserProfile = () => {
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const [profile, setProfile] = useState<Profile>({
    name: "",
    age: 0,
    email: "",
  });

  return (
    <div>
      <h2>User PRofile</h2>
      <input
        type="text"
        placeholder="name"
        value={profile.name}
        onChange={(e) =>
          setProfile((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      <input
        type="number"
        placeholder="age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) =>
          setProfile((prev) => ({
            ...prev,
            age: Number(e.target.value),
          }))
        }
      />
      <input
        type="email"
        placeholder="email"
        value={profile.email}
        onChange={(e) =>
          setProfile((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />

      <p>Name:{profile.name}</p>
      <p>Age:{profile.age}</p>
      <p>Email:{profile.email}</p>
    </div>
  );
};

export default UserProfile;
