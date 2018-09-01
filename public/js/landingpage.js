function LandingPage(props){

	function renderProduct(argument) {
	      var products = props.products.map((param) => {
	      	    
	      });
          
          var counter = 0;
          
          for(var i=0; i<=products.length; i++){
              if (counter == 4) {

              }

              if (counter == 3) {

              }

              if (counter == 2){

              }

              if (counter == 1) {

              }
          }
	}
    
    function renderBlogs(param){
          var blogs = props.blogs.map((param) => {
          	    
          });
          
          var counter = 0;

          for(var i=0; i<=blogs.length; i++){
          	  if (counter == 4) {

              }

              if (counter == 3) {

              }

              if (counter == 2){

              }

              if (counter == 1) {
              	
              }
          }
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