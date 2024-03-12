// Post: Convert Image in bucket S3 to pdf
// import Swal from 'sweetalert2';

async function HandleApiPostIot(message) {
  
  // Swal.fire({
  //   title: 'Cargando...',
  //   allowOutsideClick: false,
  //   showConfirmButton: false,
  //   didOpen: () => {
  //     Swal.showLoading();
  //   },
  // });
 
  const requestBody = { message: message, Fecha: "2024-01-10", topic: "datarecive1" };
  console.log(`requestBody.message = ${requestBody.message}`)
  console.log(`requestBody.Fecha = ${requestBody.Fecha}`)
  console.log(`requestBody.topic = ${requestBody.topic}`)

  const baseUrlIot = '/api/apiPostIot'

  const response = await fetch(baseUrlIot, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const result = await response.json();

  console.log(`resultClient = ${JSON.stringify(result.resultServer)}`)
  return result.resultServer;

  // Swal.fire({
  //   title: `FELICITACIONES `,
  //   icon: 'success',
  //   text: 'Usted puede calificar para un bono FISE del gobierno Peruano',
  // });


}

export default HandleApiPostIot;
