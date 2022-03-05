import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
           <span className="sidebarTitle">About Me</span>
           <img className="sideBarImg"
            src="https://images.pexels.com/photos/3584443/pexels-photo-3584443.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="img"
           />
           <p>How to create a blog website 
           using React.js. Blog app React project 
           from scratch for beginners. Design React 
           blog app using functional 
           React components and React Router Dom.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">           
              Life            
          </li>
          <li className="sidebarListItem">            
              Music            
          </li>
          <li className="sidebarListItem">            
              Spor           
          </li>
          <li className="sidebarListItem">           
              Style            
          </li>
          <li className="sidebarListItem">           
              Tech            
          </li>
          <li className="sidebarListItem">           
              Cinema            
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
