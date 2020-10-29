import React, { useEffect, useState } from "react";
import axios from 'axios';
import Fact from './Fact.js'



function Api() {

    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
        dailyfact: ""
    });
  
    useEffect(() => {
        setAppState({ loading: true});
        const apiUrl = 'https://cat-fact.herokuapp.com/facts'
        axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            setAppState({ loading: false, repos: allRepos})
        })
        
    }, [setAppState]);


    const dailyfact = <Fact facts={appState.repos}/>
   
    



    return (
      <div>
          {dailyfact}
      </div>
    );
  }

export default Api;