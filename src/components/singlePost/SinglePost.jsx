import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="post img"
            className="singlePostImg" />
            <h1 className="singlePostTitle">Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                Author: <b>Tolga</b>
                </span>
                <span className="singlePostDate">
                1 hour ago
                </span>
            </div>
            <p className="singlePostDesc">ne 1:8:  'Home' is defined but never used  no-unused-vars

                Search for the keywords to learn more about each warning.
                To ignore, add // eslint-disable-next-line to the line before.

                by status 1.59 MiB [cached] 1 asset
                asset index.html 1.03 KiB [emitted]
                asset asset-manifest.json 190 bytes [emitted]
                c   ached modules 1.4 MiB (javascript) 28.1 KiB (runtime) [cached] 136 modules
                .   /src/components/singlePost/SinglePost.jsx 3.77 KiB [built]</p>
        </div>
    </div>
  )
}
