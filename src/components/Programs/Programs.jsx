import React from "react";
import "./Programs.css";
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'

const Programs = () => {
    const cardData = [
      {
        title: "Digital Marketing Program",
        image: program_1,
        link: "https://www.youtube.com/watch?v=W39yiQrVzdY"
      },
      {
        title: "Data Sceince Program",
        image:program_2,
        link: "https://www.youtube.com/watch?v=W39yiQrVzdY"
      },
      {
        title: "Web Devlopment Program",
        image: program_3 ,
        link: "https://www.youtube.com/watch?v=W39yiQrVzdY"
      },
    ];
  
    return (
        <div className="cards-container">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <button className="learn-more-button"><a href={card.link}> Learn More  </a></button>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default Programs;
