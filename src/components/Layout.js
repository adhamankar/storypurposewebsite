import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Build the right product, the right way. Jira tools to build purposeful stories." />
        <meta property="og:url" content="https://storypurpose.github.io" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
        <meta property="og:site_name" content="StoryPurpose" />

        <meta name="twitter:site" content="@story_purpose" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="fb:app_id" content="232219554524065" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
