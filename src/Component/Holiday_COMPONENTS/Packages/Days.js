// import React, { useState } from 'react';

// const Days = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="col-lg-8">
//       <div className="row">
//         <div className="card">
//           <section>
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <h5 className="text-start">Itinerary (Day Wise)</h5>
//                 </div>
//                 <div className="col-lg-6">
//                   <p className="text-end">
//                     <button
//                       className="btn btn-link"
//                       onClick={toggleCollapse}
//                       data-bs-toggle="collapse"
//                       data-bs-target="#itineraryDetails"
//                       aria-expanded={isCollapsed ? "false" : "true"}
//                     >
//                       View all days
//                     </button>
//                   </p>
//                 </div>
//                 <div className='col-lg-6'>
//                   <p className='text-start mx-3'>Day 1/18 Oct,23</p>
//                   <h6 className='text-start mx-3'>Guwahati - Tezpur (1 Night)</h6>
//                 </div>
//                 <div className='col-lg-6'>
//                   <h5>
//                     <span
//                       role="button"
//                       onClick={toggleCollapse}
//                       data-bs-toggle="collapse"
//                       data-bs-target="#itineraryDetails"
//                       aria-expanded={isCollapsed ? "false" : "true"}
//                       aria-label="Toggle Details"
//                     >
//                      <h5 className='text-end'> + </h5>
//                     </span>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <div
//             id="itineraryDetails"
//             className={`collapse ${isCollapsed ? '' : 'show'}`}
//           >
//             <p className='text-start mx-5'>Tour Guests will arrive at Guwahati Airport as per their Scheduled flight. Upon arrival at Guwahati – Capital city of Assam, Trip or Travel Tour Manager will meet all tour guests and proceed to Tezpur – a city located on the backs of river Brahmaputra. En route we visit Maha Mrityunjai Temple – renowned as the World's Tallest Shivling at about 126 feet high.</p>
//             <p className='text-start mx-5'>Dinner</p>
//             <p className='text-start mx-5'>Tea/Coffee en route to Tezpur</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Days;
