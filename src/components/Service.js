import { services } from '../data'
const SingleService = ({ icon, title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  )
}

const Service = () => {
  return (
    <div className="section-center services-center">
      {services.map((link) => {
        return <SingleService {...link} key={link.id} />
      })}
    </div>
  )
}
export default Service
