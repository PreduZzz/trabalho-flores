// Atualiza o ano no rodapé automaticamente
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Dados de restaurantes, hotéis e informações de viagem organizados por destino
const restaurantData = {
    bombinhas: {
        title: 'Bombinhas',
        restaurants: [
            {
                name: 'Maré Alta Bistrô',
                phone: '(47) 3030-4040',
                address: 'Av. Brasil, 256 - Centro',
                menu: 'Peixes e frutos do mar grelhados, risotos de camarão e entradas de ceviche.',
                location: 'A 150m da Praia de Bombinhas, próximo ao píer principal.',
                avgPrice: 'R$ 120 por pessoa'
            },
            {
                name: 'Terra das Ostras',
                phone: '(47) 3055-1313',
                address: 'Rua Arpoador, 710',
                menu: 'Especialidade em ostras, sashimi de peixe fresco e pratos com frutos do mar.',
                location: 'No bairro de Mariscal, ideal para jantar após o pôr do sol.',
                avgPrice: 'R$ 140 por pessoa'
            },
            {
                name: 'Sabor do Mar',
                phone: '(47) 3333-2020',
                address: 'R. das Gaivotas, 88',
                menu: 'Massas artesanais com frutos do mar, moquecas e pratos contemporâneos.',
                location: 'Próximo à Avenida dos Santos, fácil acesso a partir da praia.',
                avgPrice: 'R$ 110 por pessoa'
            }
        ],
        hotels: [
            {
                name: 'Hotel Brisa do Mar',
                avgPrice: 'R$ 450 por noite',
                phone: '(47) 3200-9090',
                address: 'Av. das Tartarugas, 210',
                location: 'A 3 minutos a pé da Praia de Bombinhas, com vista para a costa.'
            },
            {
                name: 'Pousada Costa Azul',
                avgPrice: 'R$ 380 por noite',
                phone: '(47) 3200-9111',
                address: 'Rua do Farol, 45',
                location: 'Próxima à região de lojas e restaurantes, ideal para quem quer caminhar.'
            }
        ]
    },
    porto_alegre: {
        title: 'Porto Alegre',
        restaurants: [
            {
                name: 'Casa da Praça',
                phone: '(51) 3222-5566',
                address: 'Praça da Matriz, 120',
                menu: 'Steaks de corte nobre, pratos gaúchos e carta de vinhos premium.',
                location: 'No centro histórico, ao lado da Catedral Metropolitana.',
                avgPrice: 'R$ 130 por pessoa'
            },
            {
                name: 'Aroma de Sul',
                phone: '(51) 3344-7788',
                address: 'R. Padre Chagas, 1450',
                menu: 'Cozinha contemporânea com toques regionais e degustação de petiscos.',
                location: 'Na charmosa Rua Padre Chagas, bairro Moinhos de Vento.',
                avgPrice: 'R$ 95 por pessoa'
            },
            {
                name: 'Bistrô do Guaíba',
                phone: '(51) 3333-1010',
                address: 'Av. Beira Rio, 1580',
                menu: 'Pratos inspirados na orla, com frutos do rio e opções vegetarianas.',
                location: 'Frente para o Guaíba, perfeito para jantar com vista da ponte.',
                avgPrice: 'R$ 110 por pessoa'
            }
        ],
        hotels: [
            {
                name: 'Hotel Plaza São Rafael',
                avgPrice: 'R$ 520 por noite',
                phone: '(51) 3019-4000',
                address: 'Av. Júlio de Castilhos, 300',
                location: 'Próximo ao centro e ao Parque Farroupilha, com estrutura de alto padrão.'
            },
            {
                name: 'Brew Hostel & Suites',
                avgPrice: 'R$ 280 por noite',
                phone: '(51) 3028-8888',
                address: 'R. Joaquim Nabuco, 123',
                location: 'No bairro Cidade Baixa, perto de bares e restaurantes locais.'
            }
        ]
    },
    gramado: {
        title: 'Gramado',
        restaurants: [
            {
                name: 'Fogão Gaúcho',
                phone: '(54) 3286-4545',
                address: 'Av. Borges de Medeiros, 3075',
                menu: 'Churrasco nobre, massas caseiras e fondues tradicionais.',
                location: 'No centro turístico, a poucas quadras da Rua Coberta.',
                avgPrice: 'R$ 120 por pessoa'
            },
            {
                name: 'La Petite Brasserie',
                phone: '(54) 3295-2121',
                address: 'Rua Coberta, 421',
                menu: 'Cozinha europeia com pratos à base de queijos especiais e trufas.',
                location: 'Dentro da Rua Coberta, ideal para uma refeição após passeios.',
                avgPrice: 'R$ 140 por pessoa'
            },
            {
                name: 'Chocolatier Grill',
                phone: '(54) 3295-3344',
                address: 'Av. das Hortênsias, 2456',
                menu: 'Fondue doce e salgado, grelhados premium e sobremesas com chocolate artesanal.',
                location: 'Próximo ao Lago Negro, em um ambiente acolhedor e elegante.',
                avgPrice: 'R$ 135 por pessoa'
            }
        ],
        hotels: [
            {
                name: 'Hotel Serra Azul',
                avgPrice: 'R$ 600 por noite',
                phone: '(54) 3286-1234',
                address: 'Av. das Hortênsias, 6335',
                location: 'Com acesso fácil à Rua Coberta e ao centro da cidade.'
            },
            {
                name: 'Pousada Alpes',
                avgPrice: 'R$ 420 por noite',
                phone: '(54) 3295-5555',
                address: 'R. do Bosque, 123',
                location: 'Localizada em área tranquila, a 10 minutos do centro turístico.'
            }
        ]
    },
    balneario_camboriu: {
        title: 'Balneario Camboriu',
        restaurants: [
            {
                name: 'Marina Prime',
                phone: '(47) 3322-5050',
                address: 'Av. Atlântica, 2400',
                menu: 'Peixes frescos, sushi especial e pratos de cozinha internacional.',
                location: 'Frente à praia central, com vista para o mar.',
                avgPrice: 'R$ 150 por pessoa'
            },
            {
                name: 'Alto do Parque',
                phone: '(47) 3388-8877',
                address: 'R. 1500, 820',
                menu: 'Grelhados sofisticados, saladas criativas e coquetéis especiais.',
                location: 'No bairro da Barra Sul, próximo ao parque Unipraias.',
                avgPrice: 'R$ 120 por pessoa'
            },
            {
                name: 'Bistrô do Farol',
                phone: '(47) 3344-7780',
                address: 'Av. Normando Tedesco, 500',
                menu: 'Tapas, pratos mediterrâneos e peixes ao molho leve.',
                location: 'Próximo ao Molhe da Barra Sul, ideal para um jantar tranquilo.',
                avgPrice: 'R$ 110 por pessoa'
            }
        ],
        hotels: [
            {
                name: 'Grand Plaza Resort',
                avgPrice: 'R$ 680 por noite',
                phone: '(47) 3344-3000',
                address: 'Av. Atlântica, 2929',
                location: 'Na praia central, com piscina e acesso direto ao calçadão.'
            },
            {
                name: 'Stay Camboriú',
                avgPrice: 'R$ 420 por noite',
                phone: '(47) 3343-2200',
                address: 'R. 1500, 1130',
                location: 'A poucos minutos da praia e da Avenida Brasil, típico e confortável.'
            }
        ]
    },
    paranagua: {
        title: 'Paranagua',
        restaurants: [
            {
                name: 'Cais do Sabor',
                phone: '(41) 3455-2200',
                address: 'Av. Coronel Ernesto Alves, 210',
                menu: 'Frutos do mar tradicionais, moquecas e caldeiradas frescas.',
                location: 'Próximo ao Mercado Municipal, ideal para quem visita o centro histórico.',
                avgPrice: 'R$ 95 por pessoa'
            },
            {
                name: 'Ilha Mar',
                phone: '(41) 3422-1844',
                address: 'R. da Praia, 82',
                menu: 'Peixes grelhados, camarões e receitas com ingredientes locais.',
                location: 'Perto da beira-mar, com vista para o Porto de Paranaguá.',
                avgPrice: 'R$ 105 por pessoa'
            },
            {
                name: 'Casa do Pescador',
                phone: '(41) 3444-1122',
                address: 'Av. Beira Mar, 112',
                menu: 'Pratos simples e saborosos com peixe fresco e acompanhamentos regionais.',
                location: 'A poucos passos do cais, perfeito para um almoço informal.',
                avgPrice: 'R$ 85 por pessoa'
            }
        ],
        hotels: [
            {
                name: 'Hotel Porto Mar',
                avgPrice: 'R$ 330 por noite',
                phone: '(41) 3455-9000',
                address: 'Av. Atlântica, 645',
                location: 'Beira-mar com fácil acesso ao centro histórico e ao porto.'
            },
            {
                name: 'Pousada das Conchas',
                avgPrice: 'R$ 260 por noite',
                phone: '(41) 3456-1234',
                address: 'R. dos Navegantes, 410',
                location: 'Simples, confortável e perto das principais atrações do centro.'
            }
        ]
    },
    curitiba: {
        title: 'Curitiba',
        restaurants: [
            {
                name: 'Verde e Terra',
                phone: '(41) 3333-6000',
                address: 'R. Conselheiro Laurindo, 660',
                menu: 'Cozinha contemporânea com foco em ingredientes locais e menus degustação.',
                location: 'No Batel, próximo a cafés e galerias modernas.',
                avgPrice: 'R$ 160 por pessoa'
            },
            {
                name: 'Pátio da Memória',
                phone: '(41) 3018-4040',
                address: 'R. Doutor Faivre, 434',
                menu: 'Pratos brasileiros com toques refinados e opções vegetarianas.',
                location: 'No centro, a passos do Museu Oscar Niemeyer.',
                avgPrice: 'R$ 120 por pessoa'
            },
            {
                name: 'Bistrô da Praça',
                phone: '(41) 3221-3030',
                address: 'Praça do Japão, 180',
                menu: 'Massas artesanais, grelhados e sobremesas clássicas.',
                location: 'Ao lado da Praça do Japão, ideal para jantar após passeio no parque.',
                avgPrice: 'R$ 110 por pessoa'
            }
        ],
        hotels: [
            {
                name: 'Hotel Casa da Montanha',
                avgPrice: 'R$ 520 por noite',
                phone: '(41) 3023-7070',
                address: 'R. Brigadeiro Franco, 1500',
                location: 'Na região do Batel, perto de shoppings e restaurantes sofisticados.'
            },
            {
                name: 'Ibis Budget Curitiba Centro',
                avgPrice: 'R$ 220 por noite',
                phone: '(41) 3025-2000',
                address: 'Av. Sete de Setembro, 3030',
                location: 'Prático, econômico e no centro da cidade, bom para quem quer explorar.'
            }
        ]
    },
    florianopolis: {
        title: 'Florianópolis',
        restaurants: [
            {
                name: 'Ostradamus',
                phone: '(48) 3232-6113',
                address: 'Rua Bocaiúva, 1668 - Centro',
                menu: 'Ostras frescas, frutos do mar e pratos típicos da ilha.',
                location: 'No centro histórico, próximo ao Mercado Público.',
                avgPrice: 'R$ 110 por pessoa'
            },
            {
                name: 'Coco Bambu',
                phone: '(48) 3232-0100',
                address: 'Av. Beira-Mar Norte, 20',
                menu: 'Culinária brasileira com ênfase em frutos do mar e carnes.',
                location: 'Frente ao mar, com vista para a baía Norte.',
                avgPrice: 'R$ 140 por pessoa'
            },
            {
                name: 'Bistrô Atelier La Varenne',
                phone: '(48) 3232-0345',
                address: 'Rua Conselheiro Mafra, 935',
                menu: 'Cozinha francesa contemporânea com ingredientes locais.',
                location: 'No bairro do Ribeirão da Ilha, ambiente sofisticado.',
                avgPrice: 'R$ 160 por pessoa'
            }
        ],
        hotels: [
            {
                name: 'Hotel Majestic Palace',
                avgPrice: 'R$ 550 por noite',
                phone: '(48) 3222-3000',
                address: 'Av. Jorn. Rubens de Arruda Ramos, 2746',
                location: 'Próximo ao aeroporto, com comodidades modernas.'
            },
            {
                name: 'Hotel Quinta das Videiras',
                avgPrice: 'R$ 420 por noite',
                phone: '(48) 3232-5000',
                address: 'Rua das Videiras, 120',
                location: 'Em área residencial, tranquilo e próximo às praias.'
            }
        ]
    },
    foz_do_iguacu: {
        title: 'Foz do Iguaçu',
        restaurants: [
            {
                name: 'Restaurante Madalozo',
                phone: '(45) 3521-2000',
                address: 'Av. das Cataratas, Km 2,5',
                menu: 'Culinária internacional com vista para as cataratas.',
                location: 'Dentro do Parque Nacional do Iguaçu.',
                avgPrice: 'R$ 120 por pessoa'
            },
            {
                name: 'Churrascaria Rafain',
                phone: '(45) 3521-4321',
                address: 'Av. Brasil, 84',
                menu: 'Churrasco gaúcho e pratos brasileiros.',
                location: 'No centro da cidade, próximo ao aeroporto.',
                avgPrice: 'R$ 100 por pessoa'
            },
            {
                name: 'Bistrô Feltre',
                phone: '(45) 3521-5678',
                address: 'Rua Marechal Deodoro, 1223',
                menu: 'Cozinha italiana com toques regionais.',
                location: 'Em área turística, com opções para grupos.',
                avgPrice: 'R$ 95 por pessoa'
            }
        ],
        hotels: [
            {
                name: 'Hotel das Cataratas',
                avgPrice: 'R$ 800 por noite',
                phone: '(45) 2102-7000',
                address: 'Rodovia das Cataratas, Km 6',
                location: 'Dentro do parque, com vista para as cataratas.'
            },
            {
                name: 'Bourbon Cataratas Convention Resort',
                avgPrice: 'R$ 650 por noite',
                phone: '(45) 3521-2000',
                address: 'Av. das Cataratas, Km 2,4',
                location: 'Próximo ao parque, com infraestrutura completa.'
            }
        ]
    },
    bento_goncalves: {
        title: 'Bento Gonçalves',
        restaurants: [
            {
                name: 'Churrascaria Galpão Crioulo',
                phone: '(54) 3455-2000',
                address: 'RS-470, Km 220',
                menu: 'Churrasco tradicional gaúcho e pratos regionais.',
                location: 'Em área rural, com ambiente típico.',
                avgPrice: 'R$ 130 por pessoa'
            },
            {
                name: 'Vinícola Miolo',
                phone: '(54) 2102-1500',
                address: 'Estrada RS-444, Km 21',
                menu: 'Degustação de vinhos e pratos harmonizados.',
                location: 'Dentro da vinícola, com tours incluídos.',
                avgPrice: 'R$ 150 por pessoa'
            },
            {
                name: 'Restaurante Valle Rustico',
                phone: '(54) 3455-3000',
                address: 'Rua 13 de Maio, 95',
                menu: 'Cozinha italiana com influência gaúcha.',
                location: 'No centro histórico, próximo às vinícolas.',
                avgPrice: 'R$ 110 por pessoa'
            }
        ],
        hotels: [
            {
                name: 'Hotel Vinocap',
                avgPrice: 'R$ 480 por noite',
                phone: '(54) 3455-4000',
                address: 'Av. Rio Branco, 200',
                location: 'Próximo ao centro, com foco em enoturismo.'
            },
            {
                name: 'Pousada Quinta do Vale',
                avgPrice: 'R$ 350 por noite',
                phone: '(54) 3455-5000',
                address: 'Estrada do Vinho, Km 15',
                location: 'Em área vinícola, com vista para os vinhedos.'
            }
        ]
    }
};

// Dados de pontos turísticos principais para cada destino
const pointsOfInterestData = {
    bombinhas: [
        { name: 'Praia de Bombinhas', description: 'A principal praia da região, com águas claras e estrutura de quiosques.' },
        { name: 'Praia da Sepultura', description: 'Ótima para snorkel e caminhadas ao redor de formações rochosas.' },
        { name: 'Mirante Eco 360', description: 'Vista panorâmica da costa e trilhas leves para toda a família.' }
    ],
    porto_alegre: [
        { name: 'Parque da Redenção', description: 'Espaço verde central com lago, feiras e museus ao redor.' },
        { name: 'Usina do Gasômetro', description: 'Espaço cultural à beira do Guaíba com eventos e vista da ponte.' },
        { name: 'Mercado Público', description: 'Mercado tradicional com comidas típicas, bares e comércio local.' }
    ],
    gramado: [
        { name: 'Rua Coberta', description: 'Passeio gastronômico coberto repleto de lojas, restaurantes e eventos.' },
        { name: 'Mini Mundo', description: 'Parque temático com miniaturas caprichadas de cidades e monumentos.' },
        { name: 'Lago Negro', description: 'Lago urbano com pedalinhos, trilhas e jardins floridos.' }
    ],
    balneario_camboriu: [
        { name: 'Parque Unipraias', description: 'Conjunto de atrações com bondinho, trilhas e observatórios sobre a mata.' },
        { name: 'Molhe da Barra Sul', description: 'Passeio náutico e mirante com vista para a praia e o mar.' },
        { name: 'Praia Central', description: 'Praia urbana mais movimentada com calçadão e bares à beira-mar.' }
    ],
    paranagua: [
        { name: 'Árvore da Memória', description: 'Monumento histórico no centro, ponto de encontro cultural.' },
        { name: 'Palácio Paranaguá', description: 'Edifício histórico com arquitetura charmosa e eventos culturais.' },
        { name: 'Ilha do Mel', description: 'Destino natural acessível por barco, com praias e trilhas preservadas.' }
    ],
    curitiba: [
        { name: 'Jardim Botânico', description: 'Símbolo de Curitiba com estufa de vidro e jardins geométricos.' },
        { name: 'Ópera de Arame', description: 'Teatro suspenso cercado por um lago e infraestrutura moderna.' },
        { name: 'Museu Oscar Niemeyer', description: 'Museu de arte moderna com edifícios arquitetônicos icônicos.' }
    ],
    florianopolis: [
        { name: 'Praia da Joaquina', description: 'Praia famosa pelas ondas perfeitas para surf e beleza natural.' },
        { name: 'Mercado Público', description: 'Mercado histórico com artesanato, comidas típicas e cultura local.' },
        { name: 'Lagoa da Conceição', description: 'Lagoa urbana com praias, trilhas e opções de lazer.' }
    ],
    foz_do_iguacu: [
        { name: 'Cataratas do Iguaçu', description: 'Uma das maiores cachoeiras do mundo, com passeios de barco e trilhas.' },
        { name: 'Parque Nacional do Iguaçu', description: 'Reserva natural com fauna e flora exuberante.' },
        { name: 'Marco das Três Fronteiras', description: 'Ponto onde se encontram Brasil, Argentina e Paraguai.' }
    ],
};

// Observador que aplica animação de fade-in quando os elementos entram na tela
const observers = document.querySelectorAll('.fade-in-section, .feature-card, .experience-card, .destination-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.18 });

observers.forEach((section) => observer.observe(section));

// Container onde o HTML de detalhes dos destinos é inserido dinamicamente
const restaurantDetails = document.getElementById('restaurantDetails');

// Função que renderiza os detalhes de restaurantes, hotéis e pontos turísticos do destino selecionado
const renderRestaurantDetails = (destinationKey) => {
    const destination = restaurantData[destinationKey];
    if (!destination || !restaurantDetails) {
        return;
    }

    restaurantDetails.innerHTML = `
        <div class="restaurant-details-card fade-in-section visible">
            <button class="close-restaurant-details" type="button">× Fechar</button>
            <div class="points-header">
                <p>Pontos turísticos</p>
                <h3>Principais atrações em ${destination.title}</h3>
            </div>
            <ul class="points-list">
                ${(pointsOfInterestData[destinationKey] || []).map((point) => `
                    <li class="points-item">
                        <strong>${point.name}:</strong> ${point.description}
                    </li>
                `).join('')}
            </ul>
            <div class="restaurant-header">
                <p>Opções de restaurantes</p>
                <h3>Melhores restaurantes em ${destination.title}</h3>
                <p>Informações de contato, menu típico, localização e preço médio dos pratos.</p>
            </div>
            <div class="restaurant-grid">
                ${destination.restaurants.map((restaurant) => `
                    <article class="restaurant-card">
                        <h4>${restaurant.name}</h4>
                        <p class="restaurant-info"><strong>Telefone:</strong> ${restaurant.phone}</p>
                        <p class="restaurant-info"><strong>Endereço:</strong> ${restaurant.address}</p>
                        <p class="restaurant-info"><strong>Localização:</strong> ${restaurant.location}</p>
                        <p class="restaurant-info"><strong>Preço médio:</strong> ${restaurant.avgPrice}</p>
                        <p class="restaurant-menu"><strong>Cardápio:</strong> ${restaurant.menu}</p>
                    </article>
                `).join('')}
            </div>
            <div class="hotel-header">
                <p>Melhores hotéis</p>
                <h3>Onde ficar em ${destination.title}</h3>
                <p>Dois hotéis recomendados com preço médio, contato e localizações estratégicas.</p>
            </div>
            <div class="hotel-grid">
                ${destination.hotels.map((hotel) => `
                    <article class="hotel-card">
                        <h4>${hotel.name}</h4>
                        <p class="hotel-info"><strong>Preço médio:</strong> ${hotel.avgPrice}</p>
                        <p class="hotel-info"><strong>Telefone:</strong> ${hotel.phone}</p>
                        <p class="hotel-info"><strong>Endereço:</strong> ${hotel.address}</p>
                        <p class="hotel-info"><strong>Localização:</strong> ${hotel.location}</p>
                    </article>
                `).join('')}
            </div>
        </div>
    `;

    const closeBtn = restaurantDetails.querySelector('.close-restaurant-details');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            restaurantDetails.innerHTML = '';
        });
    }
};

// Registra clique nos cartões de destino para abrir a seção detalhada correspondente
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach((card) => {
    card.addEventListener('click', () => {
        const destinationKey = card.dataset.destination;
        if (destinationKey) {
            renderRestaurantDetails(destinationKey);
            restaurantDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Agrupamento de destinos por tipos de experiência de viagem
const experienceCategories = {
    beach: ['bombinhas', 'balneario_camboriu', 'florianopolis'],
    urban: ['porto_alegre', 'curitiba', 'gramado'],
    nature: ['bento_goncalves', 'paranagua', 'foz_do_iguacu']
};

const experienceDetails = document.getElementById('experienceDetails');

// Imagens de fundo usadas na visualização de destinos por experiência
const destinationBackgroundImages = {
    bombinhas: 'imagens/bombinhas.jpg',
    balneario_camboriu: 'imagens/balneario.jpg',
    florianopolis: 'imagens/floripa.jpg',
    porto_alegre: 'imagens/porto_alegre.jpg',
    curitiba: 'imagens/curitiba.jpg',
    gramado: 'imagens/gramados.jpg',
    bento_goncalves: 'imagens/bento_goncalves.jpg',
    paranagua: 'imagens/paranagua.jpg',
    foz_do_iguacu: 'imagens/foz-do-iguacu.jpg'
};

// Renderiza o painel de detalhes da categoria de experiência selecionada
const renderExperienceDetails = (experienceKey) => {
    const destinations = experienceCategories[experienceKey];
    if (!destinations || !experienceDetails) {
        return;
    }

    const categoryTitles = {
        beach: 'Retiro à beira-mar',
        urban: 'Vibração urbana',
        nature: 'Refúgio natural'
    };

    // Descrições customizadas por categoria
    const urbanDescriptions = {
        porto_alegre: 'Centro cultural vibrante com museus, teatros e gastronomia diversificada.',
        curitiba: 'Arquitetura moderna e museus icônicos em uma cidade planejada.',
        gramado: 'Ruas cobertas com lojas charmosas, cafés e eventos culturais.'
    };

    const natureDescriptions = {
        bento_goncalves: 'Vinhedos verdes e montanhas, com trilhas e degustações ao ar livre.',
        paranagua: 'Ilhas preservadas com praias selvagens e vida marinha abundante.',
        foz_do_iguacu: 'Cachoeiras majestosas e mata atlântica, com fauna e flora exuberantes.'
    };

    experienceDetails.innerHTML = `
        <div class="experience-details-card fade-in-section visible">
            <div class="experience-header">
                <p>Destaques selecionados</p>
                <h3>Melhores destinos para ${categoryTitles[experienceKey].toLowerCase()}</h3>
                <p>Destinos ideais que combinam com seu estilo de viagem preferido.</p>
            </div>
            <div class="experience-destinations">
                ${destinations.map((destKey) => {
                    const dest = restaurantData[destKey];
                    let description = '';
                    if (experienceKey === 'urban') {
                        description = urbanDescriptions[destKey] || pointsOfInterestData[destKey][0].description;
                    } else if (experienceKey === 'nature') {
                        description = natureDescriptions[destKey] || pointsOfInterestData[destKey][0].description;
                    } else {
                        description = pointsOfInterestData[destKey][0].description;
                    }
                    const backgroundImage = destinationBackgroundImages[destKey] || 'imagens/bombinhas.jpg';
                    return `
                        <article class="experience-destination-card" style="background-image: url('${backgroundImage}');">
                            <h4>${dest.title}</h4>
                            <p>${description}</p>
                        </article>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

let currentExperienceKey = null;
// Adiciona comportamento de clique nas cartas de experiência para alternar a visualização
const experienceCards = document.querySelectorAll('.experience-card');
experienceCards.forEach((card) => {
    card.addEventListener('click', () => {
        const experienceKey = card.dataset.experience;
        if (!experienceKey) {
            return;
        }

        if (currentExperienceKey === experienceKey) {
            experienceDetails.innerHTML = '';
            currentExperienceKey = null;
            return;
        }

        currentExperienceKey = experienceKey;
        renderExperienceDetails(experienceKey);
    });
});

// Validação simples e mensagem de envio do formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const response = contactForm.querySelector('.form-response');
        if (!name) {
            response.textContent = 'Por favor, informe seu nome para continuarmos.';
            return;
        }
        response.textContent = `Recebemos sua solicitação, ${name}. Em breve nossa equipe entrará em contato.`;
        contactForm.reset();
    });
}

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
