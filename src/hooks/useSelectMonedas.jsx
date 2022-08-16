import styled from '@emotion/styled';

const Label = styled.label`
  color: #ffffff;
`;
const useSelectMonedas = (label) => {
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
    </>
  );

  //Los CustomHooks retornan ya sea un objeto o un arreglo, no pueden retornar nada más
  return [SelectMonedas];
};

export default useSelectMonedas;
