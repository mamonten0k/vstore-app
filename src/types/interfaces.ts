export interface albumProps {
	id: string | number,
	cover: string,
	author: string,
	description: string,
	jenres: Array<string>,
	releaseDate: string, 
	trackList: Array<string>,
	title: string,
}