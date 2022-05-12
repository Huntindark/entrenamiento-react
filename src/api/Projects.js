const Projects = () => {
  let url =
    "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/projects";
  const fetchData = async (url, options) => {
    try {
      const result = await fetch(url, options).then((result) => result.json());
      return result;
    } catch (error) {
      console.error(error);
    }
  };
};

export default Projects;
