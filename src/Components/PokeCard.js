export default function PokeCard({ pokemon, type_1, defense, attack, url_image }) {
  return (
    <div className="poke-card">
      <h2>{pokemon}</h2>
      <img src={url_image} />
      <p>Type: {type_1}</p>
      <p>Defense: {defense}</p>
      <p>Special Attack: {attack}</p>
    </div>
  );
}
