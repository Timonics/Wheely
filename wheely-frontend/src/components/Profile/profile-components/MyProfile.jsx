import React from "react";
import { useMyAppContext } from "../../../context/myAppContext";

const MyProfile = () => {
  const { userProfile } = useMyAppContext();
  console.log(userProfile);
  return (
    <div className="flex flex-col gap-5 items-start p-10">
      <h1 className="text-5xl font-montserrat font-extrabold text-blue-500">
        Profile Information
      </h1>
      <div className="flex flex-col gap-3 p-4 pb-5 w-full bg-slate-400/50 rounded-xl">
        <h2 className="font-bold text-2xl">Personal Information</h2>
        <div className="flex gap-7 w-full justify-center items-center">
          <div className="w-1/4 flex flex-col gap-2 items-center">
            <h1 className="font-medium">Your Photo</h1>
            <img
              src={userProfile.picture ? userProfile.picture : ""}
              className="w-[100px] h-[100px] bg-slate-500 rounded-2xl"
            />
          </div>
          <div className="w-3/4 space-y-1">
            <div className="text-sm font-medium px-3">Name</div>
            <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
              {userProfile.name}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full p-4 pb-5 bg-slate-400/50 rounded-xl">
        <h1 className="font-bold text-2xl">Drivers License</h1>
        <div className="space-y-1">
          <p className="text-sm font-medium px-3">License Number</p>
          <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
            lic no
          </div>
        </div>
        <div>
          <p className="text-sm font-medium px-3">First Issue Date</p>
          <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
            issue date
          </div>
        </div>
        <div>
          <p className="text-sm font-medium px-3">Country of Issue</p>
          <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
            country
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full p-4 pb-5 bg-slate-400/50 rounded-xl">
        <h1 className="font-bold text-2xl">Contact Information</h1>
        <div>
          <p className="text-sm font-medium px-3">Email Address</p>
          <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
            {userProfile.email}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium px-3">Phone Number</p>
          <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
            {userProfile.phone ? userProfile.phone : "Not Available"}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full p-4 pb-5 bg-slate-400/50 rounded-xl">
        <h1 className="font-bold text-2xl">Address</h1>
        <div>
          <p className="text-sm font-medium px-3">Address</p>
          <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
            address
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-1/4">
            <p className="text-sm font-medium px-3">Zip Code</p>
            <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
              zip-code
            </div>
          </div>
          <div className="w-3/4">
            <p className="text-sm font-medium px-3">City</p>
            <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
              city
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium px-3">State</p>
          <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
            state
          </div>
        </div>
        <div>
          <p className="text-sm font-medium px-3">Country</p>
          <div className="text-lg py-2 px-4 bg-slate-400/75 rounded-xl font-semibold">
            country
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
