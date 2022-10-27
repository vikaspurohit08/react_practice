import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  console.log("got here");
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const {
    sendRequest,
    status,
    error,
    data: commentsData,
  } = useHttp(getAllComments, true);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const onAddedComment = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments = [];

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (status === "error") {
    comments = (
      <div className="centered focused">
        <p>{error}</p>
      </div>
    );
  }

  if (status === "completed" && (!commentsData || commentsData.length === 0)) {
    comments = (
      <div className="centered focused">
        <p>No comments available</p>
      </div>
    );
  }

  if (status === "completed" && commentsData.length > 0) {
    comments = <CommentsList comments={commentsData}></CommentsList>;
  }

  return (
    <section className={classes.comments}>
      {/* <h2>User Comments</h2> */}
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddedComment={onAddedComment}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
