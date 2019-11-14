function addStudent(e) {
  console.log('addStudent')
  e.preventDefault();

  const formObj = e.target.elements;
  const student = {
    name: formObj.name.value,
    last: formObj.last.value
  };
  console.log(student);

  if (student.name && student.last) {
    fetch("/addStudent", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.dir(res);
        res.json().then(resJson => {
          console.dir(resJson);
        });
      })

      .catch(err => {
        console.error(err);
      });
  } else {
    alert("Name an family is requierd");
  }
}

function deleteStudent(e) {
  console.log('deleteStudent')
  let studentObj = { studentId: e.target.id };
  fetch("/deleteStudent", {
    method: "DELETE",
    body: JSON.stringify(studentObj),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.dir(res);
    location.reload();
  });
}

function updateAverage(e, studentId) {
  console.log('updateAverage')
  const grade = { grade: e.target.valueAsNumber, studentId };

  fetch("/updateAverage", {
    method: "PUT",
    body: JSON.stringify(grade),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.dir(res);
  });
}

function getAverage(e) {
  console.log('getAverage')
  fetch("/getAverage", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      console.dir(res);
      res.json().then(resJson => {
        console.dir(resJson);
        const {avg} = resJson;
        document.getElementById('avgOutput').innerText = avg
      });
    })
    .catch(err => {
      console.error(err);
    });
}
