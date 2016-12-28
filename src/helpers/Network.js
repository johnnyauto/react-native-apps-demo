
import { Component } from 'react';

export default class Network extends Component {
  static login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: 200, data: null });
      }, 200);
    });
  }
}

