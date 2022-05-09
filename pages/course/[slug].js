import axios from 'axios'
import {useRouter} from 'next/router'
import {useState} from 'react'
import SingleCourseHero from '../../components/cards/SingleCourseHero'
import PreviewModal from '../../components/modal/PreviewModal'

const SingleCourse = ({course}) => {
// state
    const [showModal, setShowModal] = useState(false)
    const [preview, setPreview] = useState('')

    const router = useRouter()
    const {slug} = router.query

    return (<>
        <SingleCourseHero
            course={course}
            showModal={showModal}
            setShowModal={setShowModal}
            preview={preview}
            setPreview={setPreview}
        />

        <PreviewModal
            showModal={showModal}
            setShowModal={setShowModal}
            preview={preview}
        />
    </>)
}

export async function getServerSideProps({query}) {
    const {data} = await axios.get(`${process.env.API}/course/${query.slug}`)

    return {
        props: {
            course: data,
        }
    }
}

export default SingleCourse