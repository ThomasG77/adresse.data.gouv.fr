import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import Page from '../layouts/main'

import withErrors from '../components/hoc/with-errors'

import {getDepartements, getDepartementCommunes} from '../lib/api-ban'

import Mapbox from '../components/mapbox'
import Notification from '../components/notification'

import BANMap from '../components/ban-dashboard/ban-map'

const title = 'Base Adresse National - Tableau de bord'
const description = ''

function BANDashboard({departements}) {
  const [departement, setDepartement] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadDepartement = useCallback(async codeDepartement => {
    setIsLoading(true)

    try {
      const departement = await getDepartementCommunes(codeDepartement)
      setDepartement(departement)
    } catch (error) {
      setError(error.message)
    }

    setIsLoading(false)
  })

  return (
    <Page title={title} description={description}>

      {error &&
      <div className='error'>
        <Notification
          message={error.message}
          type='error' />

        <style jsx>{`
          .error {
            position: absolute;
            z-index: 999;
            margin: 1em;
          }
        `}</style>
      </div>
      }

      <Mapbox fullscreen>
        {(map, marker, popUp) => (
          <BANMap
            map={map}
            popUp={popUp}
            departements={departements}
            communes={departement}
            loading={isLoading}
            selectDepartement={loadDepartement}
          />
        )}
      </Mapbox>
    </Page>
  )
}

BANDashboard.propTypes = {
  departements: PropTypes.object.isRequired
}

BANDashboard.getInitialProps = async () => {
  return {
    departements: await getDepartements()
  }
}

export default withErrors(BANDashboard)
