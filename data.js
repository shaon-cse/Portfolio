// ============================================================
// data.js  —  All content data & embedded images for Shaon's portfolio
// ============================================================

const IMG ={
    me: "./assets/shaon.jpg",
    me2: "./assets/shaon2.jpeg",
    p01: "./assets/P1.jpeg",
    p02: "./assets/P2.JPEG",
    p03: "./assets/P3.jpeg",
    p04: "./assets/P4.jpeg",
    p05: "./assets/P5.jpeg",
    p06: "./assets/P6.jpeg",
    p07: "./assets/P7.JPEG",
    p08: "./assets/P8.JPEG",
    p09: "./assets/P9.JPEG",
    proj_bdjobs: "./assets/BDJobs.png",
    proj_othoba: "./assets/Othoba.png",
    proj_booking: "./assets/Booking.png",
    proj_underwater: "./assets/Underwater.png",
    proj_livelab: "./assets/LiveLab.png",
    proj_crop:  "./assets/crop.jpg",
    proj_portfolio: "./assets/preview-home.png",
    proj_oldPortfolio: "./assets/OldPortfolio.png",
    proj_database: "./assets/databaseTesting.png",
    
    // Certificate images — add your cert screenshots/scans to assets/ and update these paths
    cert_testing:   "./assets/cert_testing.jpg",
    cert_html_css:  "./assets/cert_html_css.png",
    cert_cpp:       "./assets/cert_cpp.jpg",
    cert_python:    "./assets/cert_python.png",
    cert_rust:      "./assets/cert_rust.jpg",
    cert_html5:     "./assets/cert_html5.jpg",
    cert_compiler1: "./assets/cert_compiler1.jpg",
    cert_compiler2: "./assets/cert_compiler2.jpg",
    cert_wordpress: "./assets/cert_wordpress.png",
    cert_photo:     "./assets/cert_photo.jpg",
    cert_marketing: "./assets/cert_marketing.png",
    api1: "./assets/API1.png",
    api2: "./assets/API2.png",
    jmeter1: "./assets/Jmeter1.png",
    jmeter2: "./assets/Jmeter2.png",
    sql: "./assets/SQL.png",
};



const PROJECTS = [

  {
    id: 1,
    title: "Database Testing Project – E-Commerce Order Management System",
    img: IMG.proj_database,
    tags: ["Database Testing","Test Cases","SQL","SQA","MySQL"],
    desc: "This project demonstrates real-world database testing techniques using an E-Commerce Order Management System built with MySQL.",
    github: "https://github.com/shaon-cse/Database-Testing-Project-E-Commerce-Order-Management-System",
    demo: null,
    cat: "qa"
  },
  {
    id: 2,
    title: "BDJobs Website Testing",
    img: IMG.proj_bdjobs,
    tags: ["Manual Testing","Test Cases","Bug Reports","SQA"],
    desc: "Tested the Registration and Sign-In modules of BDJobs, designed and executed detailed test cases, identifying critical input validation and security bugs.",
    github: "https://github.com/shaon-cse/BDJobs-Testing",
    demo: null,
    cat: "qa"
  },
  {
    id: 3,
    title: "Othoba Website Testing",
    img: IMG.proj_othoba,
    tags: ["Manual Testing","Test Plan","Mind Map","SQA"],
    desc: "Created test plan, mind map, and 20 test scenarios; executed 17 test cases for Registration. Performed functional and UI testing with documented bug reports.",
    github: "https://github.com/shaon-cse/Othoba-Testing",
    demo: null,
    cat: "qa"
  },
  {
    id: 4,
    title: "Booking.Com Website Testing",
    img: IMG.proj_booking,
    tags: ["Manual Testing","Test Plan","Mind Map","SQA"],
    desc: "QA project analyzing Booking.com through exploratory testing, identifying critical bugs, designing test cases, and visualizing the system using an XMind mind map.",
    github: "https://github.com/shaon-cse/Booking.Com-QA-Testing",
    demo: null,
    cat: "qa"
  },
  {
    
    id: 5,
    title: "Crop Disease Detection System",
    img: IMG.proj_crop,
    tags: ["PyTorch","Flask","React.js","ResNet50","OpenCV","Tailwind CSS"],
    desc: "Full-stack AI solution to detect 15+ plant diseases from leaf images with 97.5% accuracy using ResNet50 & Transfer Learning. Features Grad-CAM heatmaps for Explainable AI.",
    github: "https://github.com/shaon-cse/Crop-Disease-Detection-System",
    demo: null,
    cat: "ai"
  },
  {
    
    id: 6,
    title: "Personal Portfolio",
    img: IMG.proj_portfolio,
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A modern, dark-themed personal portfolio website showcasing my work as an aspiring SQA Engineer, CSE Graduate, AI researcher, and Photographer.",
    github: "https://github.com/shaon-cse/Portfolio",
    demo: null,
    cat: "web"
  },
  {
    id: 7,
    title: "LiveLab",
    img: IMG.proj_livelab,
    tags: ["HTML","CSS","JavaScript","ReactJS"],
    desc: "Interactive real-time code editor platform where users write and run HTML, CSS, and JavaScript instantly on the same page.",
    github: "https://github.com/shaon-cse/LiveLab",
    demo: null,
    cat: "web"
  },

  {
    
    id: 8,
    title: "Personal Portfolio - Old one",
    img: IMG.proj_oldPortfolio,
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A personal portfolio website showcasing my work created during my undergarad studies",
    github: "https://github.com/shaon-cse/Old-Portfolio",
    demo: null,
    cat: "web"
  },
  
  
  {
    id: 9,
    title: "Underwater Image Enhancement",
    img: IMG.proj_underwater,
    tags: ["Python","OpenCV","Image Processing","Research"],
    desc: "Undergraduate thesis: Automated pipeline restoring underwater images using Gray World Algorithm, Histogram Equalization in HSV domain, and Unsharp Masking.",
    github: "https://github.com/shaon-cse/Underwater-Image-Enhancement",
    demo: null,
    cat: "ai"
  },
];

// ── CERTIFICATIONS ───────────────────────────────────────────
// Add your certificate images to assets/ and reference them here.
// img: path to the certificate screenshot/scan (e.g. "./assets/cert_testing.png")
// Use null if you don't have an image yet — a placeholder will show.

const CERTIFICATIONS = [
  {
    id: 1,
    title: "The Complete 2025 Software Testing Bootcamp",
    img: IMG.cert_testing,
    issuer: "Udemy",
    tags: ["Testing", "QA", "Manual Testing"],
    desc: "Comprehensive software testing course covering manual testing, agile methodologies, API testing with Postman, and test management with Jira.",
    link: "https://www.udemy.com/certificate/UC-6eb7d7af-52a0-4e65-805f-28c05c43f83b/",
    cat: "testing"
  },
  {
  id: 2,
  title: "Apply API Testing Fundamentals Using Postman",
  img: IMG.api2,
  issuer: "EDUCBA",
  tags: ["API Testing", "Postman", "QA"],
  desc: "Course covering core API testing fundamentals using Postman, including REST API concepts, request methods, assertions, and test collection management.",
  link: "https://coursera.org/verify/3Z310X9UD1JP",
  cat: "testing"
 },
 {
  id: 3,
  title: "Performance Testing with JMeter for Absolute Beginners",
  img: IMG.jmeter2,
  issuer: "Coursera",
  tags: ["JMeter", "Performance Testing", "DevOps"],
  desc: "Project-based course introducing performance testing concepts using JMeter, including load simulation, result analysis, and identifying application bottlenecks.",
  link: "https://coursera.org/verify/548HMEP4MDSX",
  cat: "testing"
 },
 {
  id: 4,
  title: "SQL Foundations",
  img: IMG.sql,
  issuer: "Microsoft",
  tags: ["SQL", "Database", "Microsoft"],
  desc: "Microsoft-authorized course covering SQL fundamentals including querying, filtering, joining tables, aggregations, and foundational database concepts.",
  link: "https://coursera.org/verify/509ZT7N9GSU7",
  cat: "other"
 },
 {
  id: 5,
  title: "API Testing a real web application via Postman",
  img: IMG.api1,
  issuer: "Coursera",
  tags: ["API Testing", "Postman", "Web Application"],
  desc: "Hands-on project covering API testing of a real web application using Postman, including request building, response validation, and test automation.",
  link: "https://coursera.org/verify/LAP44TAMO9SY",
  cat: "testing"
},

{
  id: 6,
  title: "Jmeter Training for Beginners",
  img: IMG.jmeter1,
  issuer: "Simplilearn",
  tags: ["JMeter", "Performance Testing", "Load Testing"],
  desc: "Beginner-level course on Apache JMeter covering test plan creation, thread groups, samplers, listeners, and basic performance test execution.",
  link: "https://coursera.org/verify/U5UZ30R920KE",
  cat: "testing"
},
 {
    id: 7,
    title: "HTML, CSS, and Javascript for Web Developers",
    img: IMG.cert_html_css,
    issuer: "Coursera",
    tags: ["HTML", "CSS", "JavaScript", "Web"],
    desc: "Johns Hopkins University course covering modern front-end web development fundamentals including responsive design and dynamic JavaScript.",
    link: "https://www.coursera.org/account/accomplishments/certificate/ALA7VWWL32VS",
    cat: "dev"
  },
  {
    id: 8,
    title: "Learn C++ Programming — Beginner to Advance",
    img: IMG.cert_cpp,
    issuer: "Udemy",
    tags: ["C++", "Programming", "OOP"],
    desc: "In-depth C++ programming course covering fundamentals to advanced topics including OOP, memory management, STL, and data structures.",
    link: "https://www.udemy.com/certificate/UC-c7defe14-a5b0-4c4a-8547-f968a27c24b5/",
    cat: "other"
  },
  {
    id: 9,
    title: "Python Basics for Data Science",
    img: IMG.cert_python,
    issuer: "edX",
    tags: ["Python", "Data Science", "ML"],
    desc: "IBM-certified course covering Python programming essentials for data science including NumPy, Pandas, and data visualization.",
    link: "https://courses.edx.org/certificates/0ae2b02f56ea4387b090f27d4d0a6d42",
    cat: "data"
  },
  {
    id: 10,
    title: "Ultimate Rust Crash Course",
    img: IMG.cert_rust,
    issuer: "Udemy",
    tags: ["Rust", "Systems Programming"],
    desc: "Hands-on Rust programming course covering ownership, borrowing, lifetimes, traits, and building safe and performant systems software.",
    link: "https://udemy.com/certificate/UC-fb22e891-7b34-46af-a68f-16d8ee4b5231/",
    cat: "other"
  },
  {
    id: 11,
    title: "Master HTML5 from Scratch with Hands-On Course",
    img: IMG.cert_html5,
    issuer: "Udemy",
    tags: ["HTML5", "Web", "Frontend"],
    desc: "Complete HTML5 course with hands-on projects covering semantic markup, forms, multimedia, canvas API, and modern best practices.",
    link: "https://www.udemy.com/certificate/UC-7179977b-f2d4-4622-999e-09af837a8a6c/",
    cat: "dev"
  },
  {
    id: 12,
    title: "The Ultimate: Compiler Design — Module 1",
    img: IMG.cert_compiler1,
    issuer: "Udemy",
    tags: ["Compiler Design", "CS Theory"],
    desc: "Foundation module covering lexical analysis, parsing techniques, context-free grammars, and the theory behind compiler front-ends.",
    link: "https://udemy.com/certificate/UC-19890ca9-015b-421a-8935-ed832b45efc6/",
    cat: "other"
  },
  {
    id: 13,
    title: "The Ultimate: Compiler Design — Module 2",
    img: IMG.cert_compiler2,
    issuer: "Udemy",
    tags: ["Compiler Design", "CS Theory"],
    desc: "Advanced module covering semantic analysis, intermediate code generation, optimization techniques, and compiler back-end design.",
    link: "https://udemy.com/certificate/UC-4bca299c-0a20-4eb4-b3fc-11d5ba5fcf28/",
    cat: "other"
  },
  {
    id: 14,
    title: "Build a Full Website using WordPress",
    img: IMG.cert_wordpress,
    issuer: "Coursera",
    tags: ["WordPress", "Web", "CMS"],
    desc: "Practical guide to building professional websites with WordPress — themes, plugins, page builders, SEO, and deployment.",
    link: "https://www.coursera.org/account/accomplishments/verify/B9YIVLKYLLO4",
    cat: "dev"
  },
  {
    id: 15,
    title: "Photography for Beginners: Improve Your Photo Compositions",
    img: IMG.cert_photo,
    issuer: "Udemy",
    tags: ["Photography", "Composition"],
    desc: "Course covering the fundamental rules of photo composition — rule of thirds, leading lines, framing, and visual storytelling.",
    link: "https://www.ude.my/UC-087cb0b0-9c0d-4a14-9884-892c0a6c2bcf",
    cat: "other"
  },
  {
    id: 16,
    title: "The Fundamentals of Digital Marketing",
    img: null,
    issuer: "Google Digital Garage",
    tags: ["Marketing", "Digital", "SEO"],
    desc: "Google-certified course covering digital marketing fundamentals including SEO, SEM, social media, email marketing, and analytics.",
    link: "https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code",
    cat: "other"
  },
  
];

const PHOTOS = [
  { src: IMG.p01, alt: "Photography 01" },
  { src: IMG.p02, alt: "Photography 02" },
  { src: IMG.p03, alt: "Photography 03" },
  { src: IMG.p04, alt: "Photography 04" },
  { src: IMG.p05, alt: "Photography 05" },
  { src: IMG.p06, alt: "Photography 06" },
  { src: IMG.p07, alt: "Photography 07" },
  { src: IMG.p08, alt: "Photography 08" },
  { src: IMG.p09, alt: "Photography 09" },
  
];