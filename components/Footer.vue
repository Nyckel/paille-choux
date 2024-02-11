<template>
  <div class="footer">
    <Logo2 id="footerLogo" />
    <hr />

    <div id="footerInfos">
      <ContentRenderer class="infos" :value="contact" />
      <ContentRenderer class="infos" :value="legal" />
      <ContentRenderer class="infos" :value="rgpd" />
    </div>
  </div>
</template>

<script setup>
import Logo2 from "assets/Logo2.svg";
const { data: contact } = await useAsyncData('contact', () => queryContent('landing/contact').findOne());
const { data: legal } = await useAsyncData('legal', () => queryContent('landing/legal').findOne());
const { data: rgpd } = await useAsyncData('rgpd', () => queryContent('landing/rgpd').findOne());
</script>

<style lang="scss">
@import "../globals.scss";

.footer {
  margin-top: 4rem;
  background-color: $main-green;
  color: $beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }

  #footerLogo {
    width: 15rem;
    margin: 0 auto;
  }

  hr {
    width: 30%;
    height: 2px;
    border: none;
    border-bottom: 2px solid beige;
    margin: 4rem 0 2rem;
  }

  #footerInfos {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 3rem;
    justify-content: center;
    max-width: 1300px;
    padding: 2rem 0;
    margin: 0 auto;

    div.infos {
      display: flex;
      flex-direction: column;
      align-items: center;

      // div.info {
      //   flex: 1;
      //   text-align: center;
      //   min-width: 300px;

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
        align-items: center;

        li {
          display: flex;
          align-items: center;
          list-style-type: none;

          svg {
            width: 1rem;
            margin-right: .5rem;
          }


          p {
            font-weight: normal;
            font-size: 1rem;
            margin: 0;
          }

          a {
            color: inherit;
          }

          // }
        }
      }
    }
  }
}
</style>
