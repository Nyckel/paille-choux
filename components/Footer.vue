<template>
  <div class="footer">
    <Logo2 id="footerLogo" />
    <hr />
    <div class="infos">
      <div class="coordinates info">
        <h2>Contact</h2>
        <ul>
          <li>
            <EmailIcon />
            <span>thomas.helbert@gmail.com</span>
          </li>
          <li>
            <PhoneIcon />
            <span>06 20 86 82 91</span>
          </li>
          <li>
            <PinIcon />
            <span>507 route de Vignoc 35630 Langouët</span>
          </li>
        </ul>
      </div>
      <div class="legal info">
        <h2>Mentions légales</h2>
        <ul>
          <li>
            Identité de l'entreprise:
            <a
              href="https://www.societe.com/societe/monsieur-thomas-helbert-948120761.html"
              target="_blank"
              >EI Thomas Helbert</a
            >
          </li>
          <li>Numéro SIREN: 948120761</li>
          <li>Identifiant TVA: FR61948120761</li>
          <li>
            Hébergement:
            <a href="https://www.netlify.com/" target="_blank">Netlify</a>
          </li>
        </ul>
      </div>
      <div class="RGPD info">
        <h2>RGPD</h2>
        <p>
          Ce site WEB n'utilise aucun cookie,<br />
          et ne stocke aucune donnée personnelle
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import PhoneIcon from "assets/icons/phone.svg";
import EmailIcon from "assets/icons/mail.svg";
import PinIcon from "assets/icons/pin.svg";
import Logo2 from "assets/Logo2.svg";
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

  .infos {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 3rem;
    justify-content: center;
    width: 80%;
    max-width: 1300px;
    padding: 2rem 0;
    margin: 0 auto;

    div.info {
      flex: 1;
      text-align: center;
      min-width: 300px;

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
        align-items: center;
        li {
          svg {
            width: 1rem;
          }

          list-style-type: none;

          span {
            font-weight: normal;
            font-size: 1rem;
          }
          a {
            color: inherit;
          }
        }
      }
    }
  }
}
</style>
