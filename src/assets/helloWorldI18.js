import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to the Tekken 7 Character Selection Quiz'
    },
    'kr': {
        welcomeMsg: '철권 7 캐릭터 추천 퀴즈에 오신걸 환영합니다!'
    }
};

const hwI18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'kr', // set fallback locale
    messages, // set locale messages
});

export default hwI18n;