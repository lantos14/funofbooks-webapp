import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import '../../styles/styles.scss';
import { ReviewText } from './ReviewText';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../store/configureStore';

export class ReviewContent extends Component {
  state = {
    activeTab: 1,
  }

  handleChange = (event) => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('is-active'));
    event.currentTarget.classList.add('is-active');
  }

  backToHome = () => {
    history.push('/');
    document.querySelector('.side').scrollIntoView();
  }

  render() {
    const { article } = this.props;
    return (
      <div className="review content">
        <div className="content columns is-link">
          <div className="column review">
            <div className="card">
              <ReviewText article={article}></ReviewText>
              <button className='back-to-home-btn' onClick={this.backToHome}>Vissza a főoldalra</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReviewContent.propTypes = {
  article: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    article: state.unspoileredText.storyData,
  };
}

export default connect(
  mapStateToProps,
)(withRouter(ReviewContent));
