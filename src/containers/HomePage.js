import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testAction } from '../actions/actions';
import '../styles/styles.scss';

export class HomePage extends React.Component {

  reduceTest = () => {
    this.props.action('success');
  }

  render() {
    return (
      <div>
        <h1>FunOfBooks</h1>
        <button onClick={() => this.reduceTest()}>REDUX TEST</button>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

HomePage.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    text: state.testReducer.text,
  };
}

const mapDispatchToProps = {
    action: testAction,
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
