import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import StreamDelete from './Components/StreamDelete'
import StreamCreate from './Components/StreamCreate'
import StreamEdit from './Components/StreamEdit'
import StreamList from './Components/StreamList'



const App = () => {
  return <div>
    <BrowserRouter>
      <div>
        <Route to="/" exact component={StreamList} />
        <Route to="/StreamEdit" exact component={StreamEdit} />
        <Route to="/StreamCreate" exact component={StreamCreate} />
        <Route to="/StreamDelete" exact component={StreamDelete} />
      </div>

    </BrowserRouter>
    </div>

  
}

export default App