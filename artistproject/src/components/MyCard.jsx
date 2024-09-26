import PropTypes from "prop-types";

export default function MyCard({ photo, altText }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="photoFrame">
        <img src={photo} className="card-img-top" alt={altText} />
      </div>
      <div className="card-body">
        <h5 className="card-title">最偉大的作品</h5>

        <p className="card-text">
          作家：橘🍊 <br />
          作品年份： 2024
          <br /> 風格： 科技復古
          <br /> 售價： 1000000$
        </p>
        <a href="#" className="btn btn-primary">
          搶購
        </a>
      </div>
    </div>
  );
}

MyCard.propTypes = {
  photo: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
