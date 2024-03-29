import styled from "styled-components";
import { GNB_H, GRAY900 } from "../../styles/theme";

export const Section = styled.section`
  width: 1200px;
  padding: 52px 0 100px 0;
  margin: ${GNB_H}px auto 0 auto;
`;

export const Title = styled.div.attrs((props) => ({
  marginBottom: props.marginBottom || "0.25rem",
}))`
  color: ${GRAY900};
  margin-bottom: ${(props) => props.marginBottom};

  & span {
    color: ${({ theme }) => theme.color.orange};
  }

  & .caption {
    color: ${({ theme }) => theme.color.gray700};
    position: relative;
    left: 20px;
    bottom: 2px;
  }
`;

export const Box = styled.div.attrs((props) => ({
  marginBottom: props.marginBottom || "2.25rem",
}))`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const SubTitle = styled.div`
  width: 246px;
  height: 50px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray500};
`;

export const AddTagButton = styled.button`
  margin-left: 1rem;
  height: 50px;
  color: ${({ theme }) => theme.color.gray500};
`;
