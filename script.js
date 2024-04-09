document.addEventListener("DOMContentLoaded", function () {
    fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
            .then(data => {
                const usersContainer = document.getElementById("users-container");
                data.results.forEach(user => {
                const userCard = document.createElement("div");
                userCard.classList.add("user-card");

                    const userImage = document.createElement("img");
                    userImage.classList.add("user-image");
                    userImage.src = user.picture.thumbnail;
                    userCard.appendChild(userImage);

                    const userDetails = document.createElement("div");
                    userDetails.classList.add("user-details");
                    userCard.appendChild(userDetails);

                    const fullName = document.createElement("p");
                    fullName.textContent = `${user.name.first} ${user.name.last}`;
                    userDetails.appendChild(fullName);

                    const email = document.createElement("p");
                    email.textContent = user.email;
                    userDetails.appendChild(email);

                    const address = document.createElement("p");
                    address.classList.add("user-address");
                    address.textContent = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;
                    userDetails.appendChild(address);

                usersContainer.appendChild(userCard);
            });
        })
        .catch(error => console.log("Error fetching users:", error));
});