const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const personid = persons.find(person => person.id === id)
      if(personid) {
        resolve(personid)
      } else {
        reject(new Error(`Non e' stata trovata nessuna persona con id ${id}`))
      }
    }, 2000);
  });
}


function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const jobId = jobs.find(job => job.id === id)
      if (jobId) {
        resolve(jobId)
      } else {
        reject(new Error(`L'id ${id} non esiste e non ha nessun lavoro associato`))
      }
    }, 2000);
  });
}

Promise.all([fetchPersonById(2), fetchJobById(3)]).then((value) => console.log(value));