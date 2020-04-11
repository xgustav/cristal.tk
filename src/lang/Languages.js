import React from "react";
import { withLocalize } from "react-localize-redux";

const Languages = ({ languages , defaultLanguage, activeLanguage}) => (
  <div>
    <ul>
      <li>
        The default language code is: {defaultLanguage}
      </li>
      <li>
        The active language code is: {activeLanguage.code}
      </li>
      {languages.map(language => (
        <li>
          {language.name} - {language.code}
        </li>
      ))}
    </ul>
  </div>
);

export default withLocalize(Languages);