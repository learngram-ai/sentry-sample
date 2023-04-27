import { screenNames } from "../../utils/analytics";
import Home from "../../screens/Home/Home";

export const PORTRAIT = "portrait";
export const LANDSCAPE = "landscape";

export const routes = {
  [screenNames.home]: {
    component: Home,
    orientation: PORTRAIT,
  },
};
