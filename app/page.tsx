import Navbar from "@/components/navbar";
import Header from "@/components/header";
import ContainerR from "@/components/container-right";
import ContainerL from "@/components/container-left";
import ProgressBar from "@/components/progress-bar";
import ContainerFill from "@/components/container-fill";
import ContactBtn from "@/components/contact-btn";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <main>

        <Header />
        <Navbar />

        <div className="my-15">
          <ContainerFill title={'Om meg'}>

          <p className="px-4 text-sm text-justify">Opptatt av livslang læring, personvern og sikkerhet. En lagspiller med evne til å arbeide selvstendig. Motivert av egenlæring. Målrettet. Kreativ. Bakgrunn innen informasjonsvitenskap. </p>

          </ContainerFill>
        </div>

        <div className="my-15">
          <ContainerR title='Frontend'>

            <ul className="flex flex-col items-end">
              <li className="pt-4">HTML ⁙</li>
              <ProgressBar />

              <li className="pt-4">CSS ⁘</li>
              <ProgressBar />

              <li className="pt-4">Tailwind CSS ⁙</li>
              <ProgressBar />

              <li className="pt-4">JavaScript ⁘</li>
              <ProgressBar />
            </ul>

          </ContainerR>
        </div>

        <div className="my-15">
          <ContainerR title='Design'>

            <ul className="flex flex-col items-end">
              <li className="pt-4">Figma ⁙</li>
              <ProgressBar />

              <li className="pt-4">ProCreate ⁘</li>
              <ProgressBar />

              <li className="pt-4">Blender ⁙</li>
              <ProgressBar />

            </ul>

          </ContainerR>
        </div>

        <div className="my-15">
          <ContainerR title='Tidligere erfaringer'>
            <p>Dette kan f.eks. være en liste over tidligere arbeidsforhold.</p>
            <p>Kurs innen IT</p>
            <p>Kundeservice</p>
            <ul>
              <li></li>
            </ul>
          </ContainerR>
        </div>

        <div>
          <ContactBtn />
        </div>
        <footer className="flex h-[10vh] w-full p-4 bg-amber-800">
          <p className="text-white">abc</p>
        </footer>
      </main>
    </div>
  );
}
