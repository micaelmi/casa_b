const carouselBig = document.querySelector('.carousel-big');
const carouselSmall = document.querySelector('.card-slider');

let items = [
    {
        image: 'img/material-basico-big.png',
        alt: 'Caminhão de pedras',
        title: 'Material Básico',
        description: 'Contamos com os mais diversos materiais e insumos para fundações, estruturas e vedações, tais como tijolos, blocos, areia, brita, cimento, vergalhões e ferragens armadas, são muitas as opções para se estudar a princípio.',
    },
    {
        image: 'img/impermeabilizacao-big.png',
        alt: 'Caixas de impermeabilizantes',
        title: 'Impermeabilização',
        description: 'Iniciadas as obras, chega a hora de pensar em soluções que gerem durabilidade e estabilidade para a permanência dentro do sonhado ambiente, seja ele a casa perfeita, o local de trabalho acolhedor ou uma nova área de lazer. Nessa etapa, a impermeabilização é fundamental para que não haja infiltrações e evite transtornos futuros.',
    },
    {
        image: 'img/hidraulica-eletrica-big.png',
        alt: 'Canos e peças',
        title: 'Hidráulica e Elétrica',
        description: 'O planejamento correto de hidráulica e elétrica das construções é uma etapa importantíssima, afinal todos querem o conforto da iluminação adequada e tomadas disponíveis, vazão suficiente nas saídas de água além de banhos relaxantes.',
    },
    {
        image: 'img/coberturas-big.png',
        alt: 'Telhas',
        title: 'Coberturas',
        description: 'A cobertura da obra deve ser pensada ainda no projeto, visto que além de abrigo, os telhados geram muita carga nas fundações e são também acabamentos. Os materiais variam de acordo com as necessidades e estilo arquitetônico de cada cliente.',
    },
    {
        image: 'img/acabamentos-big.png',
        alt: 'Latas de tinta',
        title: 'Acabamentos',
        description: 'A finalização! É hora de escolher tudo que realmente será visto nos ambientes, são tantos itens para se pensar: pisos, louças e metais sanitários; tintas e vernizes em suas infinitas aplicações e cores; acabamentos de elétrica, torneiras… temos muitas opções e você ainda pode contar com nossa equipe para tirar suas principais dúvidas quanto ao uso dos materiais!',
    },
    {
        image: 'img/ferramentas-big.png',
        alt: 'Máquinas e ferramentas',
        title: 'Ferramentas',
        description: 'Você é um profissional da obra ou uma daquelas pessoas que adora fazer tudo sozinho e cria vários projetos?  A Casa B dispõe de uma linha muito atrativa para qualquer uma dessas hipóteses: ferramentas manuais e elétricas de diversas marcas e modelos além de peças para reposição como discos, lixas, bits, ponteiras, brocas, chaves e muito mais!',
    },
];

function renderCarousel() {
    let size = screen.width;

    if (size <= 1000) {
        items.map((item) => {
            carouselSmall.innerHTML += `
            <div class="card">
                <div class="content">
                <img src="${item.image}" alt="${item.alt}" />
                <div class="description">
                    <h2>${item.title}</h2>
                    <br />
                    <p>
                        ${item.description}
                    </p>
                </div>
                </div>
            </div>
            `;
        })
    }
    else {
        items.map((item) => {
            carouselBig.innerHTML += `
            <li>
                <div class="content">
                <img
                    src="${item.image}"
                    alt="${item.alt}"
                />
                <div class="description">
                    <h2>${item.title}</h2>
                    <br />
                    <p>
                    ${item.description}
                    </p>
                </div>
                </div>
            </li>
        `;
        })
    }
}
renderCarousel();