import team_avatar_1 from "@/assets/img/team/teamsimg1.png";
import team_avatar_2 from "@/assets/img/team/teamsimg2.png";
import team_avatar_3 from "@/assets/img/team/teamsimg3.png";
import team_avatar_4 from "@/assets/img/team/teamsimg4.png";
import team_avatar_5 from "@/assets/img/team/teamsimg5.png";
import team_avatar_6 from "@/assets/img/team/teamsimg6.png";
import team_avatar_7 from "@/assets/img/team/teamsimg7.png";
import team_avatar_8 from "@/assets/img/team/teamsimg8.png";

import { StaticImageData } from "next/image";


interface DataType {
	id: number;
	img: StaticImageData;
	avatar_name: string;
	designation: string;
}

const team_data: DataType[] = [
	{
		id: 1,
		img: team_avatar_1,
		avatar_name: "Aurag Sen",
		designation: "Founder CTO Dualmind.io",
	},
	{
		id: 2,
		img: team_avatar_2,
		avatar_name: "DevShruti Sen",
		designation: "FullStack MERN",
	},
	{
		id: 3,
		img: team_avatar_3,
		avatar_name: "Shazia Umar",
		designation: "Data Science",
	},
	{
		id: 4,
		img: team_avatar_4,
		avatar_name: "Shubhangi Sen",
		designation: "Operation Head",
	},
	
	{
		id: 5,
		img: team_avatar_5,
		avatar_name: "Akhil Suryavanshi",
		designation: "Digital Marketing",
	},
	{
		id: 6,
		img: team_avatar_6,
		avatar_name: "Sourabh Singh",
		designation: "Business Development",
	},
	{
		id: 7,
		img: team_avatar_7,
		avatar_name: "Tochi Raina",
		designation: "Soft Skills",
	},
	{
		id: 8,
		img: team_avatar_8,
		avatar_name: "Makhan Chor",
		designation: "Supereme Lord",
	},
];

export default team_data;
