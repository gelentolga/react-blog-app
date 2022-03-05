import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://images.pexels.com/photos/4869123/pexels-photo-4869123.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="postimg"
        />
        <div className="postInfo">
            <div className="postCats">
                Music
            </div>
            <div className="postCats">
                life
            </div>
            <span className="postTitle">
                loreme lorem loreeeem lorem
            </span>
            <hr/>
            <span className="postDate">
                1hour ago
            </span>
        </div>
        <p className="postDesc">
        How to c
        How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
        How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
        How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.reate a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
        </p>
    </div>
  )
}
