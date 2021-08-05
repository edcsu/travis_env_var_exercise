
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log(process.env.FANTASTIC_WEATHER);
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
