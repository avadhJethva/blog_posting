import { ApiGet } from "api"
import { BlogListContainer, BlogTitle, BlogWrapper } from "assets/css/BlogStyle"
import { BlogCard } from "assets/css/CustomCard"
import Button from "component/button/Button"
import Loader from "component/loader/Loader"
import { CategoryFilter, Option, Select } from "../globalStyle"
import useURLParams from "hooks/useUrlParams"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { formateDate } from "utils"

const Blog = () => {
  const [blog, setBlogs] = useState([])
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const { setParam, getParam, removeParam } = useURLParams()
  const navigate = useNavigate()

  const getBlogs = (value) => {
    if (value === "all") {
      return removeParam("category_id")
    } else {
      setParam("category_id", value)
    }
    // setLoading(true)
    // ApiGet(`/blog?category_id=${value}`)
    //   .then((blogs) => {
    //     setBlogs(blogs.data.data.data)
    //   })
    //   .catch((e) => {
    //     toast("errour occur")
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }

  useEffect(() => {
    setLoading(true)
    Promise.all([
      ApiGet(
        `/blog?${
          getParam("category_id")
            ? `category_id=${getParam("category_id")}`
            : ""
        }`
      ),
      ApiGet("/category"),
    ])
      .then(([blogs, category]) => {
        setBlogs(blogs.data.data.data)
        setCategory(category.data.data.data)
      })
      .catch((e) => {
        toast("errour occur")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [getParam("category_id")])
  return (
    <BlogWrapper>
      <BlogTitle>
        <h1>
          Blog <span>Feed</span>
        </h1>
      </BlogTitle>

      <div className="fillters flex-between">
        <Button className="w-auto" onClick={() => navigate("/blog/create")}>
          add blog
        </Button>
        <CategoryFilter>
          <Select name="category" onChange={(e) => getBlogs(e.target.value)}>
            <Option value={"all"}>All category</Option>
            {category.length !== 0 &&
              category.map(({ id, name }) => {
                return (
                  <Option key={id} value={id}>
                    {name}
                  </Option>
                )
              })}
          </Select>
        </CategoryFilter>
      </div>
      <BlogListContainer>
        {loading ? (
          <Loader />
        ) : (
          blog.length !== 0 &&
          blog.map((data) => {
            const {
              id,
              attachment = "",
              description = "",
              title = "",
              user_detail = {},
              created_at = new Date(),
              category = [],
            } = data
            return (
              <Link to={`/blog/${id}`} key={id}>
                <BlogCard>
                  <div className="card__header">
                    <img
                      src={attachment}
                      alt="card__image"
                      className="card__image"
                      width="600"
                    />
                  </div>
                  <div className="card__body">
                    <div className="tags">
                      {category.length !== 0 &&
                        category.map(({ name, id }) => (
                          <span className="tag" key={id}>
                            {name}
                          </span>
                        ))}
                    </div>

                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                  <div className="card__footer">
                    <div className="user">
                      <img
                        src={user_detail?.profile_image}
                        alt="user__image"
                        className="user__image"
                      />
                      <div className="user__info">
                        <h5>{user_detail?.first_name}</h5>
                        <small>{formateDate(created_at)}</small>
                      </div>
                    </div>
                  </div>
                </BlogCard>
              </Link>
            )
          })
        )}
      </BlogListContainer>
    </BlogWrapper>
  )
}

export default Blog
