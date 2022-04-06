import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import { Provider } from '../context';
import { GET_POKEMONS } from '../graphql/queries';
import Index from '../pages';

// The component AND the query need to be exported

const mocks = [
	{
		request: {
			query: GET_POKEMONS,
			variables: {
				limit: 5,
				offset: 0,
			},
		},
		result: {
			data: {
				pokemons: {
					count: 1126,
					next: 'https://pokeapi.co/api/v2/pokemon/?offset=5&limit=5',
					previous: null,
					status: true,
					message: '',
					results: [
						{
							id: 1,
							url: 'https://pokeapi.co/api/v2/pokemon/1/',
							name: 'bulbasaur',
							image:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
							artwork:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
							dreamworld:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
							__typename: 'PokemonItem',
						},
						{
							id: 2,
							url: 'https://pokeapi.co/api/v2/pokemon/2/',
							name: 'ivysaur',
							image:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
							artwork:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
							dreamworld:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
							__typename: 'PokemonItem',
						},
						{
							id: 3,
							url: 'https://pokeapi.co/api/v2/pokemon/3/',
							name: 'venusaur',
							image:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
							artwork:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
							dreamworld:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
							__typename: 'PokemonItem',
						},
						{
							id: 4,
							url: 'https://pokeapi.co/api/v2/pokemon/4/',
							name: 'charmander',
							image:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
							artwork:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
							dreamworld:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
							__typename: 'PokemonItem',
						},
						{
							id: 5,
							url: 'https://pokeapi.co/api/v2/pokemon/5/',
							name: 'charmeleon',
							image:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
							artwork:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
							dreamworld:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
							__typename: 'PokemonItem',
						},
					],
					__typename: 'PokemonList',
				},
			},
		},
	},
];

it('renders without error', () => {
	render(
		<MockedProvider mocks={mocks} addTypename={false}>
			<Provider>
				<Index />
			</Provider>
		</MockedProvider>
	);
});
