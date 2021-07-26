import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodIlike = [
  {
    id: 1,
    name: "kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
  },
  {
    id: 2,
    name: "kimchi",
    image:
      "https://shop.hansalim.or.kr/im/is/activeDesigner/100101004_content1.jpg",
  },
  {
    id: 3,
    name: "donkatus",
    image: "https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg",
  },
  {
    id: 4,
    name: "chiken",
    image:
      "https://pelicana.co.kr/resources/images/menu/best_menu02_200824.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <h1>hello~</h1>
      Food component, fav property, kimchi value
      {foodIlike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
