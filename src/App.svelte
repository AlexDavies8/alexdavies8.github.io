<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet">
</svelte:head>

<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import heroImage from './assets/hero-image.jpg'
  import underminedThumb from './assets/undermined.png'
  import rebeatThumb from './assets/rebeat.png'

  const projects = [
    {
      name: "Undermined",
      description: "How deep can you dig in this Puyo-Puyo inspired arcade puzzler?",
      images: [underminedThumb],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/undermined"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/LudumDare48"
        }
      ]
    },
    {
      name: "ReBeat",
      description: "10th place for innovation in Ludum Dare 47! Loop the music and the world follows suit",
      images: [rebeatThumb],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/rebeat"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/LudumDare47"
        }
      ]
    },
    {
      name: "Dynamo",
      description: "Node-based image editing software written in C#",
      images: ["https://agtechgarage.com/wp-content/uploads/woocommerce-placeholder-800x800.png"],
      links: [
        {
          name: "github",
          src: "https://github.com/AlexDavies8/dynamo"
        }
      ]
    },
    {
      name: "Robowrangler",
      description: "<robowrangler description>",
      images: ["https://agtechgarage.com/wp-content/uploads/woocommerce-placeholder-800x800.png"],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/robowrangler"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/GMTK2020"
        }
      ]
    },
    {
      name: "Micromarkets",
      description: "<micromarkets description>",
      images: ["https://agtechgarage.com/wp-content/uploads/woocommerce-placeholder-800x800.png"],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/micromarkets"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/GMTK2019"
        }
      ]
    },
    {
      name: "Pug Panic",
      description: "<pug-panic description>",
      images: ["https://agtechgarage.com/wp-content/uploads/woocommerce-placeholder-800x800.png"],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/pug-panic"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/LudumDare46"
        }
      ]
    },
    {
      name: "Intertwined",
      description: "<intertwined description>",
      images: ["https://agtechgarage.com/wp-content/uploads/woocommerce-placeholder-800x800.png"],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/intertwined"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/GMTK2019"
        }
      ]
    },
    {
      name: "Failing Human",
      description: "<failing-human description>",
      images: ["https://agtechgarage.com/wp-content/uploads/woocommerce-placeholder-800x800.png"],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/failing-human"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/LD43"
        }
      ]
    },
    {
      name: "More Sacrifices",
      description: "<more-sacrifices description>",
      images: ["https://agtechgarage.com/wp-content/uploads/woocommerce-placeholder-800x800.png"],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/more-sacrifices"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/LD42"
        }
      ]
    }
  ]

  const socialLinks = [
    {
      name: "github",
      src: "https://github.com/AlexDavies8"
    },
    {
      name: "itch.io",
      src: "https://alex-davies.itch.io"
    },
    {
      name: "linkedin",
      src: "https://www.linkedin.com/in/alex-davies-6774311ba/"
    }
  ]
</script>

<main>
  <div>
    <div class="hero">
      <img src={heroImage} class="hero-image"/>
      <div class="hero-text-container">
        <h1 class="hero-text">HELLO</h1>
        <h2 class="hero-text">I'M ALEX DAVIES, STUDENT AND HOBBYIST GAME DEVELOPER</h2>
      </div>
    </div>
    <div class="items-container">
      { #each projects as { name, description, images, links } }
        <a class="portfolio-item nostyle" href={links[0].src} target="_blank" rel="noreferrer"> 
          <img src={images[0]} class="portfolio-thumbnail" />
          <div class="portfolio-item-content-wrapper">
            <div class="portfolio-item-content">
              <p class="name">{name}</p>
              <p class="description">{description}</p>
              <div class="links-container">
                { #each links as {name, src} }
                  <a href={src} target="_blank" rel="noreferrer">{name}</a>
                { /each }
              </div>
            </div>
          </div>
        </a>
      { /each }
      <div class="portfolio-item nostyle"> 
        <div class="portfolio-item-content-wrapper social-links-container">
          <div class="portfolio-item-content social-links-container">
              { #each socialLinks as { name, src } }
                <a class="social-link" href={src} target="_blank" rel="noreferrer">{name}</a>
              { /each }
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .items-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .portfolio-item {
    width: 25%;
    aspect-ratio: 1.333;
    position: relative;
    overflow: hidden;
  }
  .portfolio-item-content-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0px;
    background: rgba(30, 23, 72, 0.8);
    box-shadow: 0 0 50px 50px rgba(30, 23, 72, 0.8);
  }
  .portfolio-item-content {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    gap: 0.75em;
    padding: 0.75em;
  }
  .links-container {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
  p {
    margin: 0px
  }
  .name {
    font-size: 2em;
  }
  .social-links-container {
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 1.25em;
  }
  .social-link {
    font-size: 1.75em;
  }
  .portfolio-thumbnail {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
  }
  .hero {
    width: 100%;
    height: 100vh;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .hero-image {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  .hero-text-container {
    position: relative;
    box-shadow: 0 0 100px 100px rgba(30, 23, 72, 0.6), 0 0 200px 200px rgba(30, 23, 72, 0.2);
    background-color: rgba(30, 23, 72, 0.67);
    border-radius: 50px;
    margin: 0 20% 0 20%;
  }
  .hero-text {
    color: rgb(255, 181, 238);
    text-shadow: 0 0 40px rgb(255, 181, 238, 0.3), 0 0 20px rgba(30, 23, 72);
  }
  h1.hero-text {
    font-size: 12em;
    line-height: 1em;
    margin: 0px;
  }
  h2.hero-text {
    font-size: 2em;
    margin: 0px;
    line-height: 1.25em;
  }

  @media only screen and (max-width: 800px) {
    .portfolio-item {
      width: 100%;
    }
  }
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    .portfolio-item {
      width: 50%;
    }
  }
  @media only screen and (min-width: 1200px) and (max-width: 1600px) {
    .portfolio-item {
      width: 33.33%;
    }
  }

</style>
