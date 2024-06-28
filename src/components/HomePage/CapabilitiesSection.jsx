import React from "react";
import { capabilitiesData } from "@/data/Capabilities";
import CapabilityCards from "./CapabilityCards";

function Capabilities() {
  return (
    <div className="CapabilitiesSection flex flex-col gap-12">
      {capabilitiesData.map((capability, index) => (
        <CapabilityCards key={index} cardVarient={capability} />
      ))}
    </div>
  );
}

export default Capabilities;
