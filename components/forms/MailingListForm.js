import {Button, Form, Input, Layout} from 'antd'
import {useRouter} from 'next/router'
import axios from 'axios'
import {toast} from 'react-toastify'
import {useState} from 'react'

export default function MailingListForm() {
    // set state
    const [email, setEmail] = useState(null)
    const [loading, setLoading] = useState(false)

    // router config
    const router = useRouter()

    // api request
    const subscribe = () => {
        // update state
        setLoading(true)

        // make request
        axios
            .put('/api/mailing-list', {
                email,
            })
            .then((result) => {
                if (result.status === 200) {
                    toast.success(result.data.message)
                    setLoading(false)
                }
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }

    const onFinish = (values) => {
        console.log('Success:', values)
        setEmail(null)
        router.push('/thankyou').then(r => toast.success('Thank you!'))

    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    return (<Layout className='bg-body'>
        <p className='lead text-dark text-center form-text'>
            Please enter your email to join our mailing list.</p>
        <Form
            style={{width: '320px', margin: '0 auto'}}
            name='basic'
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item
                name='email'
                rules={[{
                    required: true, message: 'Please enter your email!',
                },]}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            >
                <Input/>
            </Form.Item>

            {/* submit button */}
            <Form.Item className='text-center'>
                <Button
                    type='primary'
                    htmlType='submit'
                    onClick={subscribe}
                    className={`btn ml-3 ${loading ? 'btn-disabled loading' : 'btn-primary'}`}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </Layout>)
}