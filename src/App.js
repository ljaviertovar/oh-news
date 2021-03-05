import React, {Fragment, useState, useEffect} from  'react'
import Header from './components/Header'
import Form from './components/Form'

function App() {

  const [category, setCategory] = useState('');

  useEffect(() => {

    const consultAPI = async () => {

      const  url = `http://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=dba1453e17e44a5789803c94fcf295c5`;
      const resp = await fetch(url);
      const news = await resp.json();

      console.log(news)
    }

    consultAPI();

  }, [category])

  return (
   <Fragment>
     <Header
     title = "Oh - News"
     />

     <div className="container white">
      <Form
      setCategory={setCategory}
      />
     </div>
   </Fragment>
  );
}

export default App;
