import { Link } from "react-router-dom";
import realbox from "../../assets/img/logo-realbox.png";
import "./style.scss";
import Button from "../Button/Button";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={realbox} style={{ width: "50px" }} />
        <h3>Realbox</h3>
      </div>
      <ul className="header__menu">
        <li>
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li>
          <Link to={"/invest"}>Invest</Link>
        </li>
        <li>
          <Link to={"/marketplace"}>Marketplace</Link>
        </li>
      </ul>
      <div className="header__auth">
        <Button color={'black'} bg={'white'}>Login</Button>
        <Button color={'black'}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
