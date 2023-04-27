const apiUrl = "https://backend.prod-new.linkclassroom.com";
// const apiUrl = "https://backend.uat-83012.linkclassroom.com";
const frontendUrl = "https://linkclassroom.com";

export const backendApi = apiUrl;

const getEnvVars = () => {
  return {
    apiUrl,
    frontendUrl,
  };
};

export default getEnvVars;
