import { useState } from "react";
import Data_B2C from "../components/B2C/Data_B2C";
import InputForAddCourses from "../components/B2C/InputForAddCourses";
import { Link } from "react-router-dom";

export default function B2C({ }) {
  const [showAddCourse, setShowAddCourse] = useState(false);

  function handleAddCourseClick(e) {
    e.preventDefault(); // чтобы ссылка не перезагружала страницу
    setShowAddCourse(true);
  }

  return (
    <section
    className='flex flex-col gap-[40px] pt-[50px]'
    >
      <div className="flex items-center gap-[30px]">
        <h1 className="text-[#0085F9] Montserrat text-[26px] font-bold">Доходы </h1>
        <div className="bg-[#0085F9] w-[8.81px] h-[8.81px] rounded-[100%]"></div>
        <Link to={'/expenses/b2c'} className="text-[#0085F9] Montserrat text-[26px] font-bold">B2C</Link>
      </div>
      <Data_B2C Add_Course={handleAddCourseClick} />
    </section>
  )
}
