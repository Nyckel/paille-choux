<styles scoped lang="scss">
@import "../globals.scss";

.nav {
  margin: 0;
  ul {
    margin: 0;
    padding: 4rem;
    position: fixed;

    li {
      list-style-type: none;
      margin: 0.625rem;
      font-weight: 700;
      color: $mid-transparent-green;
      position: relative;
      width: fit-content;

      a {
        color: $mid-transparent-green;
        text-decoration: none;
        &:hover {
          color: $main-green;
          cursor: pointer;
        }
      }
      &.active {
        a {
          color: $main-green;
        }
      }

      .carrot {
        position: absolute;
        right: -5.5rem;
        rotate: 110deg;
        top: -1.5rem;
        width: 3.5rem;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    display: none;
  }
}
</styles>

<template>
  <nav class="nav">
    <ul>
      <li
        v-for="navItem of navItems"
        :class="{ active: current === navItem.class }"
      >
        <a :href="'#' + navItem.class">{{ navItem.description }}</a>
        <Carrot
          class="carrot"
          :style="{
            visibility: current === navItem.class ? 'visible' : 'hidden',
          }"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NavItem } from "types/NavItem";
import Carrot from "../assets/Carotte.svg";

const current = ref("intro");

const navItems: NavItem[] = [
  {
    class: "intro",
    description: "Intro",
  },
  {
    class: "msv",
    description: "Méthodes de culture",
  },
  {
    class: "find-our-products",
    description: "Où trouver nos produits",
  },
  {
    class: "find-us",
    description: "Où nous trouver",
  },
];

if (process.client) {
  window.onscroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop) {
        current.value = section.getAttribute("id") as string;
      }
    });
  };
}
</script>
