/* eslint-disable no-unused-vars */

import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .catch((error) => { throw new Error('reading error'); });
  }
}
