import React, { Component } from "react"
import DrawArea from "./drawing/DrawArea"
import "./Canvas.css"

let canvasStyle = {
    border: "2px solid #f505f5",
    width: "200px",
    margin: "auto"
}

function Canvas() {
    return <div style={canvasStyle}>
        <DrawArea />
    </div>
}

export default Canvas
