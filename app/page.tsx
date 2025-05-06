import Navbar from "@/components/navbar";
import Header from "@/components/header";
import ContainerR from "@/components/container-right";
import ProgressBar from "@/components/progress-bar";
import ContainerFill from "@/components/container-fill";
import ContactBtn from "@/components/contact-btn";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <main>

        <Header />
        <Navbar />

        <div className="my-15">
          <ContainerFill title={'Om meg'}>

          {/* <p className="px-4 text-sm text-justify">Opptatt av livslang læring, personvern og sikkerhet. En lagspiller med evne til å arbeide selvstendig. Motivert av egenlæring. Målrettet. Kreativ. Bakgrunn innen informasjonsvitenskap. </p> */}

          <p className="p-2 text-sm text-justify">Hei!  </p>
          <p className="p-2 text-sm text-justify">Jeg er Heikku (/ˈheɪˌkʊ/), en 26-åring med stor interesse for koding og livslang læring - og mye annet.</p>
          <p className="p-2 text-sm text-justify">Akkurat nå står det ikke så mye informasjon her, men straks skal alt komme på plass. Inntil videre kan du ta en titt på prosjektene mine på GitHub eller WebDev-bloggen min, så kan du komme tilbake litt senere.</p>
          <p className="p-2 text-sm text-justify">Vi høres!  </p>


          </ContainerFill>
        </div>

        <div className="my-15">
          <ContainerR title='Frontend'>

            <ul className="flex flex-col items-end">
              <li className="pt-4">HTML ⁙</li>
              <ProgressBar level={'50%'} />

              <li className="pt-4">CSS ⁘</li>
              <ProgressBar level={'50%'} />

              <li className="pt-4">Tailwind CSS ⁙</li>
              <ProgressBar level={'25%'} />

              <li className="pt-4">JavaScript ⁘</li>
              <ProgressBar level={'25%'} />
            </ul>

          </ContainerR>
        </div>

        <div className="my-15">
          <ContainerR title='UI / UX'>

            <ul className="flex flex-col items-end">
              <li className="pt-4">Figma ⁙</li>
              <ProgressBar level={"25%"}/>

              <li className="pt-4">ProCreate ⁘</li>
              <ProgressBar level={'100%'} />

              <li className="pt-4">Blender ⁙</li>
              <ProgressBar level={'25%'} />

            </ul>

          </ContainerR>
        </div>

        <div className="my-15">
          <ContainerR title='Admin'>

            <ul className="flex flex-col items-end">

              <li className="pt-4">Alma ⁘</li>
              <ProgressBar level={'50%'} />

              <li className="pt-4">Microsoft 365 ⁙</li>
              <ProgressBar level={"75%"}/>

              <li className="pt-4">Visma Business ⁘</li>
              <ProgressBar level={'25%'} />

              <li className="pt-4">Microflex NXMenu ⁙</li>
              <ProgressBar level={"75%"}/>

            </ul>

          </ContainerR>
        </div>

        <div>
          <ContainerFill title={'Prosjekter'}>
            <p>abc</p>
          </ContainerFill>
        </div>
        
        {/* Karusell */}
        <Carousel plugins={[Autoplay({delay:3000,}),]}>
          <CarouselContent>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>


          </CarouselContent>
        </Carousel>
        {/* <div className="my-15">
          <ContainerR title='Erfaringer'>
            <p>Kurs innen IT</p>
            <p>Kundeservice</p>
            <ul>
              <li></li>
            </ul>
          </ContainerR>
        </div> */}

        <div className="mb-5">
          <ContactBtn />
        </div>
        <footer className="flex h-[10vh] w-full p-4 bg-amber-800">
          <p className="text-white"></p>
        </footer>
      </main>
    </div>
  );
}
