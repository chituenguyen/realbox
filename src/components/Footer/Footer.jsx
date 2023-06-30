import "./style.scss";
import logo from "../../assets/img/logo-realbox.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} style={{width:'70px'}}/>
        <div>
          <h1>Realbox</h1>
          <ul>
            <li>Realbox Pte. Ltd.</li>
            <li>Registration no: 202140667E</li>
            <li>Registration office: 200 JALAN</li>
            <li> SULTAN #05-02 TEXTILE</li>
            <li>CENTRE Singapore 199018</li>
            <li>Email: info@realbox.io</li>
          </ul>
        </div>
      </div>
      <ul className="footer__menu">
        <li>Home</li>
        <li>Invest</li>
        <li>Marketplace</li>
        <li>Memberships</li>
        <li>Event</li>
        <li>Whitepaper</li>
        <li>Blog</li>
        <li>FAQ</li>
        <li>Contract</li>
      </ul>
      <ul className="footer__help">
        <li>Help Center</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
      </ul>
      <div className="footer__end">
        <p>Stay updated</p>
        <p>on lastest Realbox news</p>
      </div>
    </div>
  );
};

export default Footer;
