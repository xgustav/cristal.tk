import React from 'react'
import Routes from 'react-static-routes'
import { Router } from 'react-static'

import Analytics from 'src/components/Analytics'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

import 'src/styles/app.css'
import 'src/styles/app.scss'

import { withLocalize } from "react-localize-redux";
import * as en from "./lang/locales/en.json"
import * as es from "./lang/locales/es.json"
import * as pt from "./lang/locales/pt.json"

require('typeface-raleway')

const AppContent = () => {
  return [
    <Header key='1' />,
    <div className='relative' key='2'>
      <Routes />
    </div>,
    <Footer key='3' />
  ]
}

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "English",     code: "en" },
        { name: "Spanish",     code: "es" },
        { name: "Portuguese",  code: "pt" }
      ],
      options: {
        renderToStaticMarkup: false
        , defaultLanguage   : 'en'
        , onMissingTranslation : ({ translationId, languageCode }) => {
                                    return 'ERROR-' + translationId + '-ERROR';
                                  }
      }
    });
    this.props.addTranslationForLanguage(es, "es");
    this.props.addTranslationForLanguage(en, "en");
    this.props.addTranslationForLanguage(pt, "pt");
  }
  render () {
    return (
        <Router>
          <Analytics>
            <AppContent />
          </Analytics>
        </Router>
    )
  }
}

export default withLocalize(App)
