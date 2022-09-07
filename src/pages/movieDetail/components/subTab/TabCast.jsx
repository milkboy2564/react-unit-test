import ImageCard from '../../../../components/ImageCard';
import * as S from './SubTab.styles';

const TabCast = ({ creditData, url, handleOnErrorImage }) => {
  const { cast } = creditData;
  const MAIN_CAST = cast.slice(0, 9);

  return (
    <>
      <S.Section>
        <S.SectionTitle>출연</S.SectionTitle>
        <S.SectionContent>
          <S.Cast>
            {MAIN_CAST.map(figure => (
              <S.CastCard key={figure.cast_id}>
                <ImageCard alt="figure" margin="30" src={url + figure.profile_path} width="120" />
                <S.CastInfo>
                  <S.Name>{figure.name}</S.Name>
                  <S.Character>{figure.character} 역</S.Character>
                </S.CastInfo>
              </S.CastCard>
            ))}
          </S.Cast>
        </S.SectionContent>
      </S.Section>
    </>
  );
};

export default TabCast;
