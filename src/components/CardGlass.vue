<template>
  <div
    class="relative w-11/12 px-10 py-5 mx-auto my-5 rounded-lg shadow-md border-purple-50 bg-purple-900/60"
  >
    <div
      class="absolute top-0 left-0 z-0 w-full h-full bg-purple-900/70 blur-lg"
    ></div>

    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
