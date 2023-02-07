import React from "react";

export default function FormField({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseME,
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900 "
        >
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
          type="button"
            onClick={handleSurpriseME}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 
                    rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="bg-gray-50 border-gray-400 text-gray-900 
        text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] 
        outline-none block w-full p-3"
      />
     
    </div>
  );
}
