import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
 <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/partials/_reset.scss" />
    <link rel="stylesheet" href="./video-index.scss" />
    <title>Brainflix</title>
  </head>
  <body>
    <!-- Logo  -->
    <header class="logo">
      <div class="logo__image">
        <img src="./assets/logo/BrainFlix-logo.svg" alt="logo" />
      </div>
      <div class="logo__search">
        <input class="logo__input" type="text" placeholder="Search" />
        <img
          class="logo_avatar"
          src="./assets/images/Mohan-muruge.jpg"
          alt="logo avatar"
        />
      </div>
      <div class="logo__upload">
        <input
          class="logo__upload-btn"
          type="button"
          value="Upload"
          src="./assets/icons/upload.svg"
        />
      </div>
    </header>
    <!-- Main Video -->
    <main class="video">
      <div class="video__main">
        <video class="video__player" src="#"></video>
      </div>
      <h1 class="video__title">BMX Rampage: 2021 Highlights</h1>
      <div class="video__info">
        <div class="video__subtitle">
          <h3 class="video__ownership">By Red Crow</h3>
          <p class="video__date">07/11/2021</p>
        </div>
        <div class="video__icons">
          <p class="video__views">1,001,023</p>
          <img src="./assets/icons/views.svg" alt="views" />
          <p class="video__likes">110,985</p>
          <img src="./assets/icons/likes.svg" alt="likes" />
        </div>
      </div>
    </main>
    <div class="comment">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, esse. Aut
      consectetur necessitatibus illum officiis ea. Commodi cumque qui sequi
      praesentium? Sapiente doloremque reiciendis eius atque reprehenderit
      voluptas maiores et. Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Labore qui modi adipisci illo, atque enim. Repellendus minima
      distinctio tenetur consequuntur maiores voluptate! Fugit laudantium beatae
      vel quidem illum eos ullam.
      <h3 class="comment__number">3 comments</h3>
    </div>
    <form class="conversations">
      <div class="conversation__avatar">
        <img
          class="conversation__image"
          src="./assets/images/Mohan-muruge.jpg"
          alt="avatar"
        />
      </div>
      <div>
        <label class="conversations__title" for="message"
          >Join the Conversation</label
        >
        <textarea
          id="message"
          name="comment"
          placeholder="Add a new comment"
          cols="70"
          rows="5"
          class="conversation__message"
          autofocus
          required="required"
        ></textarea>
        <div class="button">
          <button
            class="conversation__button"
            value="submit"
            type="submit"
            src="./assets/icons/add_comment.svg"
          >
            Comment
          </button>
        </div>
      </div>
    </form>
    <!-- Comments List -->
    <ul class="comments__list">
      <li class="comments__item">
        <div class="comments__content">
          <div class="comments__avatar">
            <div class="avatar"></div>
          </div>
          <div class="comments__info">
            <div class="comments__info_wrapper">
              <p class="comments__info__name">Michael</p>
              <p class="comments__info__date">08/09/2021</p>
            </div>
            <p class="comments__info__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              voluptatum praesentium a molestiae dolorum expedita rem, natus
              molestias et beatae consectetur consequatur recusandae quibusdam
              odit. Cumque magni dolor consectetur deleniti?
            </p>
          </div>
        </div>
      </li>
      <li class="comments__item">
        <div class="comments__content">
          <div class="comments__avatar">
            <div class="avatar"></div>
          </div>
          <div class="comments__info">
            <div class="comments__info_wrapper">
              <p class="comments__info__name">Michael</p>
              <p class="comments__info__date">08/09/2021</p>
            </div>
            <p class="comments__info__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              voluptatum praesentium a molestiae dolorum expedita rem, natus
              molestias et beatae consectetur consequatur recusandae quibusdam
              odit. Cumque magni dolor consectetur deleniti?
            </p>
          </div>
        </div>
      </li>
      <li class="comments__item">
        <div class="comments__content">
          <div class="comments__avatar">
            <div class="avatar"></div>
          </div>
          <div class="comments__info">
            <div class="comments__info_wrapper">
              <p class="comments__info__name">Michael</p>
              <p class="comments__info__date">08/09/2021</p>
            </div>
            <p class="comments__info__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              voluptatum praesentium a molestiae dolorum expedita rem, natus
              molestias et beatae consectetur consequatur recusandae quibusdam
              odit. Cumque magni dolor consectetur deleniti?
            </p>
          </div>
        </div>
      </li>
      <li class="comments__item">
        <div class="comments__content">
          <div class="comments__avatar">
            <div class="avatar"></div>
          </div>
          <div class="comments__info">
            <div class="comments__info_wrapper">
              <p class="comments__info__name">Michael</p>
              <p class="comments__info__date">08/09/2021</p>
            </div>
            <p class="comments__info__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              voluptatum praesentium a molestiae dolorum expedita rem, natus
              molestias et beatae consectetur consequatur recusandae quibusdam
              odit. Cumque magni dolor consectetur deleniti?
            </p>
          </div>
        </div>
      </li>
    </ul>
    <!-- Videos List -->
    <ul class="videos__list">
      <li class="videos__item">
        <video class="videos__source" src="#"></video>
        <div class="videos__info">
          <h3 class="videos__title">Become A Travel Pro in One Easy Lesson</h3>
          <p class="videos__owner">Todd Welch</p>
        </div>
      </li>
      <li class="videos__item">
        <video class="videos__source" src="#"></video>
        <div class="videos__info">
          <h3 class="videos__title">Become A Travel Pro in One Easy Lesson</h3>
          <p class="videos__owner">Todd Welch</p>
        </div>
      </li>
      <li class="videos__item">
        <video class="videos__source" src="#"></video>
        <div class="videos__info">
          <h3 class="videos__title">Become A Travel Pro in One Easy Lesson</h3>
          <p class="videos__owner">Todd Welch</p>
        </div>
      </li>
      <li class="videos__item">
        <video class="videos__source" src="#"></video>
        <div class="videos__info">
          <h3 class="videos__title">Become A Travel Pro in One Easy Lesson</h3>
          <p class="videos__owner">Todd Welch</p>
        </div>
      </li>
    </ul>
  </body>
    </div>
  );
}

export default App;
