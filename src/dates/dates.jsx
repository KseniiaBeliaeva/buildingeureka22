import React from "react";
import ReactDOM from "react-dom";
import "./dates.css";
import "../styles.css";
import contractimg from "./signing-contract.jpg";
import titleimg from "./title.jpg";
import streetsign from "./streetsign.jpg";
import upd1 from "./upd1.jpg";
import upd2 from "./upd2.jpg";
import builders from "./builders.jpg";
import colorSelection from "./colorSel1.jpg";
import colorSelection2 from "./colorSel2.jpg";

var updNews = [
    {
    date: "01.02.17",
    dateText: "Signing contract with HomeBuyers Centre",
    nextStep: "Waiting for Titling in May-June 2017",
    dateImage: colorSelection2,
    },
    {
        date: "12.02.17",
        dateText: "Color selection appointment",
        nextStep: "Waiting for Titling in May-June 2017",
        dateImage: colorSelection,
    },
    {
        date: "01.07.17",
        dateText: "Titling reshedule",
        nextStep: "Waiting for Titling in September 2017",
        dateImage: titleimg,
    },
    {
        date: "01.09.17",
        dateText: "Titling reshedule",
        nextStep: "All main construction works complete, final authority approval" +
            "being sought.Forecast title date: mid-December 2017." +
             "Titling delayed due to a delay with authority approvals.",
        dateImage: titleimg,
    },
    {
        date: "12.10.17",
        dateText: "Titling reshedule",
        nextStep: "All construction works are complete.Authority approvals are progressing, " +
         "with a number of authorities already having provided consent. Forecast title date: mid-December 2017.",
        dateImage: titleimg,
    },
    {
        date: "04.12.17",
        dateText: "The land lot has been titled",
        nextStep: " Waiting for settlement in 14 days",
        dateImage: streetsign,
    },
    {
        date: "07.12.17",
        dateText: "The gates are open, we can finally visit our block",
        nextStep: "Waiting for settlement in 14 days",
        dateImage: upd1,
        dateImage: upd2,
    },
    {
        date: "07.12.17",
        dateText: "Builder's paper work",
        nextStep: "Waiting for start in 2-3 months",
        dateImage: builders,
    },

    

]
export default class Dates extends React.Component { 
    render() { 
        return (
            updNews.map((news) =>    
                <div className="col-sm-6">
                    <div className="alert alert-info dates-block" key={news.date}>
                        <h3 className="text-info">{news.date}</h3>
                    <mark className="">News:</mark>
                    <p>{news.dateText}</p>
                    <div>
                        <mark className="">Next step:</mark>
                        <p className="">{news.nextStep}</p>
                    </div>    
                    <img src={news.dateImage} alt="Signing contract image" className="img-thumbnail dates-img" />
                    </div>
                </div>    
            ) 
        );
    }
}