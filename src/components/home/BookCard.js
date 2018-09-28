import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import { history } from '../../store/configureStore';

export class BookCard extends Component {

  handleOnClick = () => {
    history.push('/review');
  }

  render() {
    return (
      <div className="column is-one-third card" onClick={this.handleOnClick}>
        <div className="card-image">
          <div className="book-image image is-4by3">
            <img src={this.props.imgSrc} alt="test"></img>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.title}</p>
            </div>
          </div>
          <div className="content">
            {this.props.content}
    </div>
        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
