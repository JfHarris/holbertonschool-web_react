import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "aphrodite";
import { css } from 'aphrodite';

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.bodySection)}>
        <h2 className={css(styles.bodySectionH2)}>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: '',
};

BodySection.propTypes = {
  title: PropTypes.string,
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  bodySection: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    [screenSize.small]: {
      boxSizing: "border-box",
      paddingRight: "50px",
      paddingLeft: "50px",
      paddingBottom: "20px",
    },
  },
  bodySectionH2: {
    width: "100%",
  },
});

export default BodySection;
