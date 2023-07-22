import React, { useState , useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { CSSReset } from "../components/CSSReset/CSSReset"
import Header from "../components/Header/index.js";
import PlaylistView from "../components/PlaylistView/index.js";
import Banner from "../components/Banner/index.js"

function HomePage() {

	const location = useLocation();
	
	const [userData,setUserData] = useState(location.state);
	const [effectCount,setEffect] = useState(0);
	const [filter,setFilter] = useState("");

	useEffect(() => {
		const loadPlaylists = async () => {
				const response = await fetch("http://localhost:3001/getUser/"+encodeURIComponent(userData.user));
      			const result = await response.json();
      			setUserData(result);
    	};
    	loadPlaylists();
  	}, [effectCount]);

	return (
    	<CSSReset>
    		<Header setFilter={setFilter} filter={filter} username={userData.user}></Header>
    		<Banner></Banner>
    		<PlaylistView playlists={userData.playlists} effectCount={effectCount} setEffect={setEffect} filter={filter} username={userData.user}></PlaylistView>
    	</CSSReset>
	);

}

export default HomePage;
