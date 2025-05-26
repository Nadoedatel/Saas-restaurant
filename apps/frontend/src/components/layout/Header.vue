<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
        <nav class="flex flex-row gap-5 list-none">
            <li>
                 <RouterLink to="/">Главная</RouterLink>
            </li>
            <li>
                <RouterLink to="/bookTable">Забронировать</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">О нас</RouterLink>
            </li>
        </nav>
    </div>    
</template>