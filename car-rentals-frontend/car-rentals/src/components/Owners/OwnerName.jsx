import React from "react";
import { useMyAppContext } from "../../context/myAppContext";

const OwnerName = () => {
  const { userProfile } = useMyAppContext();

  let ownerName = "";

  if (userProfile) {
    ownerName = userProfile.name.split(" ").at(-1);
  }

  return <div className="m-10 text-6xl font-montserra font-bold gradient-text">Welcome <span className="text-6xl">{ownerName}</span></div>;
};

export default OwnerName;
