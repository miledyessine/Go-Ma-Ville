import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./side-bar.scss";
import { menuItems } from "../data/Data";
import {useCookies}from "react-cookie";

const SideBar = ({handleChange,selectedCategory}) => {
	const [isExpanded, setExpendState] = useState(false);
	const [token,setToken,deleteToken] =useCookies(["user-token"]);
	const logout = () => {
        deleteToken(["user-token"]);
    }
	const selectCatg=(catg)=>{
		handleChange(catg);
		console.log("categorie= ",catg);
	}
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<h2>Services</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						
						<Link to={"/services/"+text}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<div className="img-icon">{icon}</div>
							
							{isExpanded &&  <p> -   {text}</p>}
						</Link>
					))}
				</div>
			</div>
			
			
		</div>
	);
};

export default SideBar;