  import React, { useState,useEffect } from 'react';
  import Navbar from './Navbar.jsx';
  import VideoBackground from './VideoBackground.jsx';
  import PopularCourses from './PopularCourses.jsx';
  import PopularInstructors from './PopularInstructors.jsx';
  import UserFeedbacks from './UserFeedbacks.jsx';
  import Feedback from './Feedback.jsx';
  import Footer from './Footer.jsx';
  const coursesData = [
    {
      id: 1,
      title: 'Introduction to Programming',
      course:'Math',
      details: 'Learn the basics of programming with this introductory course. This course covers fundamental concepts and helps you build a strong foundation in programming.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/programming.jpg'
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      course:'Economy',
      details: 'Master the intricacies of JavaScript and become a pro. This course dives deep into advanced topics and best practices.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/javascript.jpg'
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      course:'Management',
      details: 'Become a full-stack web developer with our comprehensive bootcamp. This course covers everything from HTML and CSS to backend development and deployment.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/web-development.jpg'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      course:'Science',
      details: 'Explore the world of data science with Python. This course teaches you how to analyze and visualize data using powerful Python libraries.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/data-science.jpg'
    },
    {
      id: 5,
      title: 'Data Science with Python',
      course:'History&Geography',
      details: 'Explore the world of data science with Python. This course teaches you how to analyze and visualize data using powerful Python libraries.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/data-science.jpg'
    },
    {
      id: 6,
      title: 'Data Science with Python',
      course:'Art&Literature',
      details: 'Explore the world of data science with Python. This course teaches you how to analyze and visualize data using powerful Python libraries.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/data-science.jpg'
    },
    {
      id: 7,
      title: 'Data Science with Python',
      course:'Math',
      details: 'Explore the world of data science with Python. This course teaches you how to analyze and visualize data using powerful Python libraries.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/data-science.jpg'
    }, {
      id: 8,
      title: 'Data Science with Python',
      course:'Math',
      details: 'Explore the world of data science with Python. This course teaches you how to analyze and visualize data using powerful Python libraries.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/data-science.jpg'
    }
  ];
  
  
    

  const LandingPage = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(coursesData);
  
    useEffect(() => {
      let filt = coursesData;
      if (search) {
        filt = filt.filter(course =>
          course.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      if (category) {
        filt = filt.filter(course => course.course === category);
      }
      setFilteredCourses(filt);
    }, [search, category])
    
    return(
    <div className="bg-gray-100 text-gray-800">
      <Navbar  setSearch={setSearch} setCategory={setCategory}/>
      <section id="home">
        <VideoBackground />
      </section>
      <section id="courses" className="bg-gray-200">
        <PopularCourses  courses={filteredCourses}/>
      </section>
      <section id="instructors" className="bg-gray-100">
        <PopularInstructors />
      </section>
      <section id="user-feedbacks" className="bg-gray-200">
        <UserFeedbacks />
      </section>
      <section id="feedback" className="bg-gray-100">
        <Feedback />
      </section>
      <Footer />
    </div>
  )};

  export default LandingPage;
