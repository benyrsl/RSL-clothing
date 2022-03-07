import { createSelector } from "reselect";

const selectDirecoty = (state) => {
  return state.directory;
};

export const selectDirectorySection = createSelector(
  [selectDirecoty],
  (directory) => directory.sections
);
