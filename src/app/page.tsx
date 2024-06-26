import Link from "next/link";
import Image from "next/image";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

import ImagePetiscariaHero from "../images/petiscaria-hero.png";
import ImagePetiscariaFounders from "../images/founders.jpg";
import ImagePetiscariaContacts from "../images/contacts.jpg";
import ImageMasonry1 from "../images/masonry/masonry1.jpg";
import ImageMasonry2 from "../images/masonry/masonry2.jpg";
import ImageMasonry3 from "../images/masonry/masonry3.jpg";
import ImageMasonry4 from "../images/masonry/masonry4.jpg";
import ImageMasonry5 from "../images/masonry/masonry5.jpg";
import ImageMasonry6 from "../images/masonry/masonry6.jpg";
import ImageMasonry7 from "../images/masonry/masonry7.jpg";
import ImageMasonry8 from "../images/masonry/masonry8.jpg";
import ImageMasonry9 from "../images/masonry/masonry9.jpg";
import ImageMasonry10 from "../images/masonry/masonry10.jpg";
import ImageMasonry12 from "../images/masonry/masonry12.jpg";
import ImageMasonry13 from "../images/masonry/masonry13.jpg";
import ImageMasonry14 from "../images/masonry/masonry14.jpg";
import ImageMasonry15 from "../images/masonry/masonry15.jpg";

export default function Home() {
  return (
    <div key="1" className="flex flex-col overflow-hidden">
      <nav className="hero-background fixed top-0 left-0 w-full z-50 py-2.5 px-4 lg:px-6 lg:py-[30px] flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium text-white hover:underline underline-offset-4"
          href="#menu"
        >
          Menu
        </Link>
        <Link
          className="text-sm font-medium text-white hover:underline underline-offset-4"
          href="#sobre"
        >
          Sobre
        </Link>
        <Link
          className="text-sm font-medium text-white hover:underline underline-offset-4"
          href="#contactos"
        >
          Contactos
        </Link>
      </nav>
      <header className="hero-background w-full h-dvh bg-cover bg-center flex items-center justify-center px-4 lg:px-6 relative">
        <div className="text-center gap-8 flex flex-col">
          <Image
            alt="logo Na Esquina"
            className="object-cover object-[center_24%] rounded-md"
            height={500}
            src={ImagePetiscariaHero}
            width={600}
          />

          <div className="space-y-4">
            <div>
              <Link
                className="inline-flex h-10 items-center justify-center text-primary bg-secondary px-8 text-sm font-medium shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:bg-[#404000] dark:text-white dark:hover:bg-[#404000]/90 dark:focus-visible:ring-[#404000]"
                href="tel:936746342"
              >
                Reservar uma mesa
              </Link>
            </div>
          </div>
        </div>
        <p className="max-w-[700px] mx-auto text-secondary md:text-xl absolute bottom-[6%] right-[6%] font-semibold">
          Na Esquina
          <br />
          onde os petiscos
          <br />
          se encontram,
          <br />
          a felicidade
          <br />
          nunca se atrasa.
        </p>
      </header>
      <section id="menu" className="w-full py-12 lg:py-24 bg-white">
        <div className="container px-4 md:px-6">
          {/* <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-5xl">
                A nossa Carta
              </h2>
            </div>
          </div> */}
          <div>
            <div className="container-masonry">
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry2}
                  alt="A windmill"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry1}
                  alt="The Clifton Suspension Bridge"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry15}
                  alt="Sunset and boats"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry14}
                  alt="a river in the snow"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry5}
                  alt="a single checked balloon"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry6}
                  alt="a hot air balloon shaped like a dog"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry7}
                  alt="View from a hot air balloon of other balloons"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry9}
                  alt="a balloon fairground ride"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry10}
                  alt="sunrise over a harbor"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry13}
                  alt="three hot air balloons in a blue sky"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry12}
                  alt="the Toronto light up sign at night"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry8}
                  alt="the Toronto light up sign at night"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section
        id="sobre"
        className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white"
      >
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
              Sobre nós
            </h2>
            <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mais que um local para petiscar, este é um refúgio onde a tradição
              encontra a modernidade em cada detalhe. Um espaço onde cada prato
              conta uma história e cada recanto abraça com calor e
              familiaridade.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Image
              alt="Menu Item 3"
              className="aspect-[4/3] object-cover object-[center_24%] rounded-md"
              height={850}
              src={ImagePetiscariaFounders}
              width={400}
            />
          </div>
        </div>
      </section>
      <section
        id="contactos"
        className="w-full py-12 md:py-24 lg:py-32 relative"
      >
        <Image
          alt="Contactos"
          className="contact-bg"
          src={ImagePetiscariaContacts}
        />
        <div className="container items-center gap-6 px-4 md:px-6 lg:gap-10">
          <div className="square-background space-y-2 p-6 max-w-[401px] rounded">
            <h2 className="text-3xl text-primary font-bold tracking-tighter md:text-4xl/tight">
              Contactos
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"></p>
            <div className="flex flex-col gap-8">
              <div>
                <p>
                  <strong>Morada</strong>
                </p>
                <address>
                  R. Bpo. Dom Florentino Andrade e Silva 204
                  <br /> Santa Maria da Feira, Portugal
                </address>
              </div>
              <p>
                <strong>Contacto</strong>
                <a className="block" href="tel:936746342">
                  936 746 342
                </a>
              </p>
              <p>
                <strong>Horário</strong>
                <br />
                Todos os dias
                <br />
                11h00 - 23h00
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex justify-between gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-secondary">
        <p className="text-xs text-secondary">
          {new Date().getFullYear()} © Na Esquina Petiscaria
        </p>
        <div className="flex justify-end space-x-4">
          <Link
            target="_blank"
            className="text-secondary cursor-pointer hover:text-secondary-foreground dark:text-gray-400 dark:hover:text-gray-50"
            href="https://www.facebook.com/naesquinapetiscaria/"
          >
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            target="_blank"
            className="text-secondary cursor-pointer hover:text-secondary-foreground dark:text-gray-400 dark:hover:text-gray-50"
            href="https://www.instagram.com/naesquina_petiscaria/"
          >
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            target="_blank"
            className="text-secondary cursor-pointer hover:text-secondary-foreground dark:text-gray-400 dark:hover:text-gray-50"
            href="tel:936746342"
          >
            <PhoneIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
