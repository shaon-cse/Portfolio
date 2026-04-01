// ============================================================
// data.js  —  All content data & embedded images for Shaon's portfolio
// ============================================================

const IMG ={
    me: "./assets/shaon.jpg",
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
    proj_underwater: "./assets/Underwater.png",
    proj_livelab: "./assets/LiveLab.png",
    proj_crop:  "./assets/crop.jpg"
};



const PROJECTS = [
  {
    id: 1,
    title: "Crop Disease Detection System",
    img: IMG.proj_crop,
    tags: ["PyTorch","Flask","React.js","ResNet50","OpenCV","Tailwind CSS"],
    desc: "Full-stack AI solution to detect 15+ plant diseases from leaf images with 97.5% accuracy using ResNet50 & Transfer Learning. Features Grad-CAM heatmaps for Explainable AI.",
    github: "https://github.com/shaon-cse/Crop-Disease-Detection-System",
    demo: null,
    cat: "ai"
  },
  {
    id: 2,
    title: "LiveLab",
    img: IMG.proj_livelab,
    tags: ["HTML","CSS","JavaScript","ReactJS"],
    desc: "Interactive real-time code editor platform where users write and run HTML, CSS, and JavaScript instantly on the same page.",
    github: "https://github.com/shaon-cse/LiveLab",
    demo: null,
    cat: "web"
  },
  {
    id: 3,
    title: "BDJobs Website Testing",
    img: IMG.proj_bdjobs,
    tags: ["Manual Testing","Test Cases","Bug Reports","SQA"],
    desc: "Tested the Registration and Sign-In modules of BDJobs, designed and executed detailed test cases, identifying critical input validation and security bugs.",
    github: "https://github.com/shaon-cse",
    demo: null,
    cat: "qa"
  },
  {
    id: 4,
    title: "Othoba Website Testing",
    img: IMG.proj_othoba,
    tags: ["Manual Testing","Test Plan","Mind Map","SQA"],
    desc: "Created test plan, mind map, and 20 test scenarios; executed 17 test cases for Registration. Performed functional and UI testing with documented bug reports.",
    github: "https://github.com/shaon-cse",
    demo: null,
    cat: "qa"
  },
  {
    id: 5,
    title: "Underwater Image Enhancement",
    img: IMG.proj_underwater,
    tags: ["Python","OpenCV","Image Processing","Research"],
    desc: "Undergraduate thesis: Automated pipeline restoring underwater images using Gray World Algorithm, Histogram Equalization in HSV domain, and Unsharp Masking.",
    github: "https://github.com/shaon-cse/Underwater-Image-Enhancement",
    demo: null,
    cat: "ai"
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