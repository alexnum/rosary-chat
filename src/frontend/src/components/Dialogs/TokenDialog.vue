<template>
<v-dialog persistent
          transition="dialog-bottom-transition"
          v-model="model"
          max-width="500px">
  <v-card>
    <v-toolbar color="primary" title="Please enter the chat code"></v-toolbar>
    <v-card-subtitle class="mt-5"> You can request a chat token
      <a href = "mailto:alexnum@gmail.com?subject = Rosary Chat - Token Request">
        via email
      </a>
      </v-card-subtitle>
      <v-card-text>
        <v-text-field
          v-model="token"
          label="Chat code"
          single-line
          v-maska:[CODE_MASK]
          />
      </v-card-text>
      <v-card-actions>
        <p v-show="invalid" class="ml-5" id="token-invalid">Invalid code</p>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" :disabled="token.length < 7" class="mr-10" @click="checkToken()">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
import { vMaska } from "maska";
import { ValidateToken } from "@/services/TokenService"

const model = defineModel();

const emit = defineEmits(['close', 'confirmed'])

const token = ref("");
const invalid = ref(false)

const CODE_MASK = { mask: '###-###' };

const checkToken = async function(){
  var tokenValid = false;
  try {
    tokenValid = await ValidateToken(token.value)
  } catch {
    tokenValid = false;
  }
  if(tokenValid){
    model.value = false;
  } else {
    invalid.value = true;
  }
}
</script>

<style scoped>
  .text-h5{
    white-space: initial;
  }

  #token-invalid{
    color: red;
  }
</style>
