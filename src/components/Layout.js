import React from 'react'
import Helmet from 'react-helmet'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Helmet
        title="Resume - David Riches 🚀"
        meta={[
          { name: 'description', content: 'Resume - David Riches' },
          {
            name: 'keywords',
            content:
              'Front-end developer London resume, Drupal front-end developer resume, Drupal developer london resume',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <GlobalStyles />
      <Typography />
      {children}
    </div>
  )
}
