import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

class Reddit extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <h1>/r/reactjs</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              {post.title} <b>{post.score}</b> <i>{post.name}</i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Reddit />, document.getElementById("root"));

// Extend the UI to include more data from
// the Reddit posts, like their score and
// the submitting user. Make the title
// into a link to the actual post.
