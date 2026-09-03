import themeJson from "../../content/theme.json";
import settingsJson from "../../content/settings.json";
import siteJson from "../../content/site.json";
import homeJson from "../../content/home.json";
import aboutJson from "../../content/about.json";
import marketsJson from "../../content/markets.json";
import contactJson from "../../content/contact.json";
import propertiesJson from "../../content/properties.json";

import type {
  ThemeContent,
  SettingsContent,
  SiteContent,
  HomeContent,
  AboutContent,
  MarketsContent,
  ContactContent,
  PropertiesContent,
} from "./types";

export const theme: ThemeContent = themeJson as ThemeContent;
export const settings: SettingsContent = settingsJson as SettingsContent;
export const site: SiteContent = siteJson as SiteContent;
export const home: HomeContent = homeJson as HomeContent;
export const about: AboutContent = aboutJson as AboutContent;
export const markets: MarketsContent = marketsJson as MarketsContent;
export const contact: ContactContent = contactJson as ContactContent;
export const properties: PropertiesContent = propertiesJson as PropertiesContent;
