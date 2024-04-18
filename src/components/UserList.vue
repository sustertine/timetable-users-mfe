<script setup lang="ts">
import { ref } from 'vue';

const users = ref([
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
  { id: 3, name: 'User 3', email: 'user3@example.com' },
]);
</script>

<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>