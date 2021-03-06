import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { tagState } from "../../../state/addProjectState";
import { modalListState } from "../../../state/modalState";
import CustomBtn from "../../elements/CustomBtn";
import CustomTextInput from "../../elements/CustomTextInput";
import { GRAY300, GRAY500, GRAY700, GRAY900, ORANGE, WHITE } from "../../../styles/theme";
import CloseIcon from "../../elements/CloseIcon";

export const Modal = styled.div`
  position: relative;
  width: 640px;
  background: ${WHITE};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 28px 0;
`;

const Title = styled.div`
  color: ${GRAY900};
  margin-bottom: 4px;
`;

const SubTitle = styled.div`
  color: ${GRAY500};
  margin-bottom: 24px;
`;

const CloseIconWrapper = styled.button`
  position: absolute;
  top: 29.83px;
  right: 29.83px;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 1.5rem;
`;

const AddTagModal = () => {
  const setTags = useSetRecoilState(tagState);
  const setModalList = useSetRecoilState(modalListState);
  const [tagName, setTagName] = useState("");

  const onChange = (e) => {
    setTagName(e.target.value);
  };

  const onClickAddTag = () => {
    setTags((prev) => {
      if (!prev.includes(tagName) && tagName.length > 0) {
        return prev.concat(tagName);
      }
      return prev;
    });
    setModalList([]);
  };

  const onClickCloseModal = () => {
    setModalList([]);
  };

  return (
    <Modal>
      <CloseIconWrapper onClick={onClickCloseModal}>
        <CloseIcon width={16.33} height={16.33} />
      </CloseIconWrapper>
      <Title className="headline-6">프로젝트 Tool 추가등록</Title>
      <SubTitle>프로젝트 Tool</SubTitle>
      <CustomTextInput id="tag-name" placeholder="텍스트" value={tagName} onChange={onChange} width="420px" />
      <BtnWrapper>
        <CustomBtn
          text="취소"
          onClick={onClickCloseModal}
          width="99px"
          borderRadius="5px"
          border={`1px solid ${GRAY300}`}
          color={GRAY700}
        />
        <CustomBtn text="확인" onClick={onClickAddTag} width="99px" borderRadius="5px" bgColor={ORANGE} />
      </BtnWrapper>
    </Modal>
  );
};

export default AddTagModal;
