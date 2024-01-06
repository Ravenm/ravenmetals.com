import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export function SocialLinks() {
    return (
        <>
            <a className="px-2 hover:text-amber-600 text-3xl"
               target="_blank"
               rel="noreferrer nofollow"
               href="https://www.linkedin.com/in/andrew-zacharia-nash">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="px-2 hover:text-amber-600 text-3xl"
               target="_blank"
               rel="noreferrer nofollow"
               href="/pdf/resume.pdf">
                <FontAwesomeIcon icon={faFilePdf} />
            </a>
            <a className="px-2 hover:text-amber-600 text-3xl"
               target="_blank"
               rel="noreferrer nofollow"
               href="https://www.github.com/ravenm">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </>
    )
}