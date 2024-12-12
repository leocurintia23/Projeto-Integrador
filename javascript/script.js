document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const body = document.body;

    menuToggle.addEventListener("click", () => {
        body.classList.toggle("menu-open");
    });
}); document.addEventListener("DOMContentLoaded", () => {
    const translateButton = document.getElementById("translateButton");
});
document.addEventListener("DOMContentLoaded", () => {
    const translateButton = document.getElementById("translateButton");

    const translations = {
        "pt-BR": {
            "txtinicio": `
             Bem-Vindos ao nosso site sobre Educação Ambiental!
            `,
            "exploremais": `Explore mais
           `,

            "sobrenos": `Sobre nós
           `,

            "referencias": `Referências
           `,

            "translateButton": `English
           `,

            "tit-caixa-1": `
             Educação Ambiental e sua importância
            `,

            "educacao-ambiental-texto": `A humanidade vive um momento crucial, em que qualquer mudança de comportamento pode afetar nossa vida num futuro próximo. Os jovens são os principais formadores de opinião e tomadores de decisão sobre esse futuro, e, por isso, a educação ambiental é essencial para que seja construída uma sociedade capaz de produzir transformações.

Assim, inserir a educação ambiental nas escolas é capacitar estudantes com pensamento crítico para que saibam se posicionar sobre as questões que envolvem a relação com o meio ambiente e que, certamente, impactarão a sociedade a longo prazo. Aprimorar suas competências e habilidades é garantir que esse assunto não seja negligenciado.

É preciso preparar os jovens para as mudanças, e inserir as pautas climáticas na educação é uma maneira de enxergar com otimismo, posicionamento crítico e determinação o movimento ambiental. O diálogo permite que a mudança seja de maneira mais suave, com profissionais competentes em um mundo que se transforma diariamente.
            `,
            "tit-caixa-2": `
             Recursos Naturais
            `,

            "recursos-naturais-texto": `
               Existem dois tipos de recursos naturais: renováveis e não renováveis. Os primeiros são inesgotáveis — como a radiação solar — ou sua renovação é relativamente rápida — como é o caso da biomassa. Os não renováveis são os recursos que existem na natureza de forma limitada, uma vez que sua regeneração demora muitos anos, tais como os minerais e os combustíveis fósseis — petróleo, gás natural e carvão.

Os seres humanos estão esgotando esses recursos naturais do planeta, e os níveis de qualidade de vida começarão a diminuir por volta de 2030, caso medidas imediatas não sejam tomadas. Em 2022, por exemplo, o mundo acabou com o capital natural disponível para os 365 dias do ano em pouco mais de 200 dias, como alertou o Fundo Mundial para a Natureza (WWF). Isso significa que, no dia 28 de julho daquele ano, os recursos naturais já estavam em números vermelhos, com a humanidade em débito com o planeta devido ao seu consumo excessivo.
            `,
            "tit-caixa-3": `
             Desmatamento
            `,
            "desmatamento-texto": `
                No Brasil, houve um avanço no desmatamento com a chegada dos portugueses em 1500, os quais exploravam o pau-brasil para venda na Europa. Contudo, com a Revolução Industrial do século XVIII, o desmatamento mundial alcançou uma aceleração sem precedentes. O Brasil, assim como outros países tropicais, sofre com elevadas taxas de desmatamento. Entre as causas do desmatamento, destacam-se: atividade agrícola e pecuária, responsável por 80% do desmatamento mundial; urbanização; exploração comercial de madeira, principalmente madeira de lei. Estima-se que desde 1970, o Brasil já perdeu 18% das suas florestas por conta do desmatamento. Em tamanho, esse valor equivale ao território dos estados Rio Grande do Sul, Santa Catarina, Paraná, Rio de Janeiro e Espírito Santo.

`,

            "tit-caixa-4": `
             Aquecimento Global
            `,
            "aquecimento-global-texto": `
                O Painel Intergovernamental de Mudanças Climáticas (IPCC), órgão ligado às Nações Unidas, divulgou hoje um relatório apontando um cenário devastador sobre os principais impactos do aquecimento global no meio ambiente e na economia, caso medidas concretas para diminuir o aumento da temperatura do planeta não forem adotadas. No Brasil, há impactos significativos em vários lugares como na Amazônia, no semiárido nordestino e nas regiões litorâneas.

Neste segundo relatório, o IPCC demonstra claramente que os impactos das mudanças do clima estão batendo à nossa porta neste momento e só tendem a piorar. O nível dos oceanos já está subindo e, com isso, 100 milhões de pessoas que vivem a menos de um metro acima do nível do mar estão correndo o risco de perder suas casas. As populações da Índia e da China podem passar fome por causa do declínio na produção de alimentos como consequência do aquecimento global.
            `,
            "tit-caixa-5": `
            Poluição Marinha
           `,
            "poluicao-oceanos-texto": `
                Poluição marinha é a introdução voluntária ou involuntária de materiais de diferentes naturezas na água dos mares e oceanos de todo o mundo, tendo como principal agente causador o ser humano. Ações humanas como o descarte irregular de lixo e de dejetos urbanos, os resíduos de atividades econômicas e o derramamento de petróleo provocam a poluição marinha. Nota-se, ainda, que no último século a elevação das temperaturas do planeta tem afetado negativamente os oceanos.
            `,
            "redessociais": `
            Redes Sociais
           `,

            "titsobrenos": `Sobre nós`,

            "txtsobrenos": `Este é um site sobre Educação Ambiental, criado pela equipe MAMONAS-YE, onde trabalhamos em alguns tópicos importantes para conscientizar sobre esse assunto importante para o nosso futuro e para o futuro das nossas crianças.`,

            "titcriadores": `Criadores`,
            "txtcriadores": `Estes somos nós, Leonardo Souza e Cauã Gomack, respectivamente, a atual equipe dos MAMONAS-YE e também os fundadores. `,

            "fotterdireitos": `
            © 2024 MAMONAS-YE. Todos os direitos reservados.
           `,
            "contato": `
            Contato
           `,
            "txtcontato": `
            Para ter contato com nós, mande um e-mail: mamonasye@gmail.com
                ou mande mensagem para os números de telefones: (45)99954-8580 ou (45)99102-4765`,
        },
        en: {

            "txtinicio": `
            Welcome to our Environmental Education website!
            `,

            "exploremais": `Explore more
           `,

            "sobrenos": `About us
           `,

            "referencias": `References
           `,
            "translateButton": `Português-BR
           `,

            "tit-caixa-1": `
             Environmental Education and its importance
            `,

            "educacao-ambiental-texto": `
                Humanity is at a crucial moment, where any change in behavior can affect our lives in the near future. Young people are the main opinion makers and decision-makers about this future, and for that reason, environmental education is essential for building a society capable of driving transformations. 

Thus, incorporating environmental education into schools is about equipping students with critical thinking so they can position themselves on issues related to the relationship with the environment, which will certainly impact society in the long term. Enhancing their skills and abilities ensures that this subject is not neglected.

It is necessary to prepare young people for change, and incorporating climate agendas into education is a way to view the environmental movement with optimism, critical positioning, and determination. Dialogue allows for a smoother transition, with competent professionals in a world that transforms daily.
            `,

            "tit-caixa-2": `
             Natural Resources
            `,

            "recursos-naturais-texto": `
                There are two types of natural resources: renewable and non-renewable. The former are inexhaustible — such as solar radiation — or their renewal is relatively quick — as is the case with biomass. Non-renewable resources are those that exist in nature in limited quantities, as their regeneration takes many years, such as minerals and fossil fuels — oil, natural gas, and coal.

Humans are depleting these natural resources on the planet, and quality of life levels will begin to decrease by around 2030 if immediate measures are not taken. In 2022, for example, the world used up the natural capital available for the entire 365 days of the year in just over 200 days, as warned by the World Wide Fund for Nature (WWF). This means that on July 28th of that year, natural resources were already in the red, with humanity in debt to the planet due to its excessive consumption.`,

            "tit-caixa-3": `
             Deforestation
            `,
            "desmatamento-texto": `
                In Brazil, deforestation advanced with the arrival of the Portuguese in 1500, who exploited brazilwood for sale in Europe. However, with the Industrial Revolution of the 18th century, global deforestation reached an unprecedented acceleration. Brazil, like other tropical countries, suffers from high deforestation rates. Among the causes of deforestation, the following stand out: agricultural and livestock activities, responsible for 80% of global deforestation; urbanization; commercial exploitation of timber, mainly hardwood. It is estimated that since 1970, Brazil has already lost 18% of its forests due to deforestation. In size, this figure is equivalent to the territory of the states of Rio Grande do Sul, Santa Catarina, Paraná, Rio de Janeiro, and Espírito Santo.`,

            "tit-caixa-4": `
                Global Warming
               `,
            "aquecimento-global-texto": `
                The Intergovernmental Panel on Climate Change (IPCC), an agency linked to the United Nations, released a report today pointing to a devastating scenario regarding the main impacts of global warming on the environment and the economy, should concrete measures not be taken to reduce the planet's temperature rise. In Brazil, there are significant impacts in various regions such as the Amazon, the northeastern semi-arid area, and coastal regions.

In this second report, the IPCC clearly demonstrates that the impacts of climate change are knocking at our door at this moment and are only expected to worsen. Sea levels are already rising, and as a result, 100 million people living less than one meter above sea level are at risk of losing their homes. Populations in India and China could face hunger due to a decline in food production as a consequence of global warming. `,
            "tit-caixa-5": `
                Marine Pollution
               `,

            "poluicao-oceanos-texto": `
               Marine pollution is the voluntary or involuntary introduction of materials of different types into the waters of seas and oceans worldwide, with humans being the main contributing factor. Human actions such as the improper disposal of garbage and urban waste, residues from economic activities, and oil spills cause marine pollution. It is also noted that over the last century, rising global temperatures have negatively impacted the oceans.
            `,
            "redessociais": `
            Social Midia
           `,
            "titsobrenos": `About us`,

            "txtsobrenos": `This is a website about Environmental Education, created by the MAMONAS-YE team, where we work on some important topics to raise awareness about this important subject for our future, and for the future of our children.`,

            "titcriadores": `Creators`,
            "txtcriadores": `These are us, Leonardo Souza and Cauã Gomack, respectively, the current MAMONAS-YE team and also the founders.`,

            "fotterdireitos":
                `© 2024 MAMONAS-YE. All rights reserved.`,

            "contato": `
            Contact`,
            "txtcontato": `
            To contact us, send an email: mamonasye@gmail.com
            or send a message to the phone numbers: (45)99954-8580 or (45)99102-4765`,

        },
    };

    const applyTranslations = (lang) => {
        Object.keys(translations[lang]).forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                element.innerText = translations[lang][id];
            }
        });
    };

    const updateLanguage = () => {
        const lang = location.hash.replace("#", "") || "pt-BR";
        if (translations[lang]) {
            applyTranslations(lang);
        }
    };

    translateButton.addEventListener("click", () => {
        const currentLang = location.hash.replace("#", "") || "pt-BR";
        const newLang = currentLang === "pt-BR" ? "en" : "pt-BR";
        location.hash = newLang;
        updateLanguage();
    });

    updateLanguage();
});


