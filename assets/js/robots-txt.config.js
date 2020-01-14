var robotsParser = require("robots-txt-parser");
var robots = robotsParser({
  userAgent: "Googlebot", // The default user agent to use when looking for allow/disallow rules, if this agent isn't listed in the active robots.txt, we use *.
  allowOnNeutral: false // The value to use when the robots.txt rule's for allow and disallow are balanced on whether a link can be crawled.
});
