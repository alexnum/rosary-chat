<template>
<div>  
  <TokenDialog v-model="dialogToken" />
  <v-navigation-drawer
    color="grey-lighten-3"
    rail
    >
    <UserAvatar userName="Alessandro Herculano" class="mt-4 ml-2"/>
    
  </v-navigation-drawer>
  
  
  <v-app-bar
    class="px-3"
    color="grey-lighten-4"
    flat
    height="72"
    >
    <v-spacer></v-spacer>
    
    <v-responsive max-width="156">
      <v-text-field
        bg-color="grey-lighten-1"
        density="compact"
        flat
        hide-details
        rounded="pill"
        variant="solo-filled"
        ></v-text-field>
    </v-responsive>
  </v-app-bar>
  
  <v-main><!--  --></v-main>
  
  <v-navigation-drawer location="right">
    <UserList v-model="users" />
  </v-navigation-drawer>
  
  <v-footer
    app
    height="72"
    >
    <v-text-field
      bg-color="grey-lighten-1"
      class="overflow-hidden"
      density="compact"
      flat
      hide-details
      rounded="pill"
      variant="solo-filled"
      ></v-text-field>
  </v-footer>
</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
import TokenDialog from '@/components/Dialogs/TokenDialog.vue';
import UserAvatar from '@/components/User/UserAvatar.vue';
import UserList from '@/components/User/UserList.vue';
import { User } from '@/models/User.ts';


    
const dialogToken = ref(false);

const users = ref([{name: "Alessandro Herculano"},
                  {name: "Kelly Marcelle"}])
</script>
