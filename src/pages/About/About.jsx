import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <section className="m-auto w-[90vw] pt-4">
            <img src="https://images.unsplash.com/photo-1603881669207-82be1849d585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJvYWQlMjB0cmlwfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt="limo drive"
            className="h-60 w-full object-cover" />
            <div className="my-6">
                <h1 className="font-bold text-3xl py-4">Don't squeeze in a sedan when you could relax in a van.</h1>
                <p className="">
                Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before each trip to ensure your travel plans can go 
                off without a hitch. (Hitch costs extra 😉) Our team is full of vanlife enthusiasts
                 who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className="rounded p-10 bg-rose-600 bg-opacity-80 my-6 space-y-6">
                <h1 className="text-3xl text-white font-bold w-72">
                    Your desitination is waiting for you
                </h1>
                <Link to="/vans" className="h-14 bg-black px-4 flex items-center justify-center text-white rounded">Explore our vans</Link>
            </div>
        </section>
    )
}

export default AboutPage;