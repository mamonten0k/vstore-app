import { albumProps } from "../types/interfaces"

export const sampleData:albumProps[] = [{
	id: "1",
	cover: "https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769",
	author: "Linkin Park",
	description: `Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
	to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
	group&rsquo;s musical direction. For the band, the album marked
	a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
	sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
	Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
	album to&nbsp;carry a&nbsp;Parental Advisory label.`,
	jenres: ["metal"],price: '70',
	releaseDate: "2001",
	trackList: ["Wake", "Given Up", "Live Out All The Rest", "Bleed It Out", "Shadow of the Day", "What I've Done", "Hands Held High", "No More Sorrow"],
	title: "Minutes To Midnight",
},
{
	id: "2",
	cover: "data:image/jpeg;base64,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",
	author: "Nirvana",
	description: `Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
	to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
	group&rsquo;s musical direction. For the band, the album marked
	a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
	sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
	Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
	album to&nbsp;carry a&nbsp;Parental Advisory label.`,
	jenres: ["metal"],price: '200',
	releaseDate: "1991",
	trackList: ["Wake", "Given Up", "Live Out All The Rest", "Bleed It Out", "Shadow of the Day", "What I've Done", "Hands Held High", "No More Sorrow"],
	title: "Nevermind",
},
{
	id: "3",
	cover: "https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_VelvetUndergoundNico.jpg",
	author: "Linkin Park",
	description: `Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
	to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
group&rsquo;s musical direction. For the band, the album marke
	a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
	sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
	Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
	album to&nbsp;carry a&nbsp;Parental Advisory label.`,
	jenres: ["metal"],price: '30',
	releaseDate: "1977",
	trackList: ["Wake", "Given Up", "Live Out All The Rest", "Bleed It Out", "Shadow of the Day", "What I've Done", "Hands Held High", "No More Sorrow"],
	title: "The Velvet Underground & Nico",
},
{
	id: "4",
	cover: "https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Horses.jpg",
	author: "Linkin Park",
	description: `Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
	to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
	group&rsquo;s musical direction. For the band, the album marked
	a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
	sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
	Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
	album to&nbsp;carry a&nbsp;Parental Advisory label.`,
	jenres: ["metal"],price: '50',
	releaseDate: "1980",
	trackList: ["Wake", "Given Up", "Live Out All The Rest", "Bleed It Out", "Shadow of the Day", "What I've Done", "Hands Held High", "No More Sorrow"],
	title: "Horses",
},
{
	id: "5",
	cover: "https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_ThinkTank.jpg",
	author: "Linkin Park",
	description: `Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
	to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
	group&rsquo;s musical direction. For the band, the album marked
	a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
	sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
	Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
	album to&nbsp;carry a&nbsp;Parental Advisory label.`,
	jenres: ["metal"],price: '500',
	releaseDate: "2",
	trackList: ["Wake", "Given Up", "Live Out All The Rest", "Bleed It Out", "Shadow of the Day", "What I've Done", "Hands Held High", "No More Sorrow"],
	title: "Think Tank",
},
{
	id: "6",
	cover: "https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769",
	author: "Linkin Park",
	description: `Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
	to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
	group&rsquo;s musical direction. For the band, the album marked
	a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
	sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
	Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
	album to&nbsp;carry a&nbsp;Parental Advisory label.`,
	jenres: ["metal"],price: '50',
	releaseDate: "2007",
	trackList: ["Wake", "Given Up", "Live Out All The Rest", "Bleed It Out", "Shadow of the Day", "What I've Done", "Hands Held High", "No More Sorrow"],
	title: "Cinutes To Midnight",
},
{
	id: "7",
	cover: "https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_NarcissusRoad.jpg",
	author: "Linkin Park",
	description: `Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
	to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
	group&rsquo;s musical direction. For the band, the album marked
	a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
	sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
	Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
	album to&nbsp;carry a&nbsp;Parental Advisory label.`,
	jenres: ["metal"],price: '55',
	releaseDate: "2007",
	trackList: ["Wake", "Given Up", "Live Out All The Rest", "Bleed It Out", "Shadow of the Day", "What I've Done", "Hands Held High", "No More Sorrow"],
	title: "The Hours",
},
{
	id: "8",
	cover: "https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Brute.jpg",
	author: "Linkin Park",
	description: `Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
	to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
	group&rsquo;s musical direction. For the band, the album marked
	a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
	sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
	Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
	album to&nbsp;carry a&nbsp;Parental Advisory label.`,
	jenres: ["metal"],price: '50',
	releaseDate: "2000",
	trackList: ["Wake", "Given Up", "Live Out All The Rest", "Bleed It Out", "Shadow of the Day", "What I've Done", "Hands Held High", "No More Sorrow"],
	title: "Brute",
},
{
	id: "9",
	cover: "https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Blonde.jpg",
	author: "Linkin Park",
	description: `Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
	to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
	group&rsquo;s musical direction. For the band, the album marked
	a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
	sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
	Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
	album to&nbsp;carry a&nbsp;Parental Advisory label.`,
	jenres: ["metal"],price: '50',
	releaseDate: "2016",
	trackList: ["Wake", "Given Up", "Live Out All The Rest", "Bleed It Out", "Shadow of the Day", "What I've Done", "Hands Held High", "No More Sorrow"],
	title: "Blond",
}]