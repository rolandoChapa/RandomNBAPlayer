export default function NBAPlayerCard(props) {
const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
return (
<div className="subpixel-antialiased flex flex-wrap bg-[#ABABAB] ">
    <div className="flex lg:w-full flex-wrap items-center p-2">
        <div className="w-full">
            <div className="flex flex-wrap justify-center">
                <div className="box-content blur-card md:w-[200px] md:h-[200px] w-[100px] h-[100px]">
                    <a href={`${props.teamURL}`}>
                        <img className="" src={`${props.teamLogo}`} />
                    </a>
                </div>
                <div className="w-full text-center  self-center">
                    <h5 className="font-ibmPlex text-stone-100 md:text-[3.5rem] text-[2rem] font-semibold tracking-tight dark:text-white">
                        {props.firstName}</h5>
                </div>
                <div className="text-center self-center w-full ">
                    <h5 className="md:text-[3.5rem] text-[2rem] font-extrabold tracking-tight dark:text-white">
                        {props.lastName}</h5>
                </div>
                <div className="text-center text-stone-100 self-center w-full ">
                    <p className="object-cover md:text-[2.5rem] text-[1.2rem] font-regular tracking-tight dark:text-white">{"#" + props.number + " | " + props.positon}</p>
                </div>
            </div>
        </div>
        <div className="text-stone-100 w-full p-2">
            <div className="flex flex-wrap text-center">
                <div className="w-1/2 ">
                    <p className="object-cover md:text-[1.5rem] text-[.8rem] font-regular tracking-tight dark:text-white">Height</p>
                </div>
                <div className="w-1/2 ">
                    <p className="object-cover md:text-[1.5rem] text-[.8rem] font-regular tracking-tight dark:text-white">Weight</p>
                </div>
                <div className="w-1/2 ">
                    <p className="object-cover md:text-[2rem] text-[1.2rem] font-semibold tracking-tight dark:text-white">{props.height}</p>
                </div>
                <div className="w-1/2 ">
                    <p className="object-cover md:text-[2rem] text-[1.2rem] font-semibold tracking-tight dark:text-white">{props.weight + " lbs"}</p>
                </div>
            </div>
        </div>
    </div>
    <div className="flex w-full flex-wrap items-center p-5">
        <div className="w-full md:px-[.5rem] px-[1rem]">
            <div className="flex flex-wrap justify-center">
                <div className="box-content blur-card lg:w-[600px] lg:overflow-hidden md:overflow-hidden lg:h-[430px] md:w-[500px] md:h-[360px] ">
                    <a href={`${props.playerURL}`}>
                        <img className="" src={`${props.playerHeadshot}`} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="text-stone-100 w-full ">
        <div className="flex flex-wrap text-center">
            <div className="w-full ">
                <button type="button" onClick={props.getNew} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-stone-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-stone-100 hover:text-[#ABABAB] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Get a Random Player</button>
            </div>
        </div>
    </div>
    <div className="text-stone-100 flex w-full flex-wrap p-2 md:text-center lg:text-center">
        <div className="px-5 w-1/2 ">
            <p className="object-cover md:text-[2rem] text-[1.2rem] font-medium tracking-tight dark:text-white">Age</p>
        </div>
        <div className=" px-5 w-1/2 ">
            <p className="object-cover md:text-[2rem] text-[1.2rem] font-semibold tracking-tight dark:text-white">{getAge(props.birthday)}</p>
        </div>
        <div className=" px-5 w-1/2 ">
            <p className="object-cover md:text-[2rem] text-[1.2rem] font-medium tracking-tight dark:text-white">University</p>
        </div>
        <div className=" px-5 w-1/2 ">
            <p className="object-cover md:text-[2rem] text-[1.2rem] font-semibold tracking-tight dark:text-white">{props.university}</p>
        </div>
        <div className=" px-5 w-1/2 ">
            <p className="object-cover md:text-[2rem] text-[1.2rem] font-medium tracking-tight dark:text-white">Draft</p>
        </div>
        <div className=" px-5 w-1/2 ">
            <p className="object-cover md:text-[2rem] text-[1.2rem] font-semibold tracking-tight dark:text-white">{props.draftRoundPick}</p>
        </div>
        <div className=" px-5 w-1/2 ">
            <p className="object-cover md:text-[2rem] text-[1.2rem] font-medium tracking-tight dark:text-white">Country</p>
        </div>
        <div className=" px-5 w-1/2 ">
            <p className="object-cover md:text-[2rem] text-[1.2rem] font-semibold tracking-tight dark:text-white">{props.country}</p>
        </div>
    </div>
    <div className="text-stone-100 flex flex-wrap p-2 ">
        <div className="w-full md:text-center lg:text-center">
            <div className="flex flex-wrap justify-center items-end">
                <div className="px-5 w-1/5 ">
                    <p className="object-cover md:text-[1.5rem] text-[.5rem] font-semibold tracking-tight dark:text-white">Points Per Game</p>
                    <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{parseFloat(props.ppg2021Season).toFixed(1)}</p>
                </div>
                <div className="px-5 w-1/5 ">
                    <p className="object-cover md:text-[1.5rem] text-[.5rem] font-bold tracking-tight dark:text-white">Minutes Per Game</p>
                    <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{parseFloat(props.mpg2021Season).toFixed(1)}</p>
                </div>
                <div className="px-5 w-1/5 ">
                    <p className="object-cover md:text-[1.5rem]  text-[.5rem] font-bold tracking-tight dark:text-white">Field Goal %</p>
                    <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{parseFloat(props.fgpercent2021Season).toFixed(1)}</p>
                </div>
                <div className="px-5 w-1/5 ">
                    <p className="object-cover md:text-[1.5rem] text-[.5rem] font-bold tracking-tight dark:text-white">Three Point %</p>
                    <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{parseFloat(props.threepercent2021Season).toFixed(1)}</p>
                </div>
                <div className="px-5 w-1/5 ">
                    <p className="object-cover md:text-[1.5rem] text-[.5rem] font-bold tracking-tight dark:text-white">Free Throw %</p>
                    <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{parseFloat(props.ftpercent2021Season).toFixed(1)}</p>
                </div>
            </div>
        </div>
        <div className="w-full md:text-center lg:text-center">
            <div className="flex flex-wrap justify-center items-end ">
                <div className="px-5 w-1/5 ">
                    <p className="object-cover md:text-[1.5rem] text-[.5rem] font-bold tracking-tight dark:text-white">Rebounds Per Game</p>
                    <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{parseFloat(props.rpg2021Season).toFixed(1)}</p>
                </div>
                <div className="px-5 w-1/5 ">
                    <p className="object-cover md:text-[1.5rem] text-[.5rem] font-bold tracking-tight dark:text-white">Assists Per Game</p>
                    <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{parseFloat(props.apg2021Season).toFixed(1)}</p>
                </div>
                <div className="px-5 w-1/5 ">
                    <div className="flex flex-wrap ">
                        <div className="w-full">
                            <p className="object-cover md:text-[1.5rem] text-[.5rem] font-bold tracking-tight dark:text-white">+/-</p>
                        </div>
                        <div className="py-3 w-full">
                            <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{props.plusminus}</p>
                        </div>
                    </div>
                </div>
                <div className="px-5 w-1/5 ">
                    <p className="object-cover md:text-[1.5rem] text-[.5rem] font-bold tracking-tight dark:text-white">Blocks Per Game</p>
                    <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{parseFloat(props.bpg2021Season).toFixed(1)}</p>
                </div>
                <div className="px-5 w-1/5 ">
                    <p className="object-cover md:text-[1.5rem] text-[.5rem] font-bold tracking-tight dark:text-white">Steals Per Game</p>
                    <p className="object-cover md:text-[2.5rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{parseFloat(props.spg2021Season).toFixed(1)}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap py-5">
            <div className="w-full">
                <div className="px-5 flex flex-wrap ">
                    <p className="leading-tight text-stone-100 object-cover md:text-[2rem] text-[1rem] font-extrabold tracking-tight dark:text-white">{props.rotowireHeadline}</p>
                    <p className="leading-tight text-stone-100 object-cover md:text-[1.5rem] text-[1rem] font-regular tracking-tight dark:text-white">{props.rotowirePost}</p>
                    <p className="object-cover md:text-[1rem] text-[.5rem] text-gray-200 font-light tracking-tight dark:text-white">{props.rotowirePublishDate}</p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}