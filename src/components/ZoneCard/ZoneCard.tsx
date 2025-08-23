import React from 'react'

type Props = {
  selected: boolean;
  icon: React.ReactNode;
  label: string;
}

const ZoneCard = (props: Props) => {
  return (
    <div
      className={`flex flex-col items-center px-4 py-1 rounded-lg ${
        props.selected ? "text-teal-600 font-semibold" : "text-gray-500"
      }`}
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <span className="text-lg">{props.icon}</span>
      <span className="text-[11px] mt-1">{props.label}</span>
    </div>
  )
}

export default ZoneCard