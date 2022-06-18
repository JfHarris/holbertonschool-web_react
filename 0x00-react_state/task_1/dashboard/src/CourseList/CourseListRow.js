import React from "react";
import PropTypes from "prop-types";
import { css } from "aphrodite";
import { StyleSheet } from "aphrodite";

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let element;
  const tableItemStyle = css(
    isHeader ? styles.CourseListTh : styles.CourseListTd
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
        <td className={tableItemStyle}>{textFirstCell}</td>
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
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
});

export default CourseListRow;
