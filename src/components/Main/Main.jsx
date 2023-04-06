import "./Main.scss";
import { data } from "../../helpers/data";
import CardItem from "../CardItem/CardItem";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => {
        return <CardItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Main;
