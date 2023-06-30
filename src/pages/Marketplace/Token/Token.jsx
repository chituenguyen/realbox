import { Table } from "antd";

const columns = [
  {
    title: "Token",
    dataIndex: "token",
    key: "token",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Porfolio",
    dataIndex: "portfolio",
    key: "portfolio",
  },
  {
    title: "Offer",
    dataIndex: "offer",
    key: "offer",
  },
  {
    title: "Price",
    key: "price",
    dataIndex: "price",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "NAV",
    key: "nav",
    dataIndex: "nav",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "24h Change",
    key: "change",
    dataIndex: "change",
    render: (text) => <a>{text}</a>,
  },
];

const data = [
  {
    key: "1",
    token: "RTTG",
    portfolio: "The Tropicana Garden Bao Loc",
    offer: "New York No. 1 Lake Park",
    price: "USDT1",
    nav: "$129,872",
    change: "+0%",
  },
];

const Token = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Token;
