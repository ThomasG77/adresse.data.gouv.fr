import React from 'react'
import PropTypes from 'prop-types'
import {Crosshair} from 'react-feather'

function CenterControl({isDisabled, handleClick}) {
  return (
    <div>
      <a title='Recentrer la carte sur l’adresse' onClick={handleClick}>
        <div className='mapboxgl-ctrl-group mapboxgl-ctrl center-control'>
          <Crosshair size={18} color={isDisabled ? '#cdcdcd' : 'black'} />
        </div>
      </a>

      <style jsx>{`
        .center-control {
          position: absolute;
          padding: 0.3em 0.3em 0 0.3em;
          z-index: 2;
          right: 10px;
          top: 80px;
          cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
        }
      `}
      </style>
    </div>
  )
}

CenterControl.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
}

CenterControl.defaultProps = {
  isDisabled: false
}

export default CenterControl
