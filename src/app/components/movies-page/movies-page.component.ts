import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  moviesData = {
    Mulan: {
      title: 'Mulan',
      year: '04-08-2020',
      img: 'https://firebasestorage.googleapis.com/v0/b/angular-project-e49e1.appspot.com/o/Mulan.jpg?alt=media&token=f8a4b6e5-16b2-4733-959e-9ba52a0bb184',
      director: 'Niki Caro',
      description:
        'A young Chinese maiden disguises herself as a male warrior in order to save her father.',
    },
    'Rush hour': {
      title: 'Rush Hour',
      year: '02-03-1998',
      img: 'https://firebasestorage.googleapis.com/v0/b/angular-project-e49e1.appspot.com/o/1256021-b.jpg?alt=media&token=11d46f80-bdec-4ffc-b1b0-5079f16773a5',
      director: 'Brett Ratner',
      description:
        "A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consul's kidnapped daughter, while trying to arrest a dangerous crime lord along the way.",
    },
    'The game': {
      title: 'The game',
      year: '04-08-1997',
      img: 'https://firebasestorage.googleapis.com/v0/b/angular-project-e49e1.appspot.com/o/41ky6e3xsdL._AC_.jpg?alt=media&token=1b48e0a2-6c68-499a-acd4-a9de51b69a3b',
      director: 'David Fincher',
      description:
        'A young Chinese maiden disguises herself as a male warrior in order to save her fatherAfter a wealthy banker is given an opportunity to participate in a mysterious game, his life is turned upside down when he becomes unable to distinguish between the game and reality.',
    },
    'The platform': {
      title: 'The platform',
      year: '01-10-2019',
      img: 'https://firebasestorage.googleapis.com/v0/b/angular-project-e49e1.appspot.com/o/MV5BOTMyYTIyM2MtNjQ2ZC00MWFkLThhYjQtMjhjMGZiMjgwYjM2XkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_.jpg?alt=media&token=44fc22b0-ab15-45c0-a008-c0d352f57e77',
      director: 'Galder Gaztelu-Urrutia',
      description:
        'A vertical prison with one cell per level. Two people per cell. Only one food platform and two minutes per day to feed. An endless nightmare trapped in The Hole.',
    },
    Frozen: {
      title: 'Frozen',
      year: '08-10-2013',
      img: 'https://firebasestorage.googleapis.com/v0/b/angular-project-e49e1.appspot.com/o/p_frozen_18373_3131259c.jpeg?alt=media&token=e185c53e-498e-4dd0-b726-27c557831a25',
      director: 'Jennifer Lee',
      description:
        'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
    },
    'No Smoking': {
      title: 'No Smoking',
      year: '07-10-2007',
      img: 'https://firebasestorage.googleapis.com/v0/b/angular-project-e49e1.appspot.com/o/511VCi7uX3L._AC_SY580_.jpg?alt=media&token=a297fa4f-b3cf-4114-84fa-6041f79fe066',
      director: 'Anurag Kashyap',
      description:
        "A heavily addicted smoker is unprepared for the true price he must pay when he asks a guru's help to kick the habit.",
    },
    "Ocean's Eleven": {
      title: "Ocean's Eleven",
      year: '03-10-2001',
      img: "https://firebasestorage.googleapis.com/v0/b/angular-project-e49e1.appspot.com/o/Ocean's_Eleven_2001_Poster.jpg?alt=media&token=a30566a5-cfef-4221-86a5-582c01fcd787",
      director: 'Steven Soderbergh',
      description:
        'Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.',
    },
    'The Wolf of Wall Street': {
      title: 'The Wolf of Wall Street',
      year: '09-10-2013',
      img: 'https://firebasestorage.googleapis.com/v0/b/angular-project-e49e1.appspot.com/o/The_Wolf_of_Wall_Street_(2013).png?alt=media&token=3cef1bcd-0359-4104-a5bf-626b39a9f173',
      director: 'Martin Scorsese',
      description:
        'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
    },
  };

  movies = Object.values(this.moviesData);

  constructor() {}

  ngOnInit() {}
}
