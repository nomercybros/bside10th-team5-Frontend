import React from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { boardSummaryState } from "../../state/addProjectState";
import { GRAY300, GRAY500, GRAY900 } from "../../styles/theme";
import { Box, Title } from "./AddProjectPage.style";

const TextAreaWrapper = styled.div.attrs((props) => ({
  hasValue: props.hasValue,
  isError: props.isError,
}))`
  position: relative;
  height: 72px;
  border: 1px solid ${GRAY300};
  border-radius: 4px;
  display: flex;
  padding: 12px 16px;

  & > textarea {
    flex: 1;
    box-sizing: border-box;
    padding: 0;
    resize: none;
    border: none;
    outline: none;
    color: ${GRAY900};

    &::placeholder {
      color: ${GRAY500};
    }
  }

  &:hover {
    border: 1px solid ${GRAY500};
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      border: 1px solid ${GRAY900};
      &:hover {
        border: 1px solid ${GRAY900};
      }
    `};

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid rgba(255, 90, 0, 0.7);
      &:hover {
        border: 1px solid rgba(255, 90, 0, 0.7);
      }
    `};
`;

const Description = styled.p`
  margin: 0;
  position: absolute;
  bottom: -24px;
  left: 0;
  color: rgba(255, 90, 0, 0.7);
`;

const ProjectSummary = () => {
  const [summaryText, setSummaryText] = useRecoilState(boardSummaryState);
  const isError = summaryText.length > 99;

  const onChange = (e) => {
    setSummaryText(e.target.value);
  };

  return (
    <Box>
      <Title className="headline-6">프로젝트 한 줄 소개</Title>
      <TextAreaWrapper hasValue={summaryText.length > 0} isError={isError}>
        <textarea
          className="body-2"
          placeholder="서비스 기획자를 대상으로한 회고록 서비스 입니다.&#13;&#10;ex) 쉬운 회고록 템플릿 제시하여 회고 습관 형성"
          value={summaryText}
          onChange={onChange}
        />
        {isError && <Description className="body-2">100자 이상은 입력할 수 없어요</Description>}
      </TextAreaWrapper>
    </Box>
  );
};

export default ProjectSummary;
