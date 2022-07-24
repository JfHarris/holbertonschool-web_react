import React from "react";
import PropTypes from "prop-types";
import { css } from 'aphrodite';
import { StyleSheet } from "aphrodite";
import { useState } from 'react';

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell,
  isChecked, onChangeRow
}) {
  const configCheckbox = () => {
    onChangeRow(id, !isChecked);
  };
  let element;
  const tableItemStyle = css(
    isHeader ? styles.CourseListTh : styles.CourseListTd,
    isChecked && styles.rowChecked
  );
  if (isHeader === true) {
    if (textSecondCell === null) {
      element = (
        <th colSpan="2" className={css(styles.CourseListThSpan2)}>
          {textFirstCell}
        </th>
      );
    } else {
      element = (
        <>
          <th className={tableItemStyle}>{textFirstCell}</th>
          <th className={tableItemStyle}>{textSecondCell}</th>
        </>
      );
    }
  } else if (isHeader === false) {
    element = (
      <>
        <td className={tableItemStyle}>
          {textFirstCell !== "No courses available yet" && (
          <input type="checkbox" onClick={configCheckbox}></input>
          )}
          {textFirstCell}
        </td>
        <td className={tableItemStyle}>{textSecondCell}</td>
      </>
    );
  }
  let isHeaderStyle;
  if (isHeader) isHeaderStyle = headerRowStyles;
  else isHeaderStyle = rowStyles;
  return <tr style={isHeaderStyle}>{element}</tr>;
}

CourseListRow.defaultProps = {
  id: null,
  isHeader: false,
  textSecondCell: null,
  isChecked: false,
  onChangeRow: () => {},
};

CourseListRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func,
};

const styles = StyleSheet.create({
  CourseListTh: {
    borderTop: `1px solid gray`,
    borderBottom: `1px solid gray`,
    textAlign: "left",
    fontSize: "18px",
  },

  CourseListThSpan2: {
    textAlign: "center",
  },

  CourseListTd: {
    textAlign: "left",
  },

  rowChecked: {
    backgroundColor: "#e6e4e4"
  },
});

export default CourseListRow;
