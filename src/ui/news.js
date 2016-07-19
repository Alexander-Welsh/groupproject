import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="latest news">
        <h1>Latest News</h1>
          {this.props.news.map(function(user) {
      return (
        <p key={news.post_id}>{news.title}>{news.date_published}>{news.post}</p>
            );
          })}
      </div>
    )
  }
});