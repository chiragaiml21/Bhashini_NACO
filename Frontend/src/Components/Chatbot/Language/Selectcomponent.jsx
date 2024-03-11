import React, { useState } from "react";
import spokenLanguages from "./SpokenLanguages";
import Select from "react-select";
const Selectcomponent = () => {
  const [selectedOption, setSelectedOption] = useState();
  function handleSelect(data) {
    console.log(data);
    setSelectedOption(data);
  }

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "100%", // Set the height of the control, // Set the width of the control
    }),
  };
  console.log(spokenLanguages);
  return (
    <div className="p-10 flex justify-center item-center">
      <Select
        options={spokenLanguages}
        placeholder="Select Locations"
        value={selectedOption}
        onChange={handleSelect}
        isSearchable={true}
        styles={customStyles}
        required
        className=" w-full text-black "
      />
    </div>
  );
};

export default Selectcomponent;
