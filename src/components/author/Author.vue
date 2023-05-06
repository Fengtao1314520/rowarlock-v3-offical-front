<template>
  <v-card flat>
    <v-app-bar color="white" dense flat class="ml-5">
      <v-app-bar-nav-icon>
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <span> {{ proinfo.name_CN }}</span>
        <span class="ml-4">{{ proinfo.name_EN }}</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-card-text>
      <v-card flat>
        <v-card-text class="pt-0">
          <div v-for="(item, i) in profile" :key="i">
            <v-icon small class="mr-2">{{ item.icon }}</v-icon>
            <span>{{ item.text }}</span>
          </div>
        </v-card-text>
      </v-card>
      <v-divider />
      <v-card flat>
        <v-card-title>
          <span class="text-h6">基本信息:</span>
        </v-card-title>
        <v-card-text>
          <div>
            <v-icon small class="mr-2">mdi-format-title</v-icon>
            <span>{{ proinfo.title }}</span>
          </div>
          <div>
            <v-icon small class="mr-2">mdi-map-marker</v-icon>
            <span>{{ proinfo.base }}</span>
          </div>
          <div>
            <v-icon small class="mr-2">mdi-email-outline</v-icon>
            <span>{{ proinfo.email }}</span>
          </div>
          <div>
            <v-icon small class="mr-2">mdi-github</v-icon>
            <span>{{ proinfo.resume }}</span>
          </div>
        </v-card-text>
      </v-card>
      <v-divider />
      <v-card flat>
        <v-card-title>
          <span class="text-h6">教育经历:</span>
        </v-card-title>
        <v-card-text>
          <v-row class="ma-0">
            <div class="mr-8">
              <div class="mr-8">
                <v-icon small class="mr-2">mdi-school-outline</v-icon>
                <span>江苏理工学院 (2022~2024)[DOING] </span>
              </div>
              <v-icon small class="mr-2">mdi-school-outline</v-icon>
              <span>无锡职业技术学院 (2007~2010)</span>
            </div>
          </v-row>
        </v-card-text>
      </v-card>
      <v-divider />
      <v-card flat>
        <v-card-title>
          <span class="text-h6">工作经历:</span>
        </v-card-title>
        <v-card-text class="pt-0">
          <v-alert
            variant="outlined"
            class="mt-2 text-black"
            v-for="(item, i) in experience"
            :key="i"
            border="start"
            color="grey-darken-1"
          >
            <v-icon color="black">{{ item.icon }}</v-icon>
            <span class="text-black"> {{ item.text }}</span>
            <v-row class="my-2 text-black">
              <v-col>{{ item.content.datetime }}</v-col>
              <v-col>{{ item.content.company }}</v-col>
              <v-col>{{ item.content.dept }}</v-col>
            </v-row>
            <p class="text-subtitle-2 text-black">职责&业绩:</p>
            <p
              class="text-caption mb-2 text-black"
              v-for="(two, k) in item.content.todo"
              :key="k"
            >
              {{ two }}
            </p>
          </v-alert>
        </v-card-text>
      </v-card>
      <v-divider />
      <v-card flat>
        <v-card-title>
          <span class="text-h6">项目经历:</span>
        </v-card-title>
        <v-card-text class="pt-0">
          <v-alert
            variant="outlined"
            class="mt-2 text-black"
            v-for="(item, i) in projects"
            :key="i"
            border="end"
            color="grey-darken-1"
          >
            <v-icon color="black">{{ item.icon }}</v-icon>
            <span class="text-black">{{ item.text }}</span>
            <v-row class="my-2 text-black">
              <v-col>{{ item.datetime }}</v-col>
              <v-col>{{ item.company }}</v-col>
              <v-col>{{ item.position }}</v-col>
            </v-row>
            <p class="text-black">{{ item.desc }}</p>
            <p class="text-subtitle-2 text-black">项目职责:</p>
            <p
              class="text-caption mb-2 text-black"
              v-for="(two, k) in item.content.todo"
              :key="k + '_k'"
            >
              {{ two }}
            </p>
            <p class="text-subtitle-2 pt-2 text-black">项目业绩:</p>
            <p
              class="text-caption mb-2 text-black"
              v-for="(three, p) in item.content.done"
              :key="p"
            >
              {{ three }}
            </p>
          </v-alert>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import * as defaultdata from "@/data/profile";
import { ref } from "vue";

// 个人简介
const profile = ref(defaultdata.profile);
// 基本信息
const proinfo = ref(defaultdata.proinfo);
// 经验
const experience = ref(defaultdata.experience);
// 项目
const projects = ref(defaultdata.projects);
</script>
