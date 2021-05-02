import React, { useCallback, useState } from 'react';
import CityValues from '../../contents/city';

import { FiMapPin } from 'react-icons/fi';

import { Container, Main } from './styles';

interface ISearchBarProps {
    undefinedCity: () => void;
    handleCity: (e: any) => void;
    city: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ undefinedCity, city, handleCity }) => {
    const [state, setState]  = useState<string>();

    const handleUF = useCallback((value) => {
        setState(value);
    }, [])

    return(
        <Main>
            <div className="text-turistando">
                <h1>Encontre o melhor ponto turístico com a Turistando</h1>
            </div>
            <Container>
                <div className='div_state'>
                    <FiMapPin/>
                    <select className='select-button'onChange = {(e) => {
                        if(e.target.value === 'Qual o estado?') {
                            undefinedCity()  
                            handleUF(e.target.value) 
                        } else {
                            handleUF(e.target.value)
                        }
                    }} value = {state}>
                        <option key='init' value='Qual o estado?'>Qual o estado?</option>
                        {CityValues.estados.map((uf, index) => (
                            <option key={index.toString()} value={uf.sigla}>{uf.nome}</option>
                        ))}
                    </select>
                </div>
                <div className='div_city'>
                    <FiMapPin/>
                    <select  className='select-button' onChange={handleCity} value={city}>
                        <option key='init'>Qual a cidade?</option>
                        {CityValues.estados.find((city) => city.sigla === state)?.cidades.map((cities, index) => (
                            <option key={index.toString()}  value={cities}>{cities} </option>
                        ))}
                    </select>
                </div>
                <div className='div_search'>
                    <button>BUSCAR</button>
                </div>
            </Container>
        </Main>
    );
}

export default SearchBar;