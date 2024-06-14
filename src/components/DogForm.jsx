import React, {useState} from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

const DogForm = ({ formType, formOptions }) => {
    const [breeds, setBreeds] = useState([]);
    const [numDogs, setNumDogs] = useState(50);

    const updateCounter = (e) => {
        const numCounter = document.getElementById("num-dogs-input");
        setNumDogs(e.target.value);
        if(e.target.value > 1){
            numCounter.innerHTML = `${e.target.value} dogs`;
        }else{
            numCounter.innerHTML = `${e.target.value} dog`;
        }
    }

    return(
        <div className="form-page">
            <form className="dog-form">
                {formType === "breed" ?
                    <>
                        <label htmlFor="breeds" className="input-label">Choose <span className="popout-text">one</span> or 
                        <span className="popout-text"> more</span> breed(s)
                        <p className="instruction-text center-align">(Hold control/command to select multiple options)</p></label>
                        <Select id="breeds"
                            className="select-breeds-options"
                            classNamePrefix="select-breeds"
                            defaultValue={breeds}
                            onChange={setBreeds}
                            options={formOptions}
                            isMulti
                            isSearchable
                            />
                        {breeds ? console.log(breeds.length):null}
                        <label htmlFor="form-slider" className="input-label">Number of dogs</label>
                        <input type="range" min="1" max="50" id="form-slider" list="markers" onChange={updateCounter}></input>
                        <datalist id="markers" className="slider-markers">
                            <option value="1" label="1"></option>
                            <option value="5" label="5"></option>
                            <option value="10" label="10"></option>
                            <option value="15" label="15"></option>
                            <option value="20" label="20"></option>
                            <option value="25" label="25"></option>
                            <option value="30" label="30"></option>
                            <option value="35" label="35"></option>
                            <option value="40" label="40"></option>
                            <option value="45" label="45"></option>
                            <option value="50" label="50"></option>
                        </datalist>
                        <p id="num-dogs-input">50 dogs</p>
                    </> :
                    <>
                        <h2>Random Fetch</h2>
                        <h3>Complete randomized fetch of any breed</h3>
                    </>
                }
                {breeds && breeds.length > 0 ? 
                <Link to="/Breed/Results" state={{"type":"breeds", "breeds":breeds, "num":numDogs}} className="form-fetch-button">Fetch!</Link>
                : <button onClick={() => alert("Please choose at least one breed!")} className="form-fetch-button">Fetch!</button>}
            </form>
        </div>
    );
};

export default DogForm;