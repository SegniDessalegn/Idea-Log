
<template>
    <div class="flex flex-col bg-gray-100 p-10 mt-20 rounded-lg items-center w-fit mx-auto gap-5">
        <div class="text-lg">Welcome back, <b>Login</b> to Idea Log</div>
        <input type="text" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs" />
        <input type="password" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs" />
        <div class="flex gap-5">
            <div>Remember me for a month</div>
            <input type="checkbox" class="toggle toggle-primary" checked />
        </div>
        <span class="loading loading-ring loading-lg"></span>
        <button class="btn btn-primary w-full max-w-xs">Log in</button>
        <div>If you do not have an account, you can <nuxt-link to="signup" class="link link-hover"><b>Signup</b></nuxt-link>
        </div>
    </div>
</template>
