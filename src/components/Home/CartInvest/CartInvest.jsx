import "./style.scss";
import PropTypes from "prop-types";

const CartInvest = ({ intro, number, content }) => {
  return (
    <div className="cartInvest">
      <div className="cartInvest__intro">
        <h3>{intro}</h3>
        <h1>{number}</h1>
      </div>
      <div className="cartInvest__content">
        <p>{content} </p>
      </div>
    </div>
  );
};
CartInvest.propTypes = {
  intro: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default CartInvest;
