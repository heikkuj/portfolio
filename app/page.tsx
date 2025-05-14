import Navbar from "@/components/navbar";
import Header from "@/components/header";
import ContainerR from "@/components/container-right";
import ContainerFill from "@/components/container-fill";
import ContactBtn from "@/components/contact-btn";
import { 
  ProgNovice,
  ProgIntermediate,
  ProgAdvanced,
  ProgPro
 } from "@/components/progress-bar";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <main>

        <Header />
        <Navbar />

        <div className="my-15">
          <ContainerFill title={'Om meg'}>

          <div className="">
            <p className="p-2 text-sm text-center">Hei!  </p>
            <p className="p-2 text-sm text-center">Jeg er Heikku (/ˈheɪˌkʊ/), en 26-åring med stor interesse for koding og livslang læring - og mye annet.</p>
            <p className="p-2 text-sm text-center">Akkurat nå står det ikke så mye informasjon her, men straks skal alt komme på plass. Inntil videre kan du ta en titt på prosjektene mine på GitHub eller WebDev-bloggen min, så kan du komme tilbake litt senere.</p>
            <p className="p-2 text-sm text-center">Vi høres!  </p>
          </div>


          </ContainerFill>
        </div>

        {/* CODE STACK SECTION */}
        <div>
          <ContainerR title={'KODE'}>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgIntermediate title={'React'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgIntermediate title={'HTML'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgIntermediate title={'CSS'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgIntermediate title={'Tailwind'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgIntermediate title={'JavaScript'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgNovice title={'Python'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgNovice title={'PHP'} />
            </div>
          </ContainerR>
        </div>

        {/* UI / UX SKILLS SECTION */}
        <div className="my-15">

          <ContainerR title='UI / UX'>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgNovice title={'Figma'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgPro title={'ProCreate'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgNovice title={'Blender'} />
            </div>

          </ContainerR>
        </div>

        {/* ADMIN SKILLS SECTION */}
        <div className="my-15">
          <ContainerR title='Admin'>

            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgIntermediate title={'ALMA'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgAdvanced title={'Office 365'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgNovice title={'Visma Business'} />
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[30%]">
              <ProgPro title={'Microflex'} />
            </div>

          </ContainerR>
        </div>

        <div id="projects" className="my-15">
          <ContainerFill title={'Prosjekter'}>
            <p className="p-2 text-center">Etter hvert kan du finne prosjektene mine her. Inntil videre kan du finne dem på GitHub!</p>
          </ContainerFill>
        </div>

        <div className="mb-5">
          <ContactBtn />
        </div>
        <footer className="flex h-[5vh] w-full p-4">
          <p className="text-white"></p>
        </footer>
      </main>
    </div>
  );
}
