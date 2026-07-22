import retry from "async-retry";

async function waitforAllServices() {
  await waitforWebServer();

  async function waitforWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
<<<<<<< HEAD
=======
      maxTimeout: 1000,
>>>>>>> 199f0f9 (Add orchestrator service test utility to wait for all services; implement retry logic for web server status checks.)
    });

    async function fetchStatusPage() {
      const response = await fetch("http:/localhost:3000/api/v1/status");
      const responseBody = await response.json();
    }
  }
}

export default {
  waitforAllServices,
};
