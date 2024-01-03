'use client'

import { useState } from "react";
// import yup from "yup";
import DisplayContact from "./displayContact"
import { contactTypes, onChangeEventType } from "@/type/componentsType";

// const contactInfoSchema = yup.object().shape({
//   name: yup.string().required().min(5).max(10),
//   email: yup.string().email().required(),
//   phone: yup.string().required('Phone number is required'),
//   message: yup.string().required(),

// })


export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    email: "",
    phone: 0,
    message: "",
  })

  const [contactList, setContactList] = useState<contactTypes[]>([])

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }

  const onClickHandler = () => {

    if (!contactInfo.name) {
      alert("Enter Your Name")
      return
    }
    else if (!contactInfo.phone) {
      alert("Enter Your Phone")
      return
    }
    else if (!contactInfo.email) {
      alert("Enter Your Email")
      return
    }
    else if (!contactInfo.message) {
      alert("Enter Your Message")
      return
    }
    let newContactList: contactTypes[] = [...contactList, contactInfo]
    setContactList(newContactList)
    console.log("newContactList", newContactList);

    setContactInfo({
      name: "",
      email: "",
      phone: 0,
      message: "",
    })
  }


  return (
    <>
      <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">

          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
            Name
          </label>
          <input
            value={contactInfo.name}
            onChange={onChangeHandler}
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-600 font-medium mb-2">
            Phone
          </label>
          <input
            value={contactInfo.phone}

            onChange={onChangeHandler}
            type="number"
            id="phone"
            name="phone"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Phone"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
            Email
          </label>
          <input
            value={contactInfo.email}

            onChange={onChangeHandler}
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 font-medium mb-2">
            Message
          </label>
          <textarea
            value={contactInfo.message}

            onChange={onChangeHandler}
            id="message"
            name="message"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            onClick={onClickHandler}
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <DisplayContact contactData={contactList} />
    </>

  )
}



