import React from "react";
import "./Qualities.css"

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/kid1.png",
      title: "COMMUNITY DEVELOPMENT",
      description: `We work directly with local communities in Palestine to ensure aid reaches those who need it most.`,
    },
    {
      id: 2,
      image: "/pales.jpg",
      title: "TRANSPARENCY",
      description: `We are committed to full transparency in our operations and use of donations.`,
    },
    {
      id: 3,
      image: "/flaghalf.png",
      title: "MEASURABLE IMPACT",
      description: `We track and report on the impact of your donations to show real change in Palestinian lives.`,
    },
  ];

  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="img-wrapper">
                  <img src={element.image} alt={element.title} />
                </div>
                <div className="content">
                  <p className="title">{element.title}</p>
                  <p className="description">{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;

// import React from "react";

// const Qualities = () => {
//   const qualities = [
//     {
//       id: 1,
//       image: "/community.jpg",
//       title: "COMMUNITY SUPPORT",
//       description: "We work directly with local communities in Palestine to ensure aid reaches those who need it most.",
//     },
//     {
//       id: 2,
//       image: "/transparency.jpg",
//       title: "TRANSPARENCY",
//       description: "We are committed to full transparency in our operations and use of donations.",
//     },
//     {
//       id: 3,
//       image: "/impact.jpg",
//       title: "MEASURABLE IMPACT",
//       description: "We track and report on the impact of your donations to show real change in Palestinian lives.",
//     },
//   ];

//   return (
//     <div className="qualities">
//       <h2>OUR COMMITMENT</h2>
//       <div className="container">
//         {qualities.map(element => (
//           <div className="card" key={element.id}>
//             <div className="img-wrapper">
//               <img src={element.image} alt={element.title} />
//             </div>
//             <div className="content">
//               <p className="title">{element.title}</p>
//               <p className="description">{element.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Qualities;
