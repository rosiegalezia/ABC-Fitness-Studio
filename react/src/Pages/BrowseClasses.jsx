import Class from "../Components/Class"
import fitnessClasses from "../assets/Class Data/classData.json"

import '../assets/styles.css'

function BrowseClasses() {
    return <div>
        <h2 className="p-5 pb-3">Browse our classes</h2>
        <div className="flex-wrap d-flex m-4 p-4">
            {fitnessClasses.map((fitnessClass) => {
                return <fitnessClass key={fitnessClass.id} name={fitnessClass.name} image={fitnessClass.image} description={fitnessClass.description} instructor={fitnessClass.instructor} duration={fitnessClass.duration} />;
            })}
        </div>
    </div>
}

export default BrowseClasses