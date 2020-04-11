import React from "react";
import { withLocalize } from "react-localize-redux";

const Languages = ({ languages , defaultLanguage, activeLanguage}) => (
  <div key="lang">
    <ul key="lang_ul">
      <li key="lang_ul_li_0">
        The default language code is: {defaultLanguage}
      </li>
      <li key="lang_ul_li_1">
        The active language code is: {activeLanguage.code}
      </li>
      {languages.map((language,idx) => (
        <li key={`lang_ul_li_item___${idx}`}>
          {language.name} - {language.code}
        </li>
      ))}
    </ul>
  </div>
);

export default withLocalize(Languages);