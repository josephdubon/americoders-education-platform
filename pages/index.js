import axios from 'axios'
import {Col, Image, Row} from 'antd'
import Link from 'next/link'
import MailingListForm from '../components/forms/MailingListForm'
import {PageHead} from '../components/head/PageHead'
import {RocketOutlined, StarOutlined} from '@ant-design/icons'
// import CourseCard from '../components/cards/CourseCard'

const Index = ({courses}) => {

    return (<>
        {/* page head section*/}
        <PageHead title={'Home'}/>

        {/* hero section */}
        <Row align={'middle'} justify={'center'} className='text-secondary px-4 py-5 text-center hero-section'>
            <Col xs={24}>
                {/* title */}
                <h1 className='display-5 text-white text-uppercase'>Americoders</h1>
                <h5 className='text-white text-capitalize fw-light mb-4'>
                    educate - evolve - adapt - thrive
                </h5>

                {/* icons */}
                <Row justify={'center'} align={'middle'} className='mb-3 container'>
                    <StarOutlined className='display-5 text-white mx-auto'/>
                    <RocketOutlined className='display-5 text-white mx-auto'/>
                    <StarOutlined className='display-5 text-white mx-auto'/>
                    <RocketOutlined className='display-5 text-white mx-auto'/>
                </Row>
                <div md={24} className='container'>
                    <p className='text-white text-shadow-black fs-5 mb-4'>
                        We're a community enrichment program founded in the heart of the Biggest Little City
                        in the World: Reno, Nevada. We believe education should be an experience to foster growth &
                        advancements in STEM, Arts, & Mindfulness Development.
                    </p>
                    <Row justify={'center'}>
                        <Col lg>
                            <Link href={'/#more-info'}><a>
                                <button type='button'
                                        className='btn btn-primary btn-lg shadow px-4 me-sm-3 fw-bold'>More Info
                                </button>
                            </a></Link>
                        </Col>

                        <Link href={'/#course-list'}>
                            <a>
                                <button type='button'
                                        className='btn btn-outline-light btn-lg shadow px-4'>
                                    Course Examples
                                </button>
                            </a>
                        </Link>
                    </Row>
                </div>
            </Col>
        </Row>


        {/* features title section */}
        <Row align={'middle'} justify={'center'} className='container pt-5 text-white' id={'more-info'}>
            {/* features row section */}
            <Row align={'top'} justify={'center'} className='pb-5'>
                {/* features col 1/3 */}
                <Col xs={24}>
                    <div className='feature-icon bg-primary bg-gradient text-center'>
                        <svg className='bi' width='1em' height='1em'>
                        </svg>
                    </div>

                    <div className={'px-3'}>
                        <h2 className='py-3 text-white text-center'>Project Based Learning</h2>
                        <p className='text-white'>
                            'Project Based Learning (PBL) is a teaching method in which students learn by actively
                            engaging in real-world and personally meaningful projects.' -PBS
                        </p>
                        <p className='text-white'>
                            Americoders students work projects from 1 week to 1 month periods of time. This is a great
                            method to engage in asking complex questions while gaining real-world problem solving
                            experience. Once completed students present their projects to a live audience and proudly
                            demonstrate their newly acquired skill-set.
                            <br/>
                            <br/>
                            <span className='text-capitalize'>
                                Skills developed: critical thinking, collaboration, creativity, and communication skills.
                            </span>
                            <br/>
                            <br/>
                            Participating in project based learning will bring out a creative and problem solving side
                            of us we might not have even known existed.
                        </p>
                    </div>

                </Col>

                {/* features col 2/3 */}
                <Col xs={24}>
                    <div className='feature-icon bg-primary bg-gradient'>
                        <svg className='bi' width='1em' height='1em'>
                        </svg>
                    </div>
                    <div className='px-3'>
                        <h2 className='py-3 text-white'>Mindfulness Awareness</h2>
                        <p>
                            We must connect meaning with our actions. We hear modern terms but they are offered with
                            no explanation of what they mean. Then we are left with assumptions and stereotypes.
                            These create patterns and patterns turn into habits.
                        </p>
                        <p>
                            Our habits determine our future. We have the option to not only survive but thrive in
                            the coming future.
                        </p>
                        <p>
                            There are many useful skills that our kids (and ourselves) can learn
                            to get ahead in life, but few are as flexible and fun as the ability to code.
                        </p>
                    </div>
                </Col>

                {/* features col 3/3 */}
                <Col xs={24}>
                    <div className='feature-icon bg-primary bg-gradient'>
                        <svg className='bi' width='1em' height='1em'>
                        </svg>
                    </div>
                    <div className={'px-3'}>
                        <h2 className='py-3 text-white'>Community Building</h2>
                        <p>
                            Community building can develop a sense of dignity, and restore our sense of
                            significance and relevance in our beautiful city of Reno, Nevada. Having a shared cause
                            provides us with a sense of momentum and purpose.
                        </p>
                        <p className='fw-bold'>
                            Don't you want to experience and explore amazing new possibilities in this awesome new
                            world?
                        </p>
                        <p>
                            Wouldn't it be better if we experienced this and grew as a community/society?
                        </p>
                    </div>
                </Col>
            </Row>
        </Row>

        {/* course and project album section */}
        <Row align={'middle'} justify={'center'} className='py-5 container text-white'>
            {/* title area */}
            <Col xs={24} id='course-list'>
                <div className='feature-icon bg-primary bg-gradient'>
                    <svg className='bi' width='1em' height='1em'>
                    </svg>
                </div>
                <div className={'px-3'}>
                    <h2 className='py-3 text-white'>Course and Project Examples</h2>
                    <p>
                        As predicted from years before, computer science and coding has progressed from a hobby
                        to a critical career skill.
                    </p>
                    <p className='fw-bold'>
                        Let's level-up by creating some cool games and projects!
                    </p>
                </div>
            </Col>

            {/* courses list */}
            <Row align={'middle'} justify={'center'}>
                {/* loop through the published courses */}
                {/*{courses.map((course) => (*/}
                {/*        <Col key={course._id}>*/}
                {/*            <CourseCard course={course}/>*/}
                {/*        </Col>*/}
                {/*    )*/}
                {/*)}*/}
                {/* end loop */}

                <Col xs={24} md={8} lg={8} className='m-5'>
                    <Image
                        preview={false}
                        src='/images/branding/misc/americoders-scratch-game.jpg'
                        alt='Americoders'
                        loading='lazy'
                    />
                    <p className='lead text-white text-center'>Introduction to Computer Science</p>
                </Col>

                <Col xs={24} md={8} lg={8} className='m-5'>
                    <Image
                        preview={false}
                        src='/images/branding/misc/americoders-kids-game-happy.jpg'
                        alt='Americoders'
                        loading='lazy'
                    />
                    <p className='lead text-white text-center'>Internet Safety and Web Ethics</p>
                </Col>

                <Col xs={24} md={8} lg={8} className='m-5'>
                    <Image
                        preview={false}
                        src='/images/branding/misc/americoders-old-school-game.jpg'
                        alt='Americoders'
                        loading='lazy'
                    />
                    <p className='lead text-white text-center'>Game Development - JS & Python</p>
                </Col>

                <Col xs={24} md={8} lg={8} className='m-5'>
                    <Image
                        preview={false}
                        src='/images/branding/misc/americoders-technology-unplugged.jpg'
                        alt='Americoders'
                        loading='lazy'
                    />
                    <p className='lead text-white text-center'>Technology Unplugged - Introduction</p>
                </Col>

                <Col xs={24} md={8} lg={8} className='m-5'>
                    <Image
                        preview={false}
                        src='/images/branding/misc/americoders-teen-coding.jpg'
                        alt='Americoders'
                        loading='lazy'
                    />
                    <p className='lead text-white text-center'>Create a Projects Portfolio</p>
                </Col>

                <Col xs={24} md={8} className='m-5'>
                    <Image
                        preview={false}
                        src='/images/branding/misc/americoders-teen-3d-printing.jpg'
                        alt='Americoders'
                        loading='lazy'
                    />
                    <p className='lead text-white text-center'>Hardware Hacking, Breakdown/Fixes</p>
                </Col>
            </Row>
        </Row>

        {/* mailing list */}
        <Row align={'middle'} justify={'center'} className='py-5 container-fluid bg-light'>
            {/* title area */}
            <Col xs={24} md={20} lg={24} id='course-list'>
                <section className='text-center'>
                        <span className='fs-5 text-muted ls-md text-uppercase'>
                                technology education - arts - mindfulness
                            </span>
                    <h1 className='fw-bold text-black lh-1 mt-2 mb-3'>
                        Join our mailing list
                    </h1>

                    <p className='text-black-50 mb-6 fs-6'>
                        Stay up to date with the news and latest courses + lessons.
                    </p>

                    {/* mailing list */}
                    <MailingListForm className={'bg-light'}/>
                </section>
            </Col>
        </Row>

        {/* features title section */}
        <Row align={'middle'} justify={'center'} className='container py-5'>
            {/* brand title area */}
            <Col xs={24}>
                <div className='feature-icon bg-primary bg-gradient'>
                    <svg className='bi' width='1em' height='1em'>
                    </svg>
                </div>
                <div className={'px-3'}>
                    <h2 className='py-3 text-white'>Pricing Models</h2>
                    <p className='text-light fw-bolder'>Age groups:{' '}
                        <span className='text-light'>7 - 9</span>{' | '}
                        <span className='text-light'>10 - 13</span>{' | '}
                        <span className='text-light'>14 - 17</span>
                    </p>
                    <p className='text-light'>
                        Join our community as we educate, evolve, and adapt to this new world.
                        <br/>
                        Learn to code, create, live, and prosper in this new digital era while
                        <br/>
                        keeping intact the ethics and traditions of our old-world.
                    </p>
                    <p className='text-light'>
                        Please <a href='mailto:scholarships@americoders.org'>email us here</a> to inquire
                        about
                        scholarships and sponsorships.
                    </p>
                </div>
            </Col>

            {/* pricing model row section */}
            <Row align={'top'} justify={'center'}>
                {/* features col 1/3 */}
                <Col xs={24} sm={12} lg={8} className={'px-3'}>
                    {/* pro tier */}
                    <div style={{width: '100%'}}
                         className='card mb-4 rounded-3 shadow-sm border text-center'>
                        <div className='card-header py-3'>
                            <h4 className='my-0 fw-normal'>Community</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title pricing-card-title'>$0<small
                                className='text-muted fw-light'>/mo</small></h1>
                            <ul className='list-unstyled mt-3 mb-4'>
                                <li>Child + Parent Participation</li>
                                <li>Attendance to Speakers and Public Events</li>
                                <li>Can Purchase Workshop/Course</li>
                                <br/>
                                <li>'Hour of Code' Events</li>
                                <li>Access to Free Courses on Web App</li>
                                <li>Email support</li>
                            </ul>
                            <Link href={'/register'}>
                                <a>
                                    <button type='button' className='w-100 btn btn-md btn-outline-primary'>
                                        Registration Open
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </Col>

                {/* features col 2/3 */}
                <Col xs={24} sm={12} lg={8} className={'px-3'}>
                    {/* pro tier */}
                    <div style={{width: '100%'}}
                         className='card mb-4 rounded-3 shadow-sm border text-center'>
                        <div className='card-header py-3'>
                            <h4 className='my-0 fw-normal'>Pro</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title pricing-card-title'>$149<small
                                className='text-muted fw-light'>/mo</small></h1>
                            <ul className='list-unstyled mt-3 mb-4'>
                                <li>Child + Parent Participation</li>
                                <li>2x in-person workshop per month</li>
                                <br/>
                                <li>Access to online workshops/courses.</li>
                                <li>Hour of Code Events, Special Access</li>
                                <li>Priority email support</li>
                                <li>Help center access</li>
                            </ul>
                            <a>
                                <button type='button' className='w-100 btn btn-sm btn-primary'>
                                    Registration Opening Soon
                                </button>
                            </a>
                        </div>
                    </div>
                </Col>

                {/* features col 3/3 */}
                <Col xs={24} sm={12} lg={8} className={'px-3'}>
                    {/* enterprise tier */}
                    <div style={{width: '100%'}}
                         className='card mb-4 rounded-3 shadow-sm border-danger text-center'>
                        <div className='card-header py-3 text-white bg-danger border-danger'>
                            <h4 className='my-0 fw-normal text-light'>Enterprise</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title pricing-card-title'>$225<small
                                className='text-muted fw-light'>/mo</small></h1>
                            <ul className='list-unstyled mt-3 mb-4'>
                                <li>Child + Parent Participation</li>
                                <li>4x in-person workshop per month</li>
                                <br/>
                                <li>Access to online workshops/courses.</li>
                                <li>Hour of Code Events, Special Access</li>
                                <li>Priority Phone and email support</li>
                                <li>Help center access</li>
                            </ul>
                            <a>
                                <button type='button' className='w-100 btn btn-sm btn-danger'>
                                    Registration Opening Soon
                                </button>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Row>
    </>)
}

export async function getServerSideProps() {
    // collect courses data
    const {data} = await axios.get(`${process.env.API}/courses`) // full path of server here

    return {
        props: {
            courses: data // return data as props
        }
    }
}

export default Index