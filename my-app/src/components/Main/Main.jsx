import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";

function Main({}) {
  return (
    <main>
      <section className="cards">
        <p className="cards__text">food</p>
        <ul className="cards__list">
          {foods.map((item) => {
            return <ItemCard item={item} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
