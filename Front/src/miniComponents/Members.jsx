import React from "react";
import "./Members.css";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Aleena",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "Haris",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Mohsin",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Rashid",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Sana",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Touqeer",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Wahab",
    },
  ];

  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">Make a Difference Today!</h2>
            <p>
              Your contribution will support humanitarian efforts in Palestine,
              including medical aid, education, and community development.{" "}
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
