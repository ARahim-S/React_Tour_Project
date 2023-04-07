import "./CardItem.scss";

const CardItem = ({ item }) => {
  return (
    <div className="card">
      <div className="title">
        <h2> {item.title}</h2>
        <img src={item.image} alt="" />
      </div>
      <div className="card-over">
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default CardItem;
