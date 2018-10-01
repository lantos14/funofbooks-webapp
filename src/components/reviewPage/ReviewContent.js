import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../../styles/styles.scss';
import { SideBar } from '../home/SideBar';
import { ReviewTab } from './ReviewTab';
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
    return (
      <div className="review content">
        <div className="content columns is-link">
          <SideBar></SideBar>
          <div className="column review">
            <div className="card">
              <ReviewTab handleChange={this.handleChange}></ReviewTab>
              <ReviewText article={this.props.article[0]}></ReviewText>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.unspoileredText.storyData,
  };
}

export default connect(
  mapStateToProps,
)(withRouter(ReviewContent));
