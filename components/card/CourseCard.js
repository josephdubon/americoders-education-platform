import {Badge, Card} from 'antd'
import Link from 'next/link'

const {Meta} = Card

const CourseCard = ({course}) => {
    // destructure course values
    const {name, instructor, price, image, slug, paid, category} = course

    return (
        <Link href={`/course/${slug}`}>
            <a>
                <Card
                    className='mb-4'
                    cover={<img src={image.Location}
                                alt={name}
                                style={{height: '240px', objectFit: 'cover'}}
                                className='p-1'
                    />}>
                    <h2 className='fw-bold'>{name}</h2>
                    <p>by {instructor.name}</p>
                    <Badge
                        count={category}
                        style={{backgroundColor: '#03a9f4'}}
                        className='pb-2 mr-2'
                    />
                    <h4 className='pt-2'>{paid ? '$' + price : 'Free'}</h4>
                </Card>
            </a>
        </Link>
    )
}

export default CourseCard