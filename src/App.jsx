import React from "react";
import TopStats from "./components/TopStats";
import LayerCard from "./components/LayerCard";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  <CustomCursor />

  const layers = [
    { title: "Human Layer", vulnerability: true, soc: true, hardening: false,content:"Pinochle. Al is not your average cybersecurity firm-we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets." },
    {
      title: "Perimeter Security",
      vulnerability: true,
      soc: true,
      hardening: false,
      content:"Pinochle. Al is not your average cybersecurity firm-we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets."
    },
    {
      title: "Network Security",
      vulnerability: true,
      soc: true,
      hardening: false,
      content:"Pinochle. Al is not your average cybersecurity firm-we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets."
    },
    {
      title: "Endpoint Security",
      vulnerability: true,
      soc: true,
      hardening: false,
      content:"Pinochle. Al is not your average cybersecurity firm-we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets."
    },
    {
      title: "Application Security",
      vulnerability: true,
      soc: true,
      hardening: false,
      content:"Pinochle. Al is not your average cybersecurity firm-we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets."
    },
  ];

  return (
    <div className="min-h-screen cursor-minimal bg-gray-900 text-white p-6">
      <TopStats />
      <div className="mt-6">
        {layers.map((layer, index) => (
          <LayerCard
            key={index}
            title={layer.title}
            vulnerability={layer.vulnerability}
            soc={layer.soc}
            hardening={layer.hardening}
            content={layer.content}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
