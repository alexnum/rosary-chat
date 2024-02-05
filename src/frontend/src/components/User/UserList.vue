<template>
<v-virtual-scroll :items="model" height="300" item-height="50">
  <template v-slot:default="{ item }">
    <v-list-item>
      <template v-slot:prepend>
        <UserAvatar :userName="item.name" />
      </template>
      
      <v-list-item-title>{{ item.name }}</v-list-item-title>
    </v-list-item>
  </template>
</v-virtual-scroll>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
import UserAvatar from '@/components/User/UserAvatar.vue'
import { User } from '@/models/User.ts';
const model = defineModel({type: Array<User>});
    
const dialogToken = ref(false);
</script>
