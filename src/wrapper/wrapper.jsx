import React from 'react';
import ReactDOM from "react-dom";
import "./wrapper.css";
import eureka from "./eureka.jpg";

var imgText = {
    imgLink: eureka,
    text: "Hilop ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" +
        "ut labore et dolore magna aliqua.Condimentum lacinia quis vel eros donec.Vulputate enim " +
                " nulla aliquet porttitor lacus luctus accumsan.Aliquet eget sit amet tellus cras adipiscing " +
                 "enim.Pulvinar mattis nunc sed blandit libero.Quis hendrerit dolor magna eget est.Eu nisl" +
                 " nunc mi ipsum.Blandit aliquam etiam erat velit scelerisque in.Amet facilisis magna etiam " +
                  "tempor orci eu lobortis elementum nibh.Mattis ullamcorper velit sed ullamcorper morbi " +
               "tincidunt ornare massa.Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. " +
                "Blandit massa enim nec dui nunc mattis.",
}

export default class ImageText extends React.Component {
    render() {
        return (
            <div className="row">
                 <div className="wrap col-sm-6 img-container text-left">
                    <img src={imgText.imgLink} alt="Eureka 22 traditional design" className="wrap__img" />
                 </div>
                 <div className="col-sm-6 text-right">
                    <p className="wrap-text">
                        {imgText.text}
                    </p>
                </div>
            </div>    
        )
    }
}
