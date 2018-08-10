import React from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { Button, Form } from "semantic-ui-react";

import { addComment } from "../../actions/commentsActions";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        comment: ""
      },
      errors: {},
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    const {
      match: { params }
    } = this.props;
    e.preventDefault();
    const errs = this.validate(this.state.data);
    this.setState({
      errors: errs
    });
    if (Object.keys(this.state.errors).length === 0) {
      this.props.addComment(params.id, this.state.data);
    }
    this.setState({
      data: { ...this.state.data, comment: "" }
    });
  };

  validate = data => {
    const errors = {};

    if (!data.comment) errors.comment = "Comment is required";
    if (data.comment.length < 8)
      errors.comment = "Comment must have at least eight characters";

    return errors;
  };

  render() {
    return (
      <Form reply onSubmit={this.handleSubmit}>
        <Form.TextArea
          name="comment"
          value={this.state.data.comment}
          onChange={this.handleChange}
        />
        <Button
          disabled={!this.props.isLoggedIn}
          content="Add comment"
          primary
          type="submit"
        />
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { addComment }
  )(CommentForm)
);
