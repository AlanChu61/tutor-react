import Nav from './Nav';
import TextSlider from './textSlider/TextSlider';

function Header() {
    const textList = [
        "Passionate Educator",
        "Mathematics Tutor",
        "Science Advocate",
        "Inspiring Mentor",
        "Engaging Instructor",
        "Curriculum Developer",
        "Educational Consultant",
        "Student Motivator",
        "Lifelong Learner"
    ];
    const interval = 1000;

    return (
        <header className='Header'>
            <Nav />
            <TextSlider textList={textList} interval={interval} />
        </header>
    );
}

export default Header;
