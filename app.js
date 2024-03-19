document.addEventListener("DOMContentLoaded", () => {
  let wainwrightsData = [];
  //   let jsonData;

  const populateInfo = (wainwrights) => {
    const list = document.querySelector("#wainwrights-list");
    list.innerHTML = "";

    wainwrights.forEach((wainwright) => {
      const listItem = document.createElement("li");

      listItem.innerHTML = `<h3 >${wainwright.name}</h3>
        <p>Height: ${wainwright.heightMetres} m (${wainwright.heightFeet} ft)</p>
        <p>Area: ${wainwright.area.areaName}</p>`;

      list.appendChild(listItem);
    });
  };

  const getAllWainwrights = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json"
    );

    const jsonData = await response.json();

    populateInfo(jsonData);
    console.log(jsonData);
  };

  getAllWainwrights();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const input = document.querySelector("#wainwright-search");
    const inputValue = input.value;

    const filteredData = jsonData.filter((wainwright) => {
      return wainwright.name.toLowerCase().includes(inputValue);
    });

    populateInfo(filteredData);
  };

  const form = document.querySelector("#form");
  form.addEventListener("submit", handleFormSubmit);
});
