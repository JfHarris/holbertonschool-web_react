import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { css } from 'aphrodite';
import { StyleSheet } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.BodySectionWithMarginBottom)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create ({
  BodySectionWithMarginBottom: {
    marginBottom: '40px',
    width: '100%',
  }
})

export default BodySectionWithMarginBottom;
