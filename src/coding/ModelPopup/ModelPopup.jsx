import React, { useState } from 'react';

export default function ModelPopup() {
  const [contact, setContact] = useState({
    fname: '',
    email: '',
    password: '',
    address: '',
    color: '',
    city: '',
    state: '',
    zip: '',
    agree: false,
  });

  const [show, setShow] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setContact({
      ...contact,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Data Submitted:", contact);
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
    setContact({
      fname: '',
      email: '',
      password: '',
      address: '',
      color: '',
      city: '',
      state: '',
      zip: '',
      agree: false,
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-lg w-full max-w-lg"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                value={contact.fname}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={contact.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                Your Favorite Color
              </label>
              <input
                type="color"
                name="color"
                id="color"
                value={contact.color}
                onChange={handleChange}
                className="mt-1 block w-full h-10 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                value={contact.address}
                onChange={handleChange}
                placeholder="Enter Address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={contact.city}
                onChange={handleChange}
                placeholder="Enter Your City"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <select
                name="state"
                id="state"
                value={contact.state}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Choose...</option>
                <option value="Telangana">Telangana</option>
                <option value="AndhraPradesh">Andhra Pradesh</option>
                <option value="Tamilnadu">Tamil Nadu</option>
              </select>
            </div>

            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                Pin/Zip
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                value={contact.zip}
                onChange={handleChange}
                placeholder="Enter Zip Code"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={contact.agree}
                  onChange={handleChange}
                  className="mr-2"
                />
                Say, You Agree!
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-xl font-semibold mb-4">Form Data</h3>
            <p>Full Name: {contact.fname}</p>
            <p>Email: {contact.email}</p>
            <p>Password Length: {contact.password.length} characters</p>
            <p>
              Favorite Color:{' '}
              <span style={{ color: contact.color }}>{contact.color}</span>
            </p>
            <p>
              Address: {contact.address}, {contact.city}, {contact.state}, {contact.zip}
            </p>
            <p>Agree: {contact.agree ? 'Yes' : 'No'}</p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
