<template>
  <v-card color="grey-lighten-4" flat class="ma-2">
    <v-toolbar border density="compact">
      <v-app-bar-nav-icon icon="mdi-record-player" />
      <v-toolbar-title>释放记录</v-toolbar-title>
      <v-spacer />
      <v-btn
        :color="wirteStatus.color"
        variant="text"
        @click="changeWriteStatus()"
      >
        <v-icon>{{ wirteStatus.icon }}</v-icon>
        {{ wirteStatus.text }}
      </v-btn>
    </v-toolbar>
    <v-card color="white" flat>
      <v-sheet v-if="!releaseTask"></v-sheet>
      <v-form v-else :disabled="!wirteStatus.status">
        <v-row>
          <v-col cols="8">
            <c-view-text-item
              :values="releaseTask.title"
              color="deep-purple-accent-3"
              prefield="任务名称:"
          /></v-col>
          <v-col>
            <c-view-text-item
              :values="releaseTask.author"
              color="deep-purple-accent-3"
              prefield="创建人:"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <c-view-text-item
              :values="releaseTask.description"
              color="deep-purple-accent-3"
              prefield="任务描述:"
            />
          </v-col>
          <v-col>
            <c-view-text-item
              :values="releaseTask.taskId"
              color="deep-purple-accent-3"
              prefield="任务id:"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <v-card
              variant="outlined"
              color="indigo-accent-4"
              class="rounded-lg"
            >
              <v-card-title>基本信息</v-card-title>
              <v-card-text>
                <c-view-text-item-list
                  :values="basicInfos"
                  color="deep-purple-accent-3"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              variant="outlined"
              color="indigo-accent-4"
              class="rounded-lg"
            >
              <v-card-title>测试环境</v-card-title>
              <v-card-text>
                <c-view-text-item-list
                  :values="testEnv"
                  color="deep-purple-accent-3"
                />
              </v-card-text>
            </v-card>
            <v-card
              variant="outlined"
              color="indigo-accent-4"
              class="rounded-lg mt-4"
            >
              <v-card-title>关联设置</v-card-title>
              <v-card-text>
                <c-view-text-item-list
                  :values="relatedConfig"
                  color="deep-purple-accent-3"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card
              variant="outlined"
              color="indigo-accent-4"
              class="rounded-lg"
            >
              <v-card-title>更新详情</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col
                    v-for="(item, index) in content"
                    :key="index"
                    class="px-0"
                  >
                    <c-view-content-list
                      :prefield="item.prefield"
                      :values="item.values"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-sheet
              rounded
              border
              color="blue-accent-2"
              class="font-weight-bold"
              @click="openMoreInfo(releaseTask.taskId)"
            >
              <p class="ml-2">更多信息</p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-card>

  <v-snackbar
    location="top right"
    :timeout="1000"
    color="success"
    variant="tonal"
    v-model="snackbar"
  >
    所有信息 <strong>保存</strong> 成功.
  </v-snackbar>
</template>

<script lang="ts" setup>
import { Ref, ref, watch } from "vue";
import { ReleaseTask } from "@/ctypes/releaseTask";
import CViewTextItem from "@/customization/CViewTextItem.vue";
import CViewTextItemList from "@/customization/CViewTextItemList.vue";
import {
  l18i_content,
  l18i_relatedConfig,
  l18i_release,
} from "@/l18i/l18i_release";
import CViewContentList from "@/customization/CViewContentList.vue";

// 父传子
const props = defineProps<{
  releaseTask: ReleaseTask;
}>();

const snackbar = ref(false);

// 本地释放任务
const releaseTask = ref<ReleaseTask>();

// 当前记录的写状态
let wirteStatus = ref({
  status: false,
  text: "编辑",
  color: "primary",
  icon: "mdi-lock-outline",
});

let basicInfos: Ref<
  Array<{
    prefield: string;
    values: any;
  }>
> = ref([]);

let testEnv: Ref<
  Array<{
    prefield: string;
    values: any;
  }>
> = ref([]);

let relatedConfig: Ref<
  Array<{
    prefield: string;
    lable: string;
    values: any;
  }>
> = ref([]);

let content: Ref<
  Array<{
    prefield: string;
    values: string[];
  }>
> = ref([]);

// 监听releaseTask的变化
watch(
  () => props.releaseTask,
  (newvalue) => {
    releaseTask.value = newvalue;
    // 初始化
    basicInfos.value = [];
    testEnv.value = [];
    content.value = [];
    relatedConfig.value = l18i_relatedConfig(newvalue.relatedConfig);

    // json对象转为KV队列
    const entries = Object.entries(newvalue.basicInfos);
    for (const [key, value] of entries) {
      let keyCn = l18i_release(key);
      basicInfos.value.push({
        prefield: keyCn,
        values: value,
      });
    }
    // 赋值
    newvalue.testEnv.forEach((tE) => {
      testEnv.value.push({
        prefield: tE.key,
        values: tE.value,
      });
    });

    // 执行操作
    let l18iContent = l18i_content(newvalue.content);
    // 赋值
    l18iContent.forEach((c) => {
      content.value.push({
        prefield: c.key,
        values: c.value as string[],
      });
    });
  },
  { immediate: false, deep: true },
);

// 当前写状态
function changeWriteStatus() {
  console.log(wirteStatus.value.status);
  if (!wirteStatus.value.status) {
    wirteStatus.value = {
      status: !wirteStatus.value.status,
      text: "保存",
      color: "success",
      icon: "mdi-lock-open-outline",
    };
  } else {
    wirteStatus.value = {
      status: !wirteStatus.value.status,
      text: "编辑",
      color: "primary",
      icon: "mdi-lock-outline",
    };
    // TODO: 保存操作，至后台
    snackbar.value = true;
  }
}
function openMoreInfo(taskid: string) {}
</script>

<style lang="scss" scoped></style>
