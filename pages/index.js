import Link from "next/link";
import Head from "../components/head";

export default () => (
  <div class="box">
    <Head title="Home" />
    <div class="row">
      <div class="col-md-6 col-md-push-6">
        <div class="row">
          <div id="colPho" class="text-center col">
            <img
              id="photo"
              class="rounded-circle"
              src="/static/me.jpg"
              data-holder-rendered="true"
            ></img>
          </div>
          <div id="colNam" class="text-center col">
            <h3>Marcelo Aguirre</h3>
            <h4>Web Developer</h4>
            <h6>
              <i class="fas fa-map-marker-alt"></i>
              Montevideo, Uruguay
            </h6>
            <p>
              <a
                class="btn btn-secondary"
                href="https://github.com/chelo91"
                role="button"
              >
                <i
                  class="fab
                    fa-github"
                ></i>
              </a>
              <a
                class="btn btn-secondary"
                href="https://www.instagram.com/iamch3lo"
                role="button"
              >
                <i
                  class="fab
                    fa-instagram"
                ></i>
              </a>
              <a
                class="btn btn-secondary"
                href="https://t.me/catwizar"
                role="button"
              >
                <i
                  class="fab
                    fa-telegram"
                ></i>
              </a>
              <a
                class="btn btn-secondary"
                href="https://www.linkedin.com/in/marcelo-aguirre-4b01a6184/"
                role="button"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                class="btn btn-secondary"
                href="https://discord.gg/YTpQrSN"
                role="button"
              >
                <i class="fab fa-discord"></i>
              </a>
            </p>
            <p>
              <a
                class="btn btn-secondary"
                href="mailto:marcelo.nibiru@gmail.com"
                role="button"
              >
                marcelo.nibiru@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-md-pull-6">
        <h1 class="card-title">About me</h1>
        <p>
          Hi, I am a developer in{" "}
          <a class="" href="https://nibiru.com.uy">
            Nibiru
          </a>
          , this is a startup and we begin in march 2020. I dedicate a lot of
          time for this and we expect a great things in the future.
        </p>
        <p>
          Other of my works is teach basic computer in a psychosocial center,
          this job helps me improve as a teacher and as a person.
        </p>
        <p>
          Some of my hobbys are travelling (I recommend use couchsurfing :D) and
          the photography (my favorite thing).
        </p>
        <p>
          In the travelling, I visited a lot of city in South America and
          Europe, I'm hoping to finish the coronavirus to the next destination.
        </p>
      </div>
    </div>

    <style jsx global>{`
      #photo {
        height: 250px;
        width: 250px;
        padding: 10px;
      }

      html,
      body {
        color: white;
        background-color: rgb(19, 18, 35);
      }

      .card {
        background-color: transparent;
      }

      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding-left: 5%;
        padding-right: 5%;
      }
      
      .btn{
        padding: 3px;
      }

      @media screen and (min-width: 1135px) {
        #colPho {
          text-align: right !important;
        }
        #colNam {
          text-align: left !important;
        }
      }
      @media screen and (min-width: 551px) and (max-width: 768px) {
        #colPho {
          text-align: right !important;
        }
        #colNam {
          text-align: left !important;
        }
      }
      @media screen and (max-width: 551px) {
        .box {
          display: block;
        }
      }
    `}</style>
  </div>
);
