import React from 'react';
import { I18n } from 'react-i18next';



const I18nextView = () => {
    return (
        <I18n ns={ 'translations' }>
            {
                (T, { i18n, t, ready }) => (
                    <h1>{t('welcomeMessage')}</h1>
                )
            }
        </I18n>
    );
}

export default I18nextView;