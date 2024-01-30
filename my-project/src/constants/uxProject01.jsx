import { ux01_Hero } from "../ux01Assets";
import { design, research, development, testing } from "../assets";
import * as images from '../ux01Assets'; 

export const hero = {
    subheader: "UX Case Study",
    header: "Smart Assistant",
    content: "The goal of this case study is to share experience in embarking customised design sprint workshop to start a new project. Please note, since the project is under NDA, the sensitive information on some images was greyed out.",
    image: images.ux01_Hero,
}

export const activities = [
    {
        icon: testing,
        header: "UX Activities",
        content: "Design Sprint Workshop, Business Canvas, Concept Sketching, User Scenario, Prototyping",
    },
    {
        icon: research,
        header: "Tools",
        content: "Whiteboard, Miroboard, Sketch, Invision",
    },
    {
        icon: development,
        header: "Team",
        content: "Product Owner, UX Designer, Business Analyst, Project Manager, Technical Lead, Frontend Developer",
    },
    {
        icon: design,
        header: "My Role",
        content: "Design Sprint facilitator and UX Designer ",
    },
]

export const overview = [
    {
        subheader: "Challenge",
        content: "HOW MIGHT WE help accountants who dissatisfied with the current solution stay up to date with frequent low updates and get flexibility in calculations and be able to quickly adjust to client needs by creating MVP (Minimum Valuable Product)",
        image: "",
    },
    {
        subheader: "Project Objective",
        content: "The main project objective was to create MVP within specified timeframe to validate the product idea with potential clients.",
        image: "",
    },
    {
        subheader: "Approach",
        content: "Once the project started, the team gathered in one location for a 2-day workshop to get an every team member on the same page. Overall, the product team included Product Owner, UX Designer (Me), Business Analyst, Technical Lead, Project Manager and Frontend Developer.Since the team had only 2 days for face-to-face collaboration customized version of Design Sprint by GV seemed as a perfect fit for our needs and time limits. All activities were carefully planned beforehand.According to the schedule, day 1 was focused on the product vision in order to get big picture, while the Day 2 was completely dedicated to the product MVP. The next week after the workshop the team was working on detailed design and requirements clarification — just enough to start the implementation process and conduct some usability testing in parallel.",
        image: images.ux01_designSprintSch,
    },
]

export const day01 = {
    header: "DAY 1 — FOCUS ON THE PRODUCT VISION",
    steps: [
        {
            subheader: "Goal of Day 1",
            content: "According to the schedule, the kick-off presentation went first. The main purpose of it was to explain the team what we were going to do and why it was important. In addition, it served as an ice breaker along with short team introduction. Following that, we started digging into details performing planned activities one-by-one.",
            image: "",
        },
        {
            subheader: "Product Owner Interview",
            content: "Even though we did not have subject matter experts invited, product owner provided us with very solid knowledge about the domain. So UX Designer and Business Analyst  interviewed the product owner to elicit the very first insights required to fill in a product canvas.",
            image: "",
        },
        {
            subheader: "Product Canvas",
            content: "In order to fill in the product canvas the team aggregated information about product (product idea, value proposition, long term goal), audience and market (industry, customer segment, market type), money (cost structure, revenue stream, addressable market scarcity), users and their problems (problem statements, problem type — unworkable, unavoidable, urgent, underserved, how users currently solve defined problems), competitors and success metrics. It might seem too overwhelmed, but it was pretty useful to have full product information in one place, indeed.",
            image: images.ux01_ProductCanvas,
        },
        {
            subheader: "“AS-IS” user journey and How-Might-We notes",
            content: "Once we gathered all required product insights, we started digging into current user experience. So, the “as-is” user journey with a clearly defined end user and the goal was drawn. After that, we took a precise look at each step of the “as-is” user journey and defined where problems were and how our future product could fix them.As the original design sprint framework suggests, we used “How Might We” tool to reshape problems into opportunities. For example, we identified that end users might experience lack of specific knowledge required to complete task properly, so the opportunity might sound like “HMW incorporate knowledge base to our product”.In the end, it became pretty evident what part of current user experience and problems the product MVP was going to improve.",
            image: images.ux01_AsIsHmw,
        },
        {
            subheader: "Day 1 Retrospect",
            content: "We finished Day 1 having clear picture of the product vision, current user experience and the concept of the product MVP. As a homework, we asked the product owner to look for and share some solutions (from both direct and indirect competitors) that, from his point of view, might solve similar problems.",
            image: "",
        },
    ]
}


