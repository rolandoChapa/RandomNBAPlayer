export default function StateNBACards(props) {

	const legendStyle = { backgroundColor: props.games > 800 ? "#f0ce69" : "#d1e5ff"}
    


    return (

    <div className="stateNBACards font-heebo" >
    <div className="flex justify-center flex-wrap items-center content-center md:content-stretch md:flex-row md:space-x-16 space-y-4 flex-col pt-[1.5rem] pb-[1.5rem]">
        <div className="inline-block">
            <a style={legendStyle} className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-1/2 md:w-1/2 md:rounded-none md:rounded-l-lg" src={`${props.image}`} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Stats:</p>
                    <p >Total Games: {props.games}</p>
                    <p>PPG: {props.pointspergame}</p>
                    <p>RPG: {props.reboundpergame}</p>
                    <p>APG: {props.assistpergame}</p>
                    <p>FG%: {props.fgpercent}%</p>
                    <p>3FG%: {props.threeptpercent}%</p>
                    <p>FT%: {props.freethrow}%</p>
                </div>
            </a>
        </div>
    </div>
    <div className="flex justify-center flex-wrap items-center content-center">
        <button
                onClick={props.onButton} 
                type="button" 
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
                Random Player
        </button>
        
    </div>
    
</div>
    )
}