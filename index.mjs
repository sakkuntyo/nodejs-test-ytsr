import ytsr from 'ytsr';

const filters1 = await ytsr.getFilters('github');
const filter1 = filters1.get('Type').get('Video');
const filters2 = await ytsr.getFilters(filter1.url);
const filter2 = filters2.get('Features').get('Live');
const options = {
	  pages: 2,
}
const searchResults = await ytsr(filter2.url, options);

console.dir(searchResults)
