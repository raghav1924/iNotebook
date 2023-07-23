import React from "react";
// import noteContext from "../context/notes/noteContext";

const About = () => {
  // const a = useContext(noteContext);
  return (
    <div className="container mt-5">
      <h3 >iNotebook | Your Secured Notes in the Cloud </h3>
      <h6><i>By Jatin Sharma, Full Stack Developer</i></h6>
      <p className="my-5" style={{fontSize:"1.1rem",fontFamily:"monospace"}}>Welcome to iNotebook, the ultimate solution for securely
      storing your notes in the cloud! Created by Jatin Sharma, a passionate
      Full Stack Developer, iNotebook is a cutting-edge MERN Stack project
      designed to elevate your note-taking experience to new heights.</p>
      
      <h5> Your Personalized Note-Taking Companion</h5>
       <p className="mb-5">iNotebook is not just another ordinary note-taking app; it's a personalized companion that understands
      and caters to your unique needs. Whether you are a student, a
      professional, an artist, or just someone who loves jotting down thoughts,
      iNotebook is here to make your life easier. </p>
      <h5>Seamless and Intuitive User Interface</h5>
       <p className="mb-5">With a beautifully crafted user interface, iNotebook offers a
      seamless and intuitive experience from the moment you sign in. You'll be
      greeted with a clutter-free environment that encourages productivity and
      creativity. Take notes effortlessly and access them anywhere, anytime, on
      any device – be it your computer, tablet, or smartphone. </p>
      <h5>Advanced Security and Privacy</h5>
       <p className="mb-5">We understand that your notes can contain sensitive
      information, and your privacy is of utmost importance. That's why
      iNotebook implements state-of-the-art security measures to safeguard your
      data. Your notes are encrypted both during transit and storage, ensuring
      that only you have access to them. </p>
      <h5>Organize, Collaborate, and Share</h5>
      <p className="mb-5">Stay organized with iNotebook's intuitive organization tools. Create
      notebooks, categorize notes with tags, and use folders to manage your
      notes efficiently. Collaborate with colleagues, classmates, or friends by
      sharing specific notes or entire notebooks securely. </p>
      <h5>Rich Text Editing and Media Integration*</h5>
      <p className="mb-5">Express yourself better with rich text editing
      capabilities. Format your notes, add images, embed videos, and create
      to-do lists – all in one place. With iNotebook, your creativity knows no
      bounds. </p>
      <h5>Sync Across Devices</h5>
      <p className="mb-5">Your notes stay in sync across all your
      devices in real-time. Make updates on your laptop and see them instantly
      reflected on your smartphone. iNotebook ensures you never miss a beat, no
      matter where you are. </p>
      <h5>Smart Search</h5>
       <p className="mb-5">Finding that one important note
      among hundreds is a breeze with iNotebook's powerful search functionality.
      Effortlessly locate specific notes using keywords or filters and save
      valuable time. </p>
      <h5>Your Notes, Your Style</h5>
      <p className="mb-5"> Customize iNotebook to match
      your personality. Choose from a selection of themes and layouts to create
      an environment that resonates with you. </p>
      <h5>Support and Updates</h5>
      <p className="mb-5"> As a Full Stack Developer, Jatin Sharma is dedicated to continuously improving
      iNotebook. Expect regular updates and timely support, ensuring the app
      remains at the forefront of technology. </p>
      
      <div className="my-4">
      <code style={{fontSize:"2rem"}}>Join thousands of users who have
      already made iNotebook their go-to app for note-taking. Embrace the future
      of digital note-taking with iNotebook today!</code>
      </div>
    </div>
  );
};

export default About;
