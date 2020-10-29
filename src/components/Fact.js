import React, { useState } from "react";

function Fact(props) {

    const [fact1, setFact1] = useState({
        fact1: '',
        uploader: '',
        upvotes: null
    })
    const [fact2, setFact2] = useState({
        fact2: '',
        uploader: '',
        upvotes: null
    })
    const [fact3, setFact3] = useState({
        fact3: '',
        uploader: '',
        upvotes: null
    })

    function getFact() {
        const catfacts = props.facts
        const factnum1 = parseInt(((Math.random() * (270-1))));
        const factnum2 = parseInt(((Math.random() * (270-1))));
        const factnum3 = parseInt(((Math.random() * (270-1))));
        for(var i in catfacts) {
            const firstfact = catfacts[i][factnum1]
            const secondfact = catfacts[i][factnum2]
            const thirdfact = catfacts[i][factnum3]
            setFact1({fact1: firstfact['text'], uploader: firstfact['user']['name']['first'] + ' ' + firstfact['user']['name']['last'], upvotes: firstfact['upvotes']})
            setFact2({fact2: secondfact['text'], uploader: secondfact['user']['name']['first'] + ' ' + secondfact['user']['name']['last'], upvotes: secondfact['upvotes']})
            setFact3({fact3: thirdfact['text'], uploader: thirdfact['user']['name']['first'] + ' ' + thirdfact['user']['name']['last'], upvotes: thirdfact['upvotes']})
        }

    }



    return (
    <div>
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => getFact()}
      >
          GET SOME FACTS!!!!
      </button>
    <p>First Fact: {fact1["fact1"]}<br/>Uploader: {fact1["uploader"]}<br/> upvotes: {fact1['upvotes']}</p>
    <p>Second Fact: {fact2["fact2"]}<br/> Uploader: {fact2["uploader"]}<br/> upvotes: {fact2['upvotes']}</p>
    <p>Third Fact: {fact3["fact3"]}<br/> Uploader: {fact3["uploader"]}<br/> upvotes: {fact3['upvotes']}</p>
    </div>
    );
  }

export default Fact;