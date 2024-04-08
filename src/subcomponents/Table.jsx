import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Patents", "Filling Number", "Year"];
const TABLE_ROWS = [
    { name: " Bi-swirl pintle injector ", job: 2023 - 11056223, date: 2023 },
    { name: "  Method And Apparatus For Enhanced Atomization In A Lean Burn Gas Turbine Engine Main Injector Mixer", job: 2023 - 11062733, date: 2023 },
    { name: "  Method and Apparatus For Enhanced Atomization In A Lean Burn Gas Turbine Engine", job: 202311062674, date: 2023 },
    { name: " Slit-Type Pintle Injector With Impinging Jets For Throttelable Liquid Rocket Engine Applications", job: 202311063973, date: 2023 },
];
function Table() {
    return (
        <Card className="h-fit w-full overflow-scroll" style={{ border: '2px solid indianred' }}>
            <table className="w-full table-auto text-left">
                <thead className="text-xl " style={{ backgroundColor: '#cacaca', color: 'black' }}>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(({ name, job, date }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={name}>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {job}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {date}
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

export default Table