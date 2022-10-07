import './index.css'

const ChoiceItem = props => {
  const {choiceDetails, onClickChoice} = props
  const {id, imageUrl} = choiceDetails

  const onClickChoiceItem = () => {
    onClickChoice(id)
  }

  const name = id.toLowerCase()
  console.log(name)

  return (
    <button
      className="choice-btn"
      type="button"
      onClick={onClickChoiceItem}
      data-testid={`${name}Button`}
    >
      <img src={imageUrl} alt={id} className="choice-image" />
    </button>
  )
}

export default ChoiceItem
