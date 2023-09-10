import placeHolderImage from "../images/placeholderlogo.jpeg";
import acbelfastlogo from "../images/acbelfastlogo.png";
// firsts league logos
import albionStarII from "../images/firstsLeagueLogos/albionstarii.jpeg";
import glanvillerec from "../images/firstsLeagueLogos/glanvillerec.jpeg";
import newsantosii from "../images/firstsLeagueLogos/newsantosii.jpeg";
import ormeaubakery from "../images/firstsLeagueLogos/ormeaubakery.jpeg";
import realtanacromoigeii from "../images/firstsLeagueLogos/realtanacromoigeii.jpeg";
import strancats from "../images/firstsLeagueLogos/strancats.jpeg";
import suffolkswiftsii from "../images/firstsLeagueLogos/suffolkswiftsii.jpeg";
// overs league logos
import ballymacashrangers from "../images/oversLeagueLogos/ballymacashrangers.jpeg";
import crumlinunited from "../images/oversLeagueLogos/crumlinunited.jpeg";
import fcunitedlisburn from "../images/oversLeagueLogos/fcunitedlisburn.jpeg";
import malluskfc from "../images/oversLeagueLogos/malluskfc.jpeg";
import oxfordsunnyside from "../images/oversLeagueLogos/oxfordsunnyside.jpeg";
import sopfc from "../images/oversLeagueLogos/sopfc.jpeg";
import stteresa from "../images/oversLeagueLogos/stteresa.jpeg";

const ClubLogoSwitch = (teamName) => {
  let clubLogo;

  switch (teamName) {
    case "AC Belfast":
    case "ACB 35s":
    case "AC Belfast Overs":
      clubLogo = acbelfastlogo;
      break;
    case "Albion Star II":
      clubLogo = albionStarII;
      break;
    case "Glanville Rec":
      clubLogo = glanvillerec;
      break;
    case "New Santos II":
      clubLogo = newsantosii;
      break;
    case "Ormeau Bakery":
      clubLogo = ormeaubakery;
      break;
    case "Realta naCromoige II":
      clubLogo = realtanacromoigeii;
      break;
    case "Stran Cats":
      clubLogo = strancats;
      break;
    case "Suffolk Swifts II":
      clubLogo = suffolkswiftsii;
      break;
    // overs
    case "Ballymacash Rangers":
      clubLogo = ballymacashrangers;
      break;
    case "Crumlin United":
      clubLogo = crumlinunited;
      break;
    case "FC United Lisburn":
    case "FC United":
      clubLogo = fcunitedlisburn;
      break;
    case "Mallusk FC":
      clubLogo = malluskfc;
      break;
    case "Oxyford Sunnyside":
      clubLogo = oxfordsunnyside;
      break;
    case "St. Oliver Plunkett FC":
      clubLogo = sopfc;
      break;
    case "St. Teresa FC":
      clubLogo = stteresa;
      break;
    case "Other":
    default:
      clubLogo = placeHolderImage;
  }

  return clubLogo;
};

export default ClubLogoSwitch;
