import React from 'react';

const questions = {
    "General Knowledge": {
      "MCQ": [
        {
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Rome"],
          correct_answer: "Paris"
        },
        {
          question: "Who wrote 'To Kill a Mockingbird'?",
          options: ["Harper Lee", "Charles Dickens", "Jane Austen", "Mark Twain"],
          correct_answer: "Harper Lee"
        },
        {
          question: "What is the chemical symbol for water?",
          options: ["H2O", "CO2", "O2", "H2SO4"],
          correct_answer: "H2O"
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Mars", "Venus", "Jupiter", "Mercury"],
          correct_answer: "Mars"
        },
        {
          question: "Who invented the telephone?",
          options: ["Alexander Graham Bell", "Thomas Edison", "Albert Einstein", "Nikola Tesla"],
          correct_answer: "Alexander Graham Bell"
        }
      ],
      "True/False": [
        {
          question: "The Great Wall of China is visible from space.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "The human body has four lungs.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "The currency of Japan is the Yuan.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "Mount Everest is the tallest mountain in the world.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "Goldfish only have a memory span of three seconds.",
          options: ["True", "False"],
          correct_answer: "False"
        }
      ]
    },
    "Art": {
      "MCQ": [
        {
          question: "Who painted the Mona Lisa?",
          options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
          correct_answer: "Leonardo da Vinci"
        },
        {
          question: "Which artist is known for his melting clocks?",
          options: ["Salvador Dalí", "Claude Monet", "Rembrandt", "Andy Warhol"],
          correct_answer: "Salvador Dalí"
        },
        {
          question: "Who created the sculpture 'David'?",
          options: ["Michelangelo", "Donatello", "Leonardo da Vinci", "Raphael"],
          correct_answer: "Michelangelo"
        },
        {
          question: "Which painter cut off his own ear?",
          options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Georgia O'Keeffe"],
          correct_answer: "Vincent van Gogh"
        },
        {
          question: "Who painted 'Starry Night'?",
          options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
          correct_answer: "Vincent van Gogh"
        }
      ],
      "True/False": [
        {
          question: "Leonardo da Vinci was primarily a sculptor.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "The Sistine Chapel ceiling was painted by Michelangelo.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "Claude Monet is known for his series of paintings of water lilies.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "Pablo Picasso was a Dutch artist.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "The 'Mona Lisa' is currently housed in the Louvre Museum in Paris.",
          options: ["True", "False"],
          correct_answer: "True"
        }
      ]
    },
    "History": {
      "MCQ": [
        {
          question: "Who was the first President of the United States?",
          options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
          correct_answer: "George Washington"
        },
        {
          question: "In which year did World War I begin?",
          options: ["1914", "1918", "1939", "1945"],
          correct_answer: "1914"
        },
        {
          question: "Who was the first man to walk on the moon?",
          options: ["Neil Armstrong", "Buzz Aldrin", "Alan Shepard", "Yuri Gagarin"],
          correct_answer: "Neil Armstrong"
        },
        {
          question: "The Magna Carta was signed in which year?",
          options: ["1215", "1492", "1776", "1836"],
          correct_answer: "1215"
        },
        {
          question: "Which civilization built the Machu Picchu citadel?",
          options: ["Inca", "Maya", "Aztec", "Egyptian"],
          correct_answer: "Inca"
        }
      ],
      "True/False": [
        {
          question: "The French Revolution began in 1789.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "The Berlin Wall fell in 1989.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "Julius Caesar was the first Emperor of Rome.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "The Battle of Waterloo took place in 1815.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "The Great Wall of China was built in the 14th century.",
          options: ["True", "False"],
          correct_answer: "False"
        }
      ]
    },
    "Geography": {
      "MCQ": [
        {
          question: "Which continent is the largest by land area?",
          options: ["Asia", "Africa", "North America", "South America"],
          correct_answer: "Asia"
        },
        {
          question: "What is the capital of Canada?",
          options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
          correct_answer: "Ottawa"
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["Japan", "China", "India", "Australia"],
          correct_answer: "Japan"
        },
        {
          question: "Which ocean is the largest?",
          options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
          correct_answer: "Pacific Ocean"
        },
        {
          question: "What is the highest mountain in the world?",
          options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
          correct_answer: "Mount Everest"
        }
      ],
      "True/False": [
        {
          question: "The Amazon River is the longest river in the world.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "Australia is both a country and a continent.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "The Sahara Desert is located in South America.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "The Nile River is the longest river in Africa.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "Greenland is the largest island in the world.",
          options: ["True", "False"],
          correct_answer: "True"
        }
      ]
    },
    "Movies": {
      "MCQ": [
        {
          question: "Who directed the movie 'The Shawshank Redemption'?",
          options: ["Frank Darabont", "Quentin Tarantino", "Steven Spielberg", "Christopher Nolan"],
          correct_answer: "Frank Darabont"
        },
        {
          question: "Which movie won the Academy Award for Best Picture in 2019?",
          options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
          correct_answer: "Parasite"
        },
        {
          question: "Who played the character Harry Potter in the Harry Potter film series?",
          options: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Tom Felton"],
          correct_answer: "Daniel Radcliffe"
        },
        {
          question: "Which movie features a character named Tyler Durden?",
          options: ["Fight Club", "The Matrix", "Inception", "The Dark Knight"],
          correct_answer: "Fight Club"
        },
        {
          question: "Who directed the movie 'The Godfather'?",
          options: ["Francis Ford Coppola", "Martin Scorsese", "Alfred Hitchcock", "Stanley Kubrick"],
          correct_answer: "Francis Ford Coppola"
        }
      ],
      "True/False": [
        {
          question: "James Cameron directed the movie 'Titanic'.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "The movie 'Forrest Gump' is based on a true story.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "Tom Cruise starred in the movie 'The Matrix'.",
          options: ["True", "False"],
          correct_answer: "False"
        },
        {
          question: "The Lord of the Rings trilogy was directed by Peter Jackson.",
          options: ["True", "False"],
          correct_answer: "True"
        },
        {
          question: "Meryl Streep won an Oscar for her role in 'The Iron Lady'.",
          options: ["True", "False"],
          correct_answer: "True"
        }
      ]
    }
  };
  
export default questions;
  
