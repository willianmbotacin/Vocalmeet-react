import { cloneElement } from "react";

const Wrapper = (props) => {
  const { children } = props;
  return cloneElement(children, props);
}

export default Wrapper;