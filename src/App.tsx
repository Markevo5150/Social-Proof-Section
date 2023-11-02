import Rate from "./components/rate/Rate";
export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1 className="header__title">
            10,000+ of our users love our products.
          </h1>
          <p className="header__info">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="rating-section">
          <Rate stars={5}>Rated five stars in Reviews</Rate>
          <Rate stars={2}>Rated five stars in Reviews</Rate>
          <Rate stars={4}>Rated five stars in Reviews</Rate>
        </div>
      </div>
    </>
  );
}
