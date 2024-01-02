import {EmployerCard} from "./EmployerCard";
import employmentHistory from "../data/employment-history.json";

export function EmploymentHistory() {
    return (
        <div className={"text-left max-w-xl"}>
            {employmentHistory.data.map((employer,index) =>
                <EmployerCard employer={employer} index={index} key={`employer-${index}`}/>
            )}
        </div>
    );
}