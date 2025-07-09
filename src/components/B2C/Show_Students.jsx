import { Link, useLocation, useParams } from "react-router-dom";
import { course, students } from "../../data/data";
import styles from './b2c.module.css';
import InputForAddStudents from "./InputForAddStudents";
import { useState } from "react";

export default function Show_Students() {
    const { course_name } = useParams();
    const location = useLocation();

    const idFromState = location.state?.id;
    console.log('idFromState', idFromState);


    // Найдем курс по id из state или по имени из params (если надо)
    const courseById = course.find(c => c.id === idFromState);
    console.log("courseById", courseById);

    const [add_students, setAdd_Students] = useState(false)
    const handleClick_addStudents = () => {
        setAdd_Students(prev => !prev)
    }
    return (
        <section className="flex flex-col w-[100%] gap-y-[40px]" >
            <div className="flex items-center gap-[30px]">
                <h1 className="text-[#0085F9] Montserrat text-[26px] font-bold">Доходы </h1>
                <div className="bg-[#0085F9] w-[8.81px] h-[8.81px] rounded-[100%]"></div>
                <Link to={'/expenses/b2c'} className="text-[#0085F9] Montserrat text-[26px] font-bold">B2C</Link>
                <div className="bg-[#0085F9] w-[8.81px] h-[8.81px] rounded-[100%]"></div>
                <h1 className="text-[#0085F9] Montserrat text-[26px] font-bold">{courseById.name}</h1>
                {!add_students ? ("") : (
                    <>
                        <div className="bg-[#0085F9] w-[8.81px] h-[8.81px] rounded-[100%]"></div>
                        <h1 className="text-[#0085F9] Montserrat text-[26px] font-bold">Добавит студента</h1>
                    </>
                )}
            </div>
            {!add_students ? (
                <div className={`bg-[#FFFFFF] rounded-[14px] p-[30px] ${styles.card_students}`}>

                    <div className="flex flex-col gap-[10px] mb-[30px]">
                        {students.map((student) => (
                            <div key={student.id} className="p-[10px] border rounded-[8px] text-[14px]">
                                {student.name}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleClick_addStudents}
                        className="bg-[#47B841] px-[20px] py-[15.3px] rounded-[12px] text-[#FFFFFF] text-[14px] leading-[100%] font-semibold"
                    >
                        Добавить студента
                    </button>
                </div>
            ) : (
                <InputForAddStudents />
            )}


        </section>
    );
}
