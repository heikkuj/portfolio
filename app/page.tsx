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

          {/* <p className="px-4 text-sm text-justify">Opptatt av livslang læring, personvern og sikkerhet. En lagspiller med evne til å arbeide selvstendig. Motivert av egenlæring. Målrettet. Kreativ. Bakgrunn innen informasjonsvitenskap. </p> */}

          <p className="p-2 text-sm text-justify">Hei!  </p>
          <p className="p-2 text-sm text-justify">Jeg er Heikku (/ˈheɪˌkʊ/), en 26-åring med stor interesse for koding og livslang læring - og mye annet.</p>
          <p className="p-2 text-sm text-justify">Akkurat nå står det ikke så mye informasjon her, men straks skal alt komme på plass. Inntil videre kan du ta en titt på prosjektene mine på GitHub eller WebDev-bloggen min, så kan du komme tilbake litt senere.</p>
          <p className="p-2 text-sm text-justify">Vi høres!  </p>


          </ContainerFill>
        </div>

        {/* FRONTEND SKILLS SECTION */}
        <div>
          <ContainerR title={'Frontend'}>
            <div className="flex flex-col flex-wrap">

              <ProgIntermediate title={'HTML'} />
              <ProgIntermediate title={'CSS'} />
              <ProgIntermediate title={'Tailwind CSS'} />
              <ProgNovice title={'JavaScript'} />

            </div>
          </ContainerR>
        </div>

        {/* <div className="my-15">
          <ContainerR title='Frontend'>

              <li className="pt-4">Python ⁙</li>
              <ProgressBar level={'25%'} />
            </ul>

          </ContainerR>
        </div> */}

        {/* UI / UX SKILLS SECTION */}
        <div className="my-15">

          <ContainerR title='UI / UX'>
          <ProgNovice title={'Figma'} />
          <ProgPro title={'ProCreate'} />
          <ProgNovice title={'Blender'} />

          </ContainerR>
        </div>

        {/* ADMIN SKILLS SECTION */}
        <div className="my-15">
          <ContainerR title='Admin'>

            <ProgIntermediate title={'ALMA'} />
            <ProgAdvanced title={'Office 365'} />
            <ProgNovice title={'Visma Business'} />
            <ProgPro title={'Microflex NXMenu'} />

          </ContainerR>
        </div>


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
