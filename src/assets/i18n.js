import Vue from 'vue'
import kr from '@/assets/kr.json';
import en from '@/assets/en.json';
import quiz from '@/assets/quiz.json';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const lang = {
    en: en, quiz,
    kr: kr  //imported from json
}

const messages = Object.assign(lang);

Vue.config.productionTip = false

let i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'kr',
  messages
});

export default i18n;