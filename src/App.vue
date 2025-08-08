<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <!-- alt属性なし画像 -->
    <img src="/vite.svg" class="logo" />

    <!-- ラベルなしボタン -->
    <button></button>

    <!-- 見出し階層不正（h3の前にh2がない） -->
    <h1 id="aaa">トップ見出し</h1>
    <h3>サブ見出し</h3>
    <h1 id="aaa">トップ見出し</h1>

    <!-- labelのないinput -->
    <form action="">
      <div>
        <label for="name">名前</label>
        <input type="text" placeholder="名前" />
      </div>
      <div>
        名前
        <input type="text" placeholder="あああ" />
      </div>

      <label for="test01">
        <input type="radio" id="test01" name="test" />ラジオ１
      </label>
      <label for="test02">
        <input type="radio" id="test02" name="test" />ラジオ２
      </label>
    </form>

    <!-- コントラスト不足のテキスト -->
    <p style="color: #ccc; background: #fff;">コントラスト不足のテキスト</p>

    <!-- aria-labelのないランドマーク -->
    <nav></nav>
    <!-- クリックできるがdivで作られている要素（本来はbuttonやaタグ推奨） -->
    <div @click="alert('クリックされました')" style="cursor:pointer; background:#eee; padding:1em; margin-top:1em;">
      クリックできるがdivで作られている要素
    </div>


    <!-- 不適切なtabIndex（0以外の正の値） -->
    <div tabIndex="5">不適切なtabIndex</div>

    <!-- 不正なaria属性 -->
    <div aria-labl="test">typoしたaria属性</div>

    <!-- aタグのhrefなし -->
    <a>リンクだがhrefがない</a>
    <a><i class="fa-icon"></i></a>

    <!-- role属性の誤用 -->
    <div role="button">roleだけでキーボード操作不可</div>

  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
