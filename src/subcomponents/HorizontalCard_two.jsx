import { Card, CardHeader } from "@material-tailwind/react";

function HorizontalCard() {
    return (
        <Card className="flex flex-wrap md:flex-row">  {/* Added flex-wrap and md:flex-row classes */}
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-full md:w-4/6 shrink-0 rounded-r-none"
            >
                <img
                    src="./facility/rocket.jpg"
                    alt="card-image"
                    className="h-full w-full object-cover object-top"
                />
            </CardHeader>
            <div className="main w-full bg-slate-950 text-white flex justify-center items-center md:w-2/6"> {/* Added md:w-2/6 class */}
                <div className="content pb-8 pt-8">
                    <div className="head text-5xl w-fit mb-8" style={{ borderBottom: '3px solid goldenrod' }}>
                        <span>Black Bird</span>
                    </div>
                    <div className=" text-xl flex flex-col">
                        <span className="mb-4">Catogery - Tier II, MALE</span>
                        <span className="mb-4">
                            Altitude - 5KM
                        </span>
                        <span className="mb-4">Maximum speed - 110 m/s</span>
                        <span className="mb-4">Wingspan - 4.5 m</span>
                        <span className="mb-4">Endurance - 10 hr</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default HorizontalCard;
