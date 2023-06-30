import Button from "../../components/Button/Button";
import CartInvest from "../../components/Home/CartInvest/CartInvest";
import CartMember from "../../components/Home/CartMember/CartMember";
import "./style.scss";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { coreMember, advisorMember } from "../../const/member";
const Home = () => {
  const investContent = [
    {
      id: 1,
      intro: "Prepare capital with stablecoin",
      content:
        "Realbox will allow the use of popular stable coins such as USDT, BUSD... to invest in buying vault token of real estate.",
    },
    {
      id: 2,
      intro: "Join Membership",
      content:
        "Join Realbox membership by staking a specific amount of REB depending on membership tiers with pre-purchase privileges, transaction percentage discount...",
    },
    {
      id: 3,
      intro: "Selection and potential real estate investment",
      content:
        "Real estate products are selected based on Realbox's strict criteria to bring lucrative returns to investors who own vault tokens backed by physical real assets.",
    },
    {
      id: 4,
      intro: "Profits from owning vault token",
      content:
        "With Realbox as an intermediary for management and operation, investors' profits may come from many sources such as: leasing (during the time when the project has not been sold), buying and selling vault tokens on Marketplace, receiving capital and interest when selling the project...",
    },
  ];
  return (
    <div className="home">
      <div className="home__banner">
        <h1>Realbox is listed on</h1>
        <Button
          bg={"black"}
          color={"white"}
          bheight={"70px"}
          bwidth={"240px"}
          radius={"40px"}
        >
          KyberSwap
        </Button>
        <Button bg={"black"} color={"white"}>
          View Smart Contract
        </Button>
      </div>
      <div className="home__community">
        <h6>Join our community to learn more</h6>
        <div className="home__community__icons">
          <FacebookRoundedIcon
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "100%",
              padding: "5px",
              fontSize: "35px",
            }}
          />
          <FacebookRoundedIcon
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "100%",
              padding: "5px",
              fontSize: "35px",
            }}
          />
          <FacebookRoundedIcon
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "100%",
              padding: "5px",
              fontSize: "35px",
            }}
          />
          <FacebookRoundedIcon
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "100%",
              padding: "5px",
              fontSize: "35px",
            }}
          />
          <FacebookRoundedIcon
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "100%",
              padding: "5px",
              fontSize: "35px",
            }}
          />
        </div>
      </div>
      <div className="home__introduction">
        <h1>The future of real estate</h1>
        <h1>investment</h1>
        <h4>
          Democratizing the real estate market - our mission is to make
          investments
        </h4>
        <h4>accessibe, reliable and flexible to everyone</h4>
        <Button bg={"$primary-color"} color={"black"}>
          Become an investor
        </Button>
      </div>

      <div className="home__container" style={{ backgroundColor: "#00c805" }}>
        <div className="home__invest">
          <div className="home__invest__text">
            <h1>How to invest</h1>
            <h4>Learn more</h4>
          </div>
          <div className="home__invest__cart">
            {investContent.map((item, index) => {
              return (
                <CartInvest
                  key={index}
                  intro={item.intro}
                  number={item.id}
                  content={item.content}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="home__container">
        <div className="home__member">
          <h1>Core Team & Advisors</h1>
          <div className="home__member-grid">
            {coreMember.map((item, index) => {
              return (
                <CartMember
                  key={index}
                  name={item.name}
                  des={item.description}
                  url={item.url}
                />
              );
            })}
          </div>
          <div className="home__member-grid">
            {advisorMember.map((item, index) => {
              return (
                <CartMember
                  advisor={true}
                  key={index}
                  name={item.name}
                  des={item.description}
                  url={item.url}
                />
              );
            })}
          </div>
          <h1>Consultants</h1>
          <div className="home__member-grid"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
