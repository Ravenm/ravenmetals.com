import education from "../data/education.json";

export function Education() {
    return <div className="">
        {education.data.map((item, index) => (
            <div key={item.id}
                 style={{top: (10 * (index + 1))}}
                 className="border-slate-400 p-5 max-w-lg grid grid-cols-[1fr_150px] bg-[rgba(51,64,85)] rounded-lg my-2 sticky top-3 border border-solid shadow-xl shadow-slate-900">
                <h1 className="font-bold">{item.school}</h1>
                <h3 className="border-l border-solid px-2">{item.location}</h3>
                <h2 className="text-s pl-5">{item.degree}</h2>
            </div>
        ))}
        <div className="h-10"></div>
    </div>;
}