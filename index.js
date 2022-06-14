// Add your code here
const form ={
        name:"Spencer",
        email:"samtha@gmail.com",
}

function submitData(formData){
    const configurationObject = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };
      fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
      });
}

submitData(form)
















// // console.log(form)

// // function submitData(form){
// //     // const configurationObject = {
// //     //     method: "POST",
// //     //     headers: {
// //     //       "Content-Type": "application/json",
// //     //       "Accept": "application/json",
// //     //     },
// //     //     body: JSON.stringify(form),
// //     //   };
// //     fetch("http://localhost:3000/users", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           "Accept": "application/json",
// //         },
// //         body: JSON.stringify(form),
// //       })
// //       .then(res => res.json())
// //       .then(data=>console.log(data))
// // };