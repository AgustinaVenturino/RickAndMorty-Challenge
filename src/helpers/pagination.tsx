const regFindPage = '(page=[0-9]+)';
const regFindEpisode = '(episode/)([0-9]+)';

const getPageParam = (page: string) => {
  try {
    const findPageReg = new RegExp(regFindPage);
    const resultsReg = findPageReg.exec(page);
    return resultsReg && resultsReg[0];
  } catch (e) {
    console.log(e);
  }
};

const getEpisodesParam = (episodes: string[]) => {
  let episodeParam = '';
  const episodesNumber: string[] = findEpisodeNumber(episodes);
  episodesNumber.forEach(episode => {
    episodeParam != ''
      ? (episodeParam = episodeParam + `,${episode}`)
      : (episodeParam = episodeParam + `${episode}`);
  });

  return {episodeParam, numberOfEpisodes: episodesNumber.length};
};

const findEpisodeNumber = (episodes: string[]) => {
  let episodesNumber: string[] = [];
  episodes.forEach((episode: string) => {
    const findEpisodeReg = new RegExp(regFindEpisode);
    const resultsReg = findEpisodeReg.exec(episode);
    resultsReg && episodesNumber.push(resultsReg[2]);
  });
  return episodesNumber;
};

export {getPageParam, getEpisodesParam};
