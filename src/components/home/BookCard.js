import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import { history } from '../../store/configureStore';

export class BookCard extends Component {

  handleOnClick = (e) => {
    this.props.updateReviewedBook(e.currentTarget.id);
    history.push('/review');
  }

  render() {
    const { bookIndex, imgSrc, title, content, createdAt } = this.props;

    return (
      <div id={bookIndex} className='card' onClick={this.handleOnClick} >
        <div className='card-image'>
            <figure className='image'>
              <img src={imgSrc}></img>
            </figure>
        </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-content'>
                <p className='title is-1'>{title}</p>
              </div>
            </div>
            <div className='content'>
              <p>{content}</p>
              <p className='click-info'>Kattints a részletekért...</p>
            </div>
            <div className='card-date'>
              <p><em>Feltöltve: {createdAt}</em></p>
            </div>
          </div>
        </div>
        );
      }
    }
    
BookCard.propTypes = {
          updateReviewedBook: PropTypes.func.isRequired,
        bookIndex: PropTypes.number.isRequired,
        imgSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
      };
