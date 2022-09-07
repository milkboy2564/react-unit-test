import ImageCard from '../../../../components/ImageCard';
import * as S from './SubTab.styles';
const TabInfo = ({ movieData, url, handleOnErrorImage }) => {
  const { overview, production_companies, belongs_to_collection } = movieData;

  return (
    <>
      <S.Description>{overview}</S.Description>
      <S.Section>
        <S.SectionTitle>시리즈</S.SectionTitle>
        <S.SectionContent>
          <S.Collection>
            <S.CollectionCard>
              <ImageCard
                alt="series"
                margin="20"
                width="150"
                src={url + belongs_to_collection?.poster_path}
              />
              <S.CollectionName>
                <span>{belongs_to_collection?.name}</span>
              </S.CollectionName>
            </S.CollectionCard>
          </S.Collection>
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>제작</S.SectionTitle>
        <S.SectionContent>
          <S.Production>
            {production_companies.map(company => (
              <S.ProductionCard key={company.id}>
                <S.ProductionName>{company.name}</S.ProductionName>
                {company.logo_path && (
                  <S.ProductionLogo>
                    <img
                      src={url + company?.logo_path}
                      alt="company"
                      onError={handleOnErrorImage}
                    />
                  </S.ProductionLogo>
                )}
              </S.ProductionCard>
            ))}
          </S.Production>
        </S.SectionContent>
      </S.Section>
    </>
  );
};

export default TabInfo;
