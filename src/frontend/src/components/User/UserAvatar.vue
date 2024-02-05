<template v-slot:prepend>
  <v-avatar color="primary" class="text-white" size="40">
    {{ userInitials }}
  </v-avatar>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
var x = 4;
export interface AvatarProps {
  userName: string
}

const props = withDefaults(defineProps<AvatarProps>(), {
  msg: '',
});

const userInitials = computed(() => {
  
  var names = props.userName.split(' '),
  initials = names[0].substring(0, 1).toUpperCase();
  
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
})

</script>
