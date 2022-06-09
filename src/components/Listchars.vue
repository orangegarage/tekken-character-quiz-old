<template>
<div>
    <div>
        <button v-on:click="reorder()" class = "reorderButton">{{$t("view.reorder")}}</button>
    </div>
    <div class="characterList">
        <ul>
        <!-- problem right now is the structure of the en/kr data store format, use character name as path to characters.json, portraits -->
        <li class="resultingimg"
            v-for="index in characterList.length" :key="index.shortname"
            v-on:click= "clickedList(index)"       
        >
            <img :src="getImg(characterList[index - 1].photo)" :alt="characterList[index - 1].name"/>
            <br />{{ index }}. {{ $t("characters." + characterList[index - 1].shortname) }}
        </li>
        </ul>
    </div>
</div>
</template>

<script>
import characters from "../assets/characters.json";
import { store } from '@/core/questions.js';

export default {
  data() {
    return {
      characterList: characters.characters,
      storeState: store.state,
      originalCharacterList: characters.characters
    };
  },
  methods: {
    tran(translate) {
      if (typeof translate === "string") {
        return this.$i18n.t(translate);
      }
      return translate[this.$i18n.locale];
    },
    getImg(path) {
      return require("../assets" + path);
    },
    getLink(index) {
      return this.tran("tutorial." + index);
    },
    clickedList(index) {
        console.log("clicked" + index);
        alert(this.tran("flavortexts."+this.characterList[index - 1].name));
    },
    reorder() {
      console.log(store.state.final);
      if(this.characterList != this.originalCharacterList) {
        this.characterList = this.originalCharacterList;
      }
      else {
          this.characterList = store.state.final;
      }
    }
  },
};
</script>
<style>
.characterList {
  text-align: center;
  color: #bbe1fa;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
}

.characterList .resultingimg, button {
  color: #bbe1fa;
  font-weight: bold;
  text-decoration: none;
}

.characterList {
    margin-bottom: 1em;
}

.resultingimg:hover {
  color: #ffbd69;
  transition: 0.3s;
}

.reorderButton{
  padding: 0.4em;
  border: 0.1em solid #bbe1fa;
  border-radius: 0.1em;
  font-size: 120%;
  color: #bbe1fa;
  background-color: transparent;
}

.reorderButton:hover{
  color: #1b262c;
  border-color: #1b262c;
  transition: 0.5s;
  background-color: #bbe1fa;
}

.resultingimg {
    margin-bottom: 1em;
}

@media only screen and (max-width: 1200px) {
  .characterList {
    max-width:100%;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1500px) {
  .characterList {
    max-width:80%;
  }
}
@media only screen and (min-width: 1500px) and (max-width: 1700px){
  .characterList {
    max-width:60%;
  }
}


</style>
