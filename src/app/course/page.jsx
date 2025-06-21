const page = async () => {
  // since this server component we have to use full url
  const email = 'swapnilganvir54@gmail.com';
  const password = '12345678';

  let data = {};
  try {
    const res = await fetch('http://localhost:3000/api', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    data = await res.json();
  } catch (error) {
    console.log('err');
  }

  return <div>{data.message}</div>;
};

export default page;
