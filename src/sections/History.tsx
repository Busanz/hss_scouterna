import Story from "@/components/Story"
import OldBoats from "@/components/OldBoats"

const History = () => {
    return (
        <>
            <div className="my-16">
                <h1 className="text-center text-3xl mt-8 font-[Montserrat]">
                    Historia
                </h1>
                <div className="mx-auto my-8 h-px w-[90%] md:w-[80%] bg-[#76Cff4]"></div>            
                <Story />

                <OldBoats />
            </div>
        </>
    )
}

export default History