import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import moment from "moment";
import { deleteEntry, startDelete } from "../actions/blog";
import { king } from "../routes/PublicRoute";

export function ExpandedBlog({ blogy, match, startDelete, history, uid }) {
  const handleDelete = () => {
    console.log(blogy.id);
    startDelete(blogy.id);
    history.push("/dashboard");
  };

  const handleEdit = () => {
    history.push(`/edit/${blogy.id}`);
  };

  return (
    <div className="expaned__container">
      <Header />

      <div className="expanded__content">
        <div className="expanded__inner">
          <article key={match.params.id}>
            <h1>{blogy.title}</h1>
            <p>{blogy.blog}</p>
            {king === uid}
            <div>
              {uid === king && (
                <button
                  className="buttons buttons--delete"
                  onClick={handleDelete}
                >
                  Delete Post
                </button>
              )}
              {uid === king && (
                <button className="buttons" onClick={handleEdit}>
                  Edit Post
                </button>
              )}
            </div>

            <p id="p2">
              {moment(blogy.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    blogy: state.blogPost.find(blog => {
      return blog.id === props.match.params.id;
    }),
    uid: state.auth.uid
  };
};

const mapDispatchToProps = dispatch => ({
  deleteBlog: id => dispatch(deleteEntry(id)),
  startDelete: data => dispatch(startDelete(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedBlog);
