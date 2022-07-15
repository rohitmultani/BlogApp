
import {Fragment} from 'react'
import Header from '../components/Header';
import CreateBlog from '../components/CreateBlog';
import Cards from '../components/Cards';

function Home() {
  return (
    <Fragment>
    
      <Header/>
    <CreateBlog/>
    <Cards/>

    </Fragment>
  )
    }

export default Home;
