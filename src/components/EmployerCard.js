import employmentHistory from "../data/employment-history.json";
import EmploymentCard from "./EmploymentCard";

export function EmployerCard() {
    return (
        <>
            {employmentHistory.data.map((employer, index) =>
                <li className={"grid grid-cols-[25px_25px_1fr_10rem] items-center p-5 " + (index % 2 === 0 && "bg-slate-700") }>
                    <img src={employer.logo} className="col-span-2 w-[40px] rounded-full aspect-square" alt="logo"/>
                    <h1 className="border-r border-solid border-black">{employer.name}</h1>
                    <h3 className="col-start-4 col-end-4 px-2">{employer.location}</h3>
                    <ol className="col-start-2 col-end-5">
                        {employer.jobs.map(el =>
                        <EmploymentCard title={el.title} start={el.start} end={el.end} hasChild={el.hasChild} text={el.text} />)}
                    </ol>
                </li>
            )}
        </>
    );
}