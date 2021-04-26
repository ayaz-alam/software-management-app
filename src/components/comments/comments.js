import React, { useState, useEffect } from "react";
import {
  Button,
  Comment,
  Divider,
  Form,
  Header,
  TextArea,
} from "semantic-ui-react";
import { addCommentToTask } from "../../api/task-api";
import {
  getCurrentUser,
  getUserNameFromUsername,
} from "../../user/user-profile";

const CommentComponent = (props) => {
  const [comments, setComments] = useState(props.comments);
  const [commentMessage, setCommentMessage] = useState();

  const addComment = () => {
    if (!commentMessage) return alert("Please enter commment");

    let commentModel = {};
    commentModel.author = getCurrentUser();
    commentModel.date = new Date();
    commentModel.message = commentMessage;

    let updateComments = comments;
    updateComments.push(commentModel);
    setComments(updateComments);

    addCommentToTask(props.taskId, comments, (success, message) => {
      if (!success) return alert(message);
      setCommentMessage('')
      props.forceReload(true);
    });
    //Add comment and send a callback to reload
  };

  useEffect(() => {
    setComments(props.comments);
  }, [comments, props.comments]);

  const commentsComponents = [];
  if (comments && comments.length > 0 && comments[0].message) {
    comments.forEach((comment) => {
      commentsComponents.push(
        <Comment style={{ padding: "0px 0px 0px 10px" }}>
          <Comment.Content>
            <Comment.Author as="a">
              {getUserNameFromUsername(comment.author)}
            </Comment.Author>
            <Comment.Metadata>
              <span>{new Date(comment.date).toDateString()}</span>
            </Comment.Metadata>
            <Comment.Text>{comment.message}</Comment.Text>
          </Comment.Content>
        </Comment>
      );
    });
  }

  return (
    <Comment.Group size="mini">
      <Header as="h4" dividing>
        Comments
      </Header>

      {commentsComponents.length > 0 ? commentsComponents : "No Comments yet"}

      <Form reply size="mini">
        <TextArea
          rows={2}
          size="mini"
          placeholder="Write your comment"
          value={commentMessage}
          onChange={(event) => {
            setCommentMessage(event.target.value);
          }}
        />
        <Divider hidden></Divider>
        <Button
          size="mini"
          content="Add Comment"
          labelPosition="left"
          icon="edit"
          onClick={addComment}
          primary
        />
      </Form>
    </Comment.Group>
  );
};

export default CommentComponent;
