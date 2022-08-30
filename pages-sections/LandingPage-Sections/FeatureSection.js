import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
// core components
import GridContainer from '../../components/Grid/GridContainer.js'
import GridItem from '../../components/Grid/GridItem.js'
import InfoArea from '../../components/InfoArea/InfoArea.js'

import styles
  from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'
import { Col } from 'antd'
import FeaturedSectionLeft
  from '../../components/FeaturedSectionLeft/FeaturedSectionLeft'
import FeaturedSectionRight
  from '../../components/FeaturedSectionRight/FeaturedSectionRight'
import { NaturePeople, Phonelink, SignalWifi4Bar } from '@material-ui/icons'

const useStyles = makeStyles(styles)

export default function FeatureSection () {
  const classes = useStyles()

  const featuredContentLeft = () => {
    return (<>
      <p className={classes.description}>
        We practice a sustained process of learning in which we can immerse
        ourselves in
        multiple disciplines, simultaneously.
        <br/>
        <br/>
        We engage in tailor-made projects that provoke students to instinctively
        ask complex
        questions all while gaining real-world problem solving
        experience in a monitored environment.
      </p>

      <Col xs={22} sm={18} className="mx-auto m-5">
        <p className={classes.quote}>
          "Participating in project based learning with Americoders brought out
          a creative and problem
          solving side of me that I didn't even know existed! I feel I have the
          tools to become a great
          problem solver and thinker."
          - Ennio D, Age 10
        </p>
      </Col>
    </>)
  }

  const featuredContentRight = () => {
    return (<>
      <p className={classes.description}>
        We must connect meaning with our actions. We hear modern terms but they
        are offered with
        no explanation of what they mean.
        <br/>
        <br/>
        Then we are left with assumptions and stereotypes. These create patterns
        and patterns turn into habits.
        Our habits determine our future. Join us as we educate and adapt to
        understand and break negative
        stereotypes, destroy assumptions, and replace them all with verified
        knowledge.
      </p>
      <p className={classes.quote}>
        We begin our project/workshop adventures with five minutes of
        breathing-exercise and guided-meditation.
      </p>
    </>)
  }

  const featuredContentLeft_2 = () => {
    return (<>
      <p className={classes.description}>
        We can develop a natural state of dignity, pride, and restore our sense
        of significance in our community
        of Reno, NV. We hear about how we are becoming a 'tech-city' but we will
        be left behind unless we become
        'tech-citizens'.
        <br/>
        <br/>
        Having a shared cause provides us with a sense of momentum and purpose.
        Let's experience and explore
        amazing new possibilities in this awesome new world while advancing and
        leveling up our knowledge as a
        community.
      </p>
      <p className={classes.quote}>
        Don't we deserve the opportunity to learn the knowledge to benefit in
        this digital world?
        <br/>
        Yes, we do!
        <br/>
        <strong>And so do our children</strong>.
      </p>
    </>)
  }

  function computers101Description () {
    return (<>
      <p className={classes.description}>
        Desktop? Laptop? Tablet? Smartphone? Apple? Windows? Linux?! Uhh..?!
        <br/>
        <br/>
        Learn the fundamentals of computers, our devices. Let figure out how and
        when to use them to get the most benefit.
      </p>
      <p className={classes.quote}>
        So many cool new gadgets, so little time!
      </p>
    </>)
  }

  function internetWeb101Description () {
    return (<>
      <p className={classes.description}>
        Do you know the difference between a web browser and a web server? What
        about the internet and the web?
        <br/>
        <br/>
        Join us as we explore the internet and
        learn the basics of the internet/web.
      </p>
      <p className={classes.quote}>
        "What in the world-wide-web is a blockchain?! ...and do I need one?"
      </p>
    </>)
  }

  function digitalLifeBalance101Description () {
    return (<>
      <p className={classes.description}>
        How much is too much? Is my kid spending too much time playing video
        games? ...Am I?
        <br/>
        <br/>
        It's difficult to find the correct balance between on/off screen
        time. Let's explore and find tailor made solutions to our
        own needs.
      </p>
      <p className={classes.quote}>
        "...just 1 more hour of video games and I'm done!"
      </p>
    </>)
  }

  return (<>
    {/* product area 1 */}
    <FeaturedSectionLeft title={'PROJECT BASED LEARNING'}
                         description={featuredContentLeft()}
                         imageUrl={'/images/branding/misc/americoders-robotics-project-student.jpg'}
                         imgAlt={'americoders-robotics-project-student'}/>
    / >

    {/* product area 2 */}
    <FeaturedSectionRight title={'MINDFULNESS AWARENESS'}
                          description={featuredContentRight()}
                          imageUrl={'/images/branding/misc/americoders-mom-daughter-team-meditation.jpg'}
                          imgAlt={'americoders-robotics-project-student'}/>
    / >

    {/* product area 3 */}
    <FeaturedSectionLeft title={'COMMUNITY BUILDING'}
                         description={featuredContentLeft_2()}
                         imageUrl={'/images/branding/misc/americoders-kids-community-friends.jpg'}
                         imgAlt={'americoders-robotics-project-student'}/>

    {/**/}
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Computers 101"
            description={computers101Description()}
            icon={Phonelink}
            iconColor="danger"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Internet/Web 101"
            description={internetWeb101Description()}
            icon={SignalWifi4Bar}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Digital/Life Balance 101"
            description={digitalLifeBalance101Description()}
            icon={NaturePeople}
            iconColor="primary"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  </>)
}
