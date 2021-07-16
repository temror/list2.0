import React from "react";
import c from './App.module.scss';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import DescriptionContainer from "./components/Description/DescriptionContainer";

let App = (props) => {
    return (
        <div className={c.App}>
            <Header/>
            <List/>
            <DescriptionContainer/>
        </div>
    )
}
/*
let nastya =()=>{
    console.log('Настя')
}
nastya()*/

export default App;
