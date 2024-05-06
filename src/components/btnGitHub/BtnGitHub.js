import gitHubIcon from './gitHub-black.svg'
import "./style.css"

const BtnGitHub = ({ Link }) => {
    return (
        <a href={Link} target='_blank' rel='noopener' className='btn-outline'>
            <img src={gitHubIcon} />GitHub repository
        </a>
    )
}

export default BtnGitHub;