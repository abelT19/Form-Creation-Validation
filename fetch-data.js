// Step 1: Initialize the async function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the HTML container for displaying data
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch data using async/await
    const response = await fetch(apiUrl);

    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users = await response.json();

    // Step 5: Clear the loading message
    dataContainer.innerHTML = '';

    // Step 6: Create and append user list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name; // Display each user's name
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 7: Handle errors
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Step 8: Invoke fetchUserData after the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
