import React, { useState , useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { CSSReset } from "../components/CSSReset/CSSReset"
import Header from "../components/Header/index.js";
import PlaylistView from "../components/PlaylistView/index.js";
import Banner from "../components/Banner/index.js"
import PopUpModal from "../components/PopUpModal/index.js";

function HomePage() {

	const location = useLocation();
	
	const [userData,setUserData] = useState(location.state);
	const [effectCount,setEffect] = useState(0);
	const [filter,setFilter] = useState("");
	const [warning,setWarning] = useState(`Welcome to MyTube ${userData.user}!`);
	const [viewPopUp,setViewPopUp] = useState(false);

	// "https://mytube.cyclic.app/getUser/"

	useEffect(() => {
		const loadPlaylists = async () => {
				const response = await fetch("https://my-tube-api.vercel.app/getUser/"+encodeURIComponent(userData.user));
      			const result = await response.json();
      			setUserData(result);
				setViewPopUp(true);								
    	};
    	loadPlaylists();
  	}, [effectCount]);

	return (
    	<CSSReset>
			<PopUpModal warning={warning} viewPopUp={viewPopUp} setViewPopUp={setViewPopUp}></PopUpModal>
    		<Header setFilter={setFilter} filter={filter} username={userData.user} imageUrl={userData.image}></Header>
    		<Banner></Banner>
    		<PlaylistView playlists={userData.playlists} effectCount={effectCount} setEffect={setEffect} filter={filter} username={userData.user} setWarning={setWarning}></PlaylistView>
    	</CSSReset>
	);

}

export default HomePage;
