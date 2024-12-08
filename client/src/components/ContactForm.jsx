// // components/ContactForm.jsx
// import React, { useState } from "react";

// const ContactForm = () => {
//   const [input, setInput] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Message Sent! Name: ${input.name}, Email: ${input.email}`);
//     setInput({ name: "", email: "", message: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label className="form-label">Name</label>
//         <input
//           type="text"
//           name="name"
//           className="form-control"
//           value={input.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label className="form-label">Email</label>
//         <input
//           type="email"
//           name="email"
//           className="form-control"
//           value={input.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label className="form-label">Message</label>
//         <textarea
//           name="message"
//           className="form-control"
//           rows="3"
//           value={input.message}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ContactForm;