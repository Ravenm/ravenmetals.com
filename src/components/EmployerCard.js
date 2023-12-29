import EmploymentCard from "./EmploymentCard";

function GetDefaultLogo() {
    return (
        <div className='grid grid-cols-[10px,10px,10px,10px] col-span-2 rounded-full overflow-hidden w-[40px] h-[40px]'>
            {Array(16).fill(undefined).map(() => GetColorSquare())}
        </div>
    )
}

function GetColorSquare() {
    const styling = {backgroundColor: 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',0.7)'}
    return(
        <div style={styling} className='w-[10px] h-[10px]'
        />)
}

export function EmployerCard(props) {
    return (
        <>
            <li
                className={"grid grid-cols-[25px_25px_1fr_10rem] items-center p-5 bg-[rgba(51,64,85)] rounded-lg my-2 sticky border border-solid shadow-xl shadow-slate-900"}
                style={{top: (10*(props.index+1)+30)}}
            >
                {props.employer.logo ? <img src={props.employer.logo} className="col-span-2 w-[40px] h-[40px] rounded-full aspect-square" alt="logo"/> : GetDefaultLogo()}
                <h1 className="border-r border-solid border-black">{props.employer.name}</h1>
                <h3 className="col-start-4 col-end-4 px-2">{props.employer.location}</h3>
                <ol className="col-start-2 col-end-5">
                    {props.employer.jobs.map(el =>
                        <EmploymentCard title={el.title} start={el.start} end={el.end} hasChild={el.hasChild} text={el.text} />
                    )}
                </ol>
            </li>
        </>
    );
}