// import React, { useState } from "react";

// const initialState = {
//   name: "",
//   email: "",
//   phoneNumber: "",
//   message: "",
//   sendCopy: false,
// };

// const initialErrors = {
//   name: "",
//   email: "",
//   phoneNumber: "",
//   message: "",
// };

// const validationRules = {
//   email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
//   phoneNumber: /^\d{10}$/,
// };

// function App() {
//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState(initialErrors);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const newValue = type === "checkbox" ? checked : value;

//     setFormData({
//       ...formData,
//       [name]: newValue,
//     });

//     if (validationRules[name]) {
//       const valid = validationRules[name].test(newValue);
//       setErrors({
//         ...errors,
//         [name]: valid ? "" : `${name} is not valid`,
//       });
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const hasErrors = Object.values(errors).some((error) => error !== "");

//     if (hasErrors) {
//       console.log("Form has errors. Please correct them.");
//     } else {
//       console.log("Form submitted successfully:", formData);

//       setFormData(initialState);
      
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-outline mb-4">
//         <label className="form-label" htmlFor="form4Example1">
//           Name
//         </label>
//         <input
//           type="text"
//           id="form4Example1"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//         {errors.name && <div className="text-danger">{errors.name}</div>}
//       </div>

//       <div className="form-outline mb-4">
//         <label className="form-label" htmlFor="form4Example2">
//           Email address
//         </label>
//         <input
//           type="email"
//           id="form4Example2"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//         {errors.email && <div className="text-danger">{errors.email}</div>}
//       </div>

//       <div className="form-outline mb-4">
//         <label className="form-label" htmlFor="form4Example2">
//           Phone Number
//         </label>
//         <input
//           type="tel"
//           id="form4Example2"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//         {errors.phoneNumber && (
//           <div className="text-danger">{errors.phoneNumber}</div>
//         )}
//       </div>

//       <div className="form-outline mb-4">
//         <textarea
//           className="form-control"
//           id="form4Example3"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//           required
//         ></textarea>
//         <label className="form-label" htmlFor="form4Example3">
//           Message
//         </label>
//         {errors.message && <div className="text-danger">{errors.message}</div>}
//       </div>

//       <div className="form-check d-flex justify-content-center mb-4">
//         <input
//           className="form-check-input me-2"
//           type="checkbox"
//           id="form4Example4"
//           name="sendCopy"
//           checked={formData.sendCopy}
//           onChange={handleChange}
//         />
//         <label className="form-check-label" htmlFor="form4Example4">
//           Send me a copy of this message
//         </label>
//       </div>

//       <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
//         Send
//       </button>
//     </form>
//   );
// }

// export default App;
