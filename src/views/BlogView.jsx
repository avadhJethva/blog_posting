import { ApiDelete, ApiGet } from "api"
import { SingleBlogPost } from "assets/css/BlogStyle"
import Button from "component/button/Button"
import Loader from "component/loader/Loader"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

const BlogView = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState({})
  const user = useSelector((state) => state.AuthReducer.currentUser)
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setLoader(true)
    ApiGet(`/blog/${id}`)
      .then((res) => {
        setBlog(res.data.data)
        toast(res.data.message)
      })
      .catch(() => {
        toast("errour occur")
      })
      .finally(() => {
        setLoader(false)
      })
  }, [id])

  const handleDelete = () => {
    setLoader(true)
    ApiDelete(`/blog/${id}`)
      .then((res) => {
        toast(res.data.message)
        navigate("/blog")
      })
      .catch((e) => {
        toast("error occur")
      })
      .finally(() => {
        setLoader(false)
      })
  }
  if (loader) return <Loader />
  return (
    <SingleBlogPost>
      {blog && blog?.user_detail?.id === user.id && (
        <div className="two-btn">
          <Button className="w-auto success">edit</Button>
          <Button className="w-auto danger" onClick={() => handleDelete()}>
            delete
          </Button>
        </div>
      )}
      <div className="img-wrapper">
        <img src={blog.attachment} alt="" />
      </div>
      <div className="title">
        <h1>{blog.title}</h1>
      </div>
      <div className="tags">
        <div className="tag">lorem</div>
        <div className="tag">lorem</div>
        <div className="tag">lorem</div>
        <div className="tag">lorem</div>
      </div>
      <p className="paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        consequatur voluptatem ipsum natus illo rem laudantium nemo et placeat
        quidem debitis voluptates facere pariatur iure aut autem voluptatibus
        molestiae, labore perspiciatis voluptas. Aperiam, hic.
      </p>
    </SingleBlogPost>
  )
}

export default BlogView
