class Main extends React.component {
	Constructor(props){
		super(props);
		this.state = {
			products: [],
			blogs: []
		}
	}

    componentDidMount(){
    	const xhttp = new xmlHttp();
    	xhttp.open('GET', "/LandingPageContent", true);
    }
    
    renderLandingPageSection(){
         return <LandingPage />
    }
    
    renderAboutSection(){
    	return <AboutSection />
    }

    renderAdminSection(){
        return <AdminSection />
    }

	render(){
		return();
	}
}

ReactDom.render(
    <Main /> document.getElementById('root')
);

