
import gym from '../images/gymnastic.jpg'
import beauty from '../images/barber.jpg'
import school from '../images/education.png'
import dentist from '../images/dentacare.png'
import Link from 'next/link'




const projectBox = [

    {
        id: 1,
        name:"Gymnastic Platform",
        image:gym,
        industry:"Gym Management Web Platform ",
        projet:"Web App",
        github:"https://github.com/dascomsoft/das-gym.git",
        link:"das-gym.vercel.app",
        problem:"Gyms often lack an efficient system to manage registrations, bookings, and communication between clients and coaches. Clients struggle to track their sessions, view past reservations, and interact with professionals. Additionally, the absence of a dedicated space for reviews and messages makes the user experience less seamless and engaging.",
        solution:"I developed an interactive web application that centralizes all essential gym functionalities. The app allows users to sign up, manage their profiles, view their bookings, and leave reviews. An integrated messaging system enables direct communication between clients and coaches for better service follow-up. This solution enhances the user experience, optimizes service management, and increases customer engagement. 🚀",
        role:"As a frontend developer, I designed and developed an intuitive interface for the gym management platform, ensuring a seamless and engaging user experience. I built responsive layouts, optimized navigation, and implemented real-time data updates using Firebase. Leveraging Firebase's backend services, I integrated user authentication, profile management, booking functionalities, and direct messaging between clients and coaches. Additionally, I ensured that the UI was fully optimized for both desktop and mobile devices, enhancing accessibility and usability.",
        tech:"Next.js Typescript TailwindCss Firebase"
    },




    {
        id: 3,
        name:" Online Tutoring Exam Platform",
        image:school,
        industry:"E-Learning Support Platform",
        projet:"Web App",
        github:"https://github.com/dascomsoft/bureau-lumiere.git",
        link:"bureau-lumiere.vercel.app",
        role:"As a frontend developer, I crafted a platform where students, tutors, and parents can interact seamlessly. I developed an engaging student dashboard where learners can ask tutors questions, track progress, and prepare for exams. Additionally, I implemented a parent-tutor communication system, allowing parents to monitor their child's learning journey. My focus was on performance optimization, API integration, and accessibility to ensure smooth navigation across all devices.",
        problem:"As an ICT specialist at LsvEtude, I identified a major challenge: students preparing for final exams struggle to find structured academic support, while parents lack real-time insights into their progress. Communication gaps between students, tutors, and parents further complicate effective learning.To solve this, I developed an interactive e-learning platform using React, Tailwind CSS, and Firebase. This platform:",
        solution :"I developed an interactive e-learning platform where students, tutors, and parents can create accounts. The platform features a student-tutor space where students can ask questions and receive guidance on exam topics. A parent-tutor section allows parents to monitor their child's progress and communicate with tutors for better academic follow-up. This solution enhances learning support, strengthens engagement, and ensures better exam preparation. ",
        tech:"React.js  TailwindCss Firebase"

    },        




    {
        id: 2,
        name:"Beauty Salon  Platform",
        image:beauty,
        industry:"Beauty Salon Web Platform",
        projet:"Web App",
        github:"https://github.com/dascomsoft/beauty.git",
        link:"das-beauty.vercel.app",
        role:"I built , designed and implemented an interactive and user-friendly interface for the BeautySalon management platform. I focused on developing responsive layouts, smooth navigation, and real-time data updates using Firebase to enhance the user experience. Instead of a traditional backend, I utilized Firebase services for user authentication, profile management, bookings, and direct messaging between clients and coaches. Additionally, I optimized the UI for both desktop and mobile devices to ensure accessibility and seamless interaction.",
        problem:"Beauty salons often face challenges in managing client appointments, profiles, and direct communication with hairstylists and beauticians. Customers struggle to track their bookings, access their service history, and provide feedback. The lack of a streamlined messaging system makes interactions inefficient, leading to missed appointments and poor customer engagement.",
        solution:"I created a dynamic web platform that simplifies beauty salon management. The application enables users to register, checking their profiles, review past appointments, and share their experiences. A built-in chat system allows seamless communication between clients and beauty professionals, ensuring better coordination and customer satisfaction. This solution enhances the booking process, improves service accessibility, and fosters stronger client relationships. 💆‍♀️✨",
        tech:"Next.js Typescript TailwindCss Firebase"


    },
 
]

export default projectBox