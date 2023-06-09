import AboutUs from '@/components/AboutUs/AboutUs';
import Clients from '@/components/Clients/Clients';
import CoursePromo from '@/components/CoursePromo/CoursePromo';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import HomeCategory from '@/components/HomeCategory/HomeCategory';
import HomeEvents from '@/components/HomeEvents/HomeEvents';
import HomeExam from '@/components/HomeExam/HomeExam';
import HomeTopCities from '@/components/HomeTopCities/HomeTopCities';
import HomeTopFeatures from '@/components/HomeTopFeatures/HomeTopFeatures';
import Navbar from '@/components/Navbar/Navbar';
import PopularCourses from '@/components/PopularCourses/PopularCourses/PopularCourses';
import RegisterSec from '@/components/RegisterSec/RegisterSec';
import TopCategories from '@/components/TopCategories/TopCategories';
import TopStudents from '@/components/TopStudents/TopStudents/TopStudents';
import UpcomingEvent from '@/components/UpcomingEvent/UpcomingEvent/UpcomingEvent';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeTopFeatures />
        <div className="max-w-screen-2xl mx-auto">
          <HomeCategory />
          <HomeTopCities />
          <HomeExam />
          <HomeEvents />
          <PopularCourses />
          <CoursePromo />
          <AboutUs />
          {/* <UpcomingEvent /> */}
          <TopCategories />
          {/* <TopStudents /> */}
          <RegisterSec />
          <Clients />
        </div>
      </main>
      <Footer />
    </>
  );
}
