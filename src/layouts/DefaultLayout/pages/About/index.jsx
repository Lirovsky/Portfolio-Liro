import { FaUserSecret } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden text-gray-200 dark:text-cyan-400">
      <div className="mb-10 mt-28 flex w-11/12 flex-col justify-center rounded-banner bg-black/40 p-14 text-3xl shadow-orange lg:p-28 dark:bg-black/70 dark:shadow-cyan">
        <div className="animate-slideindown flex justify-center">
          <h2 className="flex items-baseline pb-3 font-bebas text-4xl font-bold tracking-widest sm:pb-10 md:text-5xl">
            <FaUserSecret className="me-5 hidden text-orange-600 sm:block dark:text-purple-700" />
            UM POUCO SOBRE MIM!
            <FaUserSecret className="ms-5 hidden text-orange-600 sm:block dark:text-purple-700" />
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:gap-5 md:text-lg lg:text-xl">
          <p className="animate-slideinright">
            &#129505; Eu sempre gostei de tecnologia, lembro que na adolescência
            gostava mais de computadores do que de pessoas mas conforme o tempo
            passou eu acabei me afastando um pouco disso.
          </p>
          <p className="animate-slideinright2">
            &#128076; Estudo Front-end a mais de 1 ano e estou ansioso para
            conseguir meu primeiro emprego na área.
          </p>
          <p className="animate-slideinright3">
            &#128640; Sou viciado em aprender coisas novas, estou constantemente
            estudando algo, eu nunca paro, um dia sem estudo é um dia perdido.
          </p>
          <p className="animate-slideinright4">
            &#128692; No tempo livre eu gosto de correr e andar de bicicleta.
            Para mim funciona como uma terapia hehe. Também é uma forma de me
            desafiar a ir cada vez mais longe.
          </p>
        </div>
      </div>
    </div>
  );
}
