// get random chance of error
const getErrorChance = () => {
  return Math.random() > 0.5;
};

const getPosts = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (getErrorChance()) {
      //   resolve('{}');
      // } else {
      resolve(fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()));
      // }
    }, 5000);
  });
};

const Testing = async () => {
  const post = await getPosts();
  return (
    <div>
      <pre className="bg-red-900 w-full">{'post'}</pre>
    </div>
  );
};

export default Testing;
