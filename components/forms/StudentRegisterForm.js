import {useContext, useEffect, useState} from 'react'
import {Context} from '../../context'
import {useRouter} from 'next/router'
import axios from 'axios'
import {toast} from 'react-toastify'

const StudentRegistrationForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    // global state
    const {
        state: {user},
    } = useContext(Context)

    // router
    const router = useRouter()

    // condition redirect for logged-in user
    useEffect(() => {
        if (user !== null) router.push('/')
    })

    const handleSubmit = async (e) => {
        // do not reload the page
        e.preventDefault()

        // send data to backend
        try {
            // activate load spinner
            setLoading(true)
            const {data} = await axios.post(`/api/register`, {
                name, email, password
            })

            toast.success('Registration successful. Please login.', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

            // deactivate load spinner
            setLoading(false)

            // clear fields and redirect home
            setName('')
            setEmail('')
            setPassword('')
            await router.push('/login')
        } catch (err) {
            // deactivate load spinner
            setLoading(false)

            toast.error(err.response.data, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='form-control mb-4 p-4'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Enter name'
                required
            />
            <input
                type='text'
                className='form-control mb-4 p-4'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter email'
                required
            />
            <input
                type='password'
                className='form-control mb-4 p-4'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Enter password'
                required
            />
            <div className='d-grid gap-2'>
                <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={!name || !email || !password || loading}
                >
                    {loading ? <SyncOutlined spin/> : 'Submit'}
                </button>
            </div>
        </form>
    </>)
}