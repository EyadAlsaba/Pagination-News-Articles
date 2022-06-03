import { useGlobalContext } from "./context";
import Hit from "./hitModel";
const Articles = () => {
  const { hits } = useGlobalContext();
  return (
    <section className="news-container">
      {
        hits.length !== 0 ? hits.map((hit, index) => {
          return (
            <Hit key={index} {...hit} />
          )
        })
          :
          <div>
            <h3>There is no news in here</h3>
          </div>
      }
    </section>

  )
}

export default Articles