import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "uhi.eua.app.service",
  appName: "uhi-eua-app-service",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
