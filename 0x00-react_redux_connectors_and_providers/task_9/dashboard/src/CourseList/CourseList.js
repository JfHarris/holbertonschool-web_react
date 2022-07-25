import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import { StyleSheet } from "aphrodite";
import { css } from 'aphrodite';
import { Component } from "react";
import { connect } from "react-redux";
import { fetchCourses, selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { getListCourses } from "../selectors/courseSelector";

export class CourseList extends Component {
  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  render() {
    const { listCourses } = this.props;

    return (
      <table id="CourseList" className={css(styles.list)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody>
          {(!listCourses || listCourses.length === 0) && (
            <CourseListRow
              textFirstCell="No course available yet"
              isHeader={false}
            />
          )}
          {listCourses &&
            listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              id={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
              isChecked={course.isSelected}
              onChangeRow={this.onChangeRow}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

CourseList.defaultProps = {
  listCourses: null,
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

CourseList.propTypes = {
  listCourses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
};

const styles = StyleSheet.create({
  list: {
    border: `1px solid gray`,
    borderCollapse: "collapse",
    width: "95%",
    margin: "40px auto 0 auto",
  },
});

export const mapStateToProps = (state) => {
  const coursesList = getListCourses(state);
  return {
    listCourses: coursesList,
  };
}

const mapDispatchToProps = { fetchCourses, selectCourse, unSelectCourse };

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
