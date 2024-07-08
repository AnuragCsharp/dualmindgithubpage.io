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
		designation: "Game Developer",
	},
	{
		id: 2,
		img: team_avatar_2,
		avatar_name: "Akash Singh",
		designation: "UI/UX Designer",
	},
	{
		id: 3,
		img: team_avatar_3,
		avatar_name: "Anup Singh",
		designation: "Web Developer",
	},
	{
		id: 4,
		img: team_avatar_4,
		avatar_name: "Sudhakar",
		designation: "Android Developer",
	},
	// team data
	{
		id: 5,
		img: team_avatar_5,
		avatar_name: "Bruce Stewart",
		designation: "PHP Developer",
	},
	{
		id: 6,
		img: team_avatar_6,
		avatar_name: "Joseph Whorton",
		designation: "UI/UX Designer",
	},
	{
		id: 7,
		img: team_avatar_7,
		avatar_name: "Gregory Terrell",
		designation: "Web Developer",
	},
	{
		id: 8,
		img: team_avatar_8,
		avatar_name: "Andrew Lopenza",
		designation: "UX Sketch Designer",
	},
];

export default team_data;
