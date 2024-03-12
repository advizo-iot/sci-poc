import Image from "next/image";
import React from "react";
import { SmokeSensor }  from "@/app/components/SVGIcons";

export default function Home() {
  
  const coordenadas = [
    { id:"s1", x: 26, y: 18,state: false },
    { id:"s2", x: 20, y: 49,state: true },
    { id:"s3", x: 50.7, y: 49,state: true },
    { id:"s4", x: 75, y: 49,state: false },
    { id:"s5", x: 81, y: 18,state: true},
    { id:"s6", x: 57, y: 18,state: true}
  ];
  
  return (
    <main className="flex  items-center justify-between ">
      <div className="relative max-w-xl mx-auto">
          <Image src="/plan1.png" alt={""} width={595} height={822}></Image>
          {coordenadas.map((coord, index) => (
            <div key={index} className="absolute" style={{ left: `${coord.x}%`, top: `${coord.y}%`, transform: 'translate(-50%, -50%)' }}>
              <SmokeSensor height={90} width={50} flag={coord.state}></SmokeSensor>
            </div>
          ))}
      </div>
    </main>
  );
}

