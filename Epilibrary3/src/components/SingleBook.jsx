import React from 'react';
import CommentArea from './components/CommentArea';
import PropTypes from 'prop-types';

class SingleBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  handleClick = () => {
    this.setState({ selected: !this.state.selected });
    if (this.state.selected) {
      this.props.showComments();
    }
  };

  render() {
    return (
      <div className="single-book">
        <Card className="single-book-card">
          <CardText>
            <h3>{this.props.book.title}</h3>
            <p>{this.props.book.author}</p>
          </CardText>
          <CardActions>
            <Button onClick={this.handleClick}>Select Me</Button>
          </CardActions>
          {this.state.selected && <CommentArea books={this.props.book.comments} />}
        </Card>
      </div>
    );
  }
}

SingleBook.propTypes = {
  book: PropTypes.object,
  showComments: PropTypes.func.isRequired
};

export default SingleBook;
