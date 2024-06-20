import React from 'react'

const Footer = () => {
  return (
    <>
    
<section  className="section instagram-feed">
	<div className="container">
		<div  className="row">
			<div className="title">
				<h2>View us on instagram</h2>
			</div>
		</div>
		<div className="row">
			<div  className="col-12">
				<div className="instagram-slider" id="instafeed" data-accessToken="IGQVJYeUk4YWNIY1h4OWZANeS1wRHZARdjJ5QmdueXN2RFR6NF9iYUtfcGp1NmpxZA3RTbnU1MXpDNVBHTzZAMOFlxcGlkVHBKdjhqSnUybERhNWdQSE5hVmtXT013MEhOQVJJRGJBRURn"></div>
			</div>
		</div>
	</div>
</section>
    <footer className="footer section text-center">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<ul className="social-media">
					<li>
						<a href="https://www.facebook.com/">
							<i className="tf-ion-social-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/">
							<i className="tf-ion-social-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com/">
							<i className="tf-ion-social-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://www.pinterest.com//">
							<i className="tf-ion-social-pinterest"></i>
						</a>
					</li>
				</ul>
				<ul className="footer-menu text-uppercase">
					<li>
						<a href="contact.html">CONTACT</a>
					</li>
					<li>
						<a href="shop.html">SHOP</a>
					</li>
					<li>
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="contact.html">PRIVACY POLICY</a>
					</li>
				</ul>
				<p className="copyright-text">Copyright &copy;2024</p>
			</div>
		</div>
	</div>
</footer>
    </>
  )
}

export default Footer