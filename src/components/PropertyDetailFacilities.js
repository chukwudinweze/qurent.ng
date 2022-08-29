import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import "../Styles/propertDetailFacilities.css";

const PropertyDetailFacilities = () => {
  return (
    <article className="property__detail__facilities">
      <h6>Facilities</h6>
      <ul>
        <li>
          <CheckCircleOutlineIcon
            style={{ fontSize: "16px", color: "#20c063" }}
          />
          <p>Balcony</p>
        </li>
        <li>
          <CheckCircleOutlineIcon style={{ fontSize: "14px" }} />
          Car park
        </li>
        <li>
          <CheckCircleOutlineIcon style={{ fontSize: "14px" }} />
          Prepaid meter
        </li>
        <li>
          <CheckCircleOutlineIcon style={{ fontSize: "14px" }} />
          Post paid meter
        </li>
      </ul>
    </article>
  );
};

export default PropertyDetailFacilities;
