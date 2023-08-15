
<template>
    <div class="flex flex-col bg-gray-100 p-10 mt-20 rounded-lg items-center w-fit mx-auto gap-5">
        <div class="text-lg">Welcome, <b>Signup</b> to Idea Log</div>
        <input type="text" placeholder="Username" class="input input-bordered input-primary w-full max-w-xs" />
        <input type="text" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs" />
        <input type="password" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs" />
        <span class="loading loading-ring loading-lg"></span>
        <button class="btn btn-primary w-full max-w-xs">Signup</button>
        <div>If you already have an account, <nuxt-link to="login" class="link link-hover"><b>Login</b></nuxt-link>
        </div>
    </div>
</template>
