function ItemCard() {
  return (
    <li className="card-container">
      <div className="card__title">
        <h2 className="cards__name">{item.name}</h2>
        <img
          // onClick={() => {
          //   onCardClick(item);
          // }}
          className="cards__img"
          src={item.imageUrl}
          alt={item.name}
        />
      </div>
    </li>
  );
}
export default ItemCard;
