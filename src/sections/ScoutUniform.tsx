import "@/app/globals.css"

const ScoutUniform = () => {
    return (
        <>
            <section className="m-4">
                <div className="p-1 mt-6 sm:px-6 md:px-8">
                    <h2 className="text-center text-2xl  p-4 sm:text-3xl md:text-4xl">Scout outfit</h2>
                    <h3 className="text-primary text-center sm:text-lg md:text-xl mt-2">The Scout costume is a way to show that we all belong to the Scouts.</h3>
                </div>
                <div className="mx-auto my-8 h-0.5 w-full opacity-90 sm:my-12 bg-text-subtitle" />
                <div>
                    <p className="p-4">The Scout uniform creates community, strengthens our identity and is part of our symbolic framework. The Scout uniform is used in various designs all over the world and shows that we belong to a global movement.</p>
                    <p className="p-4">In Sweden, the Scout uniform consists of three garments, a t-shirt, a polo shirt and a shirt. Badges are attached to the shirt that tell us what we have done, what interests we have and our belongings.</p>
                </div>
                <div className="p-4 text-primary text-center">
                    In the Scout Shop there are different types of scout clothing, where you can read more about them, how they are used and why we have them.
                </div>
                <div className="flex justify-center mb-4">
                    <button className="btn bg-gray-500 rounded-lg p-2 text-white text-bold">
                        To the Scout shop
                    </button>
                </div>
            </section >
        </>
    )
}
export default ScoutUniform
