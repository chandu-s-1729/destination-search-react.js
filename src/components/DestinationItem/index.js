// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachItemDetails} = props
  const {imgUrl, name} = eachItemDetails

  return (
    <li className="list-item">
      <img className="item-image" src={imgUrl} alt={name} />
      <p className="item-name">{name}</p>
    </li>
  )
}

export default DestinationItem
