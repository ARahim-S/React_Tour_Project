import "./CardItem.scss";

const CardItem = ({ item }) => {
  return (
    <div className="card">
      <p> {item.title}</p>
      <img src={item.image} alt="" />
    </div>
  );
};

export default CardItem;
