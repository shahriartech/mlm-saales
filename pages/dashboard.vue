<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Welcome to your dashboard</h2>
    <p class="mb-4 text-gray-600">Here are your latest updates:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Flowbite Card Component -->
      <div class="bg-white shadow-md rounded-lg p-6">
        <h5 class="text-xl font-bold mb-4">Latest Activity</h5>
        <p class="text-gray-600">View your most recent activities and progress.</p>
        <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Activity</button>
      </div>

      <!-- Another card example -->
      <div class="bg-white shadow-md rounded-lg p-6">
        <h5 class="text-xl font-bold mb-4">New Notifications</h5>
        <p class="text-gray-600">You have 3 new messages in your inbox.</p>
        <button class="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Check Inbox</button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard', // Ensure this is correct
})
</script>