<template>
  <div class="cursors" @pointermove="handlePointMove($event)">
    <div v-if="clientIdCheck(key)">
      <Cursor v-for="[key, value] in users" :key="key" :point="value.point" />
    </div>
  </div>
</template>

<script>
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import throttle from "lodash.throttle";

import Cursor from "./Cursor.vue";

// import { Awareness } from 'y-protocols/awareness';
// import { useUsers } from "y-presence";

const ydoc = new Y.Doc();
const provider = new WebsocketProvider(
  "wss://cursors.khaleelgibran.com",
  "website",
  ydoc
);
const awareness = provider.awareness;

export default {
  components: {
    Cursor,
  },
  data() {
    return {
      users: null,
      awareness: awareness,
    };
  },
  methods: {
    handlePointMove(event) {
      console.log("mouse moved to", event.clientX, event.clientY);
      // throttle(() => {
        // }, 200);
      awareness.setLocalStateField("point", [event.clientX, event.clientY]);
    },
    clientIdCheck(key) {
      return key !== awareness.clientID;
    },
  },
  mounted() {
    document.addEventListener('pointermove', this.handlePointMove);

    awareness.on("change", () => {
      this.users = new Map(awareness.getStates());
    });
  },
  beforeDestroy() {
    document.removeEventListener('pointermove', this.handlePointMove);
  },
};
</script>

<style>
.cursors {
  position: fixed;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}
</style>
