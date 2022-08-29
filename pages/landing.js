import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
// core components
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import GridContainer from '../components/Grid/GridContainer.js'
import GridItem from '../components/Grid/GridItem.js'
import Button from '../components/CustomButtons/Button.js'
import HeaderLinks from '../components/Header/HeaderLinks.js'
import Parallax from '../components/Parallax/Parallax.js'

import styles from '../styles/jss/nextjs-material-kit/pages/landingPage.js'

// Sections for this page
import ProductSection
  from '../pages-sections/LandingPage-Sections/ProductSection.js'
import TeamSection from '../pages-sections/LandingPage-Sections/TeamSection.js'
import WorkSection from '../pages-sections/LandingPage-Sections/WorkSection.js'
import { PageHead } from '../components/PageHead/PageHead'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function LandingPage (props) {
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <PageHead title={'Welcome! We are a tech learning platform.'}/>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Americoders"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax filter responsive
                image="/img/stock/branding/bg/americoders-kids-laptop-fun.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Welcome to Americoders</h1>
              <h4>
                We're a community enrichment program founded in the heart of the
                Biggest Little City in the World, Reno, Nevada.
                We believe education should be an experience to foster growth &
                advancements in STEM, Arts, & Mindfulness Development.
              </h4>
              <br/>
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play"/>
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection/>
          <TeamSection/>
          <WorkSection/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
