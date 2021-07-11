import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";

import "./styles.css";

export default function IconsBar() {
  return (
    <div className="iconsbar">
      <a href="https://github.com/JordiEspinozaMendoza" target="_blank">
        <GitHubIcon />
      </a>
      <a href="https://twitter.com/itsme_jordi" target="_blank">
        <TwitterIcon />
      </a>
      <a href="https://www.linkedin.com/in/jordiespinoza/" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="mailto:jordi8101@gmail.com">
        <Email />
      </a>
    </div>
  );
}
