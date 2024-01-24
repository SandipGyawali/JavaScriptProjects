/* eslint-disable react/prop-types */
import "../index.css";

function Post({ post }) {
  return (
    <div className={`post-wrapper ${"color-" + Math.floor(Math.random() * 4)}`}>
      <span className="post-name">{post.name}</span>
      <p className="post-body">{post.body}</p>

      <span className="post-id">Post ID: {post.id}</span>
    </div>
  );
}

export default Post;
