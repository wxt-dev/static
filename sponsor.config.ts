import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "wxt-dev",
    type: "organization",
  },
  tiers: [
    { title: "Past Sponsors", monthlyDollars: -1, preset: tierPresets.xs },
    { title: "Backers" },
    { title: "Sponsors", monthlyDollars: 10, preset: tierPresets.medium },
    { title: "Silver Sponsors", monthlyDollars: 50, preset: tierPresets.large },
    { title: "Gold Sponsors", monthlyDollars: 100, preset: tierPresets.xl },
  ],
  sponsorsAutoMerge: true,
  renders: [
    { name: "sponsors", width: 800, formats: ["svg", "png"] },
    { name: "sponsors-wide", width: 1200, formats: ["svg"] },
  ],
});
