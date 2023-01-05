import './Content.css'
import Descriptions from './Descriptions/Descriptions'
import Like_Comments from './Like_Comments/Like_Comments'
import MainImg from './Main/MainImg'

const Content = () => {
  return (
    <div className="app-wrapper-content">
     <MainImg/>
    <Descriptions/>
    <Like_Comments/>
  </div>
  )
}

export default Content
