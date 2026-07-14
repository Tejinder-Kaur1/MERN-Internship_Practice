const Description = () => {
  return (
    <>
      <div className=" w-full h-80 ">
        <p className=" font-bold text-xl p-1 bg-[url('https://images.unsplash.com/photo-1782241594297-1ba6bb298f72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center h-80 w-full">
          This is the API which gives us the user data. Fetching API from server
          takes large time that's why we use loader also which shows the loading
          icon .It gives data like id, firstname,lastName, Country, IP Adress,
          EyeColor, Hair color, Country etc.First we will print data of only 10
          people, along with their images.
        </p>{" "}
      </div>
    </>
  );
};

export default Description;
