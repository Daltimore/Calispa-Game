<template>
  <main></main>
</template>

<script>
  // Import ChannelDetails component created above
  import ChannelDetails from '@/components/ChannelDetails'
  // An array that holds the lyrics questions and their correct answers. All questions can be seen here https://gist.github.com/yomete/2d851c2adc008a9763a0db9f85879083
  const lyrics = [
    {
      lyric: 'When he was ten his father split, full of it, debt-ridden. Two years later, see Alex and his mother bed-ridden. Half-dead sittin\' in their own sick, the scent thick',
      options: [{name: 'Aaron Burr', correct: false}, {name: 'James Madison', correct: false}, {name: 'John Laurens', correct: false}, {name: 'Eliza Hamilton', correct: true}],
      answer: 'Eliza Hamilton'
    },
    {
      lyric: 'I am sailing off to London. I’m accompanied by someone who always pays. I have found a wealthy husband. Who will keep me in comfort for all my days. He is not a lot of fun, but there’s no one',
      options: [{name: 'Eliza', correct: false}, {name: 'Peggy', correct: false}, {name: 'Angelica', correct: true}, {name: 'Maria', correct: false}],
      answer: 'Angelica'
    }
  ]
export default {
  name: 'home',
  data () {
    return {
      // This holds the current presence-id
      presenceid: null,
      // This checks if a question has been answered, default to false
      hasAnswered: false,
      // This holds the current question
      question: null,
      // This holds the options for the current question
      options: null,
      // This holds the correct answer for the current question
      correctanswer: null,
      // This is used for a countdown timer
      count: null,
      // Number of players in the game
      players: 1,
      // This checks if there's a second player, it becomes true when players = 2
      secondplayer: false,
      // This holds the player data for both players
      playerdata: {
        one: {
          id: null,
          score: 0,
          userid: null
        },
        two: {
          id: null,
          score: 0,
          userid: null
        }
      },
      // This holds the userid for the current player
      userid: null,
      // This holds the current URL of the game
      url: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {},
    getUniqueId () {},
    checkPresenceID () {},
    checkAnswer (item) {},
    getRandomQuestions (array, count) {},
    getNewQuestion () {}
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    font-size: 1.5rem;
    margin: 0 0 20px 0;
  }
  .play--button {
    background-color: white;
    color: #7fd4d3;
    font-weight: bold;
    border-radius: 20px;
    letter-spacing: 1px;
    padding: 20px;
    transition: all .3s ease;
    text-shadow: 0 1px 3px rgba(36,180,126,.4);
    text-transform: uppercase;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  }
  .play--button:hover {
    background-color: white;
    color: #7fd4d3;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  a {
    color: #fff;
  }
  p {
    color: #fff;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  .play--button {
    background-color: white;
    color: #7fd4d3;
    font-weight: bold;
    border-radius: 20px;
    letter-spacing: 1px;
    padding: 20px;
    transition: all .3s ease;
    text-shadow: 0 1px 3px rgba(36,180,126,.4);
    text-transform: uppercase;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 5;
  }
  .play--button:hover {
    background-color: white;
    color: #7fd4d3;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
  .hamilton--header--text {
    margin-top: 50px;
  }
  .hamilton--inner {
    margin-top: 20px;
  }
  .hamilton--inner .left{
    text-align: left;
  }
  .hamilton--inner .right{
    text-align: right;
  }
  .title {
    font-weight: bold;
  }
  .hamilton--lyrics--text {
    width: 600px;
    margin: 0 auto;
  }
  .hamilton--lyrics--text p {
    font-weight: bold;
  }
  .hamilton--answers a{
    display: block;
    border: 3px solid white;
    border-radius: 50px;
    margin: 20px auto;
    width: 500px;
    padding: 10px;
  }
  .wronganswer {
    background-color: #ec6969;
    border: none !important;
    opacity: 0.4;
    transition: background-color 0.5s ease;
  }
  .correctanswer {
    background-color: #00c4a7;
    border: none !important;
    transition: background-color 0.5s ease;
  }
</style>
