import Education from "./main/Education";
import AboutMe from "./main/AboutMe";
import Courses from "./main/Courses";
import Profolio from "./main/Profolio";

import ContactForm from "./main/ContactForm";

function Main() {
    return (
        <main className="container-fluid">
            <AboutMe />
            <Education />
            <Courses />
            <Profolio />
            <ContactForm />
        </main>
    );
}

export default Main;
