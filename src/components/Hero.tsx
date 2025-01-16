import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/barbershop.svg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Autonomia e eficiência para o seu negócio
            </h1>
        
          
<ul className="text-xl">
            <li className="list-image-[
url(https://media.geeksforgeeks.org/wp-content/uploads/20240303100755/academic-cap.png)] pb-1">
                Controle completo da agenda
              </li>
              <li className="list-image-[
url(https://media.geeksforgeeks.org/wp-content/uploads/20240303100755/academic-cap.png)] pb-1">
                Notificações em tempo real
              </li>
              <li className="list-image-[
url(https://media.geeksforgeeks.org/wp-content/uploads/20240303100755/academic-cap.png)] pb-1">
                Redução de ausências
              </li>
              <li className="list-image-[
url(https://media.geeksforgeeks.org/wp-content/uploads/20240303100755/academic-cap.png)] pb-1">
                Relatórios detalhados
              </li>
              </ul>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-primary rounded-md ">
                Teste grátis agora mesmo!
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="416"
              height="417"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              // placeholder="blur"
            />
          </div>
        </div>
      </Container>
      {/* <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 ">
            Trusted by <span className="text-indigo-600">2000+</span>{" "}
            customers worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 ">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 ">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 ">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 ">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 ">
              <SonyLogo />
            </div>
          </div>
        </div>
      </Container> */}
    </>
  );
}


