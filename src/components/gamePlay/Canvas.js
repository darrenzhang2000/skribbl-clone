import React, { Component } from "react"
import DrawArea from "./drawing/DrawArea"
import "./Canvas.css"

// let canvasStyle = {
//     border: "2px solid #f505f5",
//     width: "200px",
//     margin: "auto"
// }

function Canvas() {
    return (
        <div id="container">
            <DrawArea />
            <svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 10 H 90 V 90 H 10 " />
            </svg>
        </div>
    )
}

export default Canvas
