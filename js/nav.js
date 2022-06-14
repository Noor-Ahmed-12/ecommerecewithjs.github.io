const createNav = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `
            <div class="nav">
            <h3 class="brand-logo">SAS Jewellers</h3>
            <div class="nav-items">
                <div class="search">
                    <input type="search" name="search-box" class="search-box" placeholder="Search brand, products...">
                    <button type="submit" class="search-btn">Search</button>
                </div>
                <!-- nav anchers -->
                <a href="#"><img src="img/usericon2.png" alt="user img" class="user-img"></a> 
                <a href="#"><img src="img/carticon.png" alt="cart img"></a> 
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">Name Necklaces</a></li>
            <li class="link-item"><a href="#" class="link">Men Rings</a></li>
            <li class="link-item"><a href="#" class="link">Gold Jewellerys</a></li>
        </ul>
    `;
};
createNav();
