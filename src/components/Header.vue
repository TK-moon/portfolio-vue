<template>
  <header>
    <nav>
      <a id="logo" href="#main">TK</a>
      <ol>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ol>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  a {
    text-decoration: none;
    color: var(--color-primary-text);
  }
}
#logo {
  font-size: 32px;
  font-weight: 900;
}
nav {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ol {
    display: grid;
    margin: 0;
    padding: 0;
    align-items: center;
    grid-auto-flow: column;
    list-style: none;
    gap: 25px;
    li {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background-color: #000;
        transition: transform ease-in-out 100ms;
        transform: scaleX(0);
      }
      &:hover:before {
        transform: scaleX(1);
      }
    }
  }
}
</style>
