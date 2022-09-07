import styled from 'styled-components';
function ImageCard({ src, alt, width, margin }) {
  const handleOnErrorImage = event => {
    event.target.src = '/errImage.png';
  };

  return (
    <ImageBox width={width} margin={margin}>
      <img src={src} alt={alt} onError={handleOnErrorImage} />
    </ImageBox>
  );
}

export default ImageCard;

const ImageBox = styled.div`
  width: ${({ width }) => (width ? `${width}px` : `210px`)};
  aspect-ratio: ${({ width }) => (width === '120' ? `1/1.3` : `21/30.8`)};
  margin-right: ${({ margin }) => (margin ? `${margin}px` : `30px`)};
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
