import Image from "next/image";
import DoctorHero from "../../../../../public/images/doctor-hero.jpg";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="max-w-3xl space-y-8">
            <h1 className="text-2xl font-bold text-zinc-900 sm:text-2xl md:text-6xl">
              Encontre os melhores profissionais em um único lugar!
            </h1>
            <p className="mt-4 text-lg text-zinc-700 sm:text-xl md:text-2xl">
              Descubra dentistas qualificados e agende sua consulta de forma
              rápida e fácil.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#"
                className="rounded-md bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-emerald-600"
              >
                Agendar Consulta
              </a>
              <a
                href="#"
                className="rounded-md border border-zinc-900 px-6 py-3 text-lg font-semibold text-zinc-900 shadow-md transition duration-300 hover:bg-zinc-100"
              >
                Saiba Mais
              </a>
            </div>
          </article>
          <div className="hidden lg:block mx-auto max-w-full shadow-lg">
            <Image
              src={DoctorHero}
              alt="Imagem de destaque"
              className="mx-auto max-w-full shadow-lg"
              width={600}
              height={400}
              priority
            />
          </div>
        </main>
      </div>
    </section>
  );
}
