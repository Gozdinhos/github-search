import React from "react";
import Moon from "../../assets/icon-moon.svg";
import Location from "../../assets/icon-location.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Website from "../../assets/icon-website.svg";
import Company from "../../assets/icon-company.svg";
import "./UserCard.css";
import { IUser } from "../../service/users";

interface IUserCard {
  userData?: IUser
}




const UserCard = (props: IUserCard) => {


  return (
    <div className="user-card-wrapper">
      <img className="avatar-icon" src={props.userData?.avatar_url} alt="avatar_icon" />
      <div className="user-information">
        <div className="user-card-header">
          <h1> {props.userData?.name}</h1>
          <p> {`Joined ${new Date(props.userData?.created_at || "").toLocaleDateString('de-en', { year: "numeric", month: "short", day: "numeric" })}`}  </p>
        </div>
        <h4>{`@${props.userData?.login}`}</h4>
        <h5>{props.userData?.bio ? props.userData?.bio : "This profile has no bio"}</h5>
        <div className="about">
          <div className="info">
            <p className="text-secondary">Repos</p>
            <p className="text-primary">{props.userData?.public_repos}</p>
          </div>
          <div className="info">
            <p className="text-secondary">Followers</p>
            <p className="text-primary">{props.userData?.followers}</p>
          </div>
          <div className="info">
            <p className="text-secondary">Following</p>
            <p className="text-primary">{props.userData?.following}</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="info-section">
            <img src={Location} alt="location_icon" />
            <p className="text-secondary"> {props.userData?.location ? props.userData?.location : "Not available"} </p>
          </div>
          <div className="info-section">
            <img src={Twitter} alt="twitter_icon" />
            <p className="text-secondary">{props.userData?.twitter_username ? props.userData?.twitter_username : "Not available"}</p>
          </div>
          <div className="info-section">
            <img src={Website} alt="website_icon" />
            <p className="text-secondary">{props.userData?.blog ? props.userData?.blog : "Not available"}</p>
          </div>
          <div className="info-section">
            <img src={Company} alt="company_icon" />
            <p className="text-secondary">{props.userData?.company ? props.userData?.company : "Not available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
