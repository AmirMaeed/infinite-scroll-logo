<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Logo Slider</title>

    <!-- Swiper CSS -->
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .swiper {
            width: 100%;
            padding: 30px 0;
            background-color: #fff;
        }

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.7;
            filter: grayscale(100%);
            transition: all 0.3s ease;
        }

        .swiper-slide:hover {
            filter: grayscale(0%);
            opacity: 1;
        }

        .swiper-slide img {
            max-height: 60px;
            width: auto;
            object-fit: contain;
        }

        .swiper-wrapper {
            display: flex;
        }

        h2 {
            text-align: center;
            padding: 20px 0;
        }
    </style>
</head>

<body>

    <h2>Our Trusted Partners</h2>

    <!-- Swiper -->
    <div class="swiper partners-logos">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google"></div>
            <div class="swiper-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon"></div>
            <div class="swiper-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook"></div>
            <div class="swiper-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" alt="Netflix"></div>
            <div class="swiper-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="Spotify"></div>
            <div class="swiper-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Apple_logo_black.svg" alt="Apple"></div>
            <div class="swiper-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Twitter_logo_2021.svg" alt="Twitter"></div>
        </div>
    </div>

    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <!-- Swiper Config -->
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            new Swiper('.partners-logos', {
                loop: true,
                slidesPerView: 6,
                spaceBetween: 30,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                },
            });
        });
    </script>

</body>

</html>
