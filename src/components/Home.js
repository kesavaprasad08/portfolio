const Home = () => {
  return (
    <section
      className=" flex flex-col lg:flex-row   items-center bg-pageGreen  p-10 text-white pt-32"
      id="Home"
    >
      <div className="flex flex-col lg:ml-10 mt-18 flex-wrap p-1 lg:pr-20 ">
        <img
          src="https://media.licdn.com/dms/image/D5603AQFJUUPNXYL5ew/profile-displayphoto-shrink_800_800/0/1701245934705?e=1716422400&v=beta&t=RAN8Zf-2CN8arq53nq1TUiUNsnwh3MKoUdNKWJypXbw"
          alt="kesav"
          className="w-64 rounded-full mb-6 lg:hidden"
        />
        <h1 className="text-5xl p-2 ">Hi, I'm KESAVA PRASAD</h1>
        <p className="text-2xl p-2 text-green-500"> Web Developer</p>
        <p className=" pt- pb-5 p-2  ">
          Full Stack Web Developer specialized in MERN Stack adept at building
          responsive web applications. Passionate about Learning new
          technologies,bringing ideas to life and working with dedicated teams
          to build efficient and robust applications suited to the user's needs.
        </p>
        <div>
          <a href="#myProjects" className="p-2 ">
            <button className="bg-green-500 p-2 hover:bg-green-300 ">
              View My Works
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/13K8uc9tgvyvZqesnmBEJmrfbWqS9SOa8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-2 hover:bg-green-300"
          >
            My Resume
          </a>
        </div>
      </div>
      <img
        src="https://media.licdn.com/dms/image/D5603AQFJUUPNXYL5ew/profile-displayphoto-shrink_800_800/0/1701245934705?e=1716422400&v=beta&t=RAN8Zf-2CN8arq53nq1TUiUNsnwh3MKoUdNKWJypXbw"
        alt="kesav"
        className="w-64 rounded-full hidden lg:block"
      />
    </section>
  );
};

export default Home;
