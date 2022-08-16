import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
import { useEffect, useState } from 'react';
import Error from './Error';

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

const Formulario = ({ setMonedas }) => {
  //Variables de estado
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  //Variables para el uso del Hook personalizado
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
  const [cryptoMoneda, SelectCryptoMonedas] = useSelectMonedas('Elige tu Criptomoneda', cryptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCryptos = resultado.Data.map((crypto) => {
        const objeto = {
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCryptos(arrayCryptos);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, cryptoMoneda].includes('')) {
      setError(true);
      return;
    }

    setError(false);
    setMonedas({
      moneda,
      cryptoMoneda,
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas></SelectMonedas>
        <SelectCryptoMonedas></SelectCryptoMonedas>

        <InputSubmit type='submit' value='Cotizar' />
      </form>
    </>
  );
};

export default Formulario;
