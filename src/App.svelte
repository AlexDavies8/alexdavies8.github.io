<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet">
</svelte:head>

<script>
  import chevronDown from './assets/chevron-down.svg'
  import heroImage from './assets/hero-image.jpg'

  import underminedThumb from './assets/undermined.png'
  import rebeatThumb from './assets/rebeat.png'
  import dynamoThumb from './assets/dynamo.png'
  import robowranglerThumb from './assets/robowrangler.png'
  import micromarketsThumb from './assets/micromarkets.png'
  import pugPanicThumb from './assets/pugpanic.png'
  import intertwinedThumb from './assets/intertwined.png'
  import failingHumanThumb from './assets/failinghuman.png'
  import moreSacrificesThumb from './assets/moresacrifices.png'

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
      description: "10th place for innovation in Ludum Dare 47! Loop the music and the world follows suit.",
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
      description: "Node-based image editing software written in C#.",
      images: [dynamoThumb],
      links: [
        {
          name: "github",
          src: "https://github.com/AlexDavies8/dynamo"
        }
      ]
    },
    {
      name: "Robowrangler",
      description: "Help the robot to reach the exit! You must build the world around it, and then simulate its escape!",
      images: [robowranglerThumb],
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
      description: "Manage trade routes between markets, and deliver as many goods as possible!",
      images: [micromarketsThumb],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/micromarkets"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/microMarkets"
        }
      ]
    },
    {
      name: "Pug Panic",
      description: "OH NO! Your pet pug has gotten loose on your spaceship! You're locked in the bridge, though, so you'll have to try and protect it through your archaic, virus-ridden systems monitor. How long can you keep him safe?",
      images: [pugPanicThumb],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/pug-panic"
        },
        {
          name: "github",
          src: "https://github.com/AlexDavies8/Ludum-Dare-46"
        }
      ]
    },
    {
      name: "InterTwined",
      description: "A cat's entire world in a single screen - unravel the threads of other dimensions to find your way home!",
      images: [intertwinedThumb],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/intertwined"
        }
      ]
    },
    {
      name: "Failing Human",
      description: "How long can you keep your body alive in this fast-paced, arcade-style clicker game?",
      images: [failingHumanThumb],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/failing-human"
        }
      ]
    },
    {
      name: "More Sacrifices",
      description: "You've angered Cthulhu! You must sacrifice yourself on the altar to appease him, as you dodge poison darts, and leap over pits of spikes.",
      images: [moreSacrificesThumb],
      links: [
        {
          name: "itch.io",
          src: "https://alex-davies.itch.io/more-sacrifices"
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
      name: "ludum dare",
      src: "https://ldjam.com/users/alex-davies/games"
    },
    {
      name: "linkedin",
      src: "https://www.linkedin.com/in/alex-davies-6774311ba/"
    }
  ]

  const scrollToProjects = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    })
  }
</script>

<main>
  <div>
    <div class="hero">
      <img src={heroImage} class="hero-image"/>
      <div class="hero-text-container">
        <h1 class="hero-text">HELLO</h1>
        <h2 class="hero-text">I'M ALEX DAVIES, STUDENT AND HOBBYIST GAME DEVELOPER</h2>
      </div>
      <img class="scroll-arrow" src={chevronDown} on:click={scrollToProjects} />
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
    opacity: 0.7;

    transition: all 0.3s;
  }
  .portfolio-item:hover {
    opacity: 1;
  }
  .portfolio-item-content-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0px;
    background: rgba(30, 23, 72, 0.8);
    box-shadow: 0 0 50px 50px rgba(30, 23, 72, 0.8);
  }
  .scroll-arrow {
    position: absolute;
    bottom: 5%;
    aspect-ratio: 1;
    width: 4em;
    animation: vertical-bob 1s ease-in-out 0s infinite alternate;
  }
  @keyframes vertical-bob {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-50px);
  }
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
    h1.hero-text {
    font-size: 6em;
    line-height: 1em;
    margin: 0px;
  }
  h2.hero-text {
    font-size: 1em;
    margin: 0px;
    line-height: 1.25em;
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
