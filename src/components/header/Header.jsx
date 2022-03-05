import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Blog</span>
            <span className="headerTitleLg">React&Node</span>
        </div>
        <img className="headerImg"
        src="https://images.pexels.com/photos/8864042/pexels-photo-8864042.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="headerimg"></img>
    </div>
  )
}
