import React, { useCallback, useState } from 'react';
import Header from '../../components/Header';
import Image from '../../components/Image';

import place_one from '../../assets/place_one.png';
import place_two from '../../assets/place_two.png';
import place_tree from '../../assets/place_tree.png';
import Modal from '../../components/Modal';

const Home: React.FC = () => {
    const [openTagsModal, setOpenTagsModal] = useState(false);

    const handleModalOpen = useCallback(() => {
        setOpenTagsModal(true);
    }, [])

    return(
        <div className='turistando-body'>
            <Header page='home' clickedTagsFilter={handleModalOpen}/>
            <div className="scroll-images-main">
                <Image
                    src={place_one}
                    name='Barra de São Miguel'
                    city='Maceió'
                    state='AL'
                />
                <Image
                    src={place_two}
                    name='Estância Mimosa'
                    city='Bonito'
                    state='MS'
                />
                <Image
                    src={place_tree}
                    name='Igreja e Convento'
                    city='Salvador'
                    state='BA'
                />
                <Image
                    src={place_one}
                    name='Barra de São Miguel'
                    city='Maceió'
                    state='AL'
                />
                <Image
                    src={place_one}
                    name='Barra de São Miguel'
                    city='Maceió'
                    state='AL'
                />
            </div>
            <Modal open={openTagsModal}/>
        </div>
    );
}

export default Home;