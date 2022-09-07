"use strict"

const $input = document.querySelector("#userId");
const $output = document.querySelector("#output");

function fetchUser(id){
  return fetch(`https://reqres.in/api/users/${id}`)
}

async function getUser(id){
  const fetching = await fetchUser(id)
  const response = await fetching.json()
  const user = await response.data

  return user
}

$input.addEventListener('change', function () {
  const value = this.value

  if (value === ""){
    return 
  }

  getUser(value)
    .then(data => {
      const template = `
        <h2>${data.first_name}</h2>
        <img src="${data.avatar}"/>
      `
      $output.innerHTML = template
    })

})



