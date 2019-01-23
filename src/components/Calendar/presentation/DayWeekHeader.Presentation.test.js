import React from "react"; // eslint-disable-line no-unused-vars
import { shallow } from "enzyme";
import DayWeekHeaderPresentation from "./DayWeekHeader.Presentation"; // eslint-disable-line no-unused-varsp

function setup(selectedDate, currentView) {
  const props = {
    selectedDate: selectedDate,
    currentView: currentView,
    modifyDate: jest.fn()
  };
  const enzymeWrapper = shallow(<DayWeekHeaderPresentation {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("DayWeekHeaderPresentation", () => {
  it("should render self and sub components", () => {
    const requestObj = [
      {
        selectedDate: new Date(),
        currentView: "DAY"
      }
    ];

    const { enzymeWrapper } = setup(requestObj, false);
    // expect(enzymeWrapper.find(".blockquote-footer").text()).toBe("1");
  });
});
