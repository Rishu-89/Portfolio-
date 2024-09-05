
import project1 from "../assets/projects/e-commerce.jpg";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/news.jpeg";
import project4 from "../assets/DuoStudio.avif";
import project5 from "../assets/projects/chess.jpeg";
export const HERO_CONTENT = `I am a passionate full stack web developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React, Javascript, Tailwind CSS and Next.js(Familiar), as well as back-end technologies like Node.js, Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack web developer with a passion for creating efficient and user-friendly web applications. With 1+ years of experience, I have worked with a variety of technologies, including React, Javascript, Tailwind CSS, Next.js, Node.js, MySQL, Express.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I learn C++ with DSA and enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Swami Vivekanand college of techonology",
    company: "CSE.",
    technologies: ["CGPA-7.3"],
  },
  {
    year: "2020 - 2021",
    role: "D.A.V public School",
    company: "Intermediate, CBSC Board",
    technologies: ["Percentage-76"],
  },
  {
    year: "2019 - 2020",
    role: "D.A.V public School",
    company: "Highschool, CBSC Board",
    technologies: ["Percentage-73"],
  },
];

export const PROJECTS = [
  {
    title: "E-commerce Shopping Website",
    image: project1,
    description: "A fully responsive e-commerce platform built with React and Bootstrap. It features advanced search and filtering by price and categories, with robust state management via the Context API. The custom-built backend, powered by MongoDB, includes a comprehensive admin dashboard for managing products and users. Enhanced security is ensured through secure authorization and authentication processes.",
    technologies: ["React", "Bootstrap", "Context API", "Node.js", "Express.js", "MongoDB"],
    link: "https://ecoomerce-frontend.onrender.com"
  },
  {
    title: "Portfolio Website",
    image: project2,
    description: "A personal portfolio website showcasing projects, skills, and contact information. Developed a responsive and visually appealing portfolio website using React, a popular JavaScript library for building user interfaces, and Tailwind CSS, a utility-first CSS framework for styling and layout.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "GSAP"],
    link: "#home"
  },
  {
    title: "Chess Game",
    image: project5,
    description: "A real-time chess game built with Socket.IO, EJS, HTML, CSS, and JavaScript. The project features a backend developed with Express.js, allowing two players to compete against each other seamlessly. The application supports live gameplay with smooth interactions and dynamic updates, ensuring an engaging and responsive user experience.",
    technologies: ["Chess.js", "EJS", "Socket.io", "JavaScript", "Express.js"],
    link: "https://chess-1-kguh.onrender.com"
  },
  {
    title: "Duo Studio Clone",
    image: project4,
    description: "A Duo Studio clone developed using HTML, CSS, JavaScript. The project leverages GSAP for advanced animations and Locomotive Scroll for smooth scrolling effects, providing a visually engaging and interactive user experience. The design mimics the original Duo Studio layout, showcasing intricate details and dynamic interactions. The application is fully responsive, ensuring a seamless experience across various devices and screen sizes..",
    technologies: ["HTML", "CSS", "JavaScript","Locomotive Js","GSAP"],
    link: "https://rishu-pandey.netlify.app/"
  },
  {
    title: "NewsFinder",
    image: project3,
    description: "A responsive news webpage built with HTML, CSS, Bootstrap, and JavaScript. It includes a robust search functionality to find any news articles quickly. The site integrates with a third-party API to fetch and display the latest news, ensuring up-to-date and relevant content. The design is user-friendly, providing an intuitive browsing experience across all devices.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "99-Shope Bholaram BhawarKua Indore Madhya Pradesh",
  phoneNo: "+91 9893032668",
  email: "rishu22102003@gmail.com",
};
