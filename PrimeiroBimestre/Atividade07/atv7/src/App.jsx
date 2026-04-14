import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  
  // Dados do post.
  const dadosDoPost = {
    titulo: "Tornando a exploração de Marte mais acessível aos amantes da ciência",
    dataISO: "2026-02-26",
    dataLegivel: "26 de Fevereiro de 2026",
    paragrafo1: "A exploração espacial sempre fascinou a humanidade, mas o acesso aos dados reais das missões costuma ser fragmentado. O projeto RedFrontier nasce para mudar esse cenário. Mais do que um simples visualizador de imagens da NASA, a plataforma foi desenhada para criar uma experiência imersiva, colocando o usuário diretamente no papel de um cientista na Terra. Através de uma navegação por geolocalização cronológica, os entusiastas podem explorar um mapa interativo e seguir o rastro exato dos Rovers pela superfície marciana, acompanhando cada nova descoberta dia após dia (ou melhor, Sol após Sol). Com uma interface retrô-futurista envolvente, aprender sobre o planeta vermelho se torna não apenas acessível, mas uma verdadeira jornada épica de descobrimentos.",
    
    // Caminho da primeira imagem
    img1Src: "/img/RoverPerseveranceMarte.jpg", 
    img1Alt: "Rover da nasa Perseverance explorando e coletando dados em Marte",
    img1Legenda: "Rover da NASA Perseverance explorando e coletando dados em Marte, imagem oficial nasa.org",
    
    // Segundo parágrafo do post
    paragrafo2: "Como podemos observar no mapa de telemetria oficial da NASA, cada rover deixa um rastro detalhado de sua jornada. O objetivo do RedFrontier é consumir esses dados brutos de latitude e longitude para reconstruir essa trajetória em um mapa interativo próprio. Dessa forma, o usuário poderá selecionar os pontos de parada no caminho e descobrir exatamente quais fotos e informações foram coletadas naquele exato 'Sol' (dia marciano), vivenciando a exploração passo a passo.",
    
    // Caminho da segunda imagem
    img2Src: "/img/Mapa_Telemetria.png",
    img2Alt: "Captura de tela do mapa interativo da NASA mostrando a trajetória e os pontos de parada do Rover em Marte",
    img2Legenda: "Mapa de telemetria ilustrando a rota do Rover, que servirá de base para a funcionalidade de mapa do RedFrontier."
  };

  return (
    <div className="grid-container">
      <Header />
      
      <Article 
        titulo={dadosDoPost.titulo}
        dataISO={dadosDoPost.dataISO}
        dataLegivel={dadosDoPost.dataLegivel}
        paragrafo1={dadosDoPost.paragrafo1}
        img1Src={dadosDoPost.img1Src}
        img1Alt={dadosDoPost.img1Alt}
        img1Legenda={dadosDoPost.img1Legenda}
        paragrafo2={dadosDoPost.paragrafo2}
        img2Src={dadosDoPost.img2Src}
        img2Alt={dadosDoPost.img2Alt}
        img2Legenda={dadosDoPost.img2Legenda}
      />
      
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;