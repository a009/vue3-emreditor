<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { VEditor, RenderOptions } from "@emreditor/main";
import { VText } from "@emreditor/text";
import { VPrint } from "@emreditor/print";
import { ACursor } from "@emreditor/cursor";

let components = {
  "v-text": VText,
  "v-print": VPrint
}
let plugins = { ACursor }

const data: RenderOptions[] = [{
  name: "v-print",
  "props": {
    "header": [],
    "footer": [],
    "showHeader": true,
    "showFooter": true,
    "headerPagePosition": "center",
    "headerPageStyle": "",
    "footerPagePosition": "center",
    "footerPageStyle": "",
    "top": "20mm",
    "left": "20mm",
    "right": "20mm",
    "bottom": "20mm",
    "height": "296mm",
    "width": "210mm"
  }
}]


</script>

<template>
  <VEditor :components="components" :plugins="plugins" :data="data" />
</template>
