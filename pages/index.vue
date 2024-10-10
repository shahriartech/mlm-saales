<template>
  <div>Redirecting to login...</div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Redirect to login page
onMounted(() => {
  router.push('/login')
})
</script>