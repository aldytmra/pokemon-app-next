import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import { Provider } from '../context';
import { GET_POKEMONS, GET_POKEMON_DETAIL } from '../graphql/queries';
import PokemonDetail from '../pages/pokemon/[name]';
import { createMockRouter } from '../test-util/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
// The component AND the query need to be exported

const mocks = [
	{
		request: {
			query: GET_POKEMON_DETAIL,
			variables: {
				name: 'bulbasaur',
			},
		},
		result: {
			data: {
				pokemon: {
					id: 1,
					name: 'bulbasaur',
					height: 7,
					base_experience: 64,
					weight: 69,
					species: {
						name: 'bulbasaur',
						__typename: 'BaseName',
					},
					abilities: [
						{
							ability: {
								name: 'overgrow',
								url: 'https://pokeapi.co/api/v2/ability/65/',
								__typename: 'BaseName',
							},
							__typename: 'Ability',
						},
						{
							ability: {
								name: 'chlorophyll',
								url: 'https://pokeapi.co/api/v2/ability/34/',
								__typename: 'BaseName',
							},
							__typename: 'Ability',
						},
					],
					moves: [
						{
							move: {
								name: 'razor-wind',
								url: 'https://pokeapi.co/api/v2/move/13/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'swords-dance',
								url: 'https://pokeapi.co/api/v2/move/14/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'cut',
								url: 'https://pokeapi.co/api/v2/move/15/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'bind',
								url: 'https://pokeapi.co/api/v2/move/20/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'vine-whip',
								url: 'https://pokeapi.co/api/v2/move/22/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'headbutt',
								url: 'https://pokeapi.co/api/v2/move/29/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'tackle',
								url: 'https://pokeapi.co/api/v2/move/33/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'body-slam',
								url: 'https://pokeapi.co/api/v2/move/34/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'take-down',
								url: 'https://pokeapi.co/api/v2/move/36/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'double-edge',
								url: 'https://pokeapi.co/api/v2/move/38/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'growl',
								url: 'https://pokeapi.co/api/v2/move/45/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'strength',
								url: 'https://pokeapi.co/api/v2/move/70/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'mega-drain',
								url: 'https://pokeapi.co/api/v2/move/72/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'leech-seed',
								url: 'https://pokeapi.co/api/v2/move/73/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'growth',
								url: 'https://pokeapi.co/api/v2/move/74/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'razor-leaf',
								url: 'https://pokeapi.co/api/v2/move/75/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'solar-beam',
								url: 'https://pokeapi.co/api/v2/move/76/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'poison-powder',
								url: 'https://pokeapi.co/api/v2/move/77/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'sleep-powder',
								url: 'https://pokeapi.co/api/v2/move/79/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'petal-dance',
								url: 'https://pokeapi.co/api/v2/move/80/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'string-shot',
								url: 'https://pokeapi.co/api/v2/move/81/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'toxic',
								url: 'https://pokeapi.co/api/v2/move/92/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'rage',
								url: 'https://pokeapi.co/api/v2/move/99/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'mimic',
								url: 'https://pokeapi.co/api/v2/move/102/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'double-team',
								url: 'https://pokeapi.co/api/v2/move/104/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'defense-curl',
								url: 'https://pokeapi.co/api/v2/move/111/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'light-screen',
								url: 'https://pokeapi.co/api/v2/move/113/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'reflect',
								url: 'https://pokeapi.co/api/v2/move/115/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'bide',
								url: 'https://pokeapi.co/api/v2/move/117/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'sludge',
								url: 'https://pokeapi.co/api/v2/move/124/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'skull-bash',
								url: 'https://pokeapi.co/api/v2/move/130/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'amnesia',
								url: 'https://pokeapi.co/api/v2/move/133/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'flash',
								url: 'https://pokeapi.co/api/v2/move/148/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'rest',
								url: 'https://pokeapi.co/api/v2/move/156/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'substitute',
								url: 'https://pokeapi.co/api/v2/move/164/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'snore',
								url: 'https://pokeapi.co/api/v2/move/173/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'curse',
								url: 'https://pokeapi.co/api/v2/move/174/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'protect',
								url: 'https://pokeapi.co/api/v2/move/182/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'sludge-bomb',
								url: 'https://pokeapi.co/api/v2/move/188/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'mud-slap',
								url: 'https://pokeapi.co/api/v2/move/189/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'outrage',
								url: 'https://pokeapi.co/api/v2/move/200/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'giga-drain',
								url: 'https://pokeapi.co/api/v2/move/202/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'endure',
								url: 'https://pokeapi.co/api/v2/move/203/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'charm',
								url: 'https://pokeapi.co/api/v2/move/204/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'false-swipe',
								url: 'https://pokeapi.co/api/v2/move/206/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'swagger',
								url: 'https://pokeapi.co/api/v2/move/207/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'fury-cutter',
								url: 'https://pokeapi.co/api/v2/move/210/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'attract',
								url: 'https://pokeapi.co/api/v2/move/213/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'sleep-talk',
								url: 'https://pokeapi.co/api/v2/move/214/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'return',
								url: 'https://pokeapi.co/api/v2/move/216/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'frustration',
								url: 'https://pokeapi.co/api/v2/move/218/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'safeguard',
								url: 'https://pokeapi.co/api/v2/move/219/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'sweet-scent',
								url: 'https://pokeapi.co/api/v2/move/230/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'synthesis',
								url: 'https://pokeapi.co/api/v2/move/235/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'hidden-power',
								url: 'https://pokeapi.co/api/v2/move/237/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'sunny-day',
								url: 'https://pokeapi.co/api/v2/move/241/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'rock-smash',
								url: 'https://pokeapi.co/api/v2/move/249/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'facade',
								url: 'https://pokeapi.co/api/v2/move/263/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'nature-power',
								url: 'https://pokeapi.co/api/v2/move/267/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'helping-hand',
								url: 'https://pokeapi.co/api/v2/move/270/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'ingrain',
								url: 'https://pokeapi.co/api/v2/move/275/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'knock-off',
								url: 'https://pokeapi.co/api/v2/move/282/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'secret-power',
								url: 'https://pokeapi.co/api/v2/move/290/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'weather-ball',
								url: 'https://pokeapi.co/api/v2/move/311/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'grass-whistle',
								url: 'https://pokeapi.co/api/v2/move/320/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'bullet-seed',
								url: 'https://pokeapi.co/api/v2/move/331/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'magical-leaf',
								url: 'https://pokeapi.co/api/v2/move/345/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'natural-gift',
								url: 'https://pokeapi.co/api/v2/move/363/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'worry-seed',
								url: 'https://pokeapi.co/api/v2/move/388/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'seed-bomb',
								url: 'https://pokeapi.co/api/v2/move/402/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'energy-ball',
								url: 'https://pokeapi.co/api/v2/move/412/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'leaf-storm',
								url: 'https://pokeapi.co/api/v2/move/437/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'power-whip',
								url: 'https://pokeapi.co/api/v2/move/438/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'captivate',
								url: 'https://pokeapi.co/api/v2/move/445/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'grass-knot',
								url: 'https://pokeapi.co/api/v2/move/447/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'venoshock',
								url: 'https://pokeapi.co/api/v2/move/474/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'round',
								url: 'https://pokeapi.co/api/v2/move/496/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'echoed-voice',
								url: 'https://pokeapi.co/api/v2/move/497/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'grass-pledge',
								url: 'https://pokeapi.co/api/v2/move/520/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'work-up',
								url: 'https://pokeapi.co/api/v2/move/526/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'grassy-terrain',
								url: 'https://pokeapi.co/api/v2/move/580/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'confide',
								url: 'https://pokeapi.co/api/v2/move/590/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
						{
							move: {
								name: 'grassy-glide',
								url: 'https://pokeapi.co/api/v2/move/803/',
								__typename: 'BaseName',
							},
							__typename: 'Move',
						},
					],
					types: [
						{
							type: {
								name: 'grass',
								__typename: 'BaseName',
							},
							__typename: 'Type',
						},
						{
							type: {
								name: 'poison',
								__typename: 'BaseName',
							},
							__typename: 'Type',
						},
					],
					stats: [
						{
							base_stat: 45,
							effort: 0,
							stat: {
								name: 'hp',
								url: 'https://pokeapi.co/api/v2/stat/1/',
								__typename: 'BaseName',
							},
							__typename: 'Stat',
						},
						{
							base_stat: 49,
							effort: 0,
							stat: {
								name: 'attack',
								url: 'https://pokeapi.co/api/v2/stat/2/',
								__typename: 'BaseName',
							},
							__typename: 'Stat',
						},
						{
							base_stat: 49,
							effort: 0,
							stat: {
								name: 'defense',
								url: 'https://pokeapi.co/api/v2/stat/3/',
								__typename: 'BaseName',
							},
							__typename: 'Stat',
						},
						{
							base_stat: 65,
							effort: 1,
							stat: {
								name: 'special-attack',
								url: 'https://pokeapi.co/api/v2/stat/4/',
								__typename: 'BaseName',
							},
							__typename: 'Stat',
						},
						{
							base_stat: 65,
							effort: 0,
							stat: {
								name: 'special-defense',
								url: 'https://pokeapi.co/api/v2/stat/5/',
								__typename: 'BaseName',
							},
							__typename: 'Stat',
						},
						{
							base_stat: 45,
							effort: 0,
							stat: {
								name: 'speed',
								url: 'https://pokeapi.co/api/v2/stat/6/',
								__typename: 'BaseName',
							},
							__typename: 'Stat',
						},
					],
					sprites: {
						back_default:
							'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
						front_default:
							'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
						__typename: 'Sprite',
					},
					message: '',
					status: true,
					__typename: 'Pokemon',
				},
			},
		},
	},
];

it('renders without error', () => {
	render(
		<MockedProvider mocks={mocks} addTypename={false}>
			<Provider>
				<RouterContext.Provider
					value={createMockRouter({ query: { name: 'bulbasar' } })}
				>
					<PokemonDetail />
				</RouterContext.Provider>
			</Provider>
		</MockedProvider>
	);
});
