import PropTypes from "prop-types";
import "./style.css";
import Logo from "./logo.png";

export const Searcher = ({ onSubmit, valorInput, onChange }) => {
  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Logo gif hunter" />
      <form onSubmit={onSubmit}>
        <input value={valorInput} onChange={onChange} placeholder="Smile" />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

Searcher.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  valorInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
