import React, { useState } from "react";
import PropTypes from "prop-types";

function Casting({ cast }) {
  const [isCut, setIsCut] = useState(true);

  const castCut = cast && cast.slice(0, 8);

  const toggleCast = () => {
    setIsCut(!isCut);
  };

  return (
    <div className="casting">
      <div className="synopsisFilm">
        <h3>Casting</h3>
      </div>
      <div className="actorCard">
        <div className="actorFilm">
          {cast &&
            (isCut ? castCut : cast).map((acteur) => (
              <div className="actors">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${acteur.profile_path}`}
                  alt={acteur.name}
                />
                <div>
                  <p className="actorName">{acteur.name}</p>
                  <p className="actorCharacter">{acteur.character}</p>
                </div>
              </div>
            ))}
        </div>
        <button id="btnCrew" type="button" onClick={toggleCast}>
          Voir Plus
        </button>
      </div>
    </div>
  );
}

Casting.propTypes = {
  cast: PropTypes.shape(PropTypes.string).isRequired,
};

export default Casting;