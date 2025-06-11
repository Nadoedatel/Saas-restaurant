<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <nav class="flex flex-row gap-5 list-none justify-center">
            <li class="p-3">
                 <RouterLink to="/">Главная</RouterLink>
            </li>
            <li class="p-3">
                <RouterLink to="/bookTable">Забронировать</RouterLink>
            </li>
            <li class="p-3">
                <RouterLink to="/about">О нас</RouterLink>
            </li>
        </nav>
    </div>    
</template>