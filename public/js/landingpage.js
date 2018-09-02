function LandingPage(props){

	function renderProduct(argument) {
	      var products = props.products.map((param) => {
	      	    
	      });
          
          var counter = 0;
 
          // for bigger screen;
          () => {
		          	 for(var i=0; i<=products.length; i++){
		              if (counter > 0 && counter < 5) {

		              }

		              if (counter > 4 && counter < 9) {

		              }

		              if (counter > 8 && counter < 13){

		              }

		              if (counter > 12 && counter < 17) {

		              }
		          }
          }
           
          // for middium screen!
          () => {
          	         for(var i=0; i<=products.length; i++){
			              if (counter > 0 && counter < 4) {

			              }

			              if (counter > 3 && counter < 7) {

			              }

			              if (counter > 6 && counter < 10){

			              }

			              if (counter > 9 && counter < 13) {

			              }
			          }
          }

          // for smaller screen!
         () => {
          	         for(var i=0; i<=products.length; i++){
			              if (counter > 0 && counter < 3) {

			              }

			              if (counter > 2 && counter < 5) {

			              }

			              if (counter > 4 && counter < 7){

			              }

			              if (counter > 6 && counter < 9) {

			              }
			          }
          }

          //for small screen!
          () => {
          	         for(var i=0; i<=products.length; i++){
			              // just insert on object per role!
			          }
          }
	}
    
    function renderBlogs(param){
          var blogs = props.blogs.map((param) => {
          	    
          });
          
          var counter = 0;
    }

	return <div>
	            <div>
	                 <ul>
	                 	<li>Home</li>
	                 	<li>About</li>
	                 	<li>Products</li>
	                 	<li>Contacts</li>
	                 </ul>
	            </div>
	            <div>
                    {generateProduct()}
	            </div>
	            <div>
                    {generateBlog()}
	            </div>
	            <div>
                      
	            </div>
	       </div>;
}