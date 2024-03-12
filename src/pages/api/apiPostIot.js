export default async function apiPostIot(req, res) {
  try{
    const msgIot = await req.body;
    console.log(`msgIot = ${msgIot}`)
    const baseUrlSolicitud = `https://893uij37ji.execute-api.us-east-1.amazonaws.com/prod/pushmessageSCIOT`

    const response3 = await fetch(baseUrlSolicitud, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msgIot),
    });

    const result3 = await response3.json();
    
    console.log('resultServer =', JSON.stringify(result3));
  
    res.status(200).json({ success: true, message: 'Request successful', resultServer: result3 });
  } catch (error) {
    console.error(error);
    // En caso de error, envía una respuesta de error al cliente
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }

  }
  