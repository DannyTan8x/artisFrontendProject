export default function MyCard() {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">
          作家：橘🍊 <br />
          作品年份： 2024
          <br /> 風格： 科技復古
          <br /> 售價： 1000000$
        </p>
        <a href="#" className="btn btn-success">
          搶購
        </a>
      </div>
    </div>
  );
}
