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
        <h1>Hi. I'm Joshua Scott Oxner!</h1>
        <p>
          I am the founder of Stone and Sage Software.
          <br />
          <br />
          Here at Stone and Sage Software we focus on designing and building full stack applications that exceed
          expectations.
          <br />
          <br />
          We do this by leveraging open source technologies such as React, Typescript, GraphQl, Express, Docker, Node and
          many others. 
          <br />
          <br />
          Stone and Sage utilizes cloud technology like AWS to ensure deployment optimization using architecture that can scale as required.
          <br />
          <br />
          Driven by the struggle as well as the success, we lean into blockers and embrace new solutions as required.
          <br />
          <br />
          Stone and Sage is excited to share in your challenges and add to your successes.
          <br />
          <br />
          This site was built using Gatsby.js. It utilizes React, Typescript, GraphQl, CircleCi, and Cypress. This site was deployed using Netifly and it is updated through my Github.
          <br />
          <br />
          It features responsive images in the projects section and a connection to my instagram business page via an external API.
          <br />
          <br />
          I really enjoyed the software and the process and will be using Gatsby.js more in future projects.
          <br />
          <br />
          You can visit my <a href="https://www.linkedin.com/in/joshuaoxner/">LinkedIn</a> or check out my other{' '}
          <a href="https://github.com/Bohemus307">projects at Github</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
