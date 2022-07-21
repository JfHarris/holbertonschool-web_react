import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from '../App/AppContext';
import PropTypes from "prop-types";
import { connect } from "react-redux";

export function Footer({ user }) {
  return (
          <div className="footer">
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {user && <a href="#">Contact us</a>}
          </div>
        );
}

//export default Footer;

Footer.defaultProp = {
  user: null,
}

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.ui.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);
