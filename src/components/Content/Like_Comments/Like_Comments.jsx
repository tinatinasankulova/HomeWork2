import './Like_Comments.css';

const Like_Comments = () => {
  return (
    <div>
    <div className="likeCount">
      Like <span> 23 </span>
    </div>
    <div className="comment">
      <div>
        <label htmlFor="">Comment</label>
       
      </div>
      <div>
        <textarea></textarea>
        <div><button className="btn">add comment</button></div>
      </div>
    </div>
    </div>
  )
}

export default Like_Comments;