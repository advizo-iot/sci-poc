"use client"
import Image from "next/image";
import React from "react";
import { SmokeSensor }  from "@/components/SVGIcons";
import HandleApiPostIoT from "@/app/plant1/HandleApiPostIot";

export default function Home() {

  const coordenadas = React.useMemo(() => [
    { id:"s1", x: 26, y: 18,state: "normal" },
    { id:"s2", x: 20, y: 49,state: "normal" },
    { id:"s3", x: 50.7, y: 49,state: "normal" },
    { id:"s4", x: 75, y: 49,state: "normal" },
    { id:"s5", x: 81, y: 18,state: "normal"},
    { id:"s6", x: 57, y: 18,state: "normal"}
  ], []);
  
  const [booleanToSend, setBooleanToSend] = React.useState(false);
  const [updatedCoordenadas, setUpdatedCoordenadas] = React.useState<{ id: string; x: number; y: number; state: string }[]>([]);

  React.useEffect(() => {
    const initialCoordenadas = coordenadas.map(coord => ({ ...coord, state: "normal" }));
    setUpdatedCoordenadas(initialCoordenadas);
  }, [coordenadas]);

  const handleButtonClick = async () => {
    setBooleanToSend(!booleanToSend);
    const response = await HandleApiPostIoT(booleanToSend);
    console.log(`apiResponse: ${JSON.stringify(response)}`)
    const updatedCoordenadas = coordenadas.map((coord) => ({
      ...coord,
      state: response ? response[coord.id] || coord.state : coord.state,
    }));
    setUpdatedCoordenadas(updatedCoordenadas);
    console.log("Coordenadas actualizadas:", updatedCoordenadas); // Imprimir las coordenadas actualizadas
  };
  
  
  return (
    <main className="flex  items-center justify-between ">
      <div className="relative max-w-xl mx-auto">
          <Image src="/plan1.png" alt={""} width={595} height={822}></Image>
          {updatedCoordenadas.map((coord, index) => (
            <div key={index} className="absolute" style={{ left: `${coord.x}%`, top: `${coord.y}%`, transform: 'translate(-50%, -50%)' }}>
              <SmokeSensor height={90} width={50} flag={coord.state}></SmokeSensor>
            </div>
          ))}
          <button onClick={handleButtonClick}>Enviar booleano</button>
      </div>
    </main>
  );
}

