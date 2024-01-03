// 'use client'
// import { useEffect, useState } from "react";

// export default function Home() {
//   const data: string[] = ["Ayesha", "Fatima", "Saman", "Rimsha", "Zainab", "Rabia", "Eman"];
//   const [index, setIndex] = useState<number>(0);
//   const [name, setName] = useState<string>("Ayesha Fatima");

//   const incrementHandler = () => {
//     const nextIndex = (index + 1) % data.length;
//     setIndex(nextIndex);
//     setName(data[nextIndex]);
//   };

//   const decrementHandler = () => {
//     const preIndex = (index - 1 + data.length) % data.length;
//     setIndex(preIndex);
//     setName(data[preIndex]);
//   };

//   return (
//     <div style={{ height: "50vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//       <h1 className="font-bold text-lg mb-10 text-center">
//         Develop a Next.js app and use states to show the name of a person from a list. On click of a button, it should display the next or previous name from the list.
//       </h1>
//       <div className="flex items-center" >
//         <button style={{  backgroundColor: '#4CAF50',color: 'white',padding: '10px 20px',borderRadius: '5px',border: 'none',fontSize: '16px',cursor: 'pointer',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',transition: 'background-color 0.3s ease',}}
//           onClick={decrementHandler}
//         >
//           Prev
//         </button>
//         <h1 className="font-mono font-bold text-lg"><i>{name}</i></h1>
//         <button style={{  backgroundColor: '#4CAF50',color: 'white',padding: '10px 20px',borderRadius: '5px',border: 'none',fontSize: '16px',cursor: 'pointer',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',transition: 'background-color 0.3s ease',}}
//           onClick={incrementHandler}
//         >
//           Next
//         </button>
//       </div>



//     </div>
//   );
// }
