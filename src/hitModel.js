import { useGlobalContext } from "./context"
const Hit = ({ url, title, points, author, objectID, num_comments }) => {
  const { removeArticle } = useGlobalContext();
  return (
    <article id={objectID} className='article-card'>
      <h3 className="title">{title}</h3>
      <p className="article-info">{points} points | by {author} | {num_comments} comments</p>
      <a className="link-url" href={url} target='_blank' rel="noReferrer">read more</a>
      <button className="rm btn" onClick={() => removeArticle(objectID)}>not interested</button>
    </article>
  )
}
export default Hit