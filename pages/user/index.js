import {useContext, useEffect, useState} from 'react'
import {Context} from '../../context'
import axios from 'axios'

const UserIndex = () => {
    // state
    const [hidden, setHidden] = useState(true)

    const {
        state: {user},
    } = useContext(Context)

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const {data} = await axios.get('/api/current-user')
            setHidden(false)
        } catch (err) {
            console.log(err)
            setHidden(true)
        }
    };

                    <main>
                        <section className='py-5 text-center container'>
                            <div className='row py-lg-5'>
                                <div className='col-lg-6 col-md-8 mx-auto'>
                                    <h1 className='fw-light'>User Page</h1>
                                    <p className='lead text-muted'>Something short and leading about the collection
                                        below—its
                                        contents, the creator, etc. Make it short and sweet, but not too short so folks
                                        don’t simply
                                        skip over it entirely.</p>
                                </div>
                            </div>
                        </section>

                        <div className='album py-5 bg-light'>
                            <div className='container'>
                                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                                    <p className='lead'>
                                        Welcome User {JSON.stringify(user.name)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer className='text-muted py-5'>
                        <div className='container'>
                            <p className='float-end mb-1'>
                                <a href='#'>Back to top</a>
                            </p>
                            <p className='mb-1'>Americoders Center for Advanced Learning</p>
                            <p className='mb-0'>Want to sign-up? <a href='/'>Visit the homepage</a> or read our <a
                                href='#'>getting started guide</a>.</p>
                        </div>
                    </footer>
                </>)}
        </>)
}

export default UserIndex
