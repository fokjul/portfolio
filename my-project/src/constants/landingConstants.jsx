import { bgImage, design, development, research, testing, banking, flixbus, lucasys, chronometer, testAuthor, email, location, dribble, instagram } from "../assets";

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
    
}

export const skillsCopy = {
    header: "Core Skills",
    content: "I excel in essential design skills, creating visually stunning and functional digital experiences. From UI design to UX research, my passion is to craft effective and memorable digital solutions.",
    barchartWidth: "350",
    skills: [
        {
            id: "skill01",
            name: "skill01",
            scale: "7",
        },
        {
            id: "skill02",
            name: "skill02",
            scale: "7",
        },
        {
            id: "skill03",
            name: "skill03",
            scale: "7",
        },
        {
            id: "skill04",
            name: "skill04",
            scale: "7",
        },
        {
            id: "skill05",
            name: "skill05",
            scale: "7",
        },
        {
            id: "skill06",
            name: "skill06",
            scale: "6",
        },
    ],
}

export const testimonialCopy = {
    header: "Testimonials",
    item: [
        {
            id: "1",
            content: "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
            name: "John Smith",
            role: "CEO of XYZ Company",
            photo: testAuthor,

        },
        {
            id: "2",
            content: "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
            name: "John Fok",
            role: "CEO of XYZ Company",
            photo: testAuthor,
        },
    ]
}

export const contactsCopy = {
    header: "Get in Touch",
    content: "Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.",
    contacts: [
        {
            id: "email",
            type: "contact@gmail.com",
            icon: email,
        },
        {
            id: "location",
            type: "Vancouver, Canada",
            icon: location,
        }
    ],
    socials: [
        instagram,
        dribble,
    ]

}

