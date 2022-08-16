import styled from '@emotion/styled';

const Label = styled.label`
  color: #ffffff;
`;
const useSelectMonedas = (label, opciones) => {
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select name='' id=''>
        <option value=''>--Selecciona</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );

  //Los CustomHooks retornan ya sea un objeto o un arreglo, no pueden retornar nada más
  return [SelectMonedas];
};

export default useSelectMonedas;
