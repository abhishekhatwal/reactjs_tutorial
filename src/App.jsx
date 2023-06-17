import React from "react";
import sdata from "./sdata";
import Card from "./Card";
import Heading from "./Heading";


function App() {
    return (
        <>

        <Heading></Heading>
            {sdata.map((val) => {
                return (<Card imgsrc={val.imgscr} title={val.title} sname={val.sname} link={val.link}></Card>);
            })}

        </>
    );
}

export default App;