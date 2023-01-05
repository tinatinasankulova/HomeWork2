import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="header">
        <img
          src="https://media.istockphoto.com/id/1180882238/vector/success-logo.jpg?s=612x612&w=0&k=20&c=brO28PRCR_73Oj-qVIGDzYxfDwZj17t7VrLb-JiGH2Q="
          alt="logo"
          className="logotip"
        />
        <div className="search">
          <label htmlFor="">Search</label>
          <img
            src="https://w7.pngwing.com/pngs/905/174/png-transparent-magnifying-glass-brand-logo-magnifying-glass-glass-white-logo.png"
            alt="search"
          />
          <input type="search" />
        </div>
      </div>

      <div className="nav">
        <div>
          <a href="#">Message</a>
        </div>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </div>

      <div className="app-wrapper-content">
        <img
          src="https://gamerwall.pro/uploads/posts/2022-06/1655416871_1-gamerwall-pro-p-palmi-i-okean-priroda-krasivo-foto-2.jpg"
          alt="foto"
        />

        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum
          voluptas vel quidem eveniet libero. Corporis, numquam, neque doloribus
          nam quia atque porro sed perspiciatis doloremque voluptate nostrum
          quasi necessitatibus!
        </div>
        <div className="likeCount">
          Like <span> 23 </span>
        </div>
        <div className="comment">
          <div>
            <label htmlFor="">Comment</label>
          </div>

          <div>
            <textarea></textarea>
            <div>
              <button className="btn">add comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
