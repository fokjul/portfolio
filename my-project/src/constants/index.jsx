import { bgImage, design, development, research, testing, banking, flixbus, lucasys, chronometer } from "../assets";
export const navLinks = [
    {
        id: "home",
        title: "Home",
        src: "/",
    },
    {
        id: "projects",
        title: "Projects",
        src: "/projects",
    },
]

export const heroCopy = {
    subheader: "UX Designer",
    headerPart1: "Hi There, I'm ",
    name: "Julia Fok",
    headerPart2: "",
    content: "Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.",
    image: bgImage,
}

export const aboutCopy = {
    header: "About Me",
    content: "I'm Yuliia Fok, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.",
    stat: [
        {
            id: "projects",
            number: "30",
            label: "Projects Done",
        },
        {
            id: "experience",
            number: "10+",
            label: "Years of Experience",
        },
        {
            id: "clients",
            number: "20+",
            label: "Happy Clients",
        },
    ]
}

export const servicesCopy = {
    header: "Services",
    content: "Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.",
    items: [
        {
            id: "development",
            title: "Web Development",
            description: "I specialize in web development and design, creating visually appealing, user-friendly digital experiences.",
            icon: development,
        },
        {
            id: "design",
            title: "UX design",
            description: "I specialize in web development and design, creating visually appealing, user-friendly digital experiences.",
            icon: design,
        },
        {
            id: "research",
            title: "User Research",
            description: "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
            icon: research,
        },
        {
            id: "testing",
            title: "Usability Testing",
            description: "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
            icon: testing,
        },
    ]
}

export const portfolioCopy = {
    header: "Featured Projects",
    content: "Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.",
    items: [
        {
            id: "project01",
            title: "Smart Assistant MVP Design",
            description: "UX/UI Design",
            image: lucasys,
        },
        {
            id: "project02",
            title: "Flixbus Flow Redesign",
            description: "UX/UI Design / User Testing",
            image: flixbus,
        },
        {
            id: "project03",
            title: "Cronometer",
            description: "UX Design",
            image: chronometer,
        },
    ]
}

