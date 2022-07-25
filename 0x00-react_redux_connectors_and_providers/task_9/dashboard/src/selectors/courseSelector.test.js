import { getListCourses } from "./courseSelector";
import { Map } from "immutable";
import { fromJS } from "immutable";

describe("selector is working correctly", function() {
  it("verify that selector is working correctly", function() {
    const selector = {
      courses: fromJS([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
      ])
    };
    const expectedReturn = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40,
    },
  ];
  const selected = getListCourses(state);
  expect(selected.toJS()).toEqual(expectedReturn);
  })
});
