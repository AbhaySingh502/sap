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
                    src="https://static.wixstatic.com/media/efaac4_565a6329c72d43d1931ed1d470d7e658~mv2.png/v1/fill/w_1281,h_457,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/efaac4_565a6329c72d43d1931ed1d470d7e658~mv2.png"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <div className="main w-full bg-slate-950 text-white flex justify-center items-center md:w-2/6"> {/* Added md:w-2/6 class */}
                <div className="content pt-8 pb-8">
                    <div className="head text-5xl w-fit mb-8" style={{ borderBottom: '3px solid goldenrod' }}>
                        <span>Gas Turbine Combustion</span>
                        Our group is developing next-generation combustors for aero-engines focusing on lean burn combustor technology.
                    </div>

                </div>
            </div>
        </Card>
    );
}

export default HorizontalCard;
