import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Joshua" desc="Hi. I'm Joshua! You can visit my LinkedIn or check out my other projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Joshua!</h1>
        <p>
          Stone and Sage is my creation to share my passion for Software Engineering
          <br />
          I built this site using Gatsby.js
          <br />
          I really enjoyed the software and will be using Gatsby more in the future
          <br />
          You can visit my <a href="https://www.linkedin.com/in/joshuaoxner/">LinkedIn</a> or check out my other{' '}
          <a href="https://github.com/Bohemus307">projects</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
