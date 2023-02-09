import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <div className="slider-container" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem item={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
