import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./style.css";

export const GifItem = ({ gif }) => {
  return (
    <div>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.5,
          },
        }}
        className="gifcard"
        src={gif.images.original.url}
        alt={gif.title}
      />
    </div>
  );
};

GifItem.propTypes = {
  gif: PropTypes.shape({
    images: PropTypes.shape({
      original: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
