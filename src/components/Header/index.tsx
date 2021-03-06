import React, { useState } from 'react';
import Row from '../Row';
import logoImg from '../../assets/logo.svg';

import { Container, Logo } from './styles';
import Button from '../Button';
import SearchBar from '../SearchBar';

interface IHeaderProps {
    page: 'home' | 'register';
    clickedTagsFilter: () => void;
}

const Header: React.FC<IHeaderProps> = ({ page, clickedTagsFilter }) => {
    const [city, setCity] = useState<string>('');

    return(
        <Container
            page={page}
        >
            <Row align='space-between'>
                <Logo src={logoImg} alt='Logo Turistando'/>
                <Button text='CADASTRAR PONTO TURÍSTICO'/>
            </Row>

            { (page === 'home') && (
                <SearchBar
                    undefinedCity={() => {}}
                    handleCity={(e: any) => setCity(e.target.value)}
                    city={city}
                    clickedTagsFilter={clickedTagsFilter}
                />
            ) }
        </Container>
    );
}

export default Header;