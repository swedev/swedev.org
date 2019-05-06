import classNames from 'classnames';
/* eslint-disable no-unused-vars */
import { jsxCreateObject } from '../templating';
/* eslint-enable */

/**
 * Website
 */
export function Website(props) {
  const { title, styles, scripts, children } = props;
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title || 'swedev'}</title>

        {_defaultStyles.concat(styles || []).map(style => (
          <link
            rel="stylesheet"
            type="text/css"
            href={style}
          />
        ))}

        {(scripts || []).map(src => (
          <script src={src}></script>
        ))}

      </head>

      <body>
        {children}
      </body>

    </html>
  );
}

const _defaultStyles = [
  '/css/bootstrap.4.3.1.min.css',
  '/css/style.css',
];

/**
 * Splash
 */
export function Splash(props) {
  const { className, ...restProps } = props;
  restProps.className = classNames('splash', restProps.className);
  return (
    <div {...restProps}>
      <div className="splash-content">

        <div className="swedev-logo-wrapper">
          <div className="swedev-logo" />
        </div>

        <div className="swedev-description">
          <p>
            Swedev is a community for Swedish software devel&shy;opers, UI des&shy;igners, system
            archi&shy;tects, project mana&shy;gers, IT secur&shy;ity, DevOps and other IT prof&shy;ess&shy;ionals.
            Our goal is for swedev to be a natural point of entry for commun&shy;icating with the
            Swedish software commun&shy;ity. We also believe in prom&shy;oting the use of open data
            and open source code, speci&shy;fically but not exclu&shy;sively within Swedish government.
          </p>
          <p>
            So come join the conver&shy;sation on <a href="https://reddit.com/r/swedev">Reddit</a>, contri&shy;bute
            to our proj&shy;ects on <a href="https://github.com/swedev">GitHub</a>, or just say hello
            on <a href="https://twitter.com/swedevorg">Twitter</a> or email hello@swedev.org.
          </p>
        </div>

        <div className="swedev-community">

          <SocialMediaLink
            name="Reddit"
            href="https://reddit.com/r/swedev"
            iconSrc="/img/reddit.svg"
            text="r/swedev"
          />

          <SocialMediaLink
            name="GitHub"
            href="https://github.com/swedev"
            iconSrc="/img/github.svg"
            text="swedev"
          />

          <SocialMediaLink
            name="Twitter"
            href="https://twitter.com/swedevorg"
            iconSrc="/img/twitter-circle.svg"
            text="@swedevorg"
          />

        </div>

      </div>
    </div>
  );
}

/**
 * SocialMediaLink
 */
export function SocialMediaLink(props) {
  const { name, href, iconSrc, text, className, ...restProps } = props;
  restProps.className = classNames(
    'text-dark mr-4 social-link',
    restProps.className
  );
  return (
    <a
      href={href}
      title={`Swedev on ${name}`}
      {...restProps}
    >
      <div className="icon">
        <img src={iconSrc} alt={`${name} logo`} />
      </div>
      <div className="text">{text}</div>
    </a>
  );
}
