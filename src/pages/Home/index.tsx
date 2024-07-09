import { Header } from "../../components/Header";
import { Beginning } from "../../components/Beginning";
import { Speciality } from "../../components/Specialty";
import { AboutMe } from "../../components/AboutMe";
import { DownloadCV } from "../../components/DownloadCV";
import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Beginning />
        <Speciality />
        <AboutMe />
        <DownloadCV />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
