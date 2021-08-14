import { useState } from 'react';


import Statement from 'components/Statement';
import Form from 'components/Form';
import booking from 'services/booking';
import Constraints from 'components/Constraints';

import 'App.css';
import Result from 'components/Result';

function App() {

const [output, setOutput] = useState('');

return(
  <>
    <Statement />
    
    <Constraints />

    <Form booking={booking} setOutput={setOutput}/>

    <Result output={output} />
  </>
)

}

export default App;
