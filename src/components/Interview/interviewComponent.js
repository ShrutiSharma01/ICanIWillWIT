import React from "react";
import "./interviewComponentStyles.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// importing interviews data
import { interviews } from "../../data/interview";

// image
// import image from '../../images/example-image.jpg';

export default function InterviewComponent() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col text-center page-title"
              style={{ marginTop: "13%" }}
            >
              <h1>Interview experiences of women in technology</h1>
            </div>
          </div>
          {interviews.map((org, _index) => (
            <React.Fragment key={_index}>
              {_index % 2 === 0 ? (
                <LeftImageBox
                  image={org.image}
                  title={org.title}
                  text={org.text}
                  link={org.link}
                  href={org.href}
                  width1={org.width1}
                  height1={org.height1}
                />
              ) : (
                <RightImageBox
                  image={org.image}
                  title={org.title}
                  text={org.text}
                  link={org.link}
                  href={org.href}
                  width1={org.width1}
                  height1={org.height1}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

const LeftImageBox = ({ image, title, text, link, href, width1, height1 }) => (
  <div className="card mb-3 box-wrapper">
    <hr />
    <div className="row no-gutters">
      <div className="col-md-4">
        <div className="card">
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{ width: width1, height: height1 }}
          />
          <div className="card-body org-details">
            <h6 className="card-title" style={{ color: "black" }}>
              {title}
            </h6>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{ color: "blue" }}
            >
              See More {">"}
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-8 org-info">
        <div className="card-body">
          <a href={link} target="_blank" rel="noreferrer">
            <h3 className="card-title" style={{ color: "black" }}>
              {title}
            </h3>
          </a>
          <p className="card-text" style={{ color: "black" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const RightImageBox = ({ image, title, text, link, href, width1, height1 }) => (
  <div className="card mb-3 box-wrapper">
    <hr />
    <div className="row no-gutters">
      <div className="col-md-8 org-info">
        <div className="card-body">
          <a href={link} target="_blank" rel="noreferrer">
            <h3 className="card-title" style={{ color: "black" }}>
              {title}
            </h3>
          </a>
          <p className="card-text" style={{ color: "black" }}>
            {text}
          </p>
        </div>
      </div>
      <div className="col-md-4 order-first order-md-last">
        <div className="card">
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{ width: width1, height: height1 }}
          />
          <div className="card-body org-details">
            <a href={link} target="_blank" rel="noreferrer">
              <h6 className="card-title" style={{ color: "black" }}>
                {title}
              </h6>
            </a>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{ color: "blue" }}
            >
              See More {">"}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
