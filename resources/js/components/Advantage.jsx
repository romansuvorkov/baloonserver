import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function AdvantageCard(props) {
  const { dataText } = props;

  return (
    <div className="advantage_wrapper" id="catalog_start">
      <div className="advantage_list">
        {dataText.map((textString) => (
          <div className="advantage_card" key={uuidv4()}>
            <span className="advantage_text">{textString}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AdvantageCard;

AdvantageCard.propTypes = {
  dataText: PropTypes.arrayOf(PropTypes.string),
};

AdvantageCard.defaultProps = {
  dataText: null,
};
