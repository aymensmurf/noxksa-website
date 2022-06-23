import Layout from "../layout/Layout";
import { AboutUs, ContactUs, CreativeStudio, Home, JoinUs, OurClients, OurServices } from "../components/index";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/consts";
import { i18n, withTranslation } from "../i18n";
import link from "next/link";

const Index = () => {
	const [isRTL, setIsRTL] = useState(false);
	const [clients, setClients] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [linkAlbums, setLinkAlbums] = useState([]);
	useEffect(() => {
		getClients(), getAlbums();
	}, []);

	useEffect(() => {
		let isRTL = i18n.language === "ar" ? true : false;
		setIsRTL(isRTL);
	}, [i18n.language]);

	const getClients = () => {
		const config = {
			method: "get",
			url: `${API_URL}/clients`,
		};

		axios(config)
			.then(({ status, data }) => {
				if (status === 200) {
					setClients(data.data);
				}
			})
			.catch((err) => {
				console.error("err", err);
			});
	};

	const getAlbums = () => {
		const config = {
			method: "get",
			url: `${API_URL}/albums/specific`,
		};

		axios(config)
			.then(({ status, data }) => {
				if (status === 200) {
					for (let i = 0; i < data.data.length; i++) {
						for (let j in data.data[i].links) {
							if (data.data[i].links[j].type == "link") {
								data.data[i].links.splice(j, 1);
							}
						}
					}
					console.log(data.data);
					setAlbums(data.data);
				}
			})
			.catch((err) => {
				console.error("err", err);
			});
	};

	return (
		<Layout>
			<Home isRTL={isRTL} />
			<AboutUs isRTL={isRTL} />
			<OurClients isRTL={isRTL} clients={clients} />
			<OurServices isRTL={isRTL} />
			<CreativeStudio isRTL={isRTL} creativeStudio={albums} />
			<JoinUs isRTL={isRTL} />
			<ContactUs isRTL={isRTL} />
		</Layout>
	);
};

export default Index;
