import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

export default function (Vue, { head, router, isServer }) {
  // VUE Layout( Dark / Light Mode) 
  // TODO: make this a switch on the site or work with site time. also white svg for dark mode
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };

  // For Snipcart
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
    body: true,
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
    body: true,

    // snipcart scripts' attributes
    id: 'snipcart',
    'data-api-key': 'MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4',
  });
}
