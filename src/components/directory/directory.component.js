import React from "react";
import MenuItem from "../menu-item/menu-item.component.js";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructureSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(function (section) {
        return (
          <MenuItem
            imageUrl={section.imageUrl}
            key={section.id}
            title={section.title}
            size={section.size}
            linkUrl={section.linkUrl}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.directory.sections,
  };
};
export default connect(mapStateToProps)(Directory);
