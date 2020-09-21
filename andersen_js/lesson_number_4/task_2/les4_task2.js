function request(url) {
    return new Promise((res, rej) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;
        setTimeout(() => res(url), delayTime);
    });
};

const urlArray = ['chicky', 'bricky', 'palchyk', 'vikyn'];

  async function handler(promisesArray) {
    return promisesArray.map ( url => await request(url)) 
  }
  
handler(urlArray)
.then(alert)