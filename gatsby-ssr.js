/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
const React = require("react");
// You can delete this file if you're not using it
exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {

    // setHeadComponents([
    //     <script
    //         key="google-analytics-src"
    //         async
    //         src="https://www.googletagmanager.com/gtag/js?id=G-EZ5DTQN19R"
    //     />,
    //     <script
    //         key="google-analytics"
    //         dangerouslySetInnerHTML={{
    //             __html: `
    //           window.dataLayer = window.dataLayer || [];
    //           function gtag(){dataLayer.push(arguments);}
    //           gtag('js', new Date());
    //           gtag('config', 'G-EZ5DTQN19R');
    //         `,
    //         }}
    //     />,
    // ]);
    setHtmlAttributes({ lang: "de" })
}
