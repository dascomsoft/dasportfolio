
import gym from '../images/gymnastic.jpg'
import beauty from '../images/barber.jpg'
import generationbulletin from '../images/generationbulletin.png'
import dashboard from '../images/dashboard.png'
import domshop from '../images/domshop.png'
import allo237 from '../images/allo237.png'
import Link from 'next/link'




const projectBox = [

    {
        id: 1,
        name: "Gymnastic Platform",
        image: gym,
        industry: "Gym Management Web Platform ",
        projet: "Web App",
        github: "https://github.com/dascomsoft/das-gym.git",
        link: "das-gym.vercel.app",
        problem: "Gyms often lack an efficient system to manage registrations, bookings, and communication between clients and coaches. Clients struggle to track their sessions, view past reservations, and interact with professionals. Additionally, the absence of a dedicated space for reviews and messages makes the user experience less seamless and engaging.",
        solution: "I developed an interactive web application that centralizes all essential gym functionalities. The app allows users to sign up, manage their profiles, view their bookings, and leave reviews. An integrated messaging system enables direct communication between clients and coaches for better service follow-up. This solution enhances the user experience, optimizes service management, and increases customer engagement. 🚀",
        role: "As a frontend developer, I designed and developed an intuitive interface for the gym management platform, ensuring a seamless and engaging user experience. I built responsive layouts, optimized navigation, and implemented real-time data updates using Firebase. Leveraging Firebase's backend services, I integrated user authentication, profile management, booking functionalities, and direct messaging between clients and coaches. Additionally, I ensured that the UI was fully optimized for both desktop and mobile devices, enhancing accessibility and usability.",
        tech: "Next.js Typescript TailwindCss Firebase"
    },




    {
        id: 3,
        name: "Allo237 - Healthcare Emergency Services",
        image: allo237,
        industry: "Healthcare & Emergency Services",
        projet: "Progressive Web App (PWA)",
        github: "https://github.com/dascomsoft/pharmacam",
        link: "allo237.vercel.app",
        role: "As the creator and frontend Engineer developer of the project, I designed and built Allo237, the first Cameroonian app dedicated to quickly finding on-duty and regular pharmacies. I implemented intelligent voice search (core feature), daily automatic updates of on-duty pharmacies via scraping and GitHub Actions, a modern and accessible interface, and an optimized user experience for emergency situations (nighttime, stress, hands busy). The app is fully in French to serve the Cameroonian audience, while this portfolio is in English for international reach.",
        problem: "In Cameroon, finding an on-duty pharmacy at night or in an emergency is a real challenge: official lists (DocHelp-CM, ONPC) are not easily accessible on mobile, information is often outdated, addresses are imprecise, and no reliable app exists with voice search for people in stressful situations or with a sick child. Parents, motorcycle taxi drivers, and patients waste precious time that can sometimes be critical.",
        solution: "I created Allo237, a fast and installable Progressive Web App (PWA) that allows users to instantly find an on-duty or regular pharmacy using voice search ('on-duty pharmacy Bastos' or 'open now'). Data is automatically scraped from official sources (DocHelp-CM.org and ONPC) and updated daily via GitHub Actions. On first load (when connected), the app fetches and caches the latest on-duty pharmacy data. Once loaded, it works completely offline for subsequent searches, ensuring reliability even without internet – crucial in areas with poor connectivity or during nighttime emergencies. The app displays pharmacies by region/city, offers direct calling, and provides a clear interface even at 2 AM. Allo237 becomes the essential health assistant for all Cameroonians.",
        tech: "Next.js React TailwindCSS Framer Motion  WebSpeech  GitHub Actions  PWA"
    },


    {
        "id": 5,
        "name": "DomShop-Inventory Management system",
        "image": domshop,
        "industry": "Retail & Inventory Management",
        "projet": "Web Application",
        "github": "https://github.com/dascomsoft/storage-products.git",
        "link": "domseshop.vercel.app",
        "role": "As the creator and frontend Engineer developer of the project, I designed and built DomShop, a simple yet powerful inventory management web application tailored for small street businesses in Cameroon. I implemented core features like product addition, stock tracking, sales recording with history, user authentication, and an offline-first approach with local persistence and cloud synchronization using Firebase. The app provides a user-friendly interface to help informal entrepreneurs digitize their inventory control.",
        "problem": "Many small businesses in Cameroon, especially street vendors and informal shops, struggle with inventory management: they often face overstocking, frequent stockouts, lost sales opportunities, and no reliable way to track sales data. Traditional manual methods lead to errors, losses, and inefficiency, with no digital tool accessible offline in areas with unreliable internet connectivity.",
        "solution": "I developed DomShop as a lightweight, offline-first web application that allows small business owners to easily track stock levels, add and delete products, record sales (automatically reducing stock), and view sales history with timestamps. Data is saved locally for offline use and automatically synced to the cloud (Firebase) when internet is available, ensuring reliability across devices. With secure authentication, a responsive design, and focus on simplicity, DomShop empowers Cameroonian entrepreneurs to gain digital control over their physical goods, reducing losses and improving business efficiency without needing constant connectivity.",
        "tech": "React.js Tailwind CSS Vite JavaScript Firebase Authentication Firestore Offline Persistence Vercel"
    },







    {
        id: 4,
        name: "EduCrisis Dashboard",
        image: dashboard,
        industry: "Humanitarian Data Visualization / Education Monitoring",
        projet: "Web App",
        github: "https://github.com/dascomsoft/educrisis",
        link: "educrisis.vercel.app/",
        role: "As a Frontend Developer : I Designed and built a modular interface with Next.js and React, Integrated Leaflet for mapping and Chart.js for data visualization ,Structured the project with a clean architecture (services, components, public/data) , Styled the application with TailwindCSS for a professional, responsive look and documented the project to make it portfolio-ready and reusable for other developers or organizations.",
        problem: "In Cameroon, humanitarian actors and education stakeholders often lack a centralized tool to visualize school infrastructures and track enrollment indicators.Existing data (from OpenStreetMap and the World Bank) is scattered and not easily accessible.NGOs and decision-makers struggle to quickly identify the distribution of schools, their types (kindergartens, primary/secondary, colleges, universities), and the evolution of enrollment rates.",
        solution: "I developed an interactive dashboard that consolidates these datasets into a modern, intuitive interface:Dynamic KPIs: total schools, breakdown by type.,Interactive Leaflet Map: ~2,350 geolocated schools with details (name, type, city).,Chart.js Visualization: evolution of Cameroon’s net primary school enrollment rate (World Bank API).,Modern responsive design: TailwindCSS, styled cards, impactful colors.,this solution transforms raw data into actionable visual insights, empowering NGOs, policymakers, and recruiters to quickly understand the educational landscape. 🚀",
        tech: "Next.js  React  TailwindCSS  Leaflet  Chart.js)"


    },


    {
        "id": 6,
        "name": "GraceEdu - Education & EdTech",
        "image": generationbulletin,
        "industry": "Education & EdTech",
        "projet": "Web & Desktop Application",
        "github": "https://github.com/dascomsoft/gracedieu.git",
        "link": "gracedieu.vercel.app",
        "role": "As the creator and frontend Engineer developer of the project, I designed and developed Grace de Dieu, a bilingual (French/English) web and desktop application for automated generation and management of school report cards in Cameroonian bilingual schools. I built a secure user authentication system, intuitive interfaces adapted to francophone and anglophone systems, automatic grade calculations, PDF generation, sequential evaluation filling, and an offline-capable desktop version using Electron for areas with unstable internet.",
        "problem": "In Cameroon's bilingual schools, teachers face significant challenges with manual report card creation: it is time-consuming, prone to calculation and transcription errors, difficult to archive, and requires separate management for francophone and anglophone sections. Lost bulletins, inconsistent data, and lack of digital tools hinder efficiency, especially in regions with unreliable internet or frequent power outages.",
        "solution": "Grace de Dieu is a centralized platform where teachers can create accounts, manage classes from kindergarten to primary (francophone or anglophone), add students, sequentially input evaluations per trimester with automatic saving, and generate professional PDF report cards with averages, rankings, and optimized layouts. The bilingual interface allows instant language switching. A desktop version built with Electron ensures full offline functionality with local encrypted storage, automatic cloud sync when online, and USB backup options, making it reliable even in low-connectivity areas. Data is securely archived, providing continuity and easy access to student history.",
        "tech": "React.js Vite Tailwind CSS React Router Node.js Express SQLite jsPDF Electron PWA Authentication PDF Generation"
    },
    {
        id: 2,
        name: "Beauty Salon  Platform",
        image: beauty,
        industry: "Beauty Salon Web Platform",
        projet: "Web App",
        github: "https://github.com/dascomsoft/beauty.git",
        link: "das-beauty.vercel.app",
        role: "I built , designed and implemented an interactive and user-friendly interface for the BeautySalon management platform. I focused on developing responsive layouts, smooth navigation, and real-time data updates using Firebase to enhance the user experience. Instead of a traditional backend, I utilized Firebase services for user authentication, profile management, bookings, and direct messaging between clients and coaches. Additionally, I optimized the UI for both desktop and mobile devices to ensure accessibility and seamless interaction.",
        problem: "Beauty salons often face challenges in managing client appointments, profiles, and direct communication with hairstylists and beauticians. Customers struggle to track their bookings, access their service history, and provide feedback. The lack of a streamlined messaging system makes interactions inefficient, leading to missed appointments and poor customer engagement.",
        solution: "I created a dynamic web platform that simplifies beauty salon management. The application enables users to register, checking their profiles, review past appointments, and share their experiences. A built-in chat system allows seamless communication between clients and beauty professionals, ensuring better coordination and customer satisfaction. This solution enhances the booking process, improves service accessibility, and fosters stronger client relationships. 💆‍♀️✨",
        tech: "Next.js Typescript TailwindCss Firebase"


    }



]

export default projectBox