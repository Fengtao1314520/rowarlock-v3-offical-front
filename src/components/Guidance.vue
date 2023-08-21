<template>
  <v-card variant="flat">
    <v-row>
      <v-col cols="4">
        <v-img
          :cover="true"
          :height="480"
          :width="600"
          src="../assets/logo/rowarlock-high-resolution-color-logo.png"
        ></v-img>
      </v-col>
      <v-col>
        <v-card variant="flat" class="pt-14 mt-14">
          <v-card-title class="text-h3 font-italic text-blue-accent-4">
            RoWarlock Automaiton Tool
          </v-card-title>
          <v-card-text>
            <span>
              RoWarlock is a tool for automating to test Web Application,
              Desktop Application and Mobile Application.
            </span>
            <v-card variant="flat">
              <v-list>
                <v-list-item
                  color="primary"
                  rounded="xl"
                  v-for="(item, i) in guidancedata.supportitems"
                  :key="i"
                  :title="item.text"
                  :subtitle="item.desc"
                >
                  <template v-slot:prepend>
                    <v-avatar>
                      <v-icon
                        :icon="item.icon"
                        color="indigo-accent-4"
                        size="x-large"
                      />
                    </v-avatar>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1" />
      <v-col cols="4">
        <v-card variant="flat">
          <v-card-title class="text-h4 text-blue-accent-4">
            Welcome
          </v-card-title>
          <v-list>
            <v-list-item
              class="my-2"
              v-for="(item, i) in guidancedata.functionitems"
              :key="i"
              :value="item"
              color="primary"
              rounded="e-xl"
              :title="item.title"
              :subtitle="item.desc"
              :to="item.link"
            >
              <template v-slot:prepend>
                <v-avatar>
                  <v-icon
                    :icon="item.icon"
                    color="deep-purple-accent-4"
                    size="x-large"
                  />
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const guidancedata = reactive({
  supportitems: [
    {
      text: "Web",
      icon: "mdi-web",
      desc: "Support Playwright, RoWarlock native script(XML and C# source file)",
    },
    {
      text: "Desktop",
      icon: "mdi-desktop-classic",
      desc: "Support WinAppDriver, RoWarlock native script(XML and C# source file)",
    },
    { text: "Mobile", icon: "mdi-cellphone", desc: "Comming Soon" },
    { text: "AI", icon: "mdi-account-clock", desc: "Comming Soon" },
  ],

  functionitems: [
    {
      title: "Main",
      desc: "Main page for RoWarlock",
      icon: "mdi-home",
      link: "/main",
    },
    {
      title: "Author",
      desc: "Author for self's zone",
      icon: "mdi-account-convert",
      link: "/author",
    },
  ],
});
</script>
