import styles from './Students.module.css'
import UserArticle from '@/components/UserArticle/UserArticle'
import Loader from '@/components/Loader/Loader'

const Students = ({ students }) => {

    return (
        <div className={styles.students}>
            {
                students.length ?
                    students.map(student => {
                        return (
                            <UserArticle key={student._id} link={`/users/${student._id}`} user={student} />
                        )
                    })
                    :
                    <Loader />
            }
        </div>
    )
}

export default Students