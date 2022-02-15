import Typewriter from "https://cdn.skypack.dev/typewriter-effect/dist/core";

var app = document.getElementById("content");

var typewriter = new Typewriter(app, {
  delay: 30,
  cursorClassName: "terminal-cursor"
});

typewriter
  .typeString(`<center><div style='display: inline-flex; font-size:20px; opacity: 0.8; margin-top:15px;'>Hi 👋, I'm </div></center>`)
  .typeString(`<center><div style='font-size:24px;'>UnityTheMaker</div></center>`)
  .deleteChars(14)
  .typeString(`<center><div style='margin-bottom: 10px; font-size:24px;'>Halil Tezcan KARABULUT</div></center>`)
  .typeString("I’m currently working on some private enterprise projects also freelancing. <br />")
  .typeString("I’m currently learning <a href='https://www.rust-lang.org/'>Rust</a>, <a href='https://en.wikipedia.org/wiki/DevOps'>DevOps</a> <br />")
  .typeString("I use distributed micro-services architecture w/NestJS, w/GraphQL, w/PrismaJS, w/Postgres, Vue, w/VueSax and Svelte, w/TailwindCSS for front-end.<br />")
  .typeString("I use ExcaliDraw or Figma FigJam for designing the system architecture and use VSCode/Neovim as the IDE.<br />")
  .typeString("I use Arch Linux as my main OS and Ubuntu/Fedora/CentOS Stream on my servers.<br />")
  .typeString("I use Docker for deployment and mostly prefer serverless w/Serverless Framework, w/AWS Lambda and AWS CloudFront.<br />")
  .typeString(`Check my <a href="https://github.com/unitythemaker">GitHub</a> and <a href="https://www.linkedin.com/in/halil-tezcan-karabulut-276a841b6/">LinkedIn</a> for more.<br />`)
  .typeString(`Contact me: <a href="mailto:unity@themaker.cyou">unity@themaker.cyou</a><br />`)
  .pauseFor(1500)
  .typeString(`Ask me about 
  <a href="https://nodejs.org/">NodeJS</a>,
  <a href="https://www.typescriptlang.org/">Typescript</a>,
  <a href="https://moleculer.services/">MoleculerJS</a>,
  <a href="https://fastify.io/">Fastify</a>,
  <a href="https://expressjs.com/">Express</a>,
  <a href="https://nestjs.com/">NestJS</a>,
  <a href="https://graphql.org/">GraphQL</a>,
  <a href="https://www.prisma.io/">PrismaJS</a>,
  <a href="https://www.mongodb.com/">MongoDB</a>,
  <a href="https://www.arangodb.com/">ArangoDB</a>,
  <a href="https://www.redis.io/">Redis</a>,
  <a href="https://www.postgresql.org/">PostgreSQL</a>,
  <a href="https://www.zeromq.org/">ZeroMQ</a>,
  <a href="https://git-scm.com/">Git</a>,
  <a href="https://sentry.io/">Sentry</a>,
  <a href="https://www.figma.com/">Figma</a>,
  <a href="https://sapper.svelte.dev/">Sapper</a>,
  <a href="https://svelte.dev/">Svelte</a>,
  <a href="https://vuejs.org/">Vue</a>,
  <a href="https://nuxtjs.org/">NuxtJS</a>,
  <a href="https://vuesax.com/">Vuesax</a>,
  <a href="https://vuetifyjs.com/">Vuetify</a>,
  <a href="https://tailwindcss.com/">TailwindCSS</a>,
  <a href="https://rollupjs.org/">Rollup</a>,
  <a href="https://webpack.js.org/">Webpack</a>,
  <a href="https://www.apollographql.com/">Apollo</a>,
  <a href="https://electronjs.org/">Electron</a>,
  <a href="https://cordova.apache.org/">Cordova</a>,
  <a href="https://heroku.com/">Heroku</a>,
  <a href="https://vercel.com/">Vercel</a>,
  <a href="https://www.arduino.cc/">Arduino</a>,
  <a href="https://www.raspberrypi.org/">Raspberry Pi</a>,
  <a href="https://www.ansible.com/">Ansible</a>,
  <a href="https://www.terraform.io/">Terraform</a>,
  <a href="https://serverless.com/">Serverless Framework</a>,
  <a href="https://aws.amazon.com/">AWS</a>,
  <a href="https://www.rabbitmq.com/">RabbitMQ</a>,
  <a href="https://www.docker.com/">Docker</a>,
  <a href="https://kubernetes.io/">Kubernetes</a>,
  <a href="https://nginx.org/">Nginx</a>,
  <a href="https://firecracker-microvm.github.io/">Firecracker VMM</a>,
  <a href="https://www.proxmox.com/">Proxmox</a>,
  <a href="https://www.ubuntu.com/">Ubuntu</a>,
  <a href="https://www.archlinux.org/">Arch Linux</a>,
  <a href="https://www.centos.org/">CentOS</a>
...<br />`)
  .typeString("<strong style='color: #a5b4fc;'>Fun fact: </strong> I'm an organism that can turn pizza and caffeine into software. <br />")
  .typeString("<strong style='color: #a5b4fc;'>Some of My Projects: </strong> ")
  .typeString(`<a href="https://name-gen.stylsheets.com/">Name Generator</a>, <a href="https://www.npmjs.com/package/assisky">Assisky</a>, <a href="/resume.pdf">Word Cloud</a>, <a href="/resume.pdf">Cyphria</a>, <a href="/resume.pdf">Simple-Com</a>, <a href="https://docs.pay.redoya.net/">Redoya Pay</a>, <a href="/resume.pdf">Redoya Customer CP</a>, <a href="/resume.pdf">Herd Monitoring</a><a href="/resume.pdf">(WIP) Middlewar.com</a><br />`)
  .typeString(`<a href="/resume.pdf"><strong style='color: #a5b4fc;'>Click to View My Resume</strong></a>`)
  .start();

var fullsize = document.getElementById("fullsize");
var card = document.getElementById("card");

fullsize.addEventListener("click", function () {
    card.classList.toggle("cardfull");
});

