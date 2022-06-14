let createdFooter = () => {
  let footerEle = document.querySelector('footer');
  footerEle.innerHTML = `
  <div class="footer-content">
  <h3 class="footer-logo">SAS Jewllers</h3>
  <div class="footer-ul-container">
      <ul class="category">
          <li class="category-title">Women</li>
          <li><a href="#" class="footer-link">NeckLace</a></li>
          <li><a href="#" class="footer-link">t-shirt</a></li>
          <li><a href="#" class="footer-link">pants</a></li>
          <li><a href="#" class="footer-link">Rings</a></li>
          <li><a href="#" class="footer-link">watches</a></li>
          <li><a href="#" class="footer-link">forumla</a></li>
          <li><a href="#" class="footer-link">party dress</a></li>
          <li><a href="#" class="footer-link">tousers</a></li>
      </ul>
      <ul class="category">
          <li class="category-title">Men</li>
          <li><a href="#" class="footer-link">NeckLace</a></li>
          <li><a href="#" class="footer-link">t-shirt</a></li>
          <li><a href="#" class="footer-link">pants</a></li>
          <li><a href="#" class="footer-link">Rings</a></li>
          <li><a href="#" class="footer-link">watches</a></li>
          <li><a href="#" class="footer-link">forumla</a></li>
          <li><a href="#" class="footer-link">party dress</a></li>
          <li><a href="#" class="footer-link">tousers</a></li>
      </ul>
  </div>
</div>
<p class="footer-title">About Company</p>
<p class="footer-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic tenetur nobis veritatis perspiciatis vel ad illum necessitatibus rem, accusamus explicabo dolor, debitis quod quae, beatae expedita ab veniam delectus!
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores, repudiandae voluptates eos praesentium culpa, nesciunt facilis nihil voluptate est deserunt quasi illum nemo? Debitis a quisquam earum voluptates eos!
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vel impedit consectetur aliquam, praesentium non est ab hic consequuntur, cumque autem doloribus magni adipisci. Ipsum officia voluptatem maiores minima nemo!
</p>
<p class="footer-info">Support emails -help@sashelp.com,
  customersupport@sasjewellers.com</p>
<p class="footer-info">telephone - 189 00 00 00, 199 000 000 000</p>

<div class="footer-social-container">
  <div>
      <a href="#" class="social-link">Term & conditions</a>
      <a href="#" class="social-link">Privacy Page</a>
  </div>
  <div>
      <a href="#" class="social-link">facebook</a>
      <a href="#" class="social-link">instgram</a>
      <a href="#" class="social-link">twitter</a>
  </div>
</div>

<div class="footer-credit">Created By: <a href="#">Noor Ahmed</a></div>
`;
};

createdFooter();
