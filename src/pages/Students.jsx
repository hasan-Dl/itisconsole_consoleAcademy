import { Link } from "react-router-dom";
import Show_Students from "../components/B2C/Show_Students";

export default function Students() {

    const course_name = localStorage.getItem("course_name")
    console.log("course_name", course_name);


    return (
        <section className=' flex flex-col gap-[40px] pt-[50px] w-[1520px] bg-[#F3F4FF] max-w-[100%] ' >
            <Show_Students />
        </section>
    )
}
