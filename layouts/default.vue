<template>
    <div class="wrapper-body">
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">NUXT JS<font-awesome-icon icon="coffee" />kenqlo</h1>
                </div>
            </div>
        </section>
        <nuxt class="section" />
        <footer class="footer">
            <div class="content has-text-centered">
                <p>&copy; 2020 kenqlo</p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
}

%bodyBox {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

body, .wrapper-body {
    @extend %bodyBox;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    &:hover {
        color: #fff;
        background-color: #3b8070;
    }
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
    &:hover {
        color: #fff;
        background-color: #35495e;
    }
}

.hero {
    .hero-body {
        .container {
            min-height: 5em;
            .title {
                font-size: 2em;
                margin: 0;
            }
            .fa-coffee {
              margin: 0 .5em;
            }
        }
    }
}

.footer {
    margin-top: auto;
    padding: 2rem;
}
</style>
