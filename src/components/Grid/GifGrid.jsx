import PropTypes from "prop-types";
import { GifItem } from "../Gifcard/GifItem";
import "./style.css";

export const GifGrid = ({ gifs }) => {
  return (
    <div className="grid">
      {gifs && gifs.map((gif) => <GifItem gif={gif} key={gif.id} />)}
    </div>
  );
};

GifGrid.propTypes = {
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      images: PropTypes.shape({
        original: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
