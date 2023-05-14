const player = videojs("hls-example");
const ep_id = JSON.parse(localStorage.getItem("ep_id"));
console.log(ep_id);

const getAnimeVideoEp = async () => {
    let episodeName = ep_id.id;
    let streamSelections = "vidstreaming";
    try{
        const data = await axios.get(`https://api.consumet.org/anime/gogoanime/watch/${episodeName}?server=${streamSelections}`);
        console.log(data.data.sources[2].url);
        player.src(`${data.data.sources[3].url}`)
        console.log(player.src());
    }catch(e){
        throw new Error(e.message);
    }
}

getAnimeVideoEp();

player.play();