import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
// core components
import Header from '../components/Header/Header.js'
import GridContainer from '../components/Grid/GridContainer.js'
import GridItem from '../components/Grid/GridItem.js'
import HeaderLinks from '../components/Header/HeaderLinks.js'
import Parallax from '../components/Parallax/Parallax.js'

import styles from '../styles/jss/americoders/pages/coursePage.js'

// Sections for this page
import { PageHead } from '../components/PageHead/PageHead'
import axios from 'axios'
import Footer from '../components/Footer/Footer'
import NavLogo from '../public/images/logo/americoders-logo-simple_white.svg'
import CoursesGrid from '../components/CoursesGrid/CoursesGrid'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function WorkshopsPage (props) {
  const classes = useStyles()
  const { ...rest } = props

  return (<>
      {/* header section / nav */}
      <PageHead title={'Upcoming IRL Workshops'}/>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={NavLogo}
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />

      {/* hero section */}
      <Parallax filter responsive small
                image="/images/original/reno_downtown.png">
        <div className={classes.container}>
          <GridContainer
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <GridContainer direction="row"
                           justifyContent="center"
                           alignItems="center"
            >
              <GridItem xs={11} sm={10}>
                <h1 className={classes.titleWhite}>
                  IRL Workshops
                </h1>
                <h4 className={classes.subtitleWhite}>
                  Check out our upcoming in-real-life workshops, we are excited
                  to see you there!
                </h4>
              </GridItem>
            </GridContainer>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

          {/* live courses and events section */}
          <CoursesGrid id="workshops" courses={props.courses}/>
        </div>
      </div>
      <Footer/>
    </>
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