import React from "react";
import ReactDOM from "react-dom";
import "./dates.css";
import contractimg from "./signing-contract.jpg";
import titleimg from "./title.jpg";
import streetsign from "./streetsign.jpg";
import upd1 from "./upd1.jpg";
import upd2 from "./upd2.jpg";


var updNews = [
    {
    date: "01.02.17",
    dateText: "Signing contract with HomeBuyers Centre",
    nextStep: "Waiting for Titling in May-June 2017",
    dateImage: contractimg,
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
        dateImage2: upd2,
    },
    

]
export default class Dates extends React.Component { 
    render() { 
        return (
            updNews.map((news) =>
                <div className="container alert alert-success dates-block" key={news.date}>
                    <h3 className="text-success">{news.date}</h3>
                    <p>{news.dateText}</p>
                    <p className="">{news.nextStep}</p>
                    <img src={news.dateImage} alt="Signing contract image" className="img-fluid rounded max-width: 100%; height:auto; dates-img" />
                    <img src={news.dateImage2} className="img-fluid rounded max-width: 100%; height:auto; dates-img" />
                </div>
            )
        );
    }
}