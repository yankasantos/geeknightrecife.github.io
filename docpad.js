module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Geek Night Recife",
      theme: "por mulheres",
      description: "Finalmente o primeiro Geek Night de 2015 está chegando! \
        Buscando cada vez mais aumentar a participação de mulheres no evento, \
        não só como ouvintes, mas como palestrantes, teremos mais uma edição do \
        Geek Night {por mulheres}! \
        Isso quer dizer que teremos apenas apresentações de mulheres. \
        O Geek Night Recife começou com a intenção de ser um encontro informal com o \
        objetivo de discutir sobre tecnologia. O evento vem cada vez mais se \
        firmando como um espaço para produção e compartilhamento de \
        conhecimento. Tendo a idéia de ser um espaço democrático e aberto, a \
        Geek Night vem recebendo palestras, práticas e fóruns, tendo como \
        assunto os mais diversos temas relacionados ao universo geek. Não \
        deixe de conferir o blog do Geek Night: http://geeknightrecife.github.io .",
      date: "28 de Abril",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "ThoughtWorks",
      address: "Av Governador Agamenon Magalhães, 4779",
      details: "12 andar. Empresarial Isaac Newton",
      city: "Recife",
      state: "PE"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Eu vou!",
        link: "https://www.facebook.com/events/729842123749088"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      //'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Sponsors",
      partners: "Parceiros",
      contact: "Contato",
      time: "Hora",
      description: "Descrição",
      slot: "Tema"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in",
        time: "19h20"
      },
      {
        name: "Rodrigo Alencar",
        photo: "themes/yellow-swan/img/rodrigo_alencar.png",
        bio: "Rodrigo Alencar é lider tecnico dos Projetos de Impacto Social \
          na ThoughtWorks Brasil na filial de Recife. Fundador do movimento \
          Tecnologia Popular que visa trazer a tecnologia ao povo. Foi formado \
          pelo SENAI em Desenvolvimento de Software em 2007 e desde então vem \
          participando ativamente de projetos open sources e colocando um \
          pouco da identidade negra em todos os trabalhos já feitos.",
        link: {
          text: "github",
          href: "http://github.com/RatoX"
        },
        presentation: {
          title: "Toolkit 2.0 Javascript",
          description: "Apresentação relampago sobre as novidades e tendencias \
            para se trabalhar com Javascript nesse mundão que traz novidades \
            a todo instante.",
          time: "19h30"
        }
      },
      {
        name: "Coffe Break",
        time: "19h50"
      },
      {
        name: "Aline Cavalcante",
        photo: "themes/yellow-swan/img/diego_asfora.png",
        bio: "17 anos, presidente do Fora da Caixa, embaixadora FazINOVA, \
          graduanda em Psicologia pela UFPE, palestrante, empreendedora, \
          designer e programadora.",
        link: {
          text: "twitter",
          href: "twitter.com/cavalcantalines"
        },
        presentation: {
          title: "Pensando Fora da Caixa",
          description: "Um pouco sobre pensar Fora da Caixa e empreender em \
            todas as áreas da vida a partir do case da Aline Cavalcante.",
          time: "20h10"
        }
      },
      {
        name: "Pós Geek Night",
        time: "21h10"
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "ThoughtWorks",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
