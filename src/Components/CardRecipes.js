import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/meals.css';

function CardRecipes({ img, name, index, id, rota }) {
  return (
    <div className="search-recipe">
      <Link to={ `/${rota}/${id}` } className="link-meals">
        <div
          data-testid={ `${index}-recipe-card` }
          className="card-recipe"
        >
          <p
            data-testid={ `${index}-card-name` }
            className="card-name"
          >
            {name}
          </p>
          <img
            src={ img }
            alt="foto Comida"
            data-testid={ `${index}-card-img` }
            className="card-img"
          />
        </div>
      </Link>
    </div>

  );
}

CardRecipes.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  rota: PropTypes.string.isRequired,
};

export default CardRecipes;
