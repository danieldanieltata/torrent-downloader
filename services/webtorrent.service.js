const Webtorrent = require('webtorrent');

class WebtorrentService {
    constructor() {
        this.webtorrent = new Webtorrent();
    }

    async startTorrentDownload(magnetUri) {
        return this.webtorrent.add(magnetUri);
    }

    async getDownloadsStatus() {
        return this.webtorrent.torrents.map(torrent => {
            const { name, progress } = torrent;
            return { name, progress };
        });
    }
}

module.exports = new WebtorrentService();
