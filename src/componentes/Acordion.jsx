import Accordion from 'react-bootstrap/Accordion';

export function Acordion({saludo}) {
  return (
    <div>
        <h1 className="saludo text-lg-center">{saludo}</h1>
        <div className='container' style={{ width: '65%' }}>
            <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='bg-amber-200'>Tienda Santiago</Accordion.Header>
                <Accordion.Body className="bg-black text-light">
                <div>
                    <strong>Ubicado en pleno centro de Santiago,</strong> ofrecemos variedad de abarrotes, bebidas, frutas y verduras, lacteos, dulces, entre otros.
                    <p><b>Horarios:</b></p>
                    <h3>- Lunes a Viernes: 9:00 a 19:00 hrs</h3>
                    <h3>- Sábados: 10:00 a 18:00 hrs</h3>
                    <h3>- Domingos: 11:00 a 17:00 hrs</h3>
                    <img class="img-fluid img-thumbnail rounded mx-auto d-block" src="https://imgcf.ecn.cl/600/e4/e425ccebc85f684981cfe6263a035379c18ad99f.bin.jpg"></img>
                </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header className='bg-amber-400'>Tienda Viña Del Mar</Accordion.Header>
                <Accordion.Body className="bg-black text-light">
                <div>
                <strong>Ubicado en la costanera, </strong> ofrecemos variedad de abarrotes, bebidas, frutas y verduras, lacteos, dulces, entre otros.
                    <p><b>Horarios:</b></p>
                    <h3>- Lunes a Viernes: 8:30 a 22:30 hrs</h3>
                    <h3>- Sábados: 9:30 a 22:00 hrs</h3>
                    <h3>- Domingos: Cerrado</h3>
                    <img class="img-fluid img-thumbnail rounded mx-auto d-block" src="https://imgcf.ecn.cl/600/33/3331dbfd9fa08659aedfef2463df38a82600d1f0.bin.jpg"></img>
                
                </div>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        <br></br>
        <br></br>
    </div>

  );
}
