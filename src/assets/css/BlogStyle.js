import styled from "styled-components"

const BlogWrapper = styled.section`
  padding: 40px 30px;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.6s ease-in 0.2s;
`
const BlogTitle = styled.div`
  text-align: center;
  font-size: 2em;
  padding-bottom: 40px;

  span {
    color: ${(props) => props.theme.themeColor};
  }
`
const BlogListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-block: 2rem;
  gap: 2rem;
  border-radius: 20px;
  padding: 50px 0px;
`
const SingleBlogPost = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;

  .two-btn {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
  }
  .img-wrapper img {
    max-width: 100%;
    height: auto;
    max-height: 300px;
    display: block;
  }

  .title h1 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  .tag {
    background-color: #eee;
    padding: 5px 10px;
    margin: 0 5px 5px 0;
    border-radius: 3px;
  }

  .paragraph {
    line-height: 1.6;
    color: #666;
  }
`
export { BlogWrapper, BlogTitle, BlogListContainer, SingleBlogPost }
