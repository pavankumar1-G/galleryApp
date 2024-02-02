// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachObjectDetails, isActive, setThumbnailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachObjectDetails

  const onClickThumbnailItem = () => {
    setThumbnailId(id)
  }

  const isActiveButtonImage = isActive ? 'btn-image' : 'btn-image-active'
  return (
    <li className="thumbnailItem">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnailItem}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isActiveButtonImage}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
