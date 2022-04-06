import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
	query pokemons($limit: Int, $offset: Int) {
		pokemons(limit: $limit, offset: $offset) {
			count
			next
			previous
			status
			message
			results {
				id
				url
				name
				image
				artwork
				dreamworld
			}
		}
	}
`;

export const GET_POKEMON_DETAIL = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
			id
			name
			height
			base_experience
			weight
			species {
				name
			}
			abilities {
				ability {
					name
					url
				}
			}
			moves {
				move {
					name
					url
				}
			}
			types {
				type {
					name
				}
			}
			stats {
				base_stat
				effort
				stat {
					name
					url
				}
			}
			sprites {
				back_default
				front_default
			}
			message
			status
		}
	}
`;
