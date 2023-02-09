import './index.css'

const PlanetItem = props => {
  const {item} = props

  return (
    <div className="planet-item">
      <h1 className="main-heading">PLANETS</h1>
      <img
        className="planet-img"
        src={item.imageUrl}
        alt={`planet ${item.name}`}
      />
      <h1 className="planet-heading">{item.name}</h1>
      <p className="planet-para">{item.description}</p>
    </div>
  )
}

export default PlanetItem
