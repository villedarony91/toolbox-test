import { configure, shallow  } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MessageForm from "./MessageForm";
import React from 'react';

configure({ adapter: new Adapter() });

describe("Test Message form", () => {
  it("should render all necessary input controls", () => {
      const wrapper = shallow(<MessageForm></MessageForm>);
      expect(wrapper.find('#submit')).toHaveLength(1);
      expect(wrapper.find('#top-label')).toHaveLength(1);
      expect(wrapper.find('#message-to-send')).toHaveLength(1);
      expect(wrapper.find('#top-label-receive')).toHaveLength(1);
      expect(wrapper.find('#message-received')).toHaveLength(1);
  });
});
