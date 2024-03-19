const Home = () => {
  return (
    <section
      className=" flex flex-col lg:flex-row items-center justify-center bg-pageGreen h-screen p-10 text-white pt-14 "
      id="Home"
    >
      <div className="flex flex-col ">
        <h1 className="text-5xl p-2">Hi, I'm KESAVA PRASAD</h1>
        <p className="text-2xl p-2 text-green-500"> Web Developer</p>
        <p className="w-6/12 p-2">
      Full Stack Web Developer adept at building responsive web applications. Passionate about Learning new technologies,bringing ideas to life and working with dedicated teams to build efficient and robust applications suited to the user's needs.
      </p>
        <a href="#portfolio" className="p-2">
          <button className="bg-green-500 p-2 ">View My Works</button>
        </a>
      </div>
      <img
        src="https://media.licdn.com/dms/image/D5603AQFJUUPNXYL5ew/profile-displayphoto-shrink_800_800/0/1701245934705?e=1716422400&v=beta&t=RAN8Zf-2CN8arq53nq1TUiUNsnwh3MKoUdNKWJypXbw"
        alt="kesav"
        className="w-64 rounded-full"
      />

     
    </section>
  );
};

export default Home;
