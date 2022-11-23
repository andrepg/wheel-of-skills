<template>
  <div
    class="relative w-full px-10 py-5 mx-auto rounded-lg shadow-md lg:w-8/12 border-purple-50 bg-purple-900/60"
  >
    <div
      class="absolute top-0 left-0 z-0 w-full h-full bg-purple-800/20 blur-lg"
    ></div>

    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
