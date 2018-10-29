import React, {  useState } from "react";
import { Button, Image, Segment, Header } from "semantic-ui-react";
import { ThemeCSS } from "@glgit/ui-react-theme";
import './App.css';

const logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvcKoXY3_cegGfV8hxdwXWKnExowqPAcKWaiA01ktgF8AeRLa3g",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjeQ6lCy3GYdmYdd4hzY9kz3aRskSBRWNc4oQbSNfbBhihhFf1g",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKrN7Nt9JsItkvwr4zlkzIvSVtPbkcOuokOdP-w7EPIRHa6eFAg"
];

const App = () => {
    let [logoIndex, setIndex] = useState(0);

  return (
    <Segment textAlign="center">
        <Image src={logos[logoIndex]} size="medium" circular avatar/>
      <Header className="App-header">
          <h3>Current Image Index</h3>
          <h2>{logoIndex}</h2>
          <p>Click the button to change image.</p>
        {<Button
          onClick={() =>{
              setIndex( logoIndex < logos.length - 1 ? logoIndex+1 : 0 )
          } }
        >
          Change Image
        </Button>}
      </Header>
    </Segment>
  );
};

export default App;
