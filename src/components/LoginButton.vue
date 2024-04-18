<script setup lang="ts">
import { ref } from "vue";
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

const username = ref('');
const password = ref('');

const validateForm = () => {
  // Add your validation logic here
  console.log({ username: username.value, password: password.value });
};
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button>
        Log in
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Log in</DialogTitle>
        <DialogDescription>
          Log in to start using the application.
        </DialogDescription>
      </DialogHeader>
      <form class="grid gap-4 py-4">
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
      </form>
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