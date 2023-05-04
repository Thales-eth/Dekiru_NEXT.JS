import styles from '@/styles/pages/postedit.module.css'
import CloseButton from '@/components/CloseButton/CloseButton'
import InputBlock from '@/components/InputBlock/InputBlock'
import SubmitButton from '@/components/SubmitButton/SubmitButton'
import TextArea from '@/components/TextArea/TextArea'
import IsPrivate from '@/components/IsPrivate/IsPrivate'
import postService from '@/services/post.service'
import { StylesContext } from '@/contexts/styles.context'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const PostEditPage = () => {

    const { triggerFadeOut, fadeOut } = useContext(StylesContext)
    const router = useRouter()
    const { post_id } = router.query

    const [postInfo, setPostInfo] = useState({ title: "", description: "", author: "" })
    const { title, description } = postInfo

    function handleClick() {
        triggerFadeOut("/posts")
    }

    useEffect(() => {
        loadPost()
    }, [])

    async function loadPost() {
        const singlePost = await postService.getSinglePost(post_id).then(({ data }) => data)
        setPostInfo(singlePost)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setPostInfo({ ...postInfo, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await postService.editPost(post_id, postInfo)
        handleClick()
    }

    return (
        <div className={`${styles.postEditPage} ${fadeOut && styles.fadeOut}`}>
            <h1>Edit Post</h1>

            <form onSubmit={handleSubmit}>
                <InputBlock inputValue={title} handleChange={handleChange} type={"text"} value={"title"} />
                <TextArea inputValue={description} handleChange={handleChange} placeholder={"Description"} name={"description"} />
                <SubmitButton text={"Edit"} />
            </form>

            <CloseButton handleClick={handleClick} size={100} />

        </div>
    )
}

const AuthPostEditPage = () => {
    return (
        <IsPrivate Component={PostEditPage} />
    )
}

export default AuthPostEditPage