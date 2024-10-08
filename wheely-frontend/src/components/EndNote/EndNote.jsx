import React from "react";
import { useMyAppContext } from "../../context/myAppContext";

const EndNote = () => {
  const { darkMode } = useMyAppContext();
  return (
    <div
      className={`p-10 h-screen space-y-6 flex flex-col justify-end text-blue-600 ${
        darkMode && "text-blue-300"
      }`}
    >
      <div className="space-y-3">
        <h1 className="font-semibold">Rent the Perfect Vehicle with Wheely</h1>
        <p className={`${darkMode && "opacity-45"} text-xs opacity-85 font-montserrat`}>
          There are countless reasons you may need to rent a car. Whether you’re
          moving and need a spacious cargo van, planning a weekend getaway with
          a convertible for a scenic drive, or heading out on a business trip
          and need a luxury car to impress clients, Wheely has the perfect
          rental for you.
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="font-semibold">Why Choose Wheely?</h1>
        <p className={`${darkMode && "opacity-45"} text-xs opacity-85 font-montserrat`}>
          Wheely is a convenient, affordable, and eco-friendly alternative to
          traditional car rentals. By choosing Wheely, you’re sharing vehicles
          from local owners when they aren’t in use, helping reduce the number
          of new cars on the road and giving the environment a much-needed
          break. Wheely cars are available in communities, airports, and cities
          around the world, making it easy to find a rental near you. With
          flexible options, you can rent a car by the hour or by the day,
          ensuring you have a ride whenever you need it. Plus, with our simple
          and flexible cancellation policy, you can cancel your booking free of
          charge within 1 hour of booking or 24 hours before your trip.
        </p>
      </div>

      <h1 className="text-xs">
        The Convenience of Renting with Wheely Can’t Be Beat, give it a shot
        &#128512;
      </h1>
      <div className="space-y-3">
        <h1 className="font-semibold">
          Types of Cars You Can Rent with Wheely
        </h1>
        <p className={`${darkMode && "opacity-45"} text-xs opacity-85 font-montserrat`}>
          Choose between different vehicle categories like SUVs, Sedans, Coupes,
          Minivans, or Pickup Trucks. Whether you're looking for a rugged Jeep
          for an adventure or a sleek sedan for a city drive, we’ve got options.
          Need something economical? Want to ride in luxury or feel the power of
          a performance car? You can filter by class—Economy, Luxury, or
          Performance—so you always get exactly what you're looking for. Prefer
          an automatic or manual transmission? Looking for all-wheel drive? You
          can easily search by these preferences as well. We go beyond just the
          basics. If you need a roof rack for a ski trip, a bike rack for your
          adventure, or even a pet-friendly car, Wheely lets you search for
          vehicles with specific features. From cars with Bluetooth connectivity
          to those with added conveniences like extra cargo space, we’ve got it
          all.
        </p>
      </div>
    </div>
  );
};

export default EndNote;
