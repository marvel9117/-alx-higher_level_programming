#!/usr/bin/node
/**
 * Prints all characters of a Star Wars movie
 * @param {string} str - the movie ID
 */

const request = require('request');
const movieId = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + movieId;

request.get(url, async (error, response) => {
  if (error) {
    console.error(error);
  } else {
    response = JSON.parse(response.body);
    await printEachCharacter(response.characters);
  }
});

async function printEachCharacter (characters) {
  for (let i = 0; i < characters.length; i++) {
    try {
      const response = await new Promise((resolve, reject) => {
        request.get(characters[i], (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
      const characterResponse = JSON.parse(response.body);
      console.log(characterResponse.name);
    } catch (err) {
      console.error(err);
    }
  }
}
