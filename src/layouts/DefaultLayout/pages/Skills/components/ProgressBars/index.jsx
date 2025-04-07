import { Flowbite } from "flowbite-react";
import { customTheme } from "./customTheme";
import Bar from "./components";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiCypress } from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaSass,
  FaCss3,
  FaHtml5,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

export function ProgressBars() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="gap-x-10 text-xl md:flex">
        <div className="w-full animate-fadein2">
          <Bar
            title="HTML"
            icon={<FaHtml5 />}
            progress={90}
            color="orange"
            text="text-orange-300 dark:text-orange-500 animate-slideinright"
          />
          <Bar
            title="CSS"
            icon={<FaCss3 />}
            progress={90}
            color="blue"
            text="text-blue-500 dark:text-blue-700 animate-slideinright2"
          />
          <Bar
            title="Java Script"
            icon={<FaJs />}
            progress={70}
            color="yellow"
            text="text-yellow-200 dark:text-yellow-300 animate-slideinright3"
          />
          <Bar
            title="Bootstrap"
            icon={<FaBootstrap />}
            progress={90}
            color="purple"
            text="text-purple-400 dark:text-purple-500 animate-slideinright4"
          />
          <Bar
            title="Sass"
            icon={<FaSass />}
            progress={90}
            color="red"
            text="text-red-400 dark:text-red-500 animate-slideinright5"
          />
        </div>
        <div className="w-full animate-fadein2">
          <Bar
            title="React"
            icon={<FaReact />}
            progress={80}
            color="cyan"
            text="text-cyan-300 dark:text-cyan-400 md:animate-slideinright animate-slideinright6"
          />
          <Bar
            title="Tailwind"
            icon={<RiTailwindCssFill />}
            progress={90}
            color="cyan2"
            text="text-cyan-400 dark:text-cyan-600 md:animate-slideinright2 animate-slideinright7"
          />
          <Bar
            title="Git + GitHub"
            icon={<FaGithub />}
            progress={90}
            color="pink"
            text="text-pink-500 dark:text-pink-600 md:animate-slideinright3 animate-slideinright8"
          />
          <Bar
            title="Cypress"
            icon={<SiCypress />}
            progress={50}
            color="green"
            text="text-green-500 dark:text-green-500 md:animate-slideinright4 animate-slideinright9"
          />
          <Bar
            title="Figma"
            icon={<FaFigma />}
            progress={70}
            color="lime"
            text="text-lime-400 dark:text-lime-500 md:animate-slideinright5 animate-slideinright10"
          />
        </div>
      </div>
    </Flowbite>
  );
}
