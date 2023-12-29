import {EmployerCard} from "./EmployerCard";
import employmentHistory from "../data/employment-history.json";

export function EmploymentHistory() {
    return (
        <ol className="list-none text-left max-w-xl h-[145%]">
            {employmentHistory.data.map((employer,index) =>
                <EmployerCard employer={employer} index={index}/>
            )}
        </ol>
    );
}