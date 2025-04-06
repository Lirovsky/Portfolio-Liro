import { Flowbite, Carousel } from "flowbite-react";
import { customTheme } from "./customTheme";
import Cards from "./components/Cards";
import {
  FaCloudMoonRain,
  FaGithub,
  FaEnvelopeOpenText,
  FaBuilding,
} from "react-icons/fa";

export default function ProjectCarousel() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="animate-slideinright3 h-72 w-full rounded-lg shadow-orange sm:h-64 lg:h-80 2xl:h-96 dark:shadow-cyan">
        <Carousel theme={customTheme}>
          <Cards
            id={1}
            key={1}
            bg="bg-img1"
            description="Um projeto bem simples sobre consulta de clima. Basta pesquisar o nome da cidade para receber os dados em tempo real. O projeto não mostra apenas informações de temperatura e clima, ele também nos mostra a sensação térmica, humidade do ar e muito mais."
            technical="O projeto é integrado com a API da OpenWether, onde é possível obter informações do clima de qualquer cidade do mundo. A integração é realizada utilizando Axios."
            title="CLIMÁTICA"
            icon={<FaCloudMoonRain />}
            url="https://lirovsky.github.io/ClimaAPI/"
          />
          <Cards
            id={2}
            key={2}
            bg="bg-img2"
            description="Projeto focado em consultas de usuários no GitHub. Ao pesquisar o nome de usuário, o site retorna algumas informações como nome, data de criação, quantidade de repositórios e informações de contato."
            technical="O projeto é integrado com a API do GitHub, onde é possível obter as informações dos usuários do GitHub. A integração é realizada utilizando Axios."
            title="GITESQUISA"
            icon={<FaGithub />}
            url="https://lirovsky.github.io/GithubAPI/"
          />
          <Cards
            id={3}
            key={3}
            bg="bg-img3"
            description="Um site de investimentos com aparência profissional. Focado no desenvolvimento do layout, possui carrosséis, cards e diversos componentes reutilizaveis"
            technical="Projeto sem integração com API, utilizando apenas React, Tailwind e sistema de Rotas."
            title="FINANCING"
            icon={<FaEnvelopeOpenText />}
            url="https://lirovsky.github.io/financing/"
          />
          <Cards
            id={4}
            key={4}
            bg="bg-img4"
            description="Site simples de consultoria mas com aparência profissional. Focado no desenvolvimento do layout, possui accordions e diversos componentes reutilizaveis."
            technical="Projeto sem integração com API, apenas React, Tailwind e algumas outras coisinhas."
            title="CONSULTORIA"
            icon={<FaBuilding />}
            url="https://lirovsky.github.io/arsha/"
          />
        </Carousel>
      </div>
    </Flowbite>
  );
}
