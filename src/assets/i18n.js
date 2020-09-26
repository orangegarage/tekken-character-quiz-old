import Vue from 'vue'
import kr from '@/assets/kr.json';
import en from '@/assets/en.json';
// import quiz from '@/assets/quiz.json';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const lang = {
    en: en,
    ko: kr  //imported from json - Korean is ko-kr and I just want to detect ko
}

const messages = Object.assign(lang);

Vue.config.productionTip = false

let i18n = new VueI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages
});

export default i18n;