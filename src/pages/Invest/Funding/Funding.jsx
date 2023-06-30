import FundingCart from "../../../components/Invest";
import "./style.scss";

const Funding = () => {
  return (
    <div className="funding">
      <h1>Funded</h1>
      <div className="funding__content">
        <FundingCart />
        <FundingCart />
        <FundingCart />
      </div>
    </div>
  );
};

export default Funding;
