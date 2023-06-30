import "./style.scss";
import PropTypes from "prop-types";

const CartMember = ({ name, des, url, advisor }) => {
  return (
    <div className="cartmember">
      <img src={url} alt="" />
      {advisor ? <p className="cartmember__advisor">Advisor</p> : ""}
      <p
        className="cartmember__name"
        style={advisor ? { marginTop: "10px" } : {}}
      >
        {name}
      </p>

      <p className="cartmember__des">{des}</p>
    </div>
  );
};

CartMember.propTypes = {
  name: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  advisor: PropTypes.bool,
};

export default CartMember;
