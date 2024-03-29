// @ts-nocheck
import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecoilState } from "recoil";
import { projectStartDateState, projectEndDateState, isOngoingState } from "../../state/addProjectState";
import ToggleCheckbox from "../articles/ToggleCheckbox";
import CustomInput from "./CustomInput";
import { Box, Title } from "./AddProjectPage.style";
import { Row } from "../elements/Wrapper.style";

const DatePickerWrapper = styled.div``;

const ProjectDate = () => {
  const [startDate, setStartDate] = useRecoilState(projectStartDateState);
  const [endDate, setEndDate] = useRecoilState(projectEndDateState);
  const [isOngingChecked, setIsOngingChecked] = useRecoilState(isOngoingState);

  const handleCheckBox = (e) => {
    if (e.target.id === "ongoing") setIsOngingChecked((prev) => !prev);
  };

  return (
    <Box>
      <Title className="headline-6">
        프로젝트 기간 <span>*</span>
      </Title>
      <Row>
        <DatePickerWrapper>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<CustomInput />}
            dateFormat="yyyy-MM-dd"
            maxDate={endDate}
          />
        </DatePickerWrapper>
        <span style={{ margin: "0 16px" }}>~</span>
        <DatePickerWrapper>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            customInput={<CustomInput disabled />}
            dateFormat="yyyy-MM-dd"
            disabled={isOngingChecked}
            minDate={startDate}
          />
        </DatePickerWrapper>
        <ToggleCheckbox id="ongoing" isChecked={isOngingChecked} width="124px" onChange={handleCheckBox}>
          <span className="button">진행중</span>
        </ToggleCheckbox>
      </Row>
    </Box>
  );
};

export default ProjectDate;
