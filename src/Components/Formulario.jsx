import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
  // const [SelectCriptoMonedas] = useSelectMonedas('Elige tu Criptomoneda');

  return (
    <form action=''>
      <SelectMonedas></SelectMonedas>

      {/* <SelectCriptoMonedas></SelectCriptoMonedas> */}
      <InputSubmit type='submit' value='Cotizar' />
    </form>
  );
};

export default Formulario;