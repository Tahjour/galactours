import { scrollIntoViewWithOffset } from "./scroll-into-view-with-offset";

export const selectSectionAndScroll = (sectionID: string) => {
  const section = document.getElementById(sectionID);
  if (section) {
    scrollIntoViewWithOffset(section);
  }
};
