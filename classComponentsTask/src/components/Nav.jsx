import React from "react";
import { Component } from "react";
import Box1 from "./box1";
import Box2 from "./Box2";
import Box3 from "./Box3";




export default class Nav extends Component {
    render() {
        return(


  



<div class="container">

  
    <div class="outer">
        <div class="inner">

            <div class="left">
                <div class="square big"></div>
                <div class="square big"></div>
            </div>

            <div class="right">
                <div class="square text">Row1</div>
                <div class="square text">Row2</div>
            </div>

        </div>
    </div>


   
    <div class="outer">
        <div class="inner column">

            <div class="group">
                <div class="square small"></div>
                <div class="square small"></div>
                <div class="square small"></div>
            </div>

            <div class="bottom">
                <div class="square small"></div>
                <div class="rect">
                    <div class="circle"></div>
                </div>
            </div>

        </div>
    </div>


    <div class="outer">
        <div class="inner column">

            <div class="top-group">
                <div class="mini-group">
                    <div class="square small"></div>
                    <div class="square small"></div>
                </div>

                <div class="rect">
                    <div class="circle"></div>
                </div>
            </div>

            <div class="bottom-group">
                <div class="mini-group">
                    <div class="square small"></div>
                    <div class="square small"></div>
                </div>

                <div class="rect"></div>
            </div>

        </div>
    </div>

</div>







        )
        }
        }
        