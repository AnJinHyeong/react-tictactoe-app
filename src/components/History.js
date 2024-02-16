import './history.css'

const History = (props) => {

  return(
    <ul className="history">
      {
        props.history.map((it,index) => {
          return (
            <li>GAME HISTORY CHAPTER {index}</li>
          )
        })
      }
    </ul>
  )
}

export default History