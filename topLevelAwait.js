async function topLevel() {
  let settle = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 1000);
  });
  let result = await settle;

  console.log(result);
}

topLevel();
