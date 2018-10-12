import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import '../../styles/styles.scss';
import { SideBar } from '../home/SideBar';
import { ReviewText } from './ReviewText';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class ReviewContent extends Component {
  state = {
    activeTab: 1,
  }

  handleChange = (event) => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('is-active'));
    event.currentTarget.classList.add('is-active');
  }

  render() {
    const { article } = this.props;
    return (
      <div className="review content">
        <SideBar></SideBar>
        <div className="content columns is-link">
          <div className="column review">
            <div className="card">
              {/* <ReviewTab handleChange={this.handleChange}></ReviewTab> */}
              <ReviewText article={article}></ReviewText>
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
