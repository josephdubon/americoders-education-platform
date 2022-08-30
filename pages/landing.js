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
import FeatureSection
  from '../pages-sections/LandingPage-Sections/FeatureSection.js'
import CoursesSection from '../pages-sections/LandingPage-Sections/CoursesSection.js'
import WorkSection from '../pages-sections/LandingPage-Sections/WorkSection.js'
import { PageHead } from '../components/PageHead/PageHead'
import axios from 'axios'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function LandingPage (props) {
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      {/* header section / nav */}
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

      {/* hero section */}
      <Parallax filter responsive
                image="/img/stock/branding/bg/americoders-classroom-studying-problem-solving.jpg">
        <div className={classes.container}>
          <GridContainer justify={'center'}>
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>Welcome to Americoders</h1>
              <h4 className={classes.subTitle}>
                We're a community enrichment program founded in the heart of the
                Biggest Little City in the World, Reno, Nevada.
                We believe education should be an experience to foster growth &
                advancements in STEM, Arts, & Mindfulness Development.
              </h4>
              <br/>
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&="
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
          {/*<p>start</p>*/}
          {/*loop through the published courses*/}
          {/*{props.courses.map((course) => (*/}
          {/*    <Col key={course._id}>*/}
          {/*      <CourseCard course={course}/>*/}
          {/*    </Col>*/}
          {/*  ),*/}
          {/*)}*/}
          {/*end loop*/}
          {/*<p>end</p>*/}

          <FeatureSection/>
          <CoursesSection/>
          <WorkSection/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps () {
  // collect courses data
  const { data } = await axios.get(`${process.env.API}/courses`) // full path of server here

  // console.log(data)
  return {
    props: {
      courses: data, // return data as props
    },
  }
}