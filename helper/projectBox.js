import gym from '../images/gymnastic.jpg'
import beauty from '../images/barber.jpg'
import generationbulletin from '../images/generationbulletin.png'
import dashboard from '../images/dashboard.png'
import domshop from '../images/domshop.png'
import allo237 from '../images/allo237.png'
import bochimage from '../images/bochimage.png'

const projectBox = [
  {
    id: 7,
    name: "Boch237 - Tutoring Platform",
    image: bochimage,
    industry: "EdTech / Marketplace",
    projet: "Full-Stack Web Application",
    github: "https://github.com/dascomsoft/boch237.git",
    link: "boch237.vercel.app",

    problem:
      "In Cameroon, finding a qualified tutor is unreliable and unstructured, relying on informal channels with no verification or trust system.",

    solution:
      "A centralized marketplace connecting students and tutors with advanced search, real-time chat, and admin moderation.",

    role:
      "Full-stack development: built frontend (Next.js, Tailwind), backend (Node.js, Express), real-time chat (Socket.IO), and database (MongoDB).",

    impact:
      "Creates a structured and reliable ecosystem for connecting students and tutors, replacing informal methods and improving trust.",

    tech:
      "Next.js TypeScript TailwindCSS Node.js Express MongoDB Socket.IO JWT",
  },

  {
    id: 3,
    name: "Allo237 - Emergency Healthcare App",
    image: allo237,
    industry: "Healthcare",
    projet: "Progressive Web App (PWA)",
    github: "https://github.com/dascomsoft/pharmacam",
    link: "allo237.vercel.app",

    problem:
      "Finding an open pharmacy at night or during emergencies is difficult due to outdated and inaccessible information.",

    solution:
      "A fast PWA with voice search and offline support to instantly locate available pharmacies.",

    role:
      "Frontend development, voice search integration, automation (scraping + GitHub Actions), and offline-first architecture.",

    impact:
      "Provides fast access to pharmacies in emergency situations, even without internet, which can be critical at night.",

    tech:
      "Next.js TailwindCSS PWA WebSpeech API GitHub Actions",
  },

  {
    id: 5,
    name: "DomShop - Inventory System",
    image: domshop,
    industry: "Retail & Small Business",
    projet: "Web Application",
    github: "https://github.com/dascomsoft/storage-products.git",
    link: "domseshop.vercel.app",

    problem:
      "Small businesses manage stock manually, leading to errors, financial losses, and lack of visibility on sales.",

    solution:
      "An offline-first inventory system to track products, manage stock, and record sales with automatic synchronization.",

    role:
      "Frontend development with React and Tailwind, Firebase integration, and implementation of offline persistence.",

    impact:
      "Helps small businesses digitize operations, reduce stock errors, and maintain reliable data even with poor connectivity.",

    tech:
      "React TailwindCSS Firebase Firestore Offline Persistence",
  },

  {
    id: 4,
    name: "EduCrisis Dashboard",
    image: dashboard,
    industry: "Data Visualization",
    projet: "Web App",
    github: "https://github.com/dascomsoft/educrisis",
    link: "educrisis.vercel.app",

    problem:
      "Education data is scattered and difficult to analyze, limiting effective decision-making.",

    solution:
      "An interactive dashboard with maps and charts to visualize school distribution and enrollment trends.",

    role:
      "Frontend development, data visualization, and integration of mapping tools (Leaflet) and charts.",

    impact:
      "Enables NGOs and decision-makers to better understand and act on education data through clear visual insights.",

    tech:
      "Next.js TailwindCSS Leaflet Chart.js",
  },

  {
    id: 6,
    name: "GraceEdu - School Management System",
    image: generationbulletin,
    industry: "Education",
    projet: "Web & Desktop Application",
    github: "https://github.com/dascomsoft/gracedieu.git",
    link: "gracedieu.vercel.app",

    problem:
      "Manual report card creation is time-consuming, error-prone, and difficult to manage in bilingual school systems.",

    solution:
      "A system for automated grading, PDF report generation, and offline desktop usage via Electron.",

    role:
      "Frontend development and Electron integration for a fully functional offline desktop application.",

    impact:
      "Saves teachers significant time, reduces grading errors, and ensures reliable academic record management.",

    tech:
      "React Node.js Electron SQLite jsPDF",
  },

  {
    id: 1,
    name: "Gym Management Platform",
    image: gym,
    industry: "Fitness",
    projet: "Web App",
    github: "https://github.com/dascomsoft/das-gym.git",
    link: "das-gym.vercel.app",

    problem:
      "Gyms lack efficient tools to manage bookings, users, and communication between clients and coaches.",

    solution:
      "A platform enabling session booking, profile management, and real-time communication.",

    role:
      "Frontend development and Firebase integration for authentication and real-time features.",

    impact:
      "Improves user engagement and simplifies daily gym operations through digital management.",

    tech:
      "Next.js Firebase TailwindCSS",
  },

  {
    id: 2,
    name: "Beauty Salon Platform",
    image: beauty,
    industry: "Beauty",
    projet: "Web App",
    github: "https://github.com/dascomsoft/beauty.git",
    link: "das-beauty.vercel.app",

    problem:
      "Appointment management and communication between clients and professionals are inefficient.",

    solution:
      "A booking platform with integrated messaging for seamless interaction.",

    role:
      "Frontend development and Firebase-based real-time system implementation.",

    impact:
      "Enhances customer experience, reduces missed appointments, and improves service coordination.",

    tech:
      "Next.js Firebase TailwindCSS",
  },
]

export default projectBox