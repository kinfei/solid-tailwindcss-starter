import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header title="About" />
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400">
              Content for about page
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
