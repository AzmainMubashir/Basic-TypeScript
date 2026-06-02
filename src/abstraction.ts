// Abstraction: 3rd pillar of OOP (means idea that will implement later)

/*
   1. interface
   2. abstract class
*/

//  1. Interface method

// idea: ---->

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// implementation: ---->

// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log("Playing music....");
//   }
//   pause() {
//     console.log("Music paused... ");
//   }
//   stop() {
//     console.log(`Music stopped`);
//   }
// }

// const zPlayer = new MusicPlayer(); // instance
// zPlayer.play();

//  2. Abstract class method

// idea ---->

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// implementation ---->

class xPlayer extends MediaPlayer {
  play() {
    console.log(`Playing music...`);
  }
  pause(): void {
    console.log("Music is paused !");
  }
  stop(): void {
    console.log("Music is stopped !");
  }
}

const xPlayer1 = new xPlayer();
xPlayer1.play();
