import Link from "next/link";
import Image from "next/image";

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
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div key="1" className="flex flex-col overflow-hidden">
      <nav className="items-center hero-background fixed top-0 left-0 w-full z-50 py-2.5 px-4 lg:px-6 lg:py-[30px] flex gap-4 sm:gap-6">
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

        <Link className="ml-auto " href="tel:936746342">
          <Button>Reservar</Button>
        </Link>
      </nav>
      <header className="hero-background w-full h-screen bg-cover bg-center flex items-center justify-center px-4 lg:px-6 relative">
        <div className="text-center gap-8 flex flex-col text-white w-full items-center">
          <Logo />
        </div>
        <p className="max-w-[700px] mx-auto text-white md:text-xl absolute bottom-[6%] right-[6%] font-semibold">
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
          <div>
            <div className="container-masonry">
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry2}
                  alt="foto de um prato com ovos rotos (batatas fritas com ovos e presunto)"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry1}
                  alt="foto de prato com ameijoas à bulhão pato"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry15}
                  alt="foto de um prego à Esquina"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry14}
                  alt="foto de um prato com camarões à guilho"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry5}
                  alt="foto com vários petiscos, camarões, ameijoas, ovos rotos, prego à esquina"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry6}
                  alt="foto de um prato com ovos rotos (batatas fritas com ovos e presunto)"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry7}
                  alt="foto de prato com moelas e tosta de bacalhau"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry9}
                  alt="prato de sobremesa com mousse de chocolate, baba de camelo, mouse de maracujá e bolo de bolacha"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry10}
                  alt="foto de um prato com favas e chouriço"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry13}
                  alt="prato de sobremesa com mousse de chocolate, baba de camelo, mouse de maracujá e bolo de bolacha"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry12}
                  alt="prato da esquina"
                />
              </figure>
              <figure>
                <Image
                  width={400}
                  height={300}
                  src={ImageMasonry8}
                  alt="prato com uma tosta de bacalhau"
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
            <p className="max-w-[600px] text-white text-lg ">
              Mais que um local para petiscar, este é um refúgio onde a tradição
              encontra a modernidade em cada detalhe. Um espaço onde cada prato
              conta uma história e cada recanto abraça com calor e
              familiaridade.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Image
              alt="Os fundadores da Na Esquina Petiscaria, o Fernando e o Veríssimo"
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
          alt="Tosta de bacalhau"
          className="contact-bg"
          src={ImagePetiscariaContacts}
        />
        <div className="container items-center gap-6 px-4 md:px-6 lg:gap-10">
          <div className="square-background py-6 px-8 max-w-[401px] rounded">
            <h2 className="text-3xl text-primary font-bold tracking-tighter md:text-4xl/tight -ml-0.5 mb-6">
              Contactos
            </h2>
            <div className="flex flex-col gap-4">
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
        <p className="text-xs text-white">
          {new Date().getFullYear()} © Na Esquina Petiscaria
        </p>
        <div className="flex justify-end space-x-4">
          <Link
            target="_blank"
            className="text-white cursor-pointer hover:text-secondary-foreground dark:text-gray-400 dark:hover:text-gray-50"
            href="https://www.facebook.com/naesquinapetiscaria/"
          >
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            target="_blank"
            className="text-white cursor-pointer hover:text-secondary-foreground dark:text-gray-400 dark:hover:text-gray-50"
            href="https://www.instagram.com/naesquina_petiscaria/"
          >
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            target="_blank"
            className="text-white cursor-pointer hover:text-secondary-foreground dark:text-gray-400 dark:hover:text-gray-50"
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

function Logo(props: any) {
  return (
    <svg
      {...props}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 796.9 482.8"
      className="max-w-2xl w-full"
    >
      <path
        fill="currentColor"
        d="M51.7 254.7c-1.5-.5-2.3-2-2.3-4.5V82.7c0-2.5.8-3.7 2.3-3.5l29.4 3.3c1.3.1 2.2 1.2 2.8 3.1l22.6 74.1c1.7 5.7 3.5 11.7 5.4 18.2 1.9 6.5 3.6 12.9 5.1 19.2 1.6 6.3 2.9 11.9 3.9 16.8l.6.1c-.4-5.1-.7-10.9-.9-17.3-.3-6.4-.4-12.9-.6-19.3-.1-6.5-.2-12.1-.2-16.9V90.8c0-2.7.8-4 2.5-3.8l25.8 2.9c1.9.2 2.8 1.7 2.8 4.5v187.1c0 2.8-.9 3.9-2.8 3.3l-33.8-10.6c-1.2-.4-2.2-1.7-3-3.8l-21.7-73.5c-1.6-5.4-3.3-11.4-4.8-17.8-1.6-6.4-3.1-12.8-4.6-19.1-1.5-6.3-2.9-11.8-4.1-16.6l-.5-.1c.2 5 .4 10.6.5 16.7.1 6.2.2 12.4.2 18.6v79.9c0 2.6-.8 3.6-2.4 3.1l-22.2-6.9zM164.4 290c-2.2-.7-3-2.5-2.3-5.5L207 100c.6-2.2 1.8-3.3 3.6-3.1l42.1 4.7c2 .2 3.3 1.6 4 4.1l54.5 224.7c.7 3.9-.3 5.5-3 4.6l-39.4-12.4c-2.2-.7-3.5-2.3-4-4.9L239.9 192c-1.6-8.1-3.1-16.2-4.5-24.3-1.4-8-2.8-15.9-4-23.7l-.5-.1c-1.3 7.5-2.6 15.1-4 22.6-1.4 7.5-2.9 14.9-4.4 22.3L200 297.2c-.4 2.4-1.6 3.3-3.5 2.7l-32.1-9.9zm36.6-25.3 5.8-39.1 48.9 11.6 6.7 44.5-61.4-17z"
      />
      <path
        fill="currentColor"
        d="M311.7 334.8c-2 .8-3.1-.4-3.1-3.7V112c0-3.3 1-5 3.1-5.3l82.4-11.4c1.6-.2 2.3 1.2 2.3 4.1v36.3c0 2.9-.8 4.6-2.3 4.9l-50.7 9.8V189l46.3-11.1c1.6-.4 2.4.9 2.4 3.9v33.9c0 3-.8 4.7-2.4 5.1l-46.3 13.5v40l50.7-17.1c1.6-.5 2.3.7 2.3 3.6v36.3c0 2.9-.8 4.7-2.3 5.3l-82.4 32.4zM451 283.6c-14.3 5.7-25 4.8-31.9-3-7-7.9-10-22.8-8.8-44.7.2-3.2 1.1-5 2.6-5.5l22.4-7c1.5-.5 2.2.6 2.1 3.2-.1 6.6 1 11.3 3.5 14 2.4 2.7 6.1 3.1 11 1.5 4.8-1.7 8.3-4 10.5-7.1 2.2-3 3.2-7.1 3.2-12.1 0-2.1-.3-4-.8-5.7-.5-1.7-1.4-3.1-2.7-4.4-1.3-1.2-3.1-2.4-5.5-3.4l-22.6-12c-5.7-3.1-10.2-6.9-13.4-11.4-3.3-4.6-5.6-10.2-7-16.7-1.4-6.6-2.1-14.4-2.1-23.5.1-18 3.5-32.5 10.2-43.4 6.6-10.7 16.2-16.8 28.7-18.5 9-1.2 16.4 0 22.1 3.5 5.6 3.5 9.7 9.1 12.2 16.8 2.5 7.7 3.4 17.9 2.8 30.8-.1 3.2-.8 4.9-2 5.2l-19.5 4.3c-.7.2-1.2-.2-1.6-1-.4-.8-.5-2-.4-3.5.2-5.2-.8-9.4-3.1-12.4-2.3-3.1-5.6-4.2-9.9-3.4-4 .7-7 2.5-9 5.4-2 2.9-3 6.7-3 11.5 0 2.4.3 4.5 1 6.2.6 1.8 1.7 3.3 3 4.7 1.4 1.4 3.2 2.8 5.5 4.2l21.6 12.6c5 2.9 8.9 6.4 11.8 10.6 2.9 4.1 4.8 9.2 6 15.3 1.1 6.1 1.6 13.3 1.5 21.8-.1 17.2-3 31.2-8.8 42.2-5.8 11-15.6 19.4-29.6 24.9zM537 249.5c-11.6 4.6-20.7 2.3-27-7.2-6.4-9.7-9.7-26.4-9.7-50.1V149c0-23.8 3.3-42.4 9.7-55.3 6.3-12.7 15.4-19.8 27-21.4 11.2-1.5 19.5 2.9 25 13.1 5.4 10 8.1 25.7 8.1 47.2v38.9c0 21.3-2.7 38.4-8.1 51.4-5.4 13.2-13.7 22.1-25 26.6zm0-37.6c4.9-1.7 8.6-5.8 10.9-12.2 2.3-6.4 3.5-14.8 3.5-25.4v-34.5c0-10.6-1.2-18.4-3.5-23.6-2.3-5.2-6-7.3-10.9-6.4-4.9.9-8.7 4.6-11.1 10.9-2.5 6.4-3.8 15.1-3.8 26.1v36c0 11 1.3 19.1 3.8 24.1s6.2 6.7 11.1 5zm16.5 74.8c-4 1.8-7.4 1.3-10.4-1.5-2.9-2.9-5.1-8.4-6.6-16.4-1.5-8.1-2.1-18.9-1.8-32.5 0-2.4.6-3.9 1.7-4.3l13.1-5.1c1-.4 1.5.7 1.5 3.3-.1 8.4.3 14.8 1.2 19.3.9 4.5 2.5 6.2 5 5.2.9-.4 1.7-.9 2.4-1.5s1.3-1.3 1.9-2.1c.6-.6 1-.6 1.3-.2.3.5.4 1.3.4 2.5V274c0 2-.3 3.6-1 4.7-.9 1.4-2.1 2.9-3.6 4.4-1.4 1.5-3.1 2.7-5.1 3.6zM609.5 220.7c-9 3.6-16.1 1.4-20.9-6.9-4.9-8.4-7.4-23.4-7.4-45V72.7c0-2.3.5-3.5 1.5-3.6l14.3-2c.9-.1 1.3.9 1.3 3.1v91.5c0 9.3.9 16.3 2.6 21 1.7 4.6 4.6 6.2 8.6 4.9 3.9-1.3 6.6-4.8 8.2-10.4 1.6-5.6 2.4-12.8 2.4-21.8V67.1c0-2.1.4-3.3 1.3-3.4L634 62c.8-.1 1.3.9 1.3 2.9v87.8c0 19.6-2.1 34.9-6.3 45.9-4.4 11.3-10.8 18.6-19.5 22.1zM646.4 203.4c-.8.3-1.2-.5-1.2-2.6V63.5c0-2 .4-3.1 1.2-3.2l11.5-1.6c.8-.1 1.2.8 1.2 2.8v134c0 2-.4 3.1-1.2 3.4l-11.5 4.5zM669.7 194.3c-.7.3-1.1-.5-1.1-2.5V60.1c0-2 .4-3 1.1-3.1l13.5-1.9c.5-.1.9.6 1.2 1.9l9.2 48.9c.7 3.6 1.4 7.4 2.1 11.5.7 4.1 1.4 8.1 2 12 .6 3.9 1.1 7.4 1.5 10.5l.2-.1c-.1-3.4-.3-7.3-.4-11.6-.1-4.3-.2-8.7-.2-13.1s-.1-8.3-.1-11.6V55.8c0-1.8.3-2.8.9-2.9l9.1-1.3c.6-.1.9.8.9 2.6v121.6c0 1.8-.3 2.8-.9 3.1l-12.2 4.8c-.5.2-.9-.3-1.1-1.5l-8.7-45.1c-.7-3.5-1.4-7.3-2-11.6-.7-4.3-1.3-8.6-2-12.9-.7-4.3-1.3-8.1-1.8-11.4l-.2.1c.1 3.7.2 7.8.2 12.4 0 4.6.1 9.2.1 13.8V187c0 1.9-.4 3-1.1 3.3l-10.2 4zM714.1 176.8c-.7.3-1-.7-.7-2.8l13.5-122.9c.2-1.4.5-2.1 1-2.2l10.9-1.5c.5-.1.8.6 1 1.9L752 159.1c.2 1.8-.1 2.9-.6 3.1l-8.7 3.4c-.5.2-.8-.3-.9-1.6l-6.1-64.2c-.4-4.3-.8-8.6-1.2-13-.4-4.3-.7-8.6-1-12.9h-.1c-.3 4.5-.7 9-1 13.5-.4 4.5-.8 9.1-1.2 13.6l-6.2 69.3c-.1 1.6-.5 2.4-1 2.7l-9.9 3.8zm11.1-26.3 1.6-24.7 12.7-3.8 1.6 23-15.9 5.5zM310.7 434c-.4.2-.6 0-.6-.7v-59.9c0-.7.2-1.1.6-1.3l10.4-4.5c4.8-2.1 8.4-2 10.8.2 2.4 2.2 3.5 6.4 3.5 12.6 0 6.2-1.2 11.4-3.6 15.8-2.4 4.4-6 7.7-10.8 10l-5.3 2.5v21.7c0 .7-.2 1.1-.6 1.3l-4.4 2.3zm5.1-32.9 5.1-2.4c3.1-1.5 5.4-3.4 6.8-5.9 1.4-2.5 2.1-5.7 2.1-9.5 0-4.2-.7-6.9-2.2-8.1-1.5-1.2-3.7-1.2-6.9.2l-5 2.2v23.5zM342.8 417.9c-.4.2-.6 0-.6-.7v-57.7c0-.7.2-1.1.6-1.2l20.1-8.7c.4-.2.5.1.5.7v5.7c0 .7-.2 1.1-.5 1.2l-15.3 6.8v17.7l14-6.5c.4-.2.5.1.5.7v5.4c0 .7-.2 1.1-.5 1.2l-14 6.6v18.6l15.3-7.6c.4-.2.5.1.5.7v5.7c0 .7-.2 1.1-.5 1.2l-20.1 10.2zM379.3 399.5c-.4.2-.6 0-.6-.7V350l-9.3 4.1c-.4.2-.5-.1-.5-.7v-5.7c0-.6.2-1 .5-1.2l23.3-10.1c.3-.1.5.1.5.7v5.5c0 .6-.2 1-.5 1.2l-9 4v48.5c0 .6-.2 1-.6 1.2l-3.8 2zM399.5 389.4c-.3.2-.5-.1-.5-.7v-54c0-.6.2-1 .5-1.2l3.7-1.6c.3-.1.5.1.5.7v53.7c0 .6-.2 1-.5 1.2l-3.7 1.9zM420.8 379.7c-3.8 1.9-6.6 1.9-8.4-.1-1.8-2-2.6-5.4-2.4-10.4 0-1 .2-1.5.6-1.7l3.4-1.7c.4-.2.6.1.6 1 0 3.2.5 5.3 1.6 6.1 1.1.9 2.7.7 4.9-.3 2.1-1 3.7-2.5 4.8-4.3 1.1-1.8 1.6-4.1 1.6-6.7 0-1.3-.1-2.4-.4-3.2-.2-.8-.7-1.5-1.2-1.9-.6-.5-1.4-.8-2.4-1l-6.8-1.8c-1.5-.4-2.7-1.1-3.6-2-.9-.9-1.6-2.2-2-3.7-.4-1.6-.6-3.4-.6-5.6 0-4.7.9-8.7 2.7-11.9 1.7-3.2 4.3-5.5 7.6-6.9 2.3-1 4.2-1.2 5.8-.8 1.6.4 2.8 1.6 3.7 3.4.8 1.8 1.1 4.4 1 7.8-.1 1-.2 1.6-.5 1.7l-3.3 1.5c-.2.1-.3 0-.4-.2-.1-.2-.1-.6-.1-1.1.1-2.7-.4-4.5-1.5-5.5s-2.7-1-4.8-.1c-1.8.8-3.2 2-4.2 3.6-.9 1.6-1.4 3.6-1.5 6 0 1.2.1 2.3.4 3.1.3.8.7 1.5 1.3 2 .6.5 1.5.9 2.5 1.3l6.7 1.9c1.4.4 2.6 1 3.4 1.9.9.9 1.5 2.1 1.9 3.6.4 1.5.6 3.4.5 5.8 0 4.6-.9 8.7-2.6 12.1-1.6 3.4-4.4 6.1-8.3 8.1zM448.2 365.9c-3.6 1.8-6.3 1.5-8.2-.8-1.9-2.4-2.9-6.7-2.9-13v-16.3c0-6.3 1-11.5 2.9-15.7 1.9-4.1 4.7-7 8.3-8.5 2.3-1 4.3-1.2 6-.5 1.7.7 3 2.2 3.8 4.4.8 2.3 1.1 5.3.8 9.1 0 .3-.1.5-.1.8-.1.3-.2.4-.3.5l-3.2 1.5c-.3.1-.5-.1-.4-.7.1-3.6-.4-6.2-1.5-7.7s-2.8-1.8-5-.8-3.9 2.8-5.1 5.4c-1.2 2.7-1.8 6-1.8 10.1V350c0 4.1.6 6.9 1.8 8.4 1.2 1.5 2.9 1.7 5.1.6 2.2-1.1 3.9-3 5.1-5.5 1.2-2.6 1.6-5.6 1.4-9 0-.6.1-.9.4-1.1l3.2-1.5c.3-.1.5.2.5.9.2 3.5-.2 6.8-1 9.8-.8 3.1-2.1 5.7-3.7 8-1.8 2.3-3.8 4.1-6.1 5.3zM462 358c-.3.2-.5-.1-.4-.8l9.1-53.9c.1-.4.2-.7.5-.8l4.1-1.8c.3-.1.4 0 .5.4l8.9 44.5c.1.6 0 .9-.4 1.1l-3.2 1.6c-.3.1-.4 0-.5-.4l-5.8-31c-.3-1.4-.5-2.9-.8-4.3-.3-1.5-.6-2.9-.9-4.4-.2 1.7-.5 3.3-.8 5-.3 1.7-.5 3.4-.8 5.1l-5.9 37.1c-.1.5-.2.8-.5 1L462 358zm5-14.1.9-6.8 10.8-5.1.9 5.9-12.6 6zM488.4 344.7c-.3.1-.4-.1-.4-.6v-48c0-.6.1-.9.4-1l7.7-3.3c3.1-1.3 5.4-1.2 6.8.5 1.4 1.7 2.2 4.7 2.2 9.2 0 3.5-.4 6.6-1.3 9.4-.8 2.7-2 4.9-3.6 6.6v.1l6.2 17.2c.1.2.1.5.1.7-.1.2-.2.3-.3.4l-3.3 1.6c-.2.1-.4 0-.5-.3l-6-17-4.6 2.2v19.9c0 .6-.1.9-.4 1l-3 1.4zm3.3-28.1 4-1.9c2-.9 3.5-2.3 4.4-4.1.9-1.8 1.3-4.2 1.3-7.1 0-2.9-.4-4.8-1.2-5.7-.8-.9-2.3-.9-4.3 0l-4.3 1.9v16.9zM511.4 333.2c-.2.1-.4-.1-.4-.6V286c0-.5.1-.9.4-1l2.7-1.2c.2-.1.4.1.4.6v46.3c0 .5-.1.9-.4 1l-2.7 1.5zM517.8 329.9c-.3.1-.4-.1-.3-.7l7.8-49.6c.1-.4.2-.7.4-.8l3.5-1.5c.2-.1.4 0 .5.4l7.6 41.6c.1.5 0 .9-.3 1l-2.8 1.4c-.2.1-.4 0-.4-.3l-4.9-28.9c-.2-1.3-.5-2.7-.7-4.1-.2-1.4-.5-2.7-.7-4.1-.2 1.5-.4 3.1-.7 4.6-.2 1.6-.5 3.1-.7 4.7l-5 34.2c-.1.5-.2.8-.4.9l-2.9 1.2zm4.2-12.8.7-6.3 9.2-4.4.8 5.5-10.7 5.2zM44.8 337.4l261 98.1v-61.4l-261-84.2zM752 210.9l-180.2 92.3v-46.4l180.2-80z"
      />
    </svg>
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
