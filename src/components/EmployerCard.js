import employmentHistory from "../data/employment-history.json";
import EmploymentCard from "./EmploymentCard";

function GetDefaultLogo() {
    return (
        <div className='grid grid-cols-[10px,10px,10px,10px] col-span-2 rounded-full overflow-hidden w-[40px] h-[40px]'>
            {Array(16).fill(undefined).map(x => GetColorSquare())}
        </div>
    )
}

function GetColorSquare() {
    const styling = {backgroundColor: 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',0.7)'}
    return(
        <div style={styling} className='w-[10px] h-[10px]'
        />)
}

export function EmployerCard() {
    return (
        <>
            {employmentHistory.data.map((employer, index) =>
                <li className={"grid grid-cols-[25px_25px_1fr_10rem] items-center p-5 " + (index % 2 === 0 && "bg-slate-700") }>
                    {employer.logo ? <img src={employer.logo} className="col-span-2 w-[40px] h-[40px] rounded-full aspect-square" alt="logo"/> : GetDefaultLogo()}
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