import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
        alt="limo drive"
        className="w-full h-[100vh] relative object-cover" />
        <div className="absolute top-0 flex flex-col space-y-6 px-20 items-start justify-center h-full w-full bg-black bg-opacity-10">
            <h1 className="text-5xl font-bold text-white">You got the travel plans, <br /> we got the travel vans.</h1>
            <p className="text-white leading-loose text-lg">
                Add adventure to your life by joining the #limodrive movement. 
                Rent the prefect van to make your prefect road trip.
            </p>
            <Link to="/vans" className="h-14 w-full text-white bg-rose-600 rounded px-4 flex items-center justify-center active:scale-90">
                Find your van
            </Link>
        </div>
      </section>
    )
}

export default HomePage;