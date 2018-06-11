import React from 'react'
import { I18n, Trans } from 'react-i18next'

const I18nextView = () => (
  <I18n ns={ 'translations' }>
    {
        (t, { i18n }) => (
          <div>
            <h1>{t('welcomeMessage')}</h1>
            <p>
              <Trans i18nKey="welcomeMessage_plural" />
            </p>
          </div>
                )
            }
  </I18n>
)

export default I18nextView
