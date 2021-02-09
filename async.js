async function ajax() {
    let json =  await fetch('https://5e6f5e49f5e95b0016d472f5.mockapi.io/api/demov2/user');

    return json;
}

console.log(ajax().data);