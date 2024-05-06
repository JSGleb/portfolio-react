import {projects} from "./../helpers/projectsList"
import { useParams } from "react-router-dom";
import BtnGitHub from '../components/btnGitHub/BtnGitHub';

const Project = () => {
	const {id} = useParams();
	const prj = projects[id];

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{prj.title}</h1>

					<img
						src={prj.imgBig}
						alt={prj.title}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>Skills: {prj.skills}</p>
					</div>

					{prj.gitHubLink && (
						<BtnGitHub link="https://github.com" />
					)
						
					}
				</div>
			</div>
		</main>
	);
}

export default Project;