import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.BodySection)}>
        <h2 className={css(styles.BodySectionH2)}>{title}</h2>
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

const styles = StyleSheet.create({
  bodySection: {
    width: '100%',
    flexWrap: 'flex',
    display: 'wrap',
  },
  BodySectionH2: {
    width: '100%',
  },
});

export default BodySection;
