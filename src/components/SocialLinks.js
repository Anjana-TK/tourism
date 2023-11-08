import { socialLinks } from '../data'
const SingleSocialLink = ({ itemClass, href, icon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <SingleSocialLink {...link} key={link.id} itemClass={itemClass} />
        )
      })}
    </ul>
  )
}
export default SocialLinks
