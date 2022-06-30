import Link from 'next/link'
import Image from 'next/image'

import theme from '@/styles/theme'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer__logo'>
          <Image width={160} height={46} src='/images/logos/etalab.svg' alt='Etalab' />
          <ul className='footer__social'>
            <li><a href='https://twitter.com/AdresseDataGouv' aria-label='Consulter notre compte Twitter'><Image width={25} height={25} src='/images/medias/twitter.svg' alt='Twitter' /></a></li>
            <li><a href='https://github.com/etalab/adresse.data.gouv.fr' aria-label='Consulter notre page GitHub'><Image width={25} height={25} src='/images/medias/github.svg' alt='Github' /></a></li>
            <li>
              <Link href='/blog'>
                <a aria-label='Consulter notre blog'><Image width={25} height={25} src='/images/medias/medium.svg' alt='Medium' /></a>
              </Link>
            </li>
            <li>
              <Link href='/nous-contacter'>
                <a aria-label='Contacter l’équipe'><Image width={25} height={25} src='/images/medias/envelop.svg' alt='Nous contacter' /></a>
              </Link>
            </li>
          </ul>
        </div>
        <ul className='footer__links'>
          <li><h2>adresse.data.gouv.fr</h2></li>
          <li><Link href='/cgu'><a aria-label='Accéder aux mentions légales et conditions générales d’utilisation'>Mentions légales et CGU</a></Link></li>
          <li><a href='https://doc.adresse.data.gouv.fr/' aria-label='Consulter la documentation'>Documentation</a></li>
          <li><a href='https://status.adresse.data.gouv.fr/' aria-label='Consulter la supervision de la Base Adresse Nationale et Base Adresse Locale'>Supervision BAN/BAL</a></li>
          <li><Link href='/nous-contacter'><a>Nous contacter</a></Link></li>
        </ul>
      </div>
      <style jsx>{`
      .footer {
        background: ${theme.colors.almostBlack};
        color: ${theme.colors.white};
        padding: 2em 0;
        line-height: 2em;
      }

      .footer .footer-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
      }

      .footer ul {
        list-style-type: none;
        padding: 0;
      }

      .footer__social {
        margin-top: 1em;
      }

      .footer__social li {
        display: inline;
        margin-right: 1em;
      }

      .footer__links {
        margin: 0;
      }

      .footer__links a {
        color: ${theme.colors.white};
        text-decoration: none;
      }

      .footer__links h2 {
        margin-top: 0;
        margin-bottom: 0.5em;
      }
      `}</style>
    </footer>
  )
}

export default Footer
