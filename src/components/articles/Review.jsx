import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GRAY300, GRAY500 } from "../../styles/theme";

const ReviewWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  min-height: 92px;
  border: 1px solid black;
  flex-direction: column;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${GRAY300};

  & > div {
    margin-bottom: 12px;
  }

  & textarea {
    resize: none;
    height: auto;
    overflow: visible;
    width: 100%;
    padding: 0;
    min-height: 24px;
    outline: none;
    border: none;
    color: ${GRAY500};
  }
`;
const Review = ({ title, text, placeholder }) => {
  const textRef = useRef(null);
  const [value, setValue] = useState(text);
  const handleKeyDown = (e) => {
    const target = e.target;
    textRef.current.style.height = "24px";
    textRef.current.style.height = `${target.scrollHeight}px`;
  };

  return (
    <ReviewWrapper>
      <div className="subtitle-2">{title}</div>
      <textarea
        ref={textRef}
        rows={1}
        onKeyDown={handleKeyDown}
        className="body-2"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </ReviewWrapper>
  );
};

export default Review;

Review.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
};