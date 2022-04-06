import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/apollo-client';
import '../styles/globals.css';
import { Provider } from '../context';

function App({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={apolloClient}>
			<Provider>
				<Component {...pageProps} />
			</Provider>
		</ApolloProvider>
	);
}

export default App;
