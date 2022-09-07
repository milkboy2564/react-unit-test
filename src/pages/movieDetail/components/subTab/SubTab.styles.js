import styled from 'styled-components';

export const TabContent = styled.div``;

export const Description = styled.div`
  padding-top: 30px;
  line-height: 26px;
  font-size: 16px;
  width: 800px;
  word-break: keep-all;
`;

export const Section = styled.section``;
export const SectionTitle = styled.h5`
  padding: 50px 0 17px;
  border-bottom: 1px solid ${({ theme }) => theme.GRAY_4};
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
`;

export const SectionContent = styled.div``;

export const Production = styled.div`
  display: grid;
`;

export const ProductionCard = styled.div`
  margin-bottom: 30px;
`;

export const ProductionName = styled.div`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.BLUE};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ProductionLogo = styled.div`
  height: 40px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Video = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 20px;
`;

export const MediaImage = styled.div`
  border-radius: 8px;
  max-width: 400px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Cast = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px 25px;
`;

export const CastCard = styled.div`
  display: flex;
`;

export const CastImage = styled.div`
  max-width: 120px;
  width: 100%;
  aspect-ratio: 1/1.3;
  margin-right: 30px;
  border: 1px solid ${({ theme }) => theme.GRAY_3};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CastInfo = styled.div`
  padding-top: 6px;
`;

export const Name = styled.strong`
  color: ${({ theme }) => theme.BLUE};
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Character = styled.span`
  display: block;
  margin-top: 9px;
  font-size: 15px;
  line-height: 21px;
  color: ${({ theme }) => theme.GRAY_1};
`;

export const Collection = styled.div``;

export const CollectionCard = styled.div`
  display: flex;
`;

export const CollectionImage = styled.div`
  max-width: 150px;
  width: 100%;
  aspect-ratio: 1/1.3;
  margin-right: 30px;
  border: 1px solid ${({ theme }) => theme.GRAY_3};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CollectionName = styled.div`
  padding-top: 6px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  span:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
