import React from "react";
import Footer from "./Footer";

export default function About(){
    return <div id='about'>
        <div className="about_ban">
        </div>

        <div className="quote">
            <img src='img/left_pat.png' />
           <div id='q'>
          <center> <img src='img/q.png' /></center>
            <h1>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</h1>
            <h3>-BUNNY WILLIAMS</h3>
           </div>
            <img src='img/rht_pat.png' />

        </div>
        {/* ----------------- */}
        <div className="we_do">
            <div>
            <h1>What We Do</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
                when lookings at its layouts the points of using 
                that it has a more-or-less normal.</p>
            <button >Our Concept</button>
            </div>
        
        <img src='img/do.png' />
        </div>

        <div className="we_do we_do_2">
            <img src='img/do_2.png' />
            <div>
            <h1>The End Result</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
                when lookings at its layouts the points of using 
                that it has a more-or-less normal.</p>
            <button >Our Portfolio</button>
            </div>
        </div>
{/* --------------------------Employee---------- */}
<div className='employee'>
    <h1>What the People Thinks About Us</h1>

    <div className="emp">
        <img src='img/emp1.png' />
        <img src='img/emp2.png' />
        <img src='img/emp3.png' />

    </div>

</div>
{/* ------------------Form------------------------ */}
<div className="forms">
    <div className="form_head">
        <h1>Creative project? Let's have a productive talk.</h1>
    </div>
    <div className="form">
        <div className="input">
            <input type='text' placeholder="Name"/>
            <input type='text' placeholder="Email"/>
        </div>

        <div className="subject">
        <input type='text' placeholder="Hello Iam intrested in.."/>
        </div>
        <div id='f_b'>
        <button>Send Now</button>
        </div>
        

    </div>
</div>
{/* ------------------footer----------------------- */}
<Footer />

</div>
}