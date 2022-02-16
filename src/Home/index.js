import React from "react"
import "./style.css"
import Header from "./components/Header"

function Home(){
    return(
        <>
            <Header />
            <main className="main">
                <div className="navbar">
                    navbar
                </div>
                <div className="feed">
                    feed
                </div>
            </main>
        </>
    );
}

export default Home;