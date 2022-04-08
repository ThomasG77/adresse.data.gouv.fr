import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {ChevronRight, ChevronDown} from 'react-feather'

import theme from '@/styles/theme'

function Dropdown({code, nom, communesCount, size, color, children}) {
  const [isOpen, setIsOpen] = useState(false)
  const Chevron = isOpen ? ChevronDown : ChevronRight
  const isDisabled = communesCount === 0

  const dropdownToggle = event => {
    event.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`
        dropdown-container
        ${isDisabled ? 'disabled' : ''}
        ${color === 'secondary' ? 'alt' : ''}
      `}
      onClick={dropdownToggle}
    >
      <div className='visible-container'>
        <div className='dropdown-infos-container'>
          <div className='name'>{nom} - {code}</div>
          <div className='communes-length'>
            {isDisabled ? 'Aucune commune partenaire' : (
              <><b>{communesCount}</b> {communesCount <= 1 ? 'commune partenaire' : 'communes partenaires'}</>
            )}
          </div>
        </div>

        <Chevron
          style={{cursor: 'pointer'}}
          color={color === 'primary' ? theme.primary : theme.colors.white}
        />
      </div>

      {isOpen && children}

      <style jsx>{`
        .dropdown-container {
          background: ${theme.backgroundGrey};
          color: ${theme.darkText};
          cursor: pointer;
          padding: ${size === 'large' ? '2em' : '1em'};
          width: 100%;
          border-radius: ${theme.borderRadius};
          margin: 1em 0;
          opacity: 100%;
          pointer-events: auto;
        }

        .dropdown-container:hover {
          background: ${color === 'primary' ? theme.colors.lightGrey : theme.primaryDark};
        }

        .alt {
          background: ${theme.primary};
          color: ${theme.colors.white};
        }

        .disabled {
          opacity: 70%;
          pointer-events: none;
        }

        .visible-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: ${isOpen ? '2em' : '0'};
        }

        .name {
          font-size: x-large;
          font-weight: bold;
        }

        .communes-length {
          font-size: medium;
          font-style: italic;
        }
      `}</style>
    </div>
  )
}

Dropdown.propTypes = {
  code: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  communesCount: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['large', 'small']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node
}

Dropdown.defaultProps = {
  children: null,
  size: 'large',
  color: 'primary'
}

export default React.memo(Dropdown)
