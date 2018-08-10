import React from "react";
import { withRouter } from "react-router-dom";

import PostForm from "./forms/PostForm";

class AddEditPost extends React.Component {
  render() {
    const {
      match: { params }
    } = this.props;
    console.log(params.id);
    return (
      <div>
        {!params.id ? (
          <h1 className="center-text">Add new post</h1>
        ) : (
          <h1 className="center-text">Edit post</h1>
        )}
        {!params.id ? <PostForm mode="add" /> : <PostForm mode="edit" />}
      </div>
    );
  }
}

export default withRouter(AddEditPost);
