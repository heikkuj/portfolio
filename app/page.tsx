import Image from "next/image";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import ContainerR from "@/components/container-right";
import ContainerL from "@/components/container-left";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <main>

        <Header />
        <Navbar />

        <div className="my-15">
          <ContainerL title='Om meg'>
            Dette er et avsnitt om meg. Muligens. Må se mer på det.
          </ContainerL>
        </div>

        <div>
          <ContainerR title='Kompetanse'>
            <p>Her kan det være en liste over språk, frameworks, osv.</p>

            <ul className="flex flex-col items-end">
              <li className="pt-4">HTML</li>
              <li className="pt-4">CSS</li>
              <li className="pt-4">Tailwind CSS</li>
              <li className="pt-4">JavaScript</li>
            </ul>

          </ContainerR>
        </div>

        <div className="my-15">
          <ContainerL title='Tidligere erfaringer'>
            Dette kan f.eks. være en liste over tidligere arbeidsforhold.
            <ul>
              <li></li>
            </ul>
          </ContainerL>
        </div>
        <footer className="flex h-[10vh] w-full p-4 bg-amber-800">
          <p className="text-white">abc</p>
        </footer>
      </main>
    </div>
  );
}
