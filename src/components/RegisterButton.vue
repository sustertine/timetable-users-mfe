<script setup lang="ts">
import { ref, computed, watch } from "vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button';

const email = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');

const emailError = ref('');
const passwordError = ref('');

const user = computed(() => ({
  email: email.value,
  username: username.value,
  password: password.value,
}));

watch(email, () => {
  emailError.value = '';
});

watch([password, confirmPassword], () => {
  passwordError.value = '';
});

const validateForm = () => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Invalid email';
    return;
  }
  if (password.value !== confirmPassword.value) {
    passwordError.value = 'Passwords do not match';
    return;
  }
  console.log(user.value);
};
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button>
        Sign up
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Sign up</DialogTitle>
        <DialogDescription>
          Sign up to start using the application.
        </DialogDescription>
      </DialogHeader>
      <form class="grid gap-4 py-4">
        <!-- Email -->
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right">
            Email
          </Label>
          <Input id="email" v-model="email" placeholder="john@doe.com" class="col-span-3" />
        </div>
        <div v-if="emailError" class="grid grid-cols-4 items-center gap-4">
          <div class="col-span-1"></div>
          <p  class="text-red-500 px-2 col-span-3">{{ emailError }}</p>
        </div>
        <!-- Username -->
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">
            Username
          </Label>
          <Input id="username" v-model="username" placeholder="johndoe123" class="col-span-3" />
        </div>
        <!-- Password -->
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="password" class="text-right">
            Password
          </Label>
          <Input id="password" v-model="password" placeholder="someExample_123s_password!" type="password" class="col-span-3" />
        </div>
        <!-- Confirm password -->
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="confirmPassword" class="text-right">
            Confirm password
          </Label>
          <Input id="confirmPassword" v-model="confirmPassword" placeholder="someExample_123s_password!" type="password" class="col-span-3" />
        </div>
        <div v-if="passwordError" class="grid grid-cols-4 items-center gap-4">
          <div class="col-span-1"></div>
          <p class="text-red-500 px-2 col-span-3">{{ passwordError }}</p>
        </div>
      </form>
      <div class="grid grid-cols-4 items-center gap-4"></div>
      <DialogFooter>
        <Button variant="secondary" type="submit">
          Cancel
        </Button>
        <Button type="submit" @click="validateForm">
          Confirm
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>