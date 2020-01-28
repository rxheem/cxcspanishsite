import { slide as Menu } from "react-burger-menu";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class SlideMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <BrowserView>
        <div style={{ display: "none" }}>
          <Menu>
            <br />
            <br />
            <a style={{ color: "white" }}>Guides</a>
            <br />
            <a className="menu-item" href="/"></a>
            <a className="menu-item" href="/about"></a>
            <a className="menu-item" href="/contact"></a>

            <br />
            <br />
            <a style={{ color: "white" }}>Guides</a>
            <br />

            <a
              id="home"
              className="menu-item"
              href="/listening-exercises/spanish-curse-words"
            >
              Spanish Curse Words
            </a>
            <a
              target="_blank"
              className="menu-item"
              href="https://mydailyspanish.com/spanish-curse-words/"
            >
              NSFW Words
            </a>
            <a
              target="_blank"
              className="menu-item"
              href="https://www.hookupspanish.com/spanish-sex-phrases/"
            >
              Spanish Sex Talk
            </a>
            <a
              target="_blank"
              className="menu-item--small"
              href="https://www.fluentu.com/blog/spanish/flirting-in-spanish/"
            >
              Flirting in Spanish
            </a>
          </Menu>
        </div>
      </BrowserView>
    );
  }
}

export default SlideMenu;
