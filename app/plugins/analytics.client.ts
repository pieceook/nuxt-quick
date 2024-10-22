/* eslint-disable */
// @ts-nocheck
const handleYandexMetrika = (yandexId) => {
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(yandexId, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  });
}
/* eslint-enable */

// @ts-check
export default defineNuxtPlugin({
  name: 'analytics-plugin',
  hooks: {
    'app:mounted': () => {
      const YANDEX_METRIKA_ID = useRuntimeConfig().public.YANDEX_METRIKA_ID
      if (YANDEX_METRIKA_ID) {
        handleYandexMetrika(YANDEX_METRIKA_ID)
        return
      }
      console.warn(`analytics.client.ts: YANDEX_METRIKA_ID=${YANDEX_METRIKA_ID}`)
    }
  }
})
