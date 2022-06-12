import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecoilState } from "recoil";
import { projectStartDateState, projectEndDateState } from "../../state/addProjectState";
import ToggleCheckbox from "../articles/ToggleCheckbox";
import CustomInput from "./CustomInput";
import { Box, Title } from "./AddProjectPage.style";

const ProjectDate = () => {
  const [isOngingChecked, setIsOngingChecked] = useState(false);

  const [startDate, setStartDate] = useRecoilState(projectStartDateState);
  const [endDate, setEndDate] = useRecoilState(projectEndDateState);

  const handleCheckBox = (e) => {
    if (e.target.id === "ongoing") setIsOngingChecked((prev) => !prev);
  };

  return (
    <Box>
      <Title className="ko-headline-6">
        프로젝트 기간<span>*</span>
      </Title>
      <div style={{ display: "flex" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<CustomInput />}
          dateFormat="yyyy-MM-dd"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          customInput={<CustomInput />}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <ToggleCheckbox id="ongoing" isChecked={isOngingChecked} width="124px" onChange={handleCheckBox}>
        <span className="ko-button">진행중</span>
      </ToggleCheckbox>
    </Box>
  );
};

export default ProjectDate;
