export interface albumProps {
	id: string | number,
	cover: string,
	author: string,
	description: string,
	jenres: Array<string>,
	price: string,
	releaseDate: string, 
	trackList: Array<string>,
	title: string,
}