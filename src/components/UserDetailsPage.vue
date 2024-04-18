<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

const username = ref('johndoe123');
const email = ref('johndoe123@example.com');
const password = ref('');
const isEditing = ref(false);

const route = useRoute();

const validateForm = () => {
  console.log({ username: username.value, email: email.value, password: password.value });
  isEditing.value = false;
};

const startEditing = () => {
  isEditing.value = true;
};

const cancelEditing = () => {
  isEditing.value = false;
};

onMounted(() => {
  console.log(route);
});
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>User Details</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4 py-4" v-if="!isEditing">
        <!-- Username -->
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">
            Username
          </Label>
          <Input id="username" v-model="username" class="col-span-3" readonly />
        </div>
        <!-- Email -->
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right">
            Email
          </Label>
          <Input id="email" v-model="email" class="col-span-3" readonly />
        </div>
      </div>
      <form class="grid gap-4 py-4" v-else>
        <!-- Username -->
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">
            Username
          </Label>
          <Input id="username" v-model="username" class="col-span-3" />
        </div>
        <!-- Email -->
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right">
            Email
          </Label>
          <Input id="email" v-model="email" class="col-span-3" />
        </div>
        <!-- Password -->
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="password" class="text-right">
            Password (leave blank to keep the same)
          </Label>
          <Input id="password" v-model="password" type="password" class="col-span-3" />
        </div>
      </form>
    </CardContent>
    <CardFooter class="pt-4">
      <Button @click="startEditing" v-if="!isEditing" class="mb-4">
        Change Details
      </Button>
      <div class="flex justify-end" v-if="isEditing">
        <Button @click="cancelEditing" class="mr-4">
          Cancel
        </Button>
        <Button type="submit" @click="validateForm">
          Save Changes
        </Button>
      </div>
    </CardFooter>
  </Card>
</template>