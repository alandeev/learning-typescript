interface learn {
  name: string,
  stars: number,
  topics: string[]
}

function setLearn(data: learn): learn{
  return data;
}

const hi = setLearn({
  name: "Alan",
  stars: 5,
  topics: ["types", "interface", "OO", "basic syntax"]
});

console.log(hi);