import React, { useCallback, useState } from 'react';
import CityValues from '../../contents/city';

import { FiMapPin } from 'react-icons/fi';

import { Container, Main } from './styles';
import Row from '../Row';

interface ISearchBarProps {
    undefinedCity: () => void;
    handleCity: (e: any) => void;
    city: string;
    clickedTagsFilter: () => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ undefinedCity, city, handleCity, clickedTagsFilter }) => {
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
            <div className="search-tags">
                <Row>
                    <span>Nossos pontos turísticos:</span>
                    <button className='link-button' onClick={clickedTagsFilter}>Filtrar por tags</button>
                </Row>
            </div>
        </Main>
    );
}

export default SearchBar;