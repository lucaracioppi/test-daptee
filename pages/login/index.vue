<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <div class="w-full h-screen md:flex">
    <div
      class="w-full md:w-1/2 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="h-12 w-auto"
          src="../../public/images/logo-Daptee.svg"
          alt="Your Company"
        />
        <h2
          class="mt-8 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-200"
        >
          Sign in to your account
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full bg-gray-900 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
                >Password</label
              >
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-violet-500 hover:text-violet-600"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full bg-gray-900 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500 dark:text-gray-200">
          Not a member?
          {{ " " }}
          <a
            href="#"
            class="font-semibold leading-6 text-violet-500 hover:text-violet-600"
            >Create an account</a
          >
        </p>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span
                class="bg-white dark:bg-gray-950 px-2 text-gray-500 dark:text-gray-200"
                >Or continue with</span
              >
            </div>
          </div>
          <div class="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a
                href="#"
                class="inline-flex gap-3 w-full justify-center rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 hover:dark:bg-gray-800"
              >
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.532 24.5525C47.532 22.9118 47.4043 21.3705 47.1797 19.8637H24V28.7613H37.4943C36.9123 31.7397 35.2517 34.2947 32.8284 36.0159V41.09H40.7415C45.2741 36.9152 47.532 31.2666 47.532 24.5525Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24 48C30.51 48 35.7866 45.8455 40.0741 41.5899L32.8284 36.0159C30.4114 37.6411 27.3308 38.6085 24 38.6085C17.6942 38.6085 12.4175 34.4392 10.4375 28.7172H2.1582V33.9634C6.42302 42.0503 14.658 48 24 48Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.4375 28.7172C9.90312 27.0919 9.60547 25.3407 9.60547 23.5C9.60547 21.6593 9.90312 19.9081 10.4375 18.2828V13.0366H2.1582C0.784766 15.7285 0 19.0601 0 23.5C0 27.9399 0.784766 31.2715 2.1582 33.9634L10.4375 28.7172Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M24 9.39147C27.5221 9.39147 30.6353 10.6525 33.047 13.162L40.2227 6.0148C35.7767 1.8638 30.51 0 24 0C14.658 0 6.42302 5.94966 2.1582 14.0366L10.4375 18.2828C12.4175 12.5608 17.6942 9.39147 24 9.39147Z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Google</span>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="inline-flex gap-3 w-full justify-center rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 hover:dark:bg-slate-800"
              >
                <svg
                  class="h-5 w-5 dark:bg-white rounded-full"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.66 7.66 0 018 4.84c.68.01 1.37.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.47 0 1.06-.01 1.91-.01 2.17 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"
                    clip-rule="evenodd"
                    fill="#181717"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden md:block w-1/2 bg-[url('/images/bg-login.avif')] bg-cover bg-center"
    ></div>
  </div>
</template>
