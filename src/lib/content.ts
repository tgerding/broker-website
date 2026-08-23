import settingsJson from "../../content/settings.json";
import siteJson from "../../content/site.json";
import homeJson from "../../content/home.json";
import aboutJson from "../../content/about.json";
import marketsJson from "../../content/markets.json";
import contactJson from "../../content/contact.json";
import propertiesJson from "../../content/properties.json";
import listingsPageJson from "../../content/listings-page.json";

import type {
  SettingsContent,
  SiteContent,
  HomeContent,
  AboutContent,
  MarketsContent,
  ContactContent,
  PropertiesContent,
  ListingsPageContent,
} from "./types";

export const settings: SettingsContent = settingsJson as SettingsContent;
export const site: SiteContent = siteJson as SiteContent;
export const home: HomeContent = homeJson as HomeContent;
export const about: AboutContent = aboutJson as AboutContent;
export const markets: MarketsContent = marketsJson as MarketsContent;
export const contact: ContactContent = contactJson as ContactContent;
export const properties: PropertiesContent = propertiesJson as PropertiesContent;
export const listingsPage: ListingsPageContent = listingsPageJson as ListingsPageContent;
