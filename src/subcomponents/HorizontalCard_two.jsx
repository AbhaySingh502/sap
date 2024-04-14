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
                        <span>Liquid Rocket Propulsion</span>

                    </div>
                    We are working to develop a reusable Liquid rocket combustor and currently efforts are directed to develop a novel injector concept for METHALOX engines.
                </div>
            </div>
        </Card>
    );
}

export default HorizontalCard;
