import {
    Card,
    CardHeader,
} from "@material-tailwind/react";
function HorizontalCard() {
    return (
        <Card className="w-full flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-4/6 shrink-0 rounded-r-none"
            >
                <img
                    src="https://static.wixstatic.com/media/efaac4_565a6329c72d43d1931ed1d470d7e658~mv2.png/v1/fill/w_1281,h_457,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/efaac4_565a6329c72d43d1931ed1d470d7e658~mv2.png"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <div className="main w-full bg-slate-950 text-white flex justify-center items-center">
                <div className="content ">
                    <div className="head text-5xl w-fit mb-8" style={{ borderBottom: '3px solid goldenrod' }}>
                        <span>Black Bird</span>
                    </div>
                    <div className=" text-xl flex flex-col">
                        <span className="mb-4">Catogery - Tier II, MALE</span>
                        <span className="mb-4">
                            Altitude - 5KM
                        </span >
                        <span className="mb-4">Maximum speed - 110 m/s
                        </span>
                        <span className="mb-4">Wingspan - 4.5 m
                        </span>
                        <span className="mb-4">Endurance - 10 hr</span>

                    </div>
                </div>
            </div>
        </Card>
    );
}

export default HorizontalCard