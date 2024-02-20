import React, { useState } from "react";
import { useLocalContent } from "src/lib/hooks/use-local-content";
import ConfirmationModal from "./Confirm";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const {
    firstName,
    country,
    lastName,
    email,
    phoneNumber,
    address,
    postalCode,
    city,
  } = useLocalContent();
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmationModal(true);
    localStorage.removeItem("cart");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
  };
  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    router.push("/");
  };
  return (
    <div className="container mx-auto flex justify-center p-4 ">
      <div className="w-full max-w-10 mt-12.5 p-5 flex flex-col box-border items-center bg-green-400 text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <form className="flex flex-col gap-y-3 w-1/2" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="firstName" className="mb-1 text-sm">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="lastName" className="mb-1 text-sm">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="email" className="mb-1 text-sm">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="phoneNumber" className="mb-1 text-sm">
              Phone Number
            </label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="address" className="mb-1 text-sm">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={address+", "+city}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="postalCode" className="mb-1 text-sm">
              Postal Code
            </label>
            <input
              type="number"
              name="postalCode"
              id="postalCode"
              value={postalCode}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="country" className="mb-1 text-sm">
              First Name
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={country}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            className=" mx-12 mt-4 py-2 px-4 text-center rounded-md bg-blue-400 hover:bg-green-500 text-white font-bold focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
          >
            Submit Order
          </button>
        </form>
      </div>
      {showConfirmationModal && (
        <ConfirmationModal closeModal={closeConfirmationModal} />
      )}
    </div>
  );
};

export default Checkout;
