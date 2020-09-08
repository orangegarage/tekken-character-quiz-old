import Vue from 'vue'
import kr from '@/assets/kr.json';
import en from '@/assets/en.json';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

export const lang = {
    en: en,
    kr: kr  //imported from json
}

const messages = Object.assign(lang);

Vue.config.productionTip = false

let i18n = new VueI18n({
  locale: 'kr',
  fallbackLocale: 'en',
  messages
});

export default i18n;