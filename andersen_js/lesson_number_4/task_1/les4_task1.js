
    const obj = {};
    const groups = {
        1: 8,
        2: 6,
        3: 7,
    }
    const names = ['sasha', 'gena', 'masha', 'anya','tolya','vasya','petya','lesha']

    function returnClassmatesNumber (id) {
        return new Promise((resolve, reject) => { 
            setTimeout(() => resolve(groups[id]), 1000);
        });
    }

    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Minsk'), 1000); 
    })
    .then(cityName => {
        obj.city = cityName;

        return new Promise((resolve, reject) => { 
            setTimeout(() => resolve('admin'), 4000);
          });
        })
    .then(status => {
        obj.mail = `example@${status}.com`;
        if (status !== 'admin') {
            throw new Error('Status Error!');   
        }
        obj.status = status;
            
        return new Promise((resolve, reject) => { 
            setTimeout(() => resolve(2), 2000);
        });
    })
    .then(groupNumber => {
        obj.id = groupNumber;
        returnClassmatesNumber(groupNumber)
    })
    .then(peopleAmount => {
        if (peopleAmount > groups[obj.id]) {
            throw new Error('People amount - wrong!') 
        }
        obj.classmates = names.slice(0,peopleAmount)
    })
    .catch(console.error)
    
