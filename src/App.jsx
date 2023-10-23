import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Main from "./layout/Main";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    
    <div className="m-20">
      <Main></Main>
      <h1 className="text-6xl my-20 text-center text-purple-600">
        Taste your taste: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
