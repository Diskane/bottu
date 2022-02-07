const yts = require( 'yt-search' )

var start = async function() { 

    const r = await yts( 'Give the money back' );
    const videos = r.videos.slice( 0, 10 );
    let i=0;
    videos.forEach(video=>{
        console.log(`${++i} : ${video.title}`)
    });

}

start()



