import Title from './Titles'
import Tour from './Tour'
const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="Featured" subtitle="tours" />

        <div className="section-center featured-center">
          <Tour parentClass="section-center featured-center" />
        </div>
      </section>
    </div>
  )
}
export default Tours
