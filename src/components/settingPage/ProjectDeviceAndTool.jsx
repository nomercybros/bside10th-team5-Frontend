import React from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { tagState, checkedWebState, checkedAppState } from "../../state/addProjectState";
import { modalListState } from "../../state/modalState";
import Checkbox from "../articles/Checkbox";
import Tag from "../articles/Tag";
import { SubTitle, Box, Title, AddTagButton } from "./AddProjectPage.style";
import { Row } from "../elements/Wrapper.style";

const ProjectDeviceAndTool = () => {
  const [isWebChecked, setWebChecked] = useRecoilState(checkedWebState);
  const [isMobileChecked, setMobileChecked] = useRecoilState(checkedAppState);
  const tags = useRecoilValue(tagState);
  const setModalList = useSetRecoilState(modalListState);

  const openTagModal = () => {
    setModalList((prev) => prev.concat({ id: "add-tag-modal" }));
  };

  const handleCheckBox = (e) => {
    if (e.target.id === "mobile") setMobileChecked((prev) => !prev);
    if (e.target.id === "web") setWebChecked((prev) => !prev);
  };

  return (
    <Box marginBottom="3rem">
      <Title className="headline-6" marginBottom="1.75rem">
        프로젝트 기본 정보<span className="caption">한번 등록하면 회고록 작성을 쉽게할 수 있어요</span>
      </Title>
      <Row marginBottom="1.25rem">
        <SubTitle className="subtitle-1">디바이스 유형</SubTitle>
        <Checkbox id="web" isChecked={isWebChecked} marginRight="0.75rem" onChange={handleCheckBox} name="웹(Web)" />
        <Checkbox id="mobile" isChecked={isMobileChecked} onChange={handleCheckBox} name="앱(App)" />
      </Row>
      <Row marginBottom="0" alignItems="flex-start">
        <SubTitle className="subtitle-1">프로젝트 Tool (언어)</SubTitle>
        <div style={{ flexWrap: "wrap", display: "flex", flex: 1, gap: "4px" }}>
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
          <AddTagButton className="body-2" type="button" onClick={openTagModal}>
            + 태그추가
          </AddTagButton>
        </div>
      </Row>
    </Box>
  );
};

export default ProjectDeviceAndTool;
